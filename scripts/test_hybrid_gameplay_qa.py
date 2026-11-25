#!/usr/bin/env python3
"""Offline regression tests for the hybrid CDP + OpenCV gameplay QA runner."""
from __future__ import annotations

import tempfile
import unittest
from pathlib import Path
from PIL import Image, ImageDraw

from hybrid_gameplay_qa import (
    LocalWebSocket,
    find_action,
    image_metrics,
    native_click_if_safe,
)


class HybridGameplayTests(unittest.TestCase):
    def test_play_bots_uses_real_button_coordinates(self):
        state = {
            "buttons": [{"text": "Play Bots", "x": 100, "y": 200,
                         "width": 120, "height": 40}],
            "frame": {"x": 80, "y": 100, "width": 640, "height": 420},
        }
        action = find_action(state, "cardsfouruno", 0)
        self.assertEqual(action["kind"], "click")
        self.assertEqual(action["target"], "Play Bots")
        self.assertEqual((action["x"], action["y"]), (160, 220))

    def test_tileman_play_button(self):
        state = {
            "buttons": [{"text": "Play!", "x": 10, "y": 10,
                         "width": 60, "height": 40}],
        }
        self.assertEqual(find_action(state, "iogamestileman", 0)["target"], "Play!")

    def test_canvas_input_is_marked_as_probe_not_success(self):
        state = {"buttons": [], "frame":
                 {"x": 40, "y": 50, "width": 600, "height": 400}}
        action = find_action(state, "carout", 1)
        self.assertEqual(action["target"], "viewport probe")
        self.assertNotIn("gameplayVerified", action)

    def test_native_mode_requires_explicit_opt_in(self):
        self.assertFalse(native_click_if_safe(10, 10, enabled=False))

    def test_reject_remote_cdp_transport(self):
        with self.assertRaises(ValueError):
            LocalWebSocket("wss://example.com/devtools/page/1")

    def test_only_game_viewport_counts_as_visual_change(self):
        with tempfile.TemporaryDirectory() as directory:
            first = Path(directory) / "first.jpg"
            second = Path(directory) / "second.jpg"
            third = Path(directory) / "third.jpg"
            base = Image.new("RGB", (400, 250), (25, 27, 30))
            scene = (130, 50, 350, 220)
            before = base.copy()
            ImageDraw.Draw(before).rectangle(scene, fill=(55, 95, 155))
            before.save(first, quality=98)
            outside_changed = before.copy()
            ImageDraw.Draw(outside_changed).rectangle(
                (0, 0, 100, 230), fill=(250, 0, 0))
            outside_changed.save(second, quality=98)
            inside_changed = before.copy()
            ImageDraw.Draw(inside_changed).rectangle(
                (170, 70, 290, 180), fill=(0, 220, 40))
            inside_changed.save(third, quality=98)
            viewport = {"x": scene[0], "y": scene[1],
                        "width": scene[2]-scene[0],
                        "height": scene[3]-scene[1]}
            outside = image_metrics(first, second, viewport)
            inside = image_metrics(first, third, viewport)
            self.assertIn(outside["engine"], ("opencv", "pillow-fallback"))
            self.assertLess(outside["mean_delta"], 2.0)
            self.assertGreater(inside["mean_delta"], 10.0)


if __name__ == "__main__":
    unittest.main()
