# CHINA — Psych Engine HTML5

SharpRust vs Wis, running in a browser from **the real Psych Engine 1.0.4 source** (HaxeFlixel / OpenFL / Lime). The Haxe compiler produces `docs/PsychEngine.js`.

This package is local and unpublished. It contains the already compiled browser game and the engine source needed to rebuild it. No GitHub repository, release, or public deployment was created.

## Play locally on a Mac

1. Extract this whole folder.
2. Double-click **Play locally.command**. It starts a loopback-only HTTP server using Python 3 and opens your browser.
3. Use the plain white **settings** button beside **play** for Psych Engine’s real settings. Click **play** to enable audio, select Easy / Normal / Hard with the left/right arrows, then press Enter.

Alternatively, run `python3 tools/serve-local.py` from this folder. The script prints the local URL. Use the printed URL; opening `docs/index.html` directly with a `file://` URL may block resource loading.

Controls: A/S/W/D or Left/Down/Up/Right for notes; Enter/Esc for pause; Escape to go back in menus. The game includes Psych Engine's normal Freeplay, scoring, sustains, health bar, pause/restart, game over, and options. You play Wis on the right; SharpRust is on the left.

Both supplied character images are used without redrawing. The battle is on the normal Week 1 stage. SharpRust has a separate knife/rust audio track. Wis has Bing Chilling and chops from all four additional supplied MP3 clips.

## Put the files on GitHub when you choose

For a normal repository with source, upload the **contents of this folder**. Keep `engine/`, `docs/`, `tools/`, `LICENSE`, and credits together. Do not upload `engine/export/` or a local `.haxelib/` directory; `.gitignore` already excludes them.

For a repository containing only the ready-to-play website, upload the **contents of `docs/`** at the repository root. This requires no Haxe installation or compilation.

Uploading files and enabling GitHub Pages are separate actions. If you later want a live GitHub Pages site, select the `docs` folder on your chosen branch in the repository's Pages settings, or select the root for a website-only repository. **Nothing in this package automatically deploys or publishes.**

All website resource URLs are relative, so the build works beneath a repository path such as `https://YOUR_NAME.github.io/YOUR_REPOSITORY/`.

## Rebuild from the engine source

Install Haxe **4.3.7**, Neko **2.4.1**, and Haxelib using the official Haxe toolchain. Then, from this repository folder:

```sh
bash tools/setup-libraries.sh
bash tools/build-web.sh
```

The setup script uses a project-local Haxelib repository. The build command compiles `engine/Project.xml` with Lime's `html5` target, then packages the output into `docs/`. Source modifications and dependency versions are listed in `MODIFICATIONS.md`.

The port bundles this song as built-in game assets. Desktop Lua/HScript and filesystem-based editors are not enabled in the browser; CHINA's picture movements are implemented in the engine's Haxe Week 1 stage class. Desktop editor source remains included for reference.

## Source and credits

- Upstream: https://github.com/ShadowMario/FNF-PsychEngine/tree/1.0.4
- Exact source commit and license: `UPSTREAM.txt` and `LICENSE`.
- Character, music and sample sources: `CREDITS.txt`.

The Apache-2.0 engine license does not change the rights in the supplied character pictures or meme audio. Preserve the included credits.
