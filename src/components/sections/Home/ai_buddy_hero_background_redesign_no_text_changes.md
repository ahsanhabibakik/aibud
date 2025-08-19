# Hero Background Redesign — Design & Implementation Brief (no changes to text/CTA/layout)

> Keep all hero copy, logo, CTAs, spacing and z-index exactly as-is. Replace only the background layer with a modern, on-brand animated design that is subtle, performant, and slightly interactive on mouse move.

---

## Context
- Current hero uses an animated aurora/gradient background with dark theme enforced across the site. Blog and other sections already use Framer Motion + custom background components. We’ll adhere to the existing animation system and performance targets noted in the repo docs.

## Goals
1. Visual: More premium/modern depth than a flat gradient; light “paper shaders” vibe.
2. Interaction: Very subtle mouse/touch parallax; **no** distracting motion.
3. Performance: Maintain Core Web Vitals and keep GPU work low (see Performance Budget).
4. Theming: Use aiBuddy’s purple/blue accent palette over near-black base.
5. Accessibility: Respect `prefers-reduced-motion` and keyboard-only users.

## Library & Building Blocks
- Primary: `@paper-design/shaders-react` — use composable layers (e.g., `MeshGradient`, `Noise`, `Vignette`).
- Animation system: Framer Motion (already in project) for parallax/opacity fades.
- No WebGL heavy effects or THREE scenes.

---

## Visual Concept (layered composition)
Order is back → front. All sizes full-bleed inside the hero container with `overflow-hidden`.

1) **Base Glow Field**
- Component: `MeshGradient`
- Colors (use theme tokens):
  - Anchor/Dark: `#0a0a0a`, `#08090b`
  - Brand Accents: `#6b5cff` (indigo-violet), `#7c58ff` (violet), `#3aa0ff` (blue), small `#ffffff` for sparkle pop
- Motion: very slow drift (speed ~0.25) with 4–6 control points
- Purpose: establishes soft aurora-like color movement (no hard edges)

2) **Soft Spotlights (Depth Beams)**
- Component: `Spotlight` or shader library’s equivalent radial lights
- Placement: 2 large, off-center ovals: one top-right (violet), one mid-left (blue)
- Motion: tiny scale/pan (speed ~0.15) for background breathing
- Opacity: 25–35%

3) **Wireframe Veil (Subtle Structure)**
- Component: secondary `MeshGradient` in **wireframe** mode or `Voronoi/Lines` equivalent
- Line weight: ultra-thin; density low
- Opacity: 10–18%
- Motion speed slightly slower than Base (speed ~0.18) for parallax-in-depth feel

4) **Film Grain + Vignette**
- Components: `Noise` (very fine) + `Vignette`
- Grain opacity: 6–8% on retina; scale adaptive to DPR
- Vignette: 8–12% to center attention on headline/CTA

5) **Accent Flares (optional, behind logo)**
- Component: 2 very soft circular gradients ~300–420px diameter
- Brand colors at 30–40% opacity
- Absolute positioned to align behind the word “AI Agents” area and Book CTA

---

## Interaction (very light)
- **Mouse/Pointer Parallax**: translate the *entire shader group* max ±10–12px on X/Y relative to viewport center. Use framer-motion spring: stiffness ~40, damping ~20. Clamp output and throttle to rAF.
- **Depth Delta**: give the wireframe layer a slightly different parallax factor (e.g., 0.6x of base) to suggest depth.
- **Touch**: on mobile, disable parallax; keep only slow background drift.
- **Reduced Motion**: if `prefers-reduced-motion`, disable all parallax and freeze drift at initial frame or reduce speeds to near-zero.

---

## Performance Budget (hard caps)
- Hero idle CPU < 3% on mid-range laptop
- Animation FPS ≥ 55 on 60 Hz displays
- GPU frames stable (no long tasks > 50 ms)
- No extra layout shifts; LCP remains driven by hero text/CTA
- Total shader work: ≤ 2 composite layers with shaders (mesh + wireframe); spotlights can be baked as gradients if needed

Fallback: provide a static PNG/JPG poster (export of the composition) used when WebGL not available or motion reduced.

---

## Implementation Notes (no code, exact requirements)
1. **Mount Point**: Replace current hero background container only. Keep z-index below all text/CTA/logo layers. Ensure `pointer-events: none` for the background.
2. **Color Tokens**: Read from theme where possible; if not available, define CSS vars once (primary-violet, accent-blue, offwhite-sparkle) to ensure consistency across sections.
3. **Speeds & Opacities**: Use the values given above as defaults; expose them as props in the hero background component for future tuning.
4. **Sizing**: Background must cover `min-height: clamp(560px, 92vh, 980px)` and remain full-bleed on ultra-wide screens without stretching artifacts.
5. **State Management**: Parallax state isolated; remove listeners on unmount. Throttle mouse handler to rAF.
6. **Accessibility**: Check `prefers-reduced-motion` at mount and subscribe to media-query changes.
7. **SSR/CSR**: Render static poster on server; hydrate to animated layers client-side. Avoid hydration mismatches (guard on `typeof window`).
8. **SEO/CWV**: Preload poster as `priority` image; defer shader lib chunk till idle or after `requestIdleCallback`.

---

## QA Checklist
- [ ] No overlap or readability issues with headline and subtext on dark/light screens
- [ ] Mouse parallax feels *barely there*; no jitter at high DPI
- [ ] Mobile shows smooth, slow drift only; no handlers attached on touch
- [ ] `prefers-reduced-motion` disables motion cleanly and uses static poster
- [ ] Lighthouse: no CLS introduced; LCP not regressed; JS size change < 35 kB gz
- [ ] Cross-browser visual parity (Chromium, Firefox, Safari)

---

## Acceptance Criteria (pass/fail)
- **Look & Feel**: Matches the five-layer concept and brand palette; background complements rather than competes with text.
- **Interaction**: Parallax capped at 12px with spring easing; disabled on touch and reduced-motion.
- **Performance**: Meets the Performance Budget; smooth on mid-range hardware.
- **Fallbacks**: Static poster provided and correctly served.

---

## Nice-to-haves (phase 2)
- Time-of-day tint (cooler mornings → warmer evenings) with a ±8% hue shift
- Very rare, random micro-sparkle at 1–2 per 30s, opacity pulse from 0 → 20% → 0

---

## Handover to Claude
- Create a new component (e.g., `HeroPaperBackground`) that implements the above layers and behaviors behind the existing hero content.
- Add props for color set, parallax strength, speeds, and opacities. Default to the values listed here.
- Ensure tree-shakable imports from `@paper-design/shaders-react` and lazy-load the shader bundle.
- Provide one exported helper to render a static poster (server-side) so the hero never shows a blank frame.

