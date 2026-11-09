# COLORBREAK — Photopea sprite source

Foxen and Sulfur were redrawn in the browser version of Photopea using manually authored drawing geometry, native selection fills, outline strokes and named editable layers. The replacement sprites do not use an image-generation model.

Each character includes:

- A transparent PNG sheet, 1536 × 1024 pixels.
- An editable layered PSD exported by Photopea.
- Sparrow XML and Psych Engine character JSON.
- The drawing script entered into Photopea's File → Script window.

The sheet contains three columns and two rows of 512 × 512 frames. Order: idle, left, down, up, right, victory. Named layers keep the clothing, arms, face, hair, legs and microphone editable per pose. The script-assisted drawings use outlined block shapes and shaded faces; these are raster game sprites, not 3D mesh files.

Open either PSD in Photopea to edit it. The JSX files can also be pasted into File → Script and run to create a fresh drawing document. The Foxen and Sulfur scripts create separate documents.

The installed game uses native scale 1 and per-pose offsets. Every pose's lowest foot pixel meets the same Y=610 floor. The supplied park screenshot remains the background; GF and her speakers remain hidden.

Screenshots named Foxen-in-Photopea and Sulfur-in-Photopea show the real browser editing workspace. The PSDs, PNGs and drawing scripts are saved here independently of the open browser session.
