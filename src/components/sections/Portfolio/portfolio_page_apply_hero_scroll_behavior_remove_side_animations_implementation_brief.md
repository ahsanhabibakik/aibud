# Goal
Make all major sections on the **Portfolio** page use the **same scroll behavior as the Hero** (fade + slight scale + gentle upward shift as the user scrolls down). **Remove any left/right slide-in animations** from these sections. Keep hover micro‑interactions (buttons/cards) unchanged.

> **Concept to reuse:** Scroll‑responsive fade + scale + Y‑offset (the Hero currently uses Framer Motion `useScroll` + `useTransform` to go from opacity 1/scale 1/Y 0 → opacity 0/scale ~0.8/Y −100 while the page scrolls).

---

## Screens/Sections in scope (per screenshot provided)
1. **Flagship Product**
2. **Complete Portfolio** (product cards grid)
3. **Success Stories** / **Featured Case Studies**
4. **Powerful Integrations**
5. **Our Trusted Partners**
6. **FAQ** (accordion)
7. **Final CTA** (waitlist/Book a Call)

> **Out of scope for this update:** The floating navbar behavior and internal hover effects. Do **not** change card hover, button hover, or click actions.

---

## Exact Changes Required

### A) Unify section scroll behavior
- For each section **wrapper container** (the topmost div for that section), apply the **Hero-style** scroll animation:
  - **Opacity:** 1 → 0 (as the next section approaches).
  - **Scale:** 1 → **0.95** (use 0.95 instead of 0.8 for non-hero sections to keep text readable while passing).
  - **Y translation:** 0 → **−60px** (subtle upward drift while fading).
- Use the **page scroll position** (not internal element scroll) as the driver.
- Ensure the animation starts when the section **enters viewport** and completes by the time the user is near the **bottom** of that section (viewport‑offsets described below).

### B) Remove side (left/right) entrance animations
- Remove/disable any `initial`/`animate` configs that slide content **from left or right** into view in these sections.
- If any component still needs an entrance effect for visual polish, switch it to a **small fade‑in only** (no X‑axis movement, no rotation).

### C) Keep micro‑interactions
- Preserve existing **hover** effects, button states, link underlines, and card glows.
- Preserve **Live** status pulses on product cards.

### D) Respect accessibility & performance
- **Reduced motion:** When `prefers-reduced-motion` is set, **disable all scroll‑driven transforms** and show content statically.
- **Mobile constraints:** On screens **< 768px**, clamp the effect to **opacity 1 → 0.8**, **scale min 0.98**, **Y −24px** to prevent readability issues.
- **Performance:** Avoid heavy shadow animations tied to scroll; limit the number of motion values per section to the wrapper only.

---

## Implementation Notes (no code)

1. **Create a reusable wrapper** (e.g., "ScrollFadeSection") that encapsulates:
   - Input props: `start`, `end` (scroll range), `minScale`, `maxOffsetY`, `minOpacity`.
   - Internally wires the same **Hero** logic (`useScroll` + `useTransform`) but with section‑relative offsets.
   - Exposes a container class so existing section markup can be wrapped without refactors.
2. **Viewport Offsets:** Use a consistent rule across sections so the effect feels uniform:
   - Start fading when section top **enters at ~15%** of viewport height.
   - Finish fading when section bottom **reaches ~85%** of viewport height.
3. **Z‑index & stacking:** Because sections fade while overlapping, ensure each section wrapper keeps its normal stacking context (no unintended overlay of interactive elements).
4. **Sticky/scrollable internals:** If a section contains its own scroll logic (e.g., sticky reveals or container‑scroll):
   - **Disable** that internal left/right or parallax logic for this task.
   - Keep the wrapper’s simple fade/scale/Y effect only.
5. **SSR safety:** Keep any window/scroll access inside client‑only components (as currently done in Hero). Avoid layout shift on hydration.

---

## Acceptance Criteria
- [ ] All sections listed in **Scope** use the **same** scroll fade/scale/Y behavior as Hero (tuned values above).
- [ ] **No side slide-in** animations remain in those sections (desktop & mobile).
- [ ] Hover effects and Live indicators remain unchanged.
- [ ] With **reduced motion**, sections render with **no** scroll‑driven transforms.
- [ ] On mobile (<768px) the toned‑down values are applied.
- [ ] Smooth, stutter‑free scroll on mid‑range devices (no FPS dips).
- [ ] No content becomes unreadable or unclickable during the transition.

---

## Test Plan
1. **Desktop Chrome/Firefox/Safari**
   - Scroll from Hero → Final CTA. Verify each section subtly fades, scales to ~0.95, and shifts up ~60px.
   - Confirm no left/right entrance motions happen anywhere.
2. **Mobile (iOS Safari, Android Chrome)**
   - Validate toned‑down values (scale not less than 0.98). Text must remain readable while transitioning.
3. **Reduced Motion**
   - Enable OS setting. Reload. Verify that sections do **not** animate on scroll.
4. **Interactivity**
   - Hover and click product cards, integration cards, partner cards, FAQ toggles, and CTAs. All interactions must behave as before.
5. **Performance**
   - Use browser perf tools to ensure minimal main‑thread cost from scroll handlers. No jank during fast scrolls.

---

## Risks & Mitigations
- **Risk:** Scroll effect conflicts with any sticky/3D/parallax components.
  - **Mitigation:** Remove those per scope; keep only wrapper fade/scale/Y.
- **Risk:** Readability during fade on small screens.
  - **Mitigation:** Use the mobile clamps specified above.
- **Risk:** CLS/hydration jump.
  - **Mitigation:** Keep transforms only (no size/layout changes), and client‑only mounting.

---

## Handoff Notes for Claude
- Reuse the **Hero** section’s scroll logic and motion values as the baseline.
- Implement a small, configurable **wrapper** and apply it to each scoped section container.
- Remove left/right entrance animations from children; keep hover effects.
- Ensure accessibility (reduced motion) and mobile clamps.

**Deliverable:** PR that adds the reusable wrapper, applies it to all scoped sections, removes side slides, and passes the Test Plan/Acceptance Criteria above.

---

### After‑Fix Log (to be filled by implementer)
- ✅ Applied wrapper to: Flagship Product / Complete Portfolio / Success Stories / Integrations / Partners / FAQ / Final CTA
- ✅ Removed side slide‑ins from: __________________________
- ✅ Verified reduced‑motion behavior
- ✅ Verified mobile clamps
- ✅ Performance check screenshots attached

**Status Icon:** 🟣 Updated (Hero‑style scroll now used site‑wide on Portfolio page)

