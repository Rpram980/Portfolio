# Portrait

Save your photo here as **`ram-prakash.jpg`** (or `.png` / `.webp` — update the
extension in `components/sections/Hero.js` if you change it).

Recommended:
- Aspect ratio close to **4:5** (portrait).
- A face-forward upper-body crop. The hero card focuses on the upper part of
  the image (`object-position: center 18%`), so leave a little headroom.
- Export at ~**1200 × 1500 px** for crispness without bloating the bundle.
- JPEG/WebP keep file size small; aim for under ~250 KB.

If the file isn't present, the hero gracefully falls back to a gradient `RPS`
avatar.
