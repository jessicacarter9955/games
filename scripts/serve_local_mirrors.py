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
import json
import mimetypes
import re
import threading
from collections import Counter
from datetime import datetime, timezone
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import quote, unquote, urlsplit

REPO = Path(__file__).resolve().parents[1]
IMAGE = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".avif"}
ATLAS = {".xml", ".atlas", ".plist"}
MODEL = {".glb", ".gltf", ".fbx", ".obj", ".dds", ".ktx", ".ktx2", ".basis"}
ENTRIES = {"index.html", "game.html"}
HTML_FALLBACK = {".html", ".htm"}
UNITY_WRAPPER_MARKER = "/unity/unity"


def slug(value: str) -> str:
    return re.sub("[^a-z0-9]", "", value.lower())


def local_roots(downloads: Path) -> list[tuple[str, str, Path]]:
    result = []
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
            elif (file.suffix.lower() in HTML_FALLBACK and
                  UNITY_WRAPPER_MARKER in
                  ("/" + relative.as_posix().lower())):
                # A CrazyGames Unity launcher is often named <slug>.html.
                # It needs initialization messages from the platform parent.
                fallback_entries.append(relative)
            ext = file.suffix.lower()
            kind = ("image" if ext in IMAGE else "atlas" if ext in ATLAS
                    else "model" if ext in MODEL else None)
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

        if entries or fallback_entries:
            def entry_rank(p: Path) -> tuple[int, int, int]:
                name_lower = p.as_posix().lower()
                is_portal = any(x in name_lower for x in (
                    "/gameframe/", "crazygames.com/game/", "/sdk/",
                    "/portal/", "/cdn-cgi/"))
                return (int(is_portal), -len(p.parts), len(p.as_posix()))
            entry = min(entries or fallback_entries, key=entry_rank)
            is_unity_wrapper = entry in fallback_entries
            is_local_bootstrap = "_reskin_local_bootstrap" in entry.parts
            game["entryKind"] = (
                "local-unity-bootstrap" if is_local_bootstrap else
                "unity-portal-wrapper" if is_unity_wrapper else "html"
            )
            game["entry"] = "/" + quote(
                (Path("local-mirror") / game_id / entry).as_posix(),
                safe="/-._~")
            game["entryCount"] = len(entries) + len(fallback_entries)
            if game["status"] == "missing":
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

    def send_catalog(self, head: bool) -> None:
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(self.catalog_bytes)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        if not head:
            self.wfile.write(self.catalog_bytes)

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
                            "/local-mirror/", "/reskinner/"))):
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

    def translate_path(self, path: str) -> str:
        raw = urlsplit(path).path
        try:
            decoded = unquote(raw)
        except ValueError:
            return str(self.repo / "__invalid__")
        parts = Path(decoded.lstrip("/")).parts
        if not parts or ".." in parts or any(p.startswith(".") for p in parts):
            return str(self.repo / "__invalid__")
        if len(parts) >= 4 and parts[0] == "local-mirror":
            root = self.roots.get(parts[1])
            if not root:
                return str(self.repo / "__invalid__")
            candidate = root.joinpath(*parts[2:]).resolve()
            try:
                candidate.relative_to(root)
            except ValueError:
                return str(self.repo / "__invalid__")
            return str(candidate)
        # Ensure '/reskinner/' and '/extracted/' are served only from the repo.
        if parts[0] not in {"reskinner", "extracted", "2night-reskin-sw.js"}:
            alias = (self.resolve_game_absolute_resource(parts) or
                     self.resolve_unique_hashed_asset(parts))
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
    with ThreadingHTTPServer(("127.0.0.1", args.port), handler) as httpd:
        print("2Night games mirror server:", httpd.server_address, flush=True)
        print("Catalog:", catalog["total"], "titles,",
              catalog["localMirrorGames"], "local mirrors,",
              catalog["localMirrorEntrypoints"], "local HTML entrypoints,",
              catalog["localMirrorImages"], "additional images", flush=True)
        print(f"Open http://127.0.0.1:{args.port}/reskinner/", flush=True)
        httpd.serve_forever(poll_interval=0.5)


if __name__ == "__main__":
    main()
