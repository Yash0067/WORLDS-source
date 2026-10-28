# WORLDS — an interactive 3D encyclopedia

A NASA Eyes-inspired first-stage solar-system viewer with the Sun, all eight planets, the Moon, ten additional moons, and Pluto (a dwarf planet), not the complete universal catalog. Planet globes use real-data-derived Solar System Scope maps except Pluto and ten additional moons, which use a shared illustrative procedural texture labeled artist’s concept. Lighting, cloud rendering, and atmospheric glow are illustrative. Facts are approximate. Earth cloud layer is a static texture, not live weather. The starfield is decorative.

## Run

Install Node.js 20+, then:

```sh
npm install
npm run dev
```

Open the URL printed in the terminal. To build: `npm run build`. Run tests with `npm test`. The separate `WORLDS-preview.html` is a self-contained preview which can be opened without a development server (it needs WebGL). Wikipedia links need internet.

## Files & object schema

```
worlds/
  index.html
  package.json / package-lock.json
  vite.config.ts / tsconfig.json
  public/textures/       Sun, planet, cloud, and Moon maps; Pluto illustration
  src/data.ts            typed object catalog
  src/main.tsx           viewer and UI
  src/style.css          styling
  src/units.ts           unit calculations
  src/units.test.ts      unit tests
```

Objects in `src/data.ts` follow the `World` TypeScript type: `id`, `name`, `tag`, `type`, `texture`, `diameter`, `gravity` (m/s²), `day`, `year`, `distance`, `moons`, `temperature`, `atmosphere`, `description`, `habitability`, `fact`, `tilt` (degrees), `color`, and `missions`. The object records are centralized in one file, not yet split into individual JSON files.

## Included

- Space Guide with a curated searchable gallery of eight famous spacecraft, mission summaries and source links. Illustrations and orbits are decorative; it is not a live satellite tracker.
- Interactive learning center explaining star formation and natural versus artificial satellites, with a dated Earth satellite count credited to Jonathan McDowell, three guided tours with object facts, a five-question quiz, and a diameter/volume comparison tool. Volume estimates assume spheres.
- Mission milestone panel with six historic events and date jumps; no spacecraft paths are simulated.
- Interactive 3D solar system with time controls, circular J2000-based approximate orbital phases, compressed distances and exaggerated planet sizes. This is an educational visualization, not a NASA ephemeris; eccentricities, inclination, perturbations, and spacecraft trajectories are not modeled.
- Interactive Three.js textured globes, axial tilt, orbit controls, zoom and reset, approximate atmosphere shader, optional Earth cloud layer and auto-rotation (illustrative speed).
- Responsive collection, facts, weight equivalent calculator, description, habitability notes, mission names, selected object sharing URL, PNG of the transparent model canvas, and credits.
- Left/right arrow keys switch objects, / opens search, F toggles fullscreen, H hides the interface, Escape closes dialogs. Your browser's WebGL support is required.

## Not yet implemented

The full NASA mission catalog, precise ephemerides, free-flight, the broader catalog, NASA GLB pipeline, normal/displacement/night maps, true rotation speed, cutaways, labels and pins, accurate terminator/time/seasons, advanced photorealistic comparison and orbital modes, offline caching, narration, languages, AR, audio, quality selector, and accessibility/reduced motion refinements are future work. Fact content is static, not a live NASA or Wikipedia API. Only the model—not the UI or starfield—is captured in PNG. The single bundled preview embeds all maps. No performance benchmark or deployed demo is claimed. A true comparison or cutaway should be implemented before making the suggested hero GIF.

## Asset credits and license

- Sun, Earth day, Earth clouds, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune maps: [Solar System Scope — Solar System Textures](https://www.solarsystemscope.com/textures/), licensed **CC BY 4.0**, attribution to Solar System Scope (INOVE). The textures are included under `public/textures`.
- Descriptions and planetary reference facts adapted from [NASA Solar System Exploration](https://science.nasa.gov/solar-system/). NASA's media usage guidelines and individual asset credits should be checked before adding imagery.
- [Three.js](https://threejs.org/) (MIT), [React](https://react.dev/) (MIT), and [Lucide](https://lucide.dev/) (ISC).

Next steps: add genuine NASA surface maps and elevation, scientific terminator and cutaways, an exoplanet data pipeline with unmistakable artist-concept labels, compare tools, guided tours, Gaia star data, VR/AR, a voice guide, live mission positions, and properly attributed user-submitted models.

- Pluto and the ten additional moons share a computer-generated artistic illustration, not a map of their real surfaces. Orbital dates and positions are illustrative, with fixed low-precision J2000 parameters and circular motion.
