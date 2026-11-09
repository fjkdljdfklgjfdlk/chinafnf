# CHINA + COLORBREAK

[Play in your browser](https://fjkdljdfklgjfdlk.github.io/chinafnf/)

A browser build of real Psych Engine 1.0.4, with two songs in Freeplay:

- **CHINA** — SharpRust vs Wis, with separate metal/knife and Chinese meme vocal tracks.
- **COLORBREAK** — Foxen vs Sulfur, an original three-minute, 180 BPM Hard battle with 654 player notes. The replacement sprites were drawn in Photopea using editable layers and its scripting tools. The battle uses the supplied Roblox park background, with GF hidden and grounded character poses.

The outside menu has plain white **play** and **settings** buttons. Settings opens Psych Engine’s normal options.

## Play

Click play, select a song in Freeplay and press Enter. Notes use A/S/W/D or the arrow keys; Escape/Enter pauses. If an existing browser tab still shows the previous artwork after an update, perform a hard refresh.

For local play, serve this directory over HTTP:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Then open http://127.0.0.1:8080/. This repository stores the compiled website at its root. Existing GitHub Pages settings serve the main branch from the root.

## Edit the sprites

The [Photopea source folder](art-source/photopea/) contains layered PSDs, transparent PNGs, Sparrow XML, character JSON, drawing scripts and workflow notes. Open the PSDs in Photopea to edit them.

Preserve LICENSE.txt, CREDITS.txt, GeneralUser-LICENSE.txt and THIRD_PARTY_NOTICES.txt. See VERIFICATION.md for build and asset validation.
