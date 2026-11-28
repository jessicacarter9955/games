# Global Asset Manager — initial implementation

Open the **Asset Manager** button in the Reskinner header. The local mirror
server provides a read-only file inventory for every game in its active
catalog; static hosting falls back to the existing partial catalog.

Run from the checkout root:
```
py scripts/serve_local_mirrors.py --port 8003
py scripts/test_asset_library.py
```

The library does not change original assets or the game preview. Filter by
game, game category, asset kind, functional category, extension, review
state and exact duplicates. Review suggestions manually; confidence is a
filename/path heuristic, not calibrated AI. Bulk actions apply to explicitly
selected entries, including selections across pages. Exact duplicate
detection is opt-in, compares SHA-256 for equal-size files, and never
deletes anything. All paths and game provenance remain visible.

Reviews are keyed by game ID and path, stored in browser localStorage
on the current origin (including port), and remain separate from generated
suggestions. Export JSON for backup; import merges missing records without
overwriting existing ones. A different browser or port requires import.
Licenses are unknown unless recorded in the source metadata.

The static GitHub catalog currently has 69 titles; the Windows catalog can
contain more. The library reports actual coverage, not a hard-coded total.
Embedded Unity textures and sprite frames require engine-specific extraction
and are not claimed to be separate indexed assets. No GitHub persistence
of user reviews or browser end-to-end certification yet.
