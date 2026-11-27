#!/usr/bin/env python3
"""Regression tests for local mirror hashed imports and archived asset overlay."""
from __future__ import annotations

import tempfile
import hashlib
import unittest
from unittest.mock import patch
from pathlib import Path
from types import SimpleNamespace

from serve_local_mirrors import MirrorHandler


class MirrorAssetResolutionTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.work = Path(self.temp.name)
        self.repo = self.work / "repo"
        self.repo.mkdir()
        self.root = self.work / "mirror1"
        self.root.mkdir()
        self.handler = object.__new__(MirrorHandler)
        self.handler.repo = self.repo
        self.handler.roots = {"cardsfouruno": self.root}
        self.handler.server = SimpleNamespace(server_port=8002)
        self.handler.headers = {"Sec-Fetch-Site": "same-origin"}
        MirrorHandler._hashed_alias_cache.clear()

    def save(self, root: Path, relative: str, content: bytes) -> Path:
        p = root / relative
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_bytes(content)
        return p

    def test_nested_referrerless_hashed_module_is_served(self) -> None:
        path = self.save(
            self.root,
            "foony.com/games/foono-online-card-game/assets/"
            "solid-vendor-vMdafsZ3.js",
            b"var source = 1;")
        parts = ("assets", "solid-vendor-vMdafsZ3.js")
        self.assertEqual(
            self.handler.resolve_unique_hashed_asset(parts), str(path.resolve()))

    def test_foono_play_bots_absolute_navigation(self) -> None:
        entry = self.save(
            self.root, "foony.com/games/foono-online-card-game/index.html",
            b"<!doctype html><title>Foono</title>")
        self.assertEqual(self.handler.translate_path(
            "/games/foono-online-card-game/index.html?night_session=4"),
            str(entry.resolve()))

    def test_ambiguous_absolute_game_navigation_is_rejected(self) -> None:
        path = "games/foono-online-card-game/index.html"
        self.save(self.root, "foony.com/" + path, b"game A")
        self.save(self.root, "other.example.com/" + path, b"game B")
        self.assertEqual(
            self.handler.translate_path("/" + path),
            str((self.repo / "__invalid__").resolve()))

    def test_hashed_imports_use_one_file_index(self) -> None:
        first = self.save(
            self.root, "foony.com/games/foono/assets/"
            "solid-vendor-vMdafsZ3.js", b"var vendor = 1;")
        second = self.save(
            self.root, "foony.com/games/foono/assets/"
            "NumberUtils-g4Ou7l33.js", b"var numbers = 2;")
        self.assertEqual(self.handler.resolve_unique_hashed_asset(
            ("assets", first.name)), str(first.resolve()))
        # Each additional module must be O(1) without walking 69 game
        # directories again. Performance is essential for Foono boot.
        with patch.object(Path, "rglob", side_effect=AssertionError(
                "hashed module must reuse the filename index")):
            self.assertEqual(self.handler.resolve_unique_hashed_asset(
                ("assets", second.name)), str(second.resolve()))

    def test_conflicting_same_named_modules_are_not_aliased(self) -> None:
        parts = ("assets", "solid-vendor-vMdafsZ3.js")
        self.save(
            self.root,
            "foony.com/games/foono-online-card-game/assets/"
            "solid-vendor-vMdafsZ3.js", b"one")
        second = self.work / "mirror2"
        second.mkdir()
        self.handler.roots["othergame"] = second
        self.save(second, "different.example.com/assets/"
                  "solid-vendor-vMdafsZ3.js", b"two")
        self.assertIsNone(self.handler.resolve_unique_hashed_asset(parts))

    def test_external_referer_cannot_access_alias(self) -> None:
        self.save(self.root, "foony.com/assets/solid-vendor-vMdafsZ3.js",
                  b"var ok = true;")
        self.handler.headers["Referer"] = "https://attacker.example/landing"
        self.assertIsNone(self.handler.resolve_unique_hashed_asset(
            ("assets", "solid-vendor-vMdafsZ3.js")))

    def test_tracked_missing_asset_uses_same_original_host(self) -> None:
        relative = (
            "guess-their-answer.game-files.crazygames.com/"
            "guess-their-answer/13/files/assets/193571219/1/Bottom.jpg")
        mirror = self.save(self.root, relative, b"\xff\xd8\xffJPEG")
        request = "/extracted/trivia/guesstheiranswers/" + relative
        self.assertEqual(
            self.handler.translate_path(request), str(mirror.resolve()))

    def test_tracked_original_file_takes_precedence(self) -> None:
        relative = ("example-cdn.com/7/assets/images/menu.avif")
        self.save(self.root, relative, b"mirror")
        original = self.save(
            self.repo, "extracted/hexastack/" + relative, b"tracked")
        request = "/extracted/hexastack/" + relative
        self.assertEqual(
            self.handler.translate_path(request), str(original.resolve()))

    def test_unrelated_host_is_not_substituted(self) -> None:
        self.save(self.root, "trusted.example.com/images/menu.avif", b"good")
        req = "/extracted/hexastack/different.example.com/images/menu.avif"
        self.assertEqual(
            self.handler.translate_path(req),
            str((self.repo / req.lstrip("/")).resolve()))


    def test_exact_versioned_capture_is_served(self) -> None:
        resource = "example-cdn.com/game/assets/ui.json"
        url = "https://" + resource + "?v=2"
        suffix = hashlib.sha256(url.encode()).hexdigest()[:12]
        cached = self.save(self.root, resource + "__q_" + suffix, b"{}")
        request = "/local-mirror/cardsfouruno/" + resource + "?v=2"
        self.assertEqual(self.handler.translate_path(request),
                         str(cached.resolve()))
        self.assertEqual(self.handler.guess_type(str(cached)), "application/json")
        other = request.replace("v=2", "v=3")
        self.assertEqual(self.handler.translate_path(other),
                         str((self.root / resource).resolve()))

    def test_game_relative_font_uses_exact_file_in_its_own_host(self) -> None:
        font = self.save(self.root, "gulper.io/fonts/ComicNeue-Regular.woff2",
                         b"original font")
        self.assertEqual(self.handler.translate_path(
            "/local-mirror/cardsfouruno/fonts/ComicNeue-Regular.woff2"),
            str(font.resolve()))

    def test_referrer_scoped_local_mirror_asset(self) -> None:
        svg = self.save(self.root, "diep.io/assets/fa/crown.svg", b"<svg/>")
        self.handler.headers["Referer"] = (
            "http://127.0.0.1:8002/local-mirror/cardsfouruno/"
            "diep.io/index.html")
        self.assertEqual(self.handler.translate_path(
            "/local-mirror/assets/fa/crown.svg"), str(svg.resolve()))

    def test_unreferenced_local_mirror_asset_is_rejected(self) -> None:
        self.save(self.root, "diep.io/assets/fa/crown.svg", b"<svg/>")
        self.assertEqual(self.handler.translate_path(
            "/local-mirror/assets/fa/crown.svg"),
            str((self.repo / "__invalid__").resolve()))

    def test_ambiguous_game_relative_font_is_not_aliased(self) -> None:
        self.save(self.root, "gulper.io/fonts/ComicNeue-Regular.woff2",
                  b"first")
        self.save(self.root, "other.example/fonts/ComicNeue-Regular.woff2",
                  b"second")
        self.assertEqual(self.handler.translate_path(
            "/local-mirror/cardsfouruno/fonts/ComicNeue-Regular.woff2"),
            str((self.root / "fonts/ComicNeue-Regular.woff2").resolve()))

    def test_versioned_capture_preserves_local_override(self) -> None:
        resource = "example-cdn.com/game/assets/ui.json"
        suffix = hashlib.sha256(
            ("https://" + resource + "?v=2").encode()).hexdigest()[:12]
        self.save(self.root, resource + "__q_" + suffix, b"original")
        canonical = self.save(self.root, resource, b"local edit")
        request = "/local-mirror/cardsfouruno/" + resource + "?v=2"
        self.assertEqual(self.handler.translate_path(request),
                         str(canonical.resolve()))

    def test_signed_query_is_not_aliased(self) -> None:
        resource = "example-cdn.com/game/assets/ui.json"
        suffix = hashlib.sha256(
            ("https://" + resource + "?token=secret").encode()).hexdigest()[:12]
        self.save(self.root, resource + "__q_" + suffix, b"private")
        request = "/local-mirror/cardsfouruno/" + resource + "?token=secret"
        self.assertEqual(self.handler.translate_path(request),
                         str((self.root / resource).resolve()))

    def test_conflicting_http_https_cache_is_not_aliased(self) -> None:
        resource = "example-cdn.com/game/assets/ui.json"
        for scheme in ("https", "http"):
            suffix = hashlib.sha256(
                (scheme + "://" + resource + "?v=2").encode()).hexdigest()[:12]
            self.save(self.root, resource + "__q_" + suffix, scheme.encode())
        request = "/local-mirror/cardsfouruno/" + resource + "?v=2"
        self.assertEqual(self.handler.translate_path(request),
                         str((self.root / resource).resolve()))

if __name__ == "__main__":
    unittest.main()
