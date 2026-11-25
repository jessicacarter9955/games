#!/usr/bin/env python3
"""Verify the 69 original URL mappings without claiming gameplay validation."""
import json
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
catalog = json.loads((ROOT / "reskinner/catalog.json").read_text("utf-8"))
sources = json.loads((ROOT / "reskinner/original-urls.json").read_text("utf-8"))
rows = sources["games"]
game_ids = [g["id"] for g in catalog["games"]]
map_ids = [row["id"] for row in rows]
urls = [row["url"] for row in rows]
assert len(rows) == 69 == catalog["total"]
assert len(set(map_ids)) == 69
assert set(map_ids) == set(game_ids), "Mismatch between mappings and catalog"
assert len(set(urls)) == 69
for row in rows:
    url = urlsplit(row["url"])
    assert url.scheme == "https" and url.netloc == "www.crazygames.com"
    assert url.path == "/game/" + row["slug"], row
    assert row["gameplayVerified"] is False, "No gameplay evidence from URL matching"
print("OK: 69 unique original URLs map exactly to the 69 catalog IDs")
