Got it. Here’s the **implementation brief** for the new **/fractionalcxo** page — structured exactly like the `/agent` spec, but adapted for the Fractional CXO content you shared.

---

# /fractionalcxo — Fractional CXO Page (Implementation Brief for Claude)

**Owner:** aiBuddy
**Target route:** `/fractionalcxo`
**Goal:** Ship a high-performance, SEO-ready page using the same **portfolio/agent** design system, with new copy/content for the **Fractional CXO service**.
**Tech:** Next.js (SSR-first), React Server Components, Tailwind, shadcn/ui, Framer Motion (client-only islands), Lucide icons.
**Reference layout:** Portfolio page sections (spacing, card grids, typography, motion).

---

## 1) Page Information Architecture (sections & content mapping)

> Maintain consistency with `/portfolio` and `/agent`. Replace only copy, icons, and minor visuals.

### A. Hero

* **Headline:** Borrow executive firepower—without the full-time hire.
* **Subcopy:** Get a fractional CXO who brings clarity, speed, and investor-grade discipline to your first 6–12 months. We help you focus, execute, and build what matters.
* **Primary CTA:** “Book a 30-min fit call” → Calendly link
* **Visual:** Aurora/gradient hero background with 3D cards (titles: “Clarity”, “Speed”, “Discipline”).

---

### B. Who this is for

* Founders juggling product, GTM, ops, and fundraising
* Teams with traction signals but no operating rhythm yet
* Builders who want measurable progress, not busywork

> Use **3-card grid** with feature icons (reuse FeatureCard).

---

### C. Problems we solve

Use **grid of 4–5 cards** styled like “Why Choose Us”.

* Fuzzy priorities and shifting roadmaps
* Slow or ad-hoc customer discovery
* Patchwork GTM with unclear ICP and pricing
* Meeting chaos; no weekly operating cadence
* “Investor-ready” story that still feels half-baked

---

### D. What you get (deliverables)

Use **2-column feature list layout** with icons.

* **Operating System (90-Day Plan):** goals, metrics, cadences, owner map
* **Customer & Market Clarity:** ICP, JTBD, value prop, pricing experiments
* **Product & Roadmap:** MVP spec, cutlines, validation milestones
* **GTM Engine:** channel tests, content calendar, outbound playbooks
* **Fundraising Narrative:** 10–12 slide story, metrics sheet, FAQ doc
* **Decision Support:** bias checks, 80/20 prioritization, “One Thing” focus

---

### E. Ethos (mini note)

Small card below deliverables:

> “Human-first, responsible AI. We use AI tools to accelerate work without replacing your people—and we consider ethical and environmental impact before recommending automation.”

---

### F. How engagement works

Show as **horizontal timeline / process flow** (reuse Process component).

1. **Assess (Week 1):** quick audit + goals + ROI hypotheses
2. **Align (Week 2):** 90-day plan; meeting and metrics cadence
3. **Execute (Weeks 3–12):** run sprints; unblock decisions fast
4. **Level-up:** hire/playbooks handoff; optional ongoing advisory

---

### G. Roles we cover (pick one or blend)

Use **role cards grid**.

* **Fractional CPO:** discovery → MVP → roadmap
* **Fractional COO:** ops cadences, hiring plan, unit economics
* **Fractional CMO/CGO:** ICP, messaging, channels, pipeline
* **Fractional CTO (advisor):** build/buy choices, AI integration, security

---

### H. Proof you can feel

Use **metrics row or testimonial-like cards**.

* Fewer priorities, done faster
* Weekly ship cadence
* A story investors recognize instantly
* A team that knows “what next” every Monday

---

### I. Final CTA

* **Headline:** Ready to borrow executive firepower?
* **Primary CTA:** “See if we’re a fit” → Calendly
* **Secondary CTA:** Email input (connect to existing form).

---

## 2) Component & File Structure

```
/app/fractionalcxo/page.tsx
/app/fractionalcxo/metadata.ts
/components/sections/CXOHero.tsx
/components/sections/CXOAudience.tsx
/components/sections/CXOProblems.tsx
/components/sections/CXODeliverables.tsx
/components/sections/CXOProcess.tsx
/components/sections/CXORoles.tsx
/components/sections/CXOProof.tsx
/components/sections/CXOCTA.tsx
/lib/copy/fractionalcxo.ts
```

* Reuse `FeatureCard`, `StatsRow`, `Timeline` from shared.
* Animations (Framer Motion) only in hero, timeline, proof metrics.

---

## 3) SSR & Content Strategy

* Content in `/lib/copy/fractionalcxo.ts` for reusability/A-B testing.
* Server-render all static copy for SEO.
* Client hydration only for CTAs, form, and animations.

---

## 4) SEO, Metadata, Structured Data

* **Title:** Fractional CXO for Startups (Pre-Seed & Seed) | aiBuddy
* **Description:** Borrow executive firepower without the full-time hire. Clarity, speed, and investor-grade discipline in your first 6–12 months.
* **OpenGraph/Twitter:** Hero visual (gradient exec card theme).
* **Schema:** Service schema (CXO consulting), FAQPage optional.

---

## 5) Accessibility

* One `h1` in Hero, `h2` per section.
* Keyboard accessible CTAs.
* Alt text for all icons/visuals.
* Color contrast checked.

---

## 6) Animations (client-only islands)

* Floating hero cards.
* Fade-in sections on scroll.
* Timeline slide-in.
* Metrics counter-up.
* Respect `prefers-reduced-motion`.

---

## 7) QA Checklist

**Visual parity**

* Layout, spacing, and theme match `/portfolio` and `/agent`.

**Functional**

* CTAs link correctly to Calendly.
* Section IDs: `#audience`, `#problems`, `#deliverables`, `#process`, `#roles`, `#proof`, `#cta`.

**Performance**

* Lighthouse Performance ≥ 90 mobile.
* Bundle size ≤ portfolio baseline.

**SEO**

* Metadata + OG tags present.
* Lighthouse SEO ≥ 95.

**A11y**

* Axe passes.
* All interactive elements focusable.

---

✅ Done = Page deployed at `/fractionalcxo`, SSR-first, consistent with `/portfolio` design, optimized animations, and CTAs wired to Calendly.

---

Would you like me to generate the **`/lib/copy/fractionalcxo.ts` content module** (ready-to-paste constants like I did for `/agent`), so your devs/Claude can slot in the copy immediately?
