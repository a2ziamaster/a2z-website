#!/usr/bin/env bash
# Génération des stills Kie (seedream). Préambules réutilisés tels quels.
cd "$(dirname "$0")"
K=/c/Users/A2Z/.claude/skills/scroll-craft/scripts/kie.mjs
PHOTO="Editorial architectural photography in Lausanne, Switzerland. Medium format camera, 50mm lens, natural light just before sunrise, cool blue-hour shadows with soft lavender and rose highlights, deep charcoal blacks, fine film grain, restrained colour grade, quiet, precise and calm. No people, no faces, no text, no lettering, no logos, no signage, no watermark."
ABSTRACT="Abstract studio render of thin curved sheets of holographic glass, iridescent gradient from pale lavender blue (#A8C8F0) through violet (#C4A0DC) to soft pink (#E8A0C0), floating on a deep near-black background (#121212), soft caustic light, clean glass edges, minimal and precise, generous empty space. No text, no letters, no logos, no watermark."

node $K still "$PHOTO

A classic early-20th-century Lausanne residential apartment building facade seen from across a quiet street, light stone and pale render, tall windows with wooden shutters, wrought-iron balconies, two or three windows warmly lit from inside, the rest dark. Camera slightly below, facade fills the frame vertically, a band of soft dawn sky at the top. Calm, orderly, dignified." out/01-facade.png --ar 3:4 &

node $K still "Product photograph of a row of six identical brushed-brass Swiss apartment letterboxes mounted on a dark grey stone wall panel, seen straight on, slightly from below, warm soft side light from the left. The entire wall panel with the letterboxes is isolated in front of a perfectly flat pure chroma green background (#00FF00), sharp clean silhouette, green fills everything around it, no shadows on the green. No text, no names, no numbers, no lettering, no logos." out/01-letterboxes-green.png --ar 16:9 &

node $K still "$ABSTRACT

Three or four large overlapping curved glass ribbons sweeping diagonally from lower left to upper right, occupying the right two thirds of the frame, the left third almost empty and dark." out/03-holo.png --ar 16:9 &

node $K still "$PHOTO

Interior of a modest Lausanne apartment kitchen at dawn, close view under an open sink cabinet: a white ceramic sink above, chrome pipes and a siphon below, a thin stream of water leaking from a pipe joint, a small puddle spreading on the light wooden cabinet floor. Cool window light from the left, the scene clear and readable, subject centered with calm space around it." out/02-leak.png --ar 16:9 &

node $K still "$PHOTO

Interior of a property management office in Lausanne at early morning, a clean wooden desk near a tall window, an open laptop seen from behind at an angle so its screen is not visible, a neat paper folder, a ceramic coffee cup, a desk lamp switched on. Empty chair, nobody present. Calm order, quiet competence, soft window light." out/05-desk.png --ar 3:4 &

node $K still "$ABSTRACT

A single tall vertical column of stacked translucent glass panes, slightly offset from each other like the pages of a file, glowing faintly from within, centered, lots of dark space around it." out/06-holo-stack.png --ar 3:4 &
wait
ls -la out
