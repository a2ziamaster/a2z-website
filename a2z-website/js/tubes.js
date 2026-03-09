/**
 * Neon Tubes Background Effect
 * Powered by threejs-components (CDN) — threejs-components@0.0.19
 * Integrated into: Hero section (index.html only)
 *
 * Behaviour:
 *  - 3D neon tubes follow the mouse cursor
 *  - Click anywhere in the hero (except buttons) to cycle brand colour palettes
 */

// ── Brand colour palettes ──────────────────────────────────────────────────
const TUBE_PALETTES = [
  ["#A8C8F0", "#C4A0DC", "#E8A0C0"],   // blue → violet → pink
  ["#E8A0C0", "#BB82CC", "#A8C8F0"],   // pink → glow → blue
  ["#C4A0DC", "#A8C8F0", "#BB82CC"],   // violet → blue → glow
];

const LIGHT_PALETTES = [
  ["#A8C8F0", "#E8A0C0", "#BB82CC", "#C4A0DC"],
  ["#E8A0C0", "#C4A0DC", "#A8C8F0", "#BB82CC"],
  ["#BB82CC", "#A8C8F0", "#C4A0DC", "#E8A0C0"],
];

let paletteIndex = 0;
let tubesApp     = null;

// ── Init ───────────────────────────────────────────────────────────────────
async function initTubesEffect() {
  const canvas = document.getElementById('tubesCanvas');
  if (!canvas) return;

  try {
    const mod = await import(
      'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js'
    );

    // Handles both ES-module default and UMD exports
    const TubesCursor = mod.default ?? mod;

    tubesApp = TubesCursor(canvas, {
      tubes: {
        colors: TUBE_PALETTES[0],
        lights: {
          intensity: 200,
          colors: LIGHT_PALETTES[0],
        },
      },
    });

    // ── Click anywhere in the hero (except buttons) → next palette ─────────
    const hero = document.getElementById('hero');
    if (hero) {
      hero.addEventListener('click', (e) => {
        if (e.target.closest('.btn')) return; // let button clicks pass through
        paletteIndex = (paletteIndex + 1) % TUBE_PALETTES.length;
        tubesApp?.tubes?.setColors(TUBE_PALETTES[paletteIndex]);
        tubesApp?.tubes?.setLightsColors(LIGHT_PALETTES[paletteIndex]);
      });
    }

  } catch (err) {
    // Effect is purely decorative — fail silently
    console.warn('[NeonFlow] Effect unavailable:', err);
  }
}

initTubesEffect();
