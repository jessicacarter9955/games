#!/usr/bin/env python3
"""Serve 2Night + existing Windows CDN mirrors without uploading 1.8 GB.

Run from the games repository checkout on the Windows machine with mirrors:
    py scripts/serve_local_mirrors.py --port 8000

Routes:
    /reskinner/catalog.json  Dynamic overlay of the 69 saved mirror inventories
    /local-mirror/<id>/<host>/<path>  Local files from approved mirror roots
    /extracted/... and /reskinner/...  Existing GitHub repository files

Only serves localhost. Games remain unaudited; 200 HTML is not offline proof.
"""
from __future__ import annotations

import argparse
import hashlib
import io
import json
import mimetypes
import re
import struct
import threading
from collections import Counter
from datetime import datetime, timezone
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qsl, quote, unquote, urlsplit

REPO = Path(__file__).resolve().parents[1]
IMAGE = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".avif"}
ATLAS = {".xml", ".atlas", ".plist"}
MODEL = {".glb", ".gltf", ".fbx", ".obj", ".dds", ".ktx", ".ktx2", ".basis"}
ENTRIES = {"index.html", "game.html"}
HTML_FALLBACK = {".html", ".htm"}
UNITY_WRAPPER_MARKER = "/unity/unity"
DIAGNOSTIC_SCRIPT = b'<script src="/reskinner/game-diagnostics-bridge.js"></script>'
EXTENSIONLESS_ENTRIES = {
    "complexmerge3parktown": (
        "internal.id-prod-redbrix.fxtools.gl/Play/rbwparktown/iframe/crazygames"),
}
TAPTAP_RUNTIME_PATH = (
    "/extracted/Arcade/tap-tap-shots/"
    "tap-tap-shots.game-files.crazygames.com/tap-tap-shots/13/"
    "scripts/c3runtime.js"
)
TAPTAP_RUNTIME_SHA256 = (
    "8e5912a73980f1dfd18bbb7bf712e31bfd3980d29cc4897993f06ff65dac1c67"
)
TAPTAP_DOMAIN_CHECK = b'return () => f0(f1(), "crazygames");'
TAPTAP_LOCAL_CHECK = (
    b'return () => /^(127\\.0\\.0\\.1|localhost)$/.test(f1()) ? 0 : '
    b'f0(f1(), "crazygames");'
)


def add_game_diagnostics(html: bytes) -> bytes:
    """Install local diagnostics before the game's first head script."""
    if DIAGNOSTIC_SCRIPT in html:
        return html
    head = re.search(br"<head(?:\s[^>]*)?>", html, flags=re.I)
    if not head:
        return html
    return html[:head.end()] + DIAGNOSTIC_SCRIPT + html[head.end():]


def allow_local_taptap_runtime(original: bytes) -> bytes | None:
    """Extend this captured build's portal domain gate for localhost QA only."""
    if hashlib.sha256(original).hexdigest() != TAPTAP_RUNTIME_SHA256:
        return None
    if original.count(TAPTAP_DOMAIN_CHECK) != 1:
        return None
    return original.replace(TAPTAP_DOMAIN_CHECK, TAPTAP_LOCAL_CHECK)


def slug(value: str) -> str:
    return re.sub("[^a-z0-9]", "", value.lower())


def local_roots(downloads: Path) -> list[tuple[str, str, Path]]:
    result = []
    imported = downloads / "_chatgpt_import130_cdn_mirrors"
    try:
        records = json.loads((imported / "_mirror_index.json").read_text(
            encoding="utf-8"))
        for row in records:
            category, name = row["category"], row["game"]
            if not isinstance(category, str) or not isinstance(name, str):
                continue
            if not re.fullmatch(r"[A-Za-z0-9 _-]+", category) or not re.fullmatch(
                    r"[a-z0-9-]+", name):
                continue
            base = imported / category / name / "hosts"
            if base.is_dir() and not base.is_symlink():
                result.append((category, name, base))
    except (ValueError, OSError, KeyError, TypeError):
        pass

    new = downloads / "_chatgpt_new45_cdn_mirrors"
    try:
        records = json.loads((new / "_loader_manifest_45.json").read_text(
            encoding="utf-8"))
        for row in records:
            base = new / str(row["category"]) / str(row["game"]) / "hosts"
            if base.is_dir():
                result.append((str(row["category"]), str(row["game"]), base))
    except (ValueError, OSError, KeyError, TypeError):
        pass

    old = downloads / "_chatgpt_games_full_mirrors"
    try:
        records = json.loads((old / "_official_page_comparison.json").read_text(
            encoding="utf-8"))
        for row in records:
            name = Path(str(row["file"])).stem
            name = ("nut-sort-build-the-city" if name == "find-the-cow(cat)"
                    else name)
            base = old / name / "hosts"
            if base.is_dir():
                result.append(("Puzzles", name, base))
    except (ValueError, OSError, KeyError, TypeError):
        pass
    return result


def game_root_candidates(category: str, name: str) -> set[str]:
    variants = {
        slug(category + name), slug(name),
        slug(category + name.replace("_", "-")),
    }
    if name == "nut-sort-build-the-city":
        variants.add("findthecowcat")
    return variants


# These three exceptions were verified in the original game.js loader
# (bridge issue #6, comment 7187346236), not guessed from a basename.
WOW_ATLAS_ALIASES = {
    "words-of-wonders.game-files.crazygames.com/words-of-wonders/119/assets/fortuneWheel/glow_transition/glow_transition.json": "glow_transition.png",
    "words-of-wonders.game-files.crazygames.com/words-of-wonders/119/assets/fortuneWheel/lightning_transition/spark1/spark1.json": "spark1.png",
    "words-of-wonders.game-files.crazygames.com/words-of-wonders/119/assets/fortuneWheel/lightning_transition/spark2/spark2.json": "spark2.png",
}


def verified_atlas_alias(file: Path, root: Path, game_id: str) -> tuple[Path, str] | None:
    if game_id != "wordgameswordofwonders":
        return None
    alias = WOW_ATLAS_ALIASES.get(file.relative_to(root).as_posix())
    if not alias:
        return None
    try:
        data = json.loads(file.read_text(encoding="utf-8"))
        meta = data["meta"]
        if meta["image"] != "spritesheet.png" or not isinstance(data["frames"], dict):
            return None
        target = file.parent / alias
        if target.is_symlink():
            return None
        with target.open("rb") as stream:
            header = stream.read(24)
        if header[:16] != b"\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR":
            return None
        if struct.unpack(">II", header[16:24]) != (meta["size"]["w"], meta["size"]["h"]):
            return None
        return target, meta["image"]
    except (OSError, ValueError, KeyError, TypeError, struct.error):
        return None


def json_atlas_texture(file: Path) -> Path | None:
    """Link only a declared, existing sibling texture, never guess by size."""
    if file.suffix.lower() != ".json":
        return None
    try:
        if file.stat().st_size > 4 * 1024 * 1024:
            return None
        obj = json.loads(file.read_text(encoding="utf-8"))
        if not isinstance(obj, dict):
            return None
        packed = obj.get("0")
        if isinstance(packed, str):
            header = packed.splitlines()[0] if packed else ""
            match = re.fullmatch(r"([^;]+\.png);\d+,\d+;[^;]+", header,
                                 flags=re.I)
            name = match.group(1) if match else None
        elif isinstance(obj.get("frames"), (dict, list)):
            meta = obj.get("meta")
            name = meta.get("image") if isinstance(meta, dict) else None
        else:
            return None
        if (not isinstance(name, str) or not name.lower().endswith(".png")
                or "/" in name or "\\" in name or name.startswith(".")):
            return None
        target = file.parent / name
        if target.is_file() and not target.is_symlink():
            return target
    except (OSError, ValueError, TypeError):
        pass
    return None


def build_index(downloads: Path, repo: Path = REPO) -> tuple[dict, dict[str, Path]]:
    original = json.loads((repo / "reskinner/catalog.json").read_text(
        encoding="utf-8"))
    games = original["games"]
    known = {g["id"]: g for g in games}
    host_paths: dict[str, Path] = {}
    matches = set()
    for category, name, root in local_roots(downloads):
        candidates = game_root_candidates(category, name)
        found = [g for g in games if g["id"] in candidates]
        if len(found) != 1:
            # Avoid merging an unrelated mirror or guessing overlapping names.
            continue
        game = found[0]
        game_id = game["id"]
        if game_id in matches:
            continue
        matches.add(game_id)
        host_paths[game_id] = root.resolve()

        # The static catalog describes archived files, not necessarily the
        # files available in this Windows checkout. Do not advertise broken
        # gallery entries beside the real CDN-mirror image.
        original_assets = {}
        missing_tracked = 0
        for asset in game["assets"]:
            try:
                candidate = (repo / asset["path"]).resolve()
                candidate.relative_to(repo.resolve())
                if not candidate.is_file() or not candidate.stat().st_size:
                    missing_tracked += 1
                    continue
            except (OSError, ValueError):
                missing_tracked += 1
                continue
            original_assets[asset["path"]] = asset
        game["missingTrackedAssets"] = missing_tracked
        new_assets = dict(original_assets)
        entries = []
        fallback_entries = []
        total = 0
        for file in root.rglob("*"):
            if not file.is_file() or file.is_symlink():
                continue
            relative = file.relative_to(root)
            if not relative.parts or len(relative.parts) < 2:
                continue
            total += 1
            if relative.name.lower() in ENTRIES:
                entries.append(relative)
            elif (relative.as_posix() == EXTENSIONLESS_ENTRIES.get(game_id)
                  and file.read_bytes().lstrip().lower().startswith(b"<!doctype html")):
                entries.append(relative)
            elif (file.suffix.lower() in HTML_FALLBACK and
                  UNITY_WRAPPER_MARKER in
                  ("/" + relative.as_posix().lower())):
                # A CrazyGames Unity launcher is often named <slug>.html.
                # It needs initialization messages from the platform parent.
                fallback_entries.append(relative)
            ext = file.suffix.lower()
            kind = ("image" if ext in IMAGE else "atlas" if ext in ATLAS
                    else "model" if ext in MODEL else None)
            texture = json_atlas_texture(file) if ext == ".json" else None
            declared_image = None
            if ext == ".json" and texture is None:
                verified = verified_atlas_alias(file, root, game_id)
                if verified:
                    texture, declared_image = verified
            if texture is not None:
                kind = "atlas"
            if kind is None:
                continue
            full = Path("local-mirror") / game_id / relative
            asset_path = full.as_posix()
            new_assets[asset_path] = {
                "path": asset_path,
                "url": "/" + quote(asset_path, safe="/-._~"),
                "kind": kind,
                "extension": ext,
                "name": file.name,
                "bytes": file.stat().st_size,
                "localMirror": True,
            }
            if texture is not None:
                new_assets[asset_path]["atlasTexture"] = (
                    Path("local-mirror") / game_id / texture.relative_to(root)
                ).as_posix()
                if declared_image:
                    new_assets[asset_path]["atlasDeclaredImage"] = declared_image

        if entries or fallback_entries:
            def entry_rank(p: Path) -> tuple[int, int, int]:
                name_lower = p.as_posix().lower()
                is_portal = any(x in name_lower for x in (
                    "/gameframe/", "crazygames.com/game/", "/sdk/",
                    "/portal/", "/cdn-cgi/"))
                return (int(is_portal), -len(p.parts), len(p.as_posix()))
            # Prefer an actual generated WebGL bootstrap over a portal
            # wrapper or unrelated captured index.html for Unity titles.
            local_bootstraps = [
                p for p in entries if "_reskin_local_bootstrap" in p.parts
            ]
            entry_candidates = (
                local_bootstraps if (game["engine"].lower() == "unity"
                                     and local_bootstraps)
                else (entries or fallback_entries)
            )
            entry = min(entry_candidates, key=entry_rank)
            is_unity_wrapper = entry in fallback_entries
            is_local_bootstrap = "_reskin_local_bootstrap" in entry.parts
            is_local_ruffle = (
                game["engine"].lower() == "flash" and
                (root / "_runtime/ruffle/ruffle.js").is_file() and
                any((root / entry.parent).glob("*.swf"))
            )
            game["entryKind"] = (
                "local-unity-bootstrap" if is_local_bootstrap else
                "local-flash-ruffle" if is_local_ruffle else
                "unity-portal-wrapper" if is_unity_wrapper else "html"
            )
            game["entry"] = "/" + quote(
                (Path("local-mirror") / game_id / entry).as_posix(),
                safe="/-._~")
            game["entryCount"] = len(entries) + len(fallback_entries)
            if is_local_bootstrap:
                # This is a runnable WebGL *candidate*, not proof of gameplay.
                # Do not keep the misleading "engine unsupported" label.
                game.update(
                    status="limited",
                    label="Unity WebGL · bootstrap locale (QA necessaria)",
                )
            elif is_local_ruffle:
                game.update(
                    status="limited",
                    label="Flash originale via Ruffle · QA necessaria",
                )
            elif game["status"] == "missing":
                engine = game["engine"].lower()
                if "3d" in game["graphics"].lower() or engine == "playcanvas":
                    game.update(status="limited",label="3D · adapter richiesto")
                elif engine in {"unity", "defold", "flash", "iframe"}:
                    game.update(status="blocked",label="Motore non supportato")
                else:
                    game.update(status="experimental",
                                label="2D · mirror locale disponibile")
            # The tracked catalog predates the reconstructed entrypoint.
            # Do not leave contradictory "missing HTML" diagnostics.
            old_reason = game.get("reason", "").replace(
                "Manca anche l'entrypoint HTML locale.", ""
            ).replace(
                "Gli ZIP/manifest non includono un entrypoint locale avviabile.", ""
            ).strip()
            if is_unity_wrapper:
                game["reason"] = (
                    "Launcher Unity del portale recuperato, ma NON standalone: "
                    "attende unity2020config/loadGame dal contenitore CrazyGames. "
                    "Servono bootstrap locale e build completa. "
                    + old_reason
                )
            elif is_local_bootstrap:
                game["reason"] = (
                    "Bootstrap Unity locale generato dai file presenti: "
                    "gameplay NON certificato; sprite nei binari non isolabili "
                    "senza adapter. " + old_reason
                )
            elif is_local_ruffle:
                game["reason"] = (
                    "SWF originale recuperato e caricato con Ruffle locale; "
                    "gameplay e ispezione runtime NON certificati."
                )
            else:
                game["reason"] = (
                    "Entrypoint individuato nel mirror Windows, non verificato "
                    "come gameplay completo. " + old_reason
                )
        game["fileCount"] = max(game["fileCount"], total)
        game["assets"] = list(new_assets.values())
        game["assetCount"] = len(game["assets"])
        game["imageCount"] = sum(
            a["kind"] == "image" for a in game["assets"])
        game["modelCount"] = sum(
            a["kind"] == "model" for a in game["assets"])
        game["localMirror"] = True
        game["localMirrorFiles"] = total
        game["reskinTransport"] = (
            "same-origin-image-get" if game["imageCount"] else "none")

    # Some captures retain the publisher's actual launcher under its original
    # filename instead of index.html. Expose only known launcher shapes from
    # the game's own extracted directory; do not invent an HTML entrypoint.
    for game in games:
        if game.get("entry") or game.get("category") != "Arcade":
            continue
        if not game.get("base"):
            continue
        base = (repo / game["base"]).resolve()
        try:
            base.relative_to(repo.resolve())
        except ValueError:
            continue
        if not base.is_dir():
            continue
        candidates = []
        for file in base.rglob("*.html"):
            if not file.is_file() or file.is_symlink():
                continue
            relative = file.relative_to(base).as_posix().lower()
            if relative.startswith("playzool.com/games/"):
                candidates.append((0, file, "publisher-html"))
            elif UNITY_WRAPPER_MARKER in "/" + relative:
                candidates.append((1, file, "unity-portal-wrapper"))
        if not candidates:
            continue
        _, entry, kind = min(candidates, key=lambda row: (row[0], len(row[1].parts)))
        game["entry"] = "/" + quote(entry.relative_to(repo).as_posix(), safe="/-._~")
        game["entryKind"] = kind
        game["entryCount"] = len(candidates)
        if kind == "publisher-html":
            game.update(status="limited", label="HTML originale · QA necessaria")
        game["reason"] = (
            "Launcher HTML originale recuperato; gameplay NON certificato. "
            if kind == "publisher-html" else
            "Wrapper Unity originale recuperato; richiede inizializzazione "
            "dal portale e build WebGL completa. "
        ) + game.get("reason", "").replace(
            "Manca anche l'entrypoint HTML locale.", ""
        ).replace(
            "Gli ZIP/manifest non includono un entrypoint locale avviabile.", ""
        ).strip()

    original.update(
        generated=datetime.now(timezone.utc).isoformat(),
        source="tracked GitHub files + Windows CDN mirrors (local only)",
        counts=dict(Counter(g["status"] for g in games)),
        localMirrorGames=len(matches),
        localMirrorEntrypoints=sum(
            1 for g in games if g.get("localMirror") and g.get("entry") and
            g["entry"].startswith("/local-mirror/")),
        localMirrorImages=sum(
            sum(a["kind"] == "image" and bool(a.get("localMirror"))
                for a in g["assets"]) for g in games),
    )
    return original, host_paths


class MirrorHandler(SimpleHTTPRequestHandler):
    _hashed_alias_cache: dict[str, str | None] = {}
    _hashed_alias_index: dict[str, set[Path]] = {}
    _hashed_alias_index_roots: tuple[str, ...] = ()
    _hashed_alias_lock = threading.Lock()

    def guess_type(self, path: str) -> str:
        path = re.sub(r'__q_[0-9a-f]{12}$', '', path)
        lower = urlsplit(path).path.lower()
        if lower.endswith((".js.br", ".js.gz")):
            return "text/javascript; charset=utf-8"
        if lower.endswith((".wasm.br", ".wasm.gz")):
            return "application/wasm"
        if lower.endswith((".data.br", ".data.gz")):
            return "application/octet-stream"
        return super().guess_type(path)

    def _already_decoded(self, path: str) -> bool:
        """Playwright saves decoded response.body() with its original .br name.

        Never apply Content-Encoding a second time to those files.
        """
        lower = urlsplit(path).path.lower()
        if not lower.endswith((".br", ".gz")):
            return False
        try:
            file = Path(self.translate_path(path))
            with file.open("rb") as stream:
                prefix = stream.read(96)
        except (OSError, ValueError):
            return False
        if lower.endswith(".gz"):
            return not prefix.startswith(b"\x1f\x8b")
        if ".wasm." in lower:
            return prefix.startswith(b"\x00asm")
        if ".data." in lower:
            return prefix.startswith((
                b"UnityWebData", b"UnityFS", b"UnityRaw"))
        if ".js." in lower:
            first = prefix.lstrip(b" \t\r\n;")
            return first.startswith((
                b"var ", b"let ", b"const ", b"function ",
                b"(()=>", b"(function", b"!function",
                b"window.", b"/*", b"//", b"'use strict'",
                b'"use strict"'))
        return False

    def send_response(self, code, message=None):
        self.response_status = code
        super().send_response(code, message)

    def end_headers(self) -> None:
        # Compressed Unity files may have been transparently decompressed
        # before being written to disk. Check file content, not just suffix.
        lower = urlsplit(self.path).path.lower()
        if self.response_status == 200 and not self._already_decoded(self.path):
            if lower.endswith(".br"):
                self.send_header("Content-Encoding", "br")
            elif lower.endswith(".gz"):
                self.send_header("Content-Encoding", "gzip")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript; charset=utf-8",
        ".mjs": "text/javascript; charset=utf-8",
        ".wasm": "application/wasm",
        ".svg": "image/svg+xml",
        ".woff2": "font/woff2",
        ".unityweb": "application/octet-stream",
    }

    def __init__(self, *args, repo: Path, catalog_bytes: bytes,
                 roots: dict[str, Path], **kwargs):
        self.repo = repo
        self.catalog_bytes = catalog_bytes
        self.roots = roots
        super().__init__(*args, directory=str(repo), **kwargs)

    def do_GET(self):
        if urlsplit(self.path).path == "/reskinner/catalog.json":
            return self.send_catalog(head=False)
        super().do_GET()

    def do_HEAD(self):
        if urlsplit(self.path).path == "/reskinner/catalog.json":
            return self.send_catalog(head=True)
        super().do_HEAD()

    def send_head(self):
        path = urlsplit(self.path).path
        if path == TAPTAP_RUNTIME_PATH:
            target = Path(self.translate_path(self.path))
            try:
                content = allow_local_taptap_runtime(target.read_bytes())
                if content is not None:
                    self.send_response(200)
                    self.send_header("Content-Type", "text/javascript; charset=utf-8")
                    self.send_header("Content-Length", str(len(content)))
                    self.end_headers()
                    return io.BytesIO(content)
            except OSError:
                pass
        extensionless = path == (
            "/local-mirror/complexmerge3parktown/" +
            EXTENSIONLESS_ENTRIES["complexmerge3parktown"])
        if (path.startswith(("/local-mirror/", "/extracted/")) and
                (path.lower().endswith((".html", ".htm")) or extensionless)):
            target = Path(self.translate_path(self.path))
            try:
                if target.is_file() and target.stat().st_size <= 2 * 1024 * 1024:
                    original = target.read_bytes()
                    content = add_game_diagnostics(original)
                    if content != original:
                        self.send_response(200)
                        self.send_header("Content-Type", "text/html" if extensionless
                                         else self.guess_type(str(target)))
                        self.send_header("Content-Length", str(len(content)))
                        self.send_header("Cache-Control", "no-store")
                        self.end_headers()
                        return io.BytesIO(content)
            except OSError:
                pass
        return super().send_head()

    def send_catalog(self, head: bool) -> None:
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(self.catalog_bytes)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        if not head:
            for offset in range(0, len(self.catalog_bytes), 64 * 1024):
                self.wfile.write(self.catalog_bytes[offset:offset + 64 * 1024])

    def copyfile(self, source, outputfile) -> None:
        # Chrome on Windows dropped the tail of a 42 MB Unity WASM response
        # with 64 KiB writes. The standard HTTP server's 16 KiB writes
        # delivered that same file completely.
        while chunk := source.read(16 * 1024):
            outputfile.write(chunk)

    def resolve_game_absolute_resource(self, parts: tuple[str, ...]) -> str | None:
        """Resolve original game-root URLs using a verified local Referer.

        Some archived games request /style.css or /socket.io.min.js
        instead of paths relative to their index.html. Never permit
        traversal outside the referring game's mirrored host folder.
        """
        referer = self.headers.get("Referer", "")
        try:
            source = urlsplit(referer)
            if source.scheme not in {"http", "https"}:
                return None
            if source.hostname not in {"127.0.0.1", "localhost"}:
                return None
            if source.port != self.server.server_port:
                return None
            refparts = Path(unquote(source.path).lstrip("/")).parts
            if len(refparts) < 4 or refparts[0] != "local-mirror":
                return None
            root = self.roots.get(refparts[1])
            if root is None:
                return None
            host = (root / refparts[2]).resolve()
            host.relative_to(root)
            page_directory = root.joinpath(*refparts[2:-1]).resolve()
            page_directory.relative_to(host)
            for base in (host, page_directory):
                candidate = base.joinpath(*parts).resolve()
                candidate.relative_to(host)
                if candidate.is_file():
                    return str(candidate)
            return None
        except (ValueError, OSError):
            return None

    def resolve_worldguessr_css_media(self, parts: tuple[str, ...]) -> str | None:
        """Resolve static media referenced by this game's captured CSS only.

        A browser's CSS Referer can lose the /local-mirror prefix. Require
        the exact original stylesheet and an explicit URL in its contents.
        No API requests, remote proxy, or guessing of unrelated assets.
        """
        if (len(parts) != 4 or parts[:3] != ("_next", "static", "media")
                or not re.fullmatch(r"[A-Za-z0-9_.-]+\.(?:woff2|png)", parts[3])):
            return None
        try:
            ref = urlsplit(self.headers.get("Referer", ""))
            if (ref.scheme != "http" or ref.hostname not in {"127.0.0.1", "localhost"}
                    or ref.port != self.server.server_port):
                return None
            if not re.fullmatch(r"/_next/static/css/[a-f0-9]{16}\.css", ref.path):
                return None
            root = self.roots.get("wordgameswordguesser")
            if root is None:
                return None
            host = (root / "www.worldguessr.com").resolve()
            host.relative_to(root.resolve())
            css = (host / ref.path.lstrip("/")).resolve()
            css.relative_to(host)
            if not css.is_file() or css.stat().st_size > 2 * 1024 * 1024:
                return None
            content = css.read_text(encoding="utf-8")
            target_url = "/" + "/".join(parts)
            if not re.search(r"url\(\s*['\"]?" + re.escape(target_url) +
                             r"['\"]?\s*\)", content):
                return None
            candidate = host.joinpath(*parts).resolve()
            candidate.relative_to(host)
            return str(candidate) if candidate.is_file() else None
        except (OSError, ValueError):
            return None

    def resolve_foony_root_resource(self, parts: tuple[str, ...]) -> str | None:
        """Original Foony modules import /assets, /fonts, /img and /m.

        After navigating to /games/foono-online-card-game/index.html, the
        Referer no longer contains /local-mirror. Resolve only that game's
        original physically present host files, not another game's files.
        """
        if not parts or parts[0] not in {"assets", "fonts", "img", "m"}:
            return None
        try:
            referer = urlsplit(self.headers.get("Referer", ""))
            if (referer.scheme not in {"http", "https"} or
                    referer.hostname not in {"127.0.0.1", "localhost"} or
                    referer.port != self.server.server_port):
                return None
            if not referer.path.startswith((
                    "/games/foono-online-card-game/",
                    "/local-mirror/cardsfouruno/foony.com/")):
                return None
            root = self.roots.get("cardsfouruno")
            if root is None:
                return None
            host = (root / "foony.com").resolve()
            host.relative_to(root.resolve())
            candidate = host.joinpath(*parts).resolve()
            candidate.relative_to(host)
            if candidate.is_file() and not candidate.is_symlink():
                return str(candidate)
        except (ValueError, OSError):
            pass
        return None

    def resolve_unique_hashed_asset(self, parts: tuple[str, ...]) -> str | None:
        """Alias nested hashed JS/CSS imports only if unambiguous.

        Bundlers sometimes import /assets/<hash>.js without a Referer,
        while captures store them under /games/<slug>/assets.
        """
        if (len(parts) != 2 or parts[0] != "assets" or
                not re.fullmatch(
                    r"[A-Za-z0-9_.-]+-[A-Za-z0-9_-]{8,}\.(?:js|mjs|css)",
                    parts[-1]) or
                self.headers.get("Sec-Fetch-Site") != "same-origin"):
            return None
        referer = self.headers.get("Referer", "")
        if referer:
            try:
                ref = urlsplit(referer)
                if (ref.scheme not in {"http", "https"} or
                        ref.hostname not in {"127.0.0.1", "localhost"} or
                        ref.port != self.server.server_port or
                        not ref.path.startswith((
                            "/local-mirror/", "/reskinner/",
                            "/games/foono-online-card-game/"))):
                    return None
            except ValueError:
                return None

        name = parts[-1]
        with self._hashed_alias_lock:
            # Dynamic imports omit Referer. Index filenames once rather than
            # recursively walking every game mirror for each JS request; a
            # single page may import hundreds of different hashed modules.
            cls = type(self)
            roots_key = tuple(sorted(str(root.resolve())
                                     for root in self.roots.values()))
            if roots_key != cls._hashed_alias_index_roots:
                index: dict[str, set[Path]] = {}
                for root in self.roots.values():
                    try:
                        root_path = root.resolve()
                        for asset in root.rglob("*"):
                            if (asset.parent.name != "assets" or
                                    asset.is_symlink() or not asset.is_file() or
                                    not re.fullmatch(
                                        r"[A-Za-z0-9_.-]+-[A-Za-z0-9_-]{8,}\.(?:js|mjs|css)",
                                        asset.name)):
                                continue
                            resolved = asset.resolve()
                            resolved.relative_to(root_path)
                            index.setdefault(asset.name, set()).add(resolved)
                    except (OSError, ValueError):
                        continue
                cls._hashed_alias_index = index
                cls._hashed_alias_index_roots = roots_key
                cls._hashed_alias_cache.clear()
            if name in cls._hashed_alias_cache:
                return cls._hashed_alias_cache[name]
            matches = cls._hashed_alias_index.get(name, set())
            chosen = None
            if len(matches) == 1:
                chosen = str(next(iter(matches)))
            elif len(matches) > 1:
                try:
                    first, *others = sorted(matches)
                    sample = hashlib.sha256(first.read_bytes()).digest()
                    if all(p.stat().st_size == first.stat().st_size and
                           hashlib.sha256(p.read_bytes()).digest() == sample
                           for p in others):
                        chosen = str(first)
                except OSError:
                    pass
            self._hashed_alias_cache[name] = chosen
            return chosen

    def resolve_unique_game_navigation(self, parts: tuple[str, ...]) -> str | None:
        """Serve original same-origin /games/<slug>/... navigations locally.

        Some hosted games, including Foono, navigate from their mirrored
        entrypoint to an absolute /games/<slug>/index.html after Play. This
        path loses the /local-mirror/<id>/<host> prefix. Resolve only
        physically present, unambiguous originals from approved host roots.
        """
        if len(parts) < 3 or parts[0] != "games":
            return None
        matches: set[Path] = set()
        for root in self.roots.values():
            try:
                for host in root.iterdir():
                    if not host.is_dir() or host.is_symlink():
                        continue
                    candidate = host.joinpath(*parts).resolve()
                    candidate.relative_to(host.resolve())
                    if candidate.is_file() and not candidate.is_symlink():
                        matches.add(candidate)
            except (OSError, ValueError):
                continue
        if len(matches) == 1:
            return str(next(iter(matches)))
        if len(matches) > 1:
            try:
                first, *others = sorted(matches)
                digest = hashlib.sha256(first.read_bytes()).digest()
                if all(p.stat().st_size == first.stat().st_size and
                       hashlib.sha256(p.read_bytes()).digest() == digest
                       for p in others):
                    return str(first)
            except OSError:
                pass
        return None

    def resolve_extracted_local_asset(self, parts: tuple[str, ...]) -> str | None:
        """Resolve missing tracked /extracted assets from the original host mirror.

        The path must explicitly include the real host directory. Never
        substitute an asset merely because its basename matches.
        """
        if len(parts) < 4 or parts[0] != "extracted":
            return None
        matches: set[Path] = set()
        for root in self.roots.values():
            for index in range(1, len(parts) - 1):
                host_name = parts[index]
                if "." not in host_name:
                    continue
                try:
                    host = root / host_name
                    if not host.is_dir() or host.is_symlink():
                        continue
                    candidate = root.joinpath(*parts[index:]).resolve()
                    candidate.relative_to(root.resolve())
                    if candidate.is_file() and not candidate.is_symlink():
                        matches.add(candidate)
                except (OSError, ValueError):
                    continue
        if len(matches) == 1:
            return str(next(iter(matches)))
        if len(matches) > 1:
            try:
                first, *others = sorted(matches)
                signature = hashlib.sha256(first.read_bytes()).digest()
                if all(
                    p.stat().st_size == first.stat().st_size and
                    hashlib.sha256(p.read_bytes()).digest() == signature
                    for p in others
                ):
                    return str(first)
            except OSError:
                pass
        return None

    def resolve_versioned_capture(self, root: Path, candidate: Path,
                                  path: str) -> str | None:
        """Resolve exact observed cache-busting URLs, not arbitrary variants.

        No host/path search, no network requests, no guessing of signed URLs.
        Preserve canonical local files (including intentional reskin edits).
        """
        parsed = urlsplit(path)
        if not parsed.query:
            return None
        try:
            pairs = parse_qsl(parsed.query, keep_blank_values=True,
                              strict_parsing=True, max_num_fields=4)
            if not pairs or any(key not in {"v", "ver", "version", "rev"}
                                or not re.fullmatch(r"[A-Za-z0-9_.-]{1,80}", value)
                                for key, value in pairs):
                return None
            if len({key for key, _ in pairs}) != len(pairs):
                return None
            chunks = parsed.path.split("/", 4)
            if len(chunks) != 5:
                return None
            host, resource = chunks[3], chunks[4]
            if not re.fullmatch(r"[A-Za-z0-9.-]+", host):
                return None
            matches = []
            for scheme in ("https", "http"):
                url = f"{scheme}://{host}/{resource}?{parsed.query}"
                suffix = hashlib.sha256(url.encode()).hexdigest()[:12]
                cached = candidate.with_name(
                    candidate.name + "__q_" + suffix).resolve()
                cached.relative_to(root)
                if cached.is_file() and cached.stat().st_size > 0:
                    matches.append(cached)
            if len(matches) == 1:
                return str(matches[0])
            # Ambiguous HTTP/HTTPS variants fail closed.
            return None
        except (OSError, ValueError):
            return None

    def translate_path(self, path: str) -> str:
        raw = urlsplit(path).path
        try:
            decoded = unquote(raw)
        except ValueError:
            return str(self.repo / "__invalid__")
        parts = Path(decoded.lstrip("/")).parts
        if not parts or ".." in parts or any(p.startswith(".") for p in parts):
            return str(self.repo / "__invalid__")
        # A captured page can prefix its root-relative asset with
        # /local-mirror while omitting the game ID. Use only the original
        # mirrored host identified by a same-origin Referer.
        if (len(parts) >= 3 and parts[0] == "local-mirror"
                and parts[1] not in self.roots):
            return (self.resolve_game_absolute_resource(parts[1:]) or
                    str(self.repo / "__invalid__"))
        if len(parts) >= 4 and parts[0] == "local-mirror":
            root = self.roots.get(parts[1])
            if not root:
                return str(self.repo / "__invalid__")
            candidate = root.joinpath(*parts[2:]).resolve()
            try:
                candidate.relative_to(root)
            except ValueError:
                return str(self.repo / "__invalid__")
            if not candidate.exists():
                cached = self.resolve_versioned_capture(root, candidate, path)
                if cached:
                    return cached
                # Some captured pages use /local-mirror/<game>/fonts/... and
                # omit their own host directory. Resolve only an exact file
                # under one host belonging to that same game.
                if not (root / parts[2]).is_dir():
                    matches = []
                    try:
                        for host in root.iterdir():
                            if not host.is_dir() or host.is_symlink():
                                continue
                            target = host.joinpath(*parts[2:]).resolve()
                            target.relative_to(host.resolve())
                            if target.is_file() and not target.is_symlink():
                                matches.append(target)
                    except (OSError, ValueError):
                        matches = []
                    if len(matches) == 1:
                        return str(matches[0])
            return str(candidate)
        # Ensure '/reskinner/' and '/extracted/' are served only from the repo.
        if parts[0] not in {"reskinner", "extracted", "2night-reskin-sw.js"}:
            alias = (self.resolve_game_absolute_resource(parts) or
                     self.resolve_worldguessr_css_media(parts) or
                     self.resolve_foony_root_resource(parts) or
                     self.resolve_unique_hashed_asset(parts) or
                     self.resolve_unique_game_navigation(parts))
            return alias or str(self.repo / "__invalid__")
        tracked_path = self.repo.joinpath(*parts).resolve()
        if parts[0] == "extracted" and not tracked_path.is_file():
            overlay = self.resolve_extracted_local_asset(parts)
            if overlay:
                return overlay
        return str(tracked_path)

    def list_directory(self, _path: str):
        self.send_error(403, "Directory listing disabled")
        return None

    def log_message(self, format, *args):
        if self.path.startswith("/extracted") or self.path.startswith("/local-mirror"):
            return
        super().log_message(format, *args)


class NightThreadingServer(ThreadingHTTPServer):
    request_queue_size = 128
    daemon_threads = True


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--downloads", type=Path,
                        default=Path.home() / "Downloads")
    parser.add_argument("--port", type=int, default=8000)
    args = parser.parse_args()
    catalog, roots = build_index(args.downloads)
    payload = json.dumps(catalog,ensure_ascii=False).encode("utf-8")
    handler = partial(MirrorHandler, repo=REPO,
                      catalog_bytes=payload, roots=roots)
    with NightThreadingServer(("127.0.0.1", args.port), handler) as httpd:
        print("2Night games mirror server:", httpd.server_address, flush=True)
        print("Catalog:", catalog["total"], "titles,",
              catalog["localMirrorGames"], "local mirrors,",
              catalog["localMirrorEntrypoints"], "local HTML entrypoints,",
              catalog["localMirrorImages"], "additional images", flush=True)
        print(f"Open http://127.0.0.1:{args.port}/reskinner/", flush=True)
        httpd.serve_forever(poll_interval=0.5)


if __name__ == "__main__":
    main()
