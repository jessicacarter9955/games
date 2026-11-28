#!/usr/bin/env python3
"""Network-free regression test of the capture worker queue.

No real browser, CDN, or game is opened.
"""
import asyncio
import json
import sys
import tempfile
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import recapture_69_gameplay as recapture


class CaptureConcurrencyTests(unittest.IsolatedAsyncioTestCase):
    async def run_case(self, workers):
        with tempfile.TemporaryDirectory() as folder:
            d = Path(folder)
            rows = [{"id": f"g{i}", "slug": f"g{i}",
                     "url": f"https://example.com/{i}"} for i in range(69)]
            roots = {row["id"]: d / row["id"] / "hosts" for row in rows}
            sources = d / "sources.json"
            sources.write_text(json.dumps({"games": rows}))
            (d / "_mirror_69_deep_audit_20261125.json").write_text(
                '{"games":[]}')
            report = d / "summary.json"
            browser = SimpleNamespace(close=AsyncMock())
            launcher = SimpleNamespace(chromium=SimpleNamespace(
                launch=AsyncMock(return_value=browser)))
            context = AsyncMock()
            context.__aenter__.return_value = launcher
            active = peak = 0
            started = []

            async def fake_capture(row, root, browser, seconds, click_play,
                                   max_file_mb, allowed, slots, hosts):
                nonlocal active, peak
                active += 1
                peak = max(peak, active)
                started.append(row["id"])
                try:
                    await asyncio.sleep(0.01)
                    if row["id"] == "g1":
                        raise ValueError("synthetic failure")
                    return {"id": row["id"], "stats": {"new": 1}}
                finally:
                    active -= 1

            argv = ["recapture", "--downloads", folder, "--workers",
                    str(workers), "--report", str(report)]
            for i in range(5):
                argv.extend(["--game", f"g{i}"])
            with patch.object(sys, "argv", argv), \
                 patch.object(recapture, "SOURCES", sources), \
                 patch.object(recapture, "build_index",
                              return_value=({"total": 69, "games": rows},
                                            roots)), \
                 patch.object(recapture, "trusted_hosts",
                              return_value={"example.com"}), \
                 patch.object(recapture, "async_playwright",
                              return_value=context), \
                 patch.object(recapture, "capture", side_effect=fake_capture):
                await recapture.main()
            result = json.loads(report.read_text())
            self.assertEqual(peak, workers)
            self.assertEqual(len(set(started)), 5)
            self.assertEqual(len(started), 5)
            self.assertEqual(result["games_attempted"], 5)
            self.assertEqual(result["new_files"], 4)
            self.assertEqual(result["errors"], ["g1"])
            self.assertTrue(result["complete"])
            browser.close.assert_awaited_once()

    async def test_sequential(self):
        await self.run_case(1)

    async def test_two_contexts_and_failure_isolation(self):
        await self.run_case(2)


if __name__ == "__main__":
    unittest.main()
