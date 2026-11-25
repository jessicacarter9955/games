#!/usr/bin/env python3
"""Recover exactly reported, public original game assets from their own CDN.

Manifest source: user's Reskinner diagnostics, 25 Nov 2026.
Never substitute by filename from another game. A failure stays a failure.
Original mirror files are never overwritten. This is not gameplay certification.
"""
from __future__ import annotations
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import quote
DL=Path.home()/'Downloads'
SPECS={
  "cardsdominoduel": {
    "root": "_chatgpt_new45_cdn_mirrors/cards/dominoduel/hosts/domino-duel-uit.game-files.crazygames.com/domino-duel-uit/239",
    "origin": "https://domino-duel-uit.game-files.crazygames.com/domino-duel-uit/239/",
    "paths": [
      "assets/opponent-avatars.config-BbOmVTFK.js",
      "assets/gem-9-P7gP-q.mp3",
      "assets/RewardAcceptModal-COdSUv6M.js",
      "assets/SchedulersModal-D2m5nxHd.js"
    ]
  },
  "iogamesevowarsio": {
    "root": "_chatgpt_new45_cdn_mirrors/io games/evowarsio/hosts/evowars.io",
    "origin": "https://evowars.io/",
    "paths": [
      "images/cutsceneghost-sheet0.png",
      "images/coophudicon-sheet1.png",
      "images/coophudeventbarfiller.png",
      "images/shards-sheet0.png",
      "images/coophudbosshpbar-sheet0.png",
      "images/coophudbosshpbarfiller.png",
      "images/coophudbosshpbaricon-sheet0.png",
      "images/mapghostground.png",
      "images/mapghostfog.png",
      "images/mapghostparticles.png",
      "images/mapghostbackground.png",
      "images/mapskeletonsbackground.png",
      "images/mapskeletonsground.png",
      "images/mapskeletonsparticles.png",
      "images/mapghostborder.png",
      "images/mapghostcorner-sheet0.png",
      "images/mapskeletonsfog.png",
      "images/mapskeletonscorner-sheet0.png",
      "images/mapskeletonsborder.png",
      "images/mapsplashscreen-sheet0.png",
      "images/minimapenemies-sheet0.png",
      "images/minimapbg-sheet0.png",
      "images/testsprite-sheet0.png",
      "images/testspritecircle-sheet0.png",
      "images/testspritecircle3-sheet0.png",
      "images/testspritecircle2-sheet0.png",
      "images/hiteffect-sheet0.png",
      "images/chestsbg-sheet0.png",
      "images/chestsbg-sheet1.png",
      "images/level_badge-sheet0.png",
      "images/flashsmall-sheet0.png",
      "images/linegradient-sheet0.png",
      "images/scoredecor-sheet0.png",
      "images/tournamentmodeswitch-sheet0.png",
      "images/tauntwings-sheet1.png",
      "images/tauntwings-sheet0.png",
      "images/healthbar_old-sheet0.png",
      "images/healthbarfg-sheet0.png",
      "images/powerupicon-sheet0.png",
      "images/duelrankbadge-sheet0.png",
      "images/btnsmall-sheet0.png",
      "images/duelrankbadge-sheet1.png",
      "images/duelrankbadge-sheet2.png",
      "images/duelquestindicator-sheet0.png",
      "images/logolink-sheet0.png",
      "images/duelquestindicator-sheet1.png",
      "images/debugplayerzoom.png",
      "images/minimapblue-sheet0.png",
      "images/minimapgreen-sheet0.png",
      "images/minimapking-sheet0.png",
      "images/minimapfireballblue-sheet0.png",
      "images/minimapred-sheet0.png",
      "images/minimapfireballred-sheet0.png",
      "images/minimapmyteambig-sheet0.png",
      "images/minimapparty-sheet0.png",
      "images/minimapenemyteam-sheet0.png",
      "images/minimapfriendbig-sheet0.png",
      "images/minimapboss-sheet0.png",
      "images/minimapboss-sheet1.png",
      "images/minimapboss-sheet2.png",
      "images/minimapevent-sheet0.png",
      "images/adblock-sheet0.png",
      "images/btnappstore-sheet0.png",
      "images/camera-sheet0.png",
      "images/huddocker-sheet0.png",
      "images/blacktiledbg.png",
      "images/multikill-sheet0.png",
      "images/adlabel-sheet0.png",
      "images/multikill-sheet1.png",
      "images/tooltipbutton-sheet0.png",
      "images/tooltipbutton-sheet1.png",
      "images/tutorialicon-sheet0.png",
      "images/leaderboardhighlighter-sheet0.png",
      "images/leaderboardbg-sheet0.png",
      "images/flags-sheet0.png",
      "images/pointer-sheet0.png",
      "images/settingscheckbox-sheet0.png",
      "images/volumedot-sheet0.png",
      "images/flagselectframe.png",
      "images/settingscheckbox-sheet1.png",
      "images/btnaccount-sheet0.png",
      "images/accountloggediinmark-sheet1.png",
      "images/accountloggediinmark-sheet0.png"
    ]
  },
  "iogamestileman": {
    "root": "_chatgpt_new45_cdn_mirrors/io games/tileman/hosts/eu1.tileman.io",
    "origin": "https://eu1.tileman.io/",
    "paths": [
      "discord.png",
      "re.png",
      "loading.gif"
    ]
  },
  "cardsfouruno": {
    "root": "_chatgpt_new45_cdn_mirrors/cards/four-uno/hosts/foony.com",
    "origin": "https://foony.com/",
    "paths": [
      "m/Ja.js"
    ]
  }
}
MAX_BYTES=40*1024*1024

def valid(name,data):
    if not data or len(data)>MAX_BYTES:raise ValueError('Invalid size')
    if data[:80].lstrip().lower().startswith((b'<!doctype',b'<html',b'ctype html')):
        raise ValueError('HTML instead of asset')
    ext=Path(name).suffix.lower()
    if ext=='.png' and not data.startswith(b'\x89PNG\r\n\x1a\n'):
        raise ValueError('Bad PNG')
    if ext=='.gif' and not data.startswith((b'GIF87a',b'GIF89a')):
        raise ValueError('Bad GIF')
    if ext=='.mp3' and not (data.startswith(b'ID3') or
        (len(data)>2 and data[0]==255 and data[1]&224==224)):
        raise ValueError('Bad MP3')
    if ext in {'.js','.css'} and not data.strip():
        raise ValueError('Empty text module')
    if ext not in {'.png','.gif','.mp3','.js','.css'}:
        raise ValueError('Unexpected type')

def fetch(gid,name,apply):
    spec=SPECS[gid]
    root=DL/spec['root']
    dest=(root/name).resolve()
    url=spec['origin']+quote(name,safe='/-_.')
    result={'game':gid,'name':name,'source':url}
    try:
        dest.relative_to(root.resolve())
        if dest.is_file() and dest.stat().st_size:
            result.update(status='already_present',bytes=dest.stat().st_size)
            return result
        if not apply:
            result['status']='missing_dry_run'
            return result
        request=Request(url,headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/142.0 Safari/537.36','Referer':'https://www.crazygames.com/'})
        with urlopen(request,timeout=32) as r:
            if r.status!=200:raise ValueError('Expected complete HTTP 200')
            size=int(r.headers.get('Content-Length') or 0)
            if size>MAX_BYTES:raise ValueError('Too large')
            data=r.read(MAX_BYTES+1)
        if size and size!=len(data):raise ValueError('Truncated transfer')
        valid(name,data)
        dest.parent.mkdir(parents=True,exist_ok=True)
        temp=dest.with_name(dest.name+'.2night-part')
        try:
            with temp.open('xb') as f:f.write(data)
            if not dest.exists():os.replace(temp,dest)
            result.update(status='recovered',bytes=len(data),
              sha256=hashlib.sha256(data).hexdigest())
        finally:
            if temp.exists():temp.unlink()
    except Exception as e:
        result.update(status='failed',error=repr(e)[:220])
    return result

def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('--game',choices=list(SPECS)+['all'],default='all')
    p.add_argument('--apply',action='store_true')
    p.add_argument('--workers',type=int,default=6)
    args=p.parse_args()
    games=list(SPECS) if args.game=='all' else [args.game]
    tasks=[(g,name) for g in games for name in SPECS[g]['paths']]
    results=[]
    with ThreadPoolExecutor(max_workers=min(10,max(1,args.workers))) as pool:
        futures=[pool.submit(fetch,g,n,args.apply) for g,n in tasks]
        for future in as_completed(futures):
            item=future.result()
            results.append(item)
            print('REPORTED_ASSET',json.dumps(item),flush=True)
    results.sort(key=lambda x:(x['game'],x['name']))
    report={
      'created':datetime.now(timezone.utc).isoformat(),
      'source':'Original CDN and exact filenames from user diagnostic',
      'apply':args.apply,'requested':len(tasks),
      'recovered':sum(x['status']=='recovered' for x in results),
      'alreadyPresent':sum(x['status']=='already_present' for x in results),
      'failed':sum(x['status']=='failed' for x in results),
      'items':results,
      'note':'A 200 response or recovered asset does not establish gameplay.'
    }
    out=DL/'_2night_reskin_qa'/'recovery-reports'
    out.mkdir(parents=True,exist_ok=True)
    (out/'reported-new6-2026-11-25.json').write_text(
      json.dumps(report,indent=2),encoding='utf-8')
    print('REPORTED_SUMMARY',json.dumps({k:v for k,v in report.items() if k!='items'}),flush=True)

if __name__=='__main__':main()
