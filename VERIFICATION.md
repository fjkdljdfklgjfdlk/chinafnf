# COLORBREAK verification

Park background update verified locally in Chrome on 9 November 2026.

- Compiled the real Psych Engine 1.0.4 Haxe source to HTML5 with the new ColorbreakPark stage.
- Loaded COLORBREAK on Hard. Observed the exact supplied Roblox park image, both avatars and their contact shadows, with GF and her speakers absent.
- Checked standing and directional singing poses in the running game. All pose offsets are also checked mathematically against the atlas silhouette baselines: both characters' lowest foot reaches Y=610 at scale 1. No vertical position tween, scale bounce or character rotation remains.
- Checked background SHA-256 in browser source assets and the installed desktop mod: both match the supplied PNG byte-for-byte. The PNG remains 2555x1434 and is fitted to the 1280x720 game viewport at runtime.
- Fixed the game camera at 640,360 with zoom 1; removed COLORBREAK's chart zoom events. The background, characters and ground shadows share scroll factor 1.
- Verified the stage JSON hides GF, and the stage also hides the GF group defensively. GF assets remain available for later restoration and for CHINA.
- Browser preview runs at approximately 60 FPS with no console errors. All 561 declared manifest assets exist.
- The music and chart note heads are unchanged from the previous successful full 180-second Botplay test and automatic return to Freeplay. Revalidated all 1,297 note heads against exact vocal timing and absolute psych_v1 ownership: 654 Sulfur/player notes, 643 Foxen/opponent notes, peak player density 12 notes per second.
- No duplicate heads or same-lane sustain collisions. All desktop OGG and browser MP3 stems decode to exactly 180 seconds, 44.1 kHz stereo. Voice stem correlation approximately 0.021; decoded OGG mix peak approximately 0.901.
- Updated the existing Mac COLORBREAK mod with the new stage, picture, character offsets and replacement motion script. All other mod folders and entries are preserved. Native desktop gameplay was not separately run; visual gameplay verification used the compiled browser engine.

The browser menu retains the plain white play/settings buttons and real Psych options. CHINA remains available as a second song. Download archives are rebuilt and checked for ZIP integrity. No repository upload, release or public hosting change was performed.


Photopea replacement verification:
- Both replacement sprite sheets were drawn in Photopea in Chrome, using manually authored geometry, selection fills, outline strokes and named native layers. No image-generation model was used for these replacement sprites.
- Saved native Photopea PSDs (with editable layers), PNG exports, drawing scripts and workspace screenshots. Each PNG is 1536x1024 with six full-body 512x512 pose cells and genuine alpha transparency.
- Recalculated all animation offsets at native scale 1; Foxen idle Y=151 and Sulfur idle Y=149, with every pose meeting floor Y=610. Health icons also use the new drawings.
- Recompiled the HTML5 engine, verified all 561 manifest assets, and opened a fresh localhost origin to avoid previously cached character images. Visually confirmed both new drawings on the supplied park background with GF hidden and no browser errors. The screenshot COLORBREAK-Photopea-gameplay.png records the running build.
- Revalidated the unchanged audio and all 1,297 chart heads. Source, desktop mod and served browser PNGs match the Photopea exports byte-for-byte. Updated the installed Mac mod as well.
