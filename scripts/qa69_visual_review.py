#!/usr/bin/env python3
"""Private screenshot contact sheets for visual review of gameplay states.

Keep all screenshots in the local Windows Downloads directory; no game
screenshots or original assets are committed to the public repository.
"""
from __future__ import annotations
import argparse
import base64
import io
import json
from pathlib import Path
from PIL import Image, ImageDraw

ROOT=Path.home()/"Downloads"/"_reskin_69_gameplay_qa_20261125"
FRAMES=[("00-boot.jpg","AVVIO"),("01-after-play.jpg","DOPO PLAY"),
        ("02-after-input.jpg","DOPO INPUT")]

def make_sheet(game_id: str) -> bytes:
    folder=ROOT/game_id
    result=json.loads((folder/"result.json").read_text(encoding="utf-8"))
    width=900
    frame_w=300
    frame_h=195
    top=58
    sheet=Image.new("RGB",(width,top+frame_h),(240,240,240))
    draw=ImageDraw.Draw(sheet)
    draw.text((12,9),game_id+"  |  "+result.get("status","?"),
              fill=(20,20,20))
    draw.text((12,31),"Gameplay certificato: "+
              str(result.get("gameplayVerified",False)),fill=(30,30,30))
    for col,(filename,caption) in enumerate(FRAMES):
        draw.text((col*frame_w+8,top-16),caption,fill=(40,40,40))
        path=folder/filename
        if not path.exists():
            draw.text((col*frame_w+10,top+65),"IMMAGINE NON DISPONIBILE",
                      fill=(140,0,0))
            continue
        with Image.open(path) as image:
            image=image.convert("RGB")
            image.thumbnail((frame_w,frame_h))
            x=col*frame_w+(frame_w-image.width)//2
            y=top+(frame_h-image.height)//2
            sheet.paste(image,(x,y))
    buffer=io.BytesIO()
    sheet.save(buffer,format="JPEG",quality=43,optimize=True)
    return buffer.getvalue()

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument("--game",action="append",required=True)
    parser.add_argument("--emit-base64",action="store_true")
    args=parser.parse_args()
    for gid in args.game:
        try:
            blob=make_sheet(gid)
            path=ROOT/gid/"visual-review-sheet.jpg"
            path.write_bytes(blob)
            print("SHEET",gid,len(blob),path,flush=True)
            if args.emit_base64:
                print("IMAGE_B64_"+gid+"="+base64.b64encode(blob).decode(),
                      flush=True)
        except Exception as exc:
            print("SHEET_ERROR",gid,type(exc).__name__,str(exc),flush=True)

if __name__=="__main__":main()
