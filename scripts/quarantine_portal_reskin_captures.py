#!/usr/bin/env python3
"""Quarantine unrelated portal/ad captures, without deleting any files.

Only files explicitly listed in the new incremental manifests are considered;
a sha256 check prevents touching pre-existing or modified mirror content.
"""
from __future__ import annotations

import hashlib
import json
import shutil
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlsplit

from recapture_69_gameplay import trusted_hosts
from serve_local_mirrors import build_index

D = Path.home() / "Downloads"
ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    catalog, roots = build_index(D, ROOT)
    source = json.loads((ROOT / "reskinner/original-urls.json").read_text(
        encoding="utf-8"))["games"]
    audits = json.loads((D / "_mirror_69_deep_audit_20261125.json").read_text(
        encoding="utf-8"))["games"]
    by_id = {g["id"]: g for g in catalog["games"]}
    quarantine = D / "_reskin_69_portal_quarantine_20261125"
    report = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "quarantined_files": 0, "quarantined_bytes": 0,
        "unverified_files": 0, "touched_games": [],
    }
    for row in source:
        root = roots.get(row["id"])
        if not root:
            continue
        manifest_path = root.parent / "_reskin_69_incremental.json"
        if not manifest_path.is_file():
            continue
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
        approved = trusted_hosts(row, by_id[row["id"]], audits)
        retained = []
        suspect = []
        moved = 0
        for entry in manifest.get("resources", []):
            host = (urlsplit(entry.get("url", "")).hostname or "").lower()
            if host in approved:
                retained.append(entry)
                continue
            relative = Path(entry.get("path", ""))
            candidate = (root / relative).resolve()
            if not candidate.is_relative_to(root.resolve()) or not candidate.is_file():
                report["unverified_files"] += 1
                suspect.append(entry)
                continue
            digest = hashlib.sha256(candidate.read_bytes()).hexdigest()
            if digest != entry.get("sha256"):
                report["unverified_files"] += 1
                suspect.append(entry)
                continue
            destination = quarantine / row["id"] / relative
            destination.parent.mkdir(parents=True, exist_ok=True)
            if destination.exists():
                # Preserve both copies if the quarantine is from an earlier run.
                report["unverified_files"] += 1
                suspect.append(entry)
                continue
            bytes_moved = candidate.stat().st_size
            shutil.move(str(candidate), str(destination))
            moved += 1
            report["quarantined_files"] += 1
            report["quarantined_bytes"] += bytes_moved
        if len(retained) != len(manifest.get("resources", [])):
            manifest["resources"] = retained + suspect
            manifest["out_of_scope_quarantined"] = moved
            manifest_path.write_text(json.dumps(manifest, indent=2,
                                     ensure_ascii=False), encoding="utf-8")
            report["touched_games"].append({
                "game": row["id"], "trusted_hosts": sorted(approved),
                "retained": len(retained), "unverified": len(suspect)
            })
    target = D / "_reskin_69_quarantine_report_20261125.json"
    target.write_text(json.dumps(report, indent=2, ensure_ascii=False),
                      encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False), flush=True)


if __name__ == "__main__":
    main()
