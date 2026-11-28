#!/usr/bin/env python3
"""Generate separate launcher for Candy variant; original remains unchanged."""
import hashlib
import json
from pathlib import Path

def create(source, variant_file, destination):
    if source.resolve()==destination.resolve():
        raise ValueError("Never overwrite original")
    raw=source.read_bytes()
    old=b'/local-mirror/idlecandyclicker2/files.crazygames.com/candy-clicker-2/7/Build/6842d224e3c498492ef70178a1e5b006.data'
    new=b'/reskinner/variants/candy-test/game.data'
    if raw.count(old)!=1 or not variant_file.is_file():
        raise ValueError("Expected data URL or built variant absent")
    report=json.loads(variant_file.with_suffix(".json").read_text(encoding="utf8"))
    if hashlib.sha256(variant_file.read_bytes()).hexdigest()!=report["variantSHA256"]:
        raise ValueError("Variant hash mismatch")
    destination.write_bytes(raw.replace(old,new))
    assert source.read_bytes()==raw
    print("Variant launcher generated, source unchanged",destination)
