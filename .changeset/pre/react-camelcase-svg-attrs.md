---
'@devicons-pack/react': patch
---

Pass root SVG attributes as React props (`xmlnsXlink`, `xmlSpace`, `fillRule`) so icons like Go no longer trigger "Invalid DOM property" warnings.
