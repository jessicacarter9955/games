#!/usr/bin/env python3
"""Offline safety tests for original Unity WebGL build recovery."""
from __future__ import annotations

import io
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parent))
import recover_unity_webgl_assets as recovery


class FakeResponse(io.BytesIO):
    status = 200

    def __init__(self, data: bytes, content_type: str = "application/wasm"):
        super().__init__(data)
        self.headers = {
            "Content-Length": str(len(data)),
            "Content-Type": content_type,
        }


class UnityRecoveryTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        self.spec = recovery.MISSING["homedesigndecorate"]
        self.name = "Build/test.wasm.br"
        self.dest = (self.root / self.spec["host"] /
                     self.spec["folder"] / self.name)

    def test_default_is_dry_run_and_does_not_create_directories(self):
        result = recovery.recover(self.root, self.spec, self.name, False, 100000)
        self.assertEqual(result["status"], "missing_dry_run")
        self.assertFalse(self.dest.exists())
        self.assertFalse(self.dest.parent.exists())

    def test_existing_original_is_never_overwritten(self):
        self.dest.parent.mkdir(parents=True)
        self.dest.write_bytes(b"original")
        with patch.object(recovery, "urlopen", side_effect=AssertionError):
            result = recovery.recover(
                self.root, self.spec, self.name, True, 100000)
        self.assertEqual(result["status"], "already_present")
        self.assertEqual(self.dest.read_bytes(), b"original")

    def test_successful_binary_is_written_exactly(self):
        binary = b"\x00asm" + b"\x00" * 2048
        with patch.object(recovery, "urlopen",
                          return_value=FakeResponse(binary)):
            result = recovery.recover(
                self.root, self.spec, self.name, True, 100000)
        self.assertEqual(result["status"], "recovered")
        self.assertEqual(self.dest.read_bytes(), binary)

    def test_html_response_is_rejected(self):
        wrong = b"<html>" + b"x" * 2048
        with patch.object(recovery, "urlopen",
                          return_value=FakeResponse(wrong, "text/html")):
            result = recovery.recover(
                self.root, self.spec, self.name, True, 100000)
        self.assertEqual(result["status"], "failed")
        self.assertFalse(self.dest.exists())

    def test_traversal_is_rejected(self):
        with self.assertRaises(ValueError):
            recovery.recover(
                self.root, self.spec, "Build/../../test.wasm.br",
                True, 100000)


if __name__ == "__main__":
    unittest.main()
