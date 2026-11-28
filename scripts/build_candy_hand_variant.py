#!/usr/bin/env python3
"""Create a separate Candy Clicker UnityWebData variant, never edit original.
Requires UnityPy and Pillow. Target is sharedassets0.assets Texture2D 24,
Sprite 87 (untitled (30)). Only this texture is re-encoded.
"""
import argparse
import hashlib
import io
import json
import struct
import tempfile
from pathlib import Path
import UnityPy
from PIL import Image, ImageOps

MAGIC = b"UnityWebData1.0\0"
def entries(raw):
    if raw[:16] != MAGIC:
        raise ValueError("Unsupported UnityWebData header")
    end = struct.unpack_from("<I", raw, 16)[0]
    pos = 20
    result = []
    while pos < end:
        offset, length, n = struct.unpack_from("<III", raw, pos)
        pos += 12
        name = raw[pos:pos+n].decode("utf8")
        pos += n
        if pos > end or offset < end or offset+length > len(raw):
            raise ValueError("Invalid archive table")
        result.append((name, raw[offset:offset+length]))
    if pos != end:
        raise ValueError("Invalid archive header length")
    return result

def pack(items):
    table_end = 20 + sum(12+len(name.encode("utf8")) for name,_ in items)
    header = bytearray(MAGIC+struct.pack("<I", table_end))
    offset = table_end
    for name,data in items:
        key = name.encode("utf8")
        header.extend(struct.pack("<III",offset,len(data),len(key)))
        header.extend(key)
        offset += len(data)
    return bytes(header)+b"".join(data for _,data in items)

def sha(data):
    return hashlib.sha256(data).hexdigest()

def build(source, asset, destination):
    if source.resolve() == destination.resolve():
        raise ValueError("Destination must be different from original")
    raw = source.read_bytes()
    items = entries(raw)
    with tempfile.TemporaryDirectory(prefix="2night-candy-") as tmp:
        root=Path(tmp).resolve()
        for name,data in items:
            path=(root/name).resolve()
            if not path.is_relative_to(root):
                raise ValueError("Unsafe archive path")
            path.parent.mkdir(parents=True,exist_ok=True)
            path.write_bytes(data)
        env=UnityPy.load(str(root))
        target=next(o for o in env.objects if o.type.name=="Texture2D" and o.path_id==24 and o.assets_file.name=="sharedassets0.assets")
        texture=target.read()
        if texture.m_Name!="untitled (30)" or (texture.m_Width,texture.m_Height)!=(640,640):
            raise ValueError("Unexpected target; refusing patch")
        sprite=next(o for o in env.objects if o.type.name=="Sprite" and o.path_id==87 and o.assets_file.name=="sharedassets0.assets").read()
        if sprite.m_RD.texture.m_PathID!=24:
            raise ValueError("Sprite/texture mismatch")
        orig=texture.image.convert("RGBA")
        bbox=orig.getchannel("A").getbbox()
        if not bbox:
            raise ValueError("Original sprite is empty")
        image=Image.open(asset).convert("RGBA")
        image=image.crop(image.getchannel("A").getbbox())
        # Original hand points upper-right; retain its orientation.
        image=ImageOps.mirror(image)
        # Same texture and sprite geometry; contain without deforming the artwork.
        image=ImageOps.contain(image,(bbox[2]-bbox[0],bbox[3]-bbox[1]),Image.Resampling.LANCZOS)
        x=bbox[0]+((bbox[2]-bbox[0])-image.width)//2
        y=bbox[1]+((bbox[3]-bbox[1])-image.height)//2
        replacement=Image.new("RGBA",orig.size)
        replacement.paste(image,(x,y))
        before_format=texture.m_TextureFormat
        texture.set_image(replacement,target_format=before_format,mipmap_count=texture.m_MipCount or 1)
        texture.save()
        bundle=target.assets_file.parent.save(packer="lz4")
        check=UnityPy.load(bundle)
        check_tex=next(o.read() for o in check.objects if o.type.name=="Texture2D" and o.path_id==24)
        assert (check_tex.m_Width,check_tex.m_Height)==orig.size
        assert check_tex.image.convert("RGBA").tobytes()!=orig.tobytes()
        output=pack([(name,bundle if name=="data.unity3d" else data) for name,data in items])
        original_entries=dict(items)
        new_entries=dict(entries(output))
        assert all(new_entries[k]==v for k,v in original_entries.items() if k!="data.unity3d")
        destination.parent.mkdir(parents=True,exist_ok=True)
        temp=destination.with_suffix(".tmp")
        temp.write_bytes(output)
        temp.replace(destination)
        assert sha(source.read_bytes())==sha(raw)
        result={"game":"idlecandyclicker2","variant":"candy-test","style":"3d glassmorphism","role":"Auto click icon","texture":"untitled (30)","texturePathId":24,"spritePathId":87,"textureSize":[640,640],"originalAlphaBounds":list(bbox),"replacementBounds":[x,y,x+image.width,y+image.height],"originalSHA256":sha(raw),"variantSHA256":sha(output),"originalBytes":len(raw),"variantBytes":len(output),"sourceAssetSHA256":sha(asset.read_bytes()),"originalUnchanged":True}
        destination.with_suffix(".json").write_text(json.dumps(result,indent=2),encoding="utf8")
        print(json.dumps(result))

if __name__=="__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("source",type=Path)
    parser.add_argument("asset",type=Path)
    parser.add_argument("destination",type=Path)
    a=parser.parse_args()
    build(a.source,a.asset,a.destination)
