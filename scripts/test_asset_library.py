"""Run: python scripts/test_asset_library.py"""
import tempfile
import unittest
from pathlib import Path
from asset_library import build_library, kind_for


class AssetLibraryTests(unittest.TestCase):
    def test_inventory_and_duplicates(self):
        with tempfile.TemporaryDirectory() as temp:
            repo = Path(temp)
            base = repo / "extracted" / "game"
            root = repo / "mirror"
            base.mkdir(parents=True)
            (root / "host").mkdir(parents=True)
            (base / "bg.png").write_bytes(b"same")
            (root / "host" / "copy.png").write_bytes(b"same")
            (root / "host" / "sound.ogg").write_bytes(b"other")
            (root / "host" / "code.js.br").write_bytes(b"1234")
            catalog = {"games": [{"id": "g", "title": "Game", "category": "Puzzle",
                                   "base": "extracted/game", "assets": []}]}
            result = build_library(catalog, repo, {"g": root}, dedup=True)
            self.assertEqual(len(result["assets"]), 4)
            self.assertEqual(sum("duplicateHash" in a for a in result["assets"]), 2)
            self.assertEqual({a["kind"] for a in result["assets"]}, {"image", "audio", "code"})
            self.assertEqual(result["errors"], [])
            self.assertEqual(catalog["games"][0]["assets"], [])

    def test_types(self):
        self.assertEqual(kind_for("test.woff2"), "font")
        self.assertEqual(kind_for("test.wasm.gz"), "code")
        self.assertIsNone(kind_for("test.zip"))


if __name__ == "__main__":
    unittest.main()
