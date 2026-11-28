#!/usr/bin/env python3
"""Create a reviewable contact sheet from the real hybrid gameplay screenshots."""
from __future__ import annotations

import argparse
import base64
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps


def make_sheet(directory: Path, cell_w: int=360, cell_h: int=198) -> Path:
    summary=json.loads((directory/"summary.json").read_text(encoding="utf-8"))
    games=summary["results"]
    stages=[("before","Before"),("after_input_1","After Play"),("after_input_3","Input 3")]
    gutter=8
    heading=30
    row_h=cell_h+heading+10
    width=len(stages)*cell_w+(len(stages)+1)*gutter
    height=len(games)*row_h+(len(games)+1)*gutter
    image=Image.new("RGB",(width,height),(22,24,29))
    draw=ImageDraw.Draw(image)
    font=ImageFont.load_default()
    for row, item in enumerate(games):
        gid=item["id"]
        report=directory/gid/"result.json"
        data=json.loads(report.read_text(encoding="utf-8")) if report.is_file() else {}
        states=data.get("images") or []
        for col,(stage,label) in enumerate(stages):
            x=gutter+col*(cell_w+gutter)
            y=gutter+row*(row_h+gutter)
            box=(x,y+heading,x+cell_w,y+heading+cell_h)
            draw.rectangle((x,y,x+cell_w,y+heading),fill=(36,40,46))
            draw.text((x+7,y+5),f"{gid} - {label}",fill=(236,237,240),font=font)
            candidate=directory/gid/(stage+".jpg")
            if not candidate.is_file():
                draw.rectangle(box,fill=(68,37,42))
                draw.text((x+8,y+heading+15),"Screenshot missing",font=font)
                continue
            with Image.open(candidate) as source:
                source=source.convert("RGB")
                idx={"before":0,"after_input_1":1,"after_input_3":3}[stage]
                state=states[idx] if idx<len(states) else {}
                frame=state.get("frame") or {}
                if frame and frame.get("width",0)>50 and frame.get("height",0)>50:
                    left=max(0,int(frame.get("x",0)))
                    top=max(0,int(frame.get("y",0)))
                    right=min(source.width,left+int(frame["width"]))
                    bottom=min(source.height,top+int(frame["height"]))
                    if right>left and bottom>top:
                        source=source.crop((left,top,right,bottom))
                thumbnail=ImageOps.contain(source,(cell_w,cell_h))
                px=x+(cell_w-thumbnail.width)//2
                py=y+heading+(cell_h-thumbnail.height)//2
                image.paste(thumbnail,(px,py))
    out=directory/"contact_sheet.jpg"
    image.save(out,format="JPEG",quality=62,optimize=True)
    encoded=base64.b64encode(out.read_bytes()).decode("ascii")
    (directory/"contact_sheet.b64").write_text(encoded,encoding="ascii")
    print(json.dumps({"sheet":str(out),"size":out.stat().st_size,
                      "base64Length":len(encoded),"games":len(games)}),flush=True)
    return out


if __name__=="__main__":
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("directory",type=Path)
    args=parser.parse_args()
    make_sheet(args.directory)
