
# /agent — Custom AI Agent Page (Implementation Brief for Claude)

**Owner:** aiBuddy  
**Target route:** `/agent`  
**Goal:** Ship a high‑performance, SEO‑ready page that reuses the existing **Portfolio** visual system and theme, but with **new content** specific to “Custom AI Agent — for Founders who want speed and accuracy.”  
**Tech:** Next.js (SSR-first), React Server Components, Tailwind, shadcn/ui, Framer Motion (client-only islands), Lucide icons.  
**Reference layout:** Use the same design, spacing, card grids, and motion patterns from the existing **/portfolio** page (see provided screenshot) and shared components.

---

## 1) Page Information Architecture (sections & content mapping)

> Keep typography scale, paddings, card radius/shadows, gradients, and dark theme identical to `/portfolio`. Only change copy and the iconography where relevant.

### A. Hero
- **Headline:** From insight to execution—on autopilot.
- **Subcopy:** We design custom AI agents that lower cognitive load, surface core business insights, and act on them across your stack (ClickUp, Google Workspace, Slack/Telegram, e‑commerce, analytics).
- **Badge/pill (optional):** Custom AI Agent for Founders
- **Primary CTA:** “Request a scoped pilot” → opens contact modal or routes to `/contact?context=agent-pilot`
- **Secondary CTA (ghost):** “See use cases” → smooth-scroll to **High‑impact use cases**
- **Visual:** Reuse the portfolio hero canvas (cards + subtle glow). Swap card labels to agent‑specific (e.g., “Insights,” “Approvals,” “Actions”).

### B. Why an agent (not another tool)?
Use a **3 or 4‑up benefits grid** (same “feature card” component from portfolio):
1) **Insight discovery:** unify signals from CRM, storefront, analytics, and social into clear next moves  
2) **Agentic execution:** draft, schedule, route, follow up—within your tools  
3) **Human‑first controls:** you approve the judgment calls; the agent does the drudgework  
4) **Responsible by design:** evaluation pipelines, privacy by default, sustainability in mind

### C. High‑impact use cases
Use the **portfolio cards grid** with icons + bullets + “Learn more” micro‑link (optional).
- **Founder Focus:** daily “One Thing,” 80/20 trade‑offs, risk flags  
- **Pipeline & Revenue:** lead triage, next‑best action, follow‑up sequencing  
- **Content & GTM:** topic intel, brief→draft→publish workflows, campaign QA  
- **Ops & Support:** task routing, SLA nudges, meeting prep packs  
- **Docs at Scale:** multi‑doc packs (plans, proposals) with template fidelity  
- **Footnote (small text):** We evaluate for accuracy, usefulness, safety, and environmental impact before rollout. Guardrails reduce AI↔human “hallucination loops.”

### D. What’s inside your agent
Use a **2x2 grid** of feature cards or a vertical steps list (reuse existing component).
- **Connectors:** ClickUp, Google/365, Slack/Telegram, CRM/storefront, analytics  
- **Brains:** prompt orchestration, memory, retrieval, bias checks  
- **Actions:** create/update tasks, schedule, draft comms, compile briefs  
- **Evals:** offline tests + live feedback; transparent logs you can review

### E. Build process (4–6 weeks typical)
Display as a **horizontal timeline** (reusing the “Process”/“Roadmap” component from portfolio). Each step has title + one‑line goal + 1–2 bullets.
1) **Discovery:** map decisions that drain your time; define “hours returned/week” and “ideas shipped/week” targets  
2) **Design:** choose use cases; set guardrails and approval checkpoints  
3) **Pilot:** wire connectors; ship an MVP agent to 1–2 workflows  
4) **Evaluate:** measure quality, latency, safety; refine prompts and actions  
5) **Rollout:** expand scope; train team; hand off playbooks and dashboards

### F. Success metrics we optimize for
Use the **stats row** (from portfolio “metrics” cards):
- Hours returned per founder/week  
- Time‑to‑decision and time‑to‑ship  
- Lead response time and pipeline throughput  
- Quality & safety scores from evals (faithfulness, relevance, PII checks)

### G. Our principles
Use the **pill list** or **icon + text** cards:
- Augment, don’t replace. We automate toil so people do creative, commercial, and relational work.  
- Responsible AI. Ethical and environmental considerations are part of every deployment.  
- Transparency. Clear logs, human approval, reversible actions.

### H. Final CTA section
Mirror portfolio footer CTA layout.
- **Headline:** Ready to start your agent pilot?
- **Primary CTA:** “Start your agent pilot” (same destination as Hero primary CTA)
- **Secondary:** Email capture input (connect to existing form action) and a “Book a call” button.

---

## 2) Component & File Structure

> Reuse shared, composable components. Add new ones only if a generalized variant would benefit other pages.

```
/app/agent/page.tsx                 // SSR-first page entry
/app/agent/metadata.ts              // SEO metadata & OpenGraph
/components/sections/AgentHero.tsx  // client: false (server by default)
/components/sections/AgentBenefits.tsx
/components/sections/AgentUseCases.tsx
/components/sections/AgentInside.tsx
/components/sections/AgentProcess.tsx
/components/sections/AgentMetrics.tsx
/components/sections/AgentPrinciples.tsx
/components/sections/AgentCTA.tsx
/components/shared/FeatureCard.tsx   // (reuse from portfolio if exists)
/components/shared/StatsRow.tsx      // (reuse)
/components/shared/Timeline.tsx      // (reuse)
/components/shared/AutoScrollLink.tsx
/lib/copy/agent.ts                   // content constants
```
- Prefer **React Server Components**. Mark animation‑bearing pieces with `"use client"` and split into small subcomponents (islands) e.g. `AnimatedGlow`, `StaggerList`, `CounterOnView`.
- Keep **motion only where it adds clarity** (hero cards float, on‑view fade, timeline slide‑in).

---

## 3) SSR, Data, and Content Strategy

- Render the page server‑side (RSC) with static content from `/lib/copy/agent.ts`.  
- If a contact modal or lead form is used, that component can be client‑side; hydrate only the form.  
- Use `generateMetadata` or `/app/agent/metadata.ts` for SEO.  
- No client fetches for copy. Avoid layout shift.

**Example content module:**

```ts
// /lib/copy/agent.ts
export const agentHero = {
  title: "From insight to execution—on autopilot.",
  subtitle:
    "We design custom AI agents that lower cognitive load, surface core business insights, and act on them across your stack (ClickUp, Google Workspace, Slack/Telegram, e‑commerce, analytics).",
  ctaPrimary: { label: "Request a scoped pilot", href: "/contact?context=agent-pilot" },
  ctaSecondary: { label: "See use cases", href: "#use-cases" }
};

export const agentBenefits = [
  { title: "Insight discovery", body: "Unify signals from CRM, storefront, analytics, and social into clear next moves." },
  { title: "Agentic execution", body: "Draft, schedule, route, follow up—within your tools." },
  { title: "Human-first controls", body: "You approve the judgment calls; the agent does the drudgework." },
  { title: "Responsible by design", body: "Evaluation pipelines, privacy by default, sustainability in mind." }
];

export const agentUseCases = [
  { title: "Founder Focus", bullets: ["Daily “One Thing”", "80/20 trade-offs", "Risk flags"] },
  { title: "Pipeline & Revenue", bullets: ["Lead triage", "Next-best action", "Follow-up sequencing"] },
  { title: "Content & GTM", bullets: ["Topic intel", "Brief→draft→publish", "Campaign QA"] },
  { title: "Ops & Support", bullets: ["Task routing", "SLA nudges", "Meeting prep packs"] },
  { title: "Docs at Scale", bullets: ["Multi-doc packs", "Template fidelity"] }
];

export const agentInside = [
  { title: "Connectors", body: "ClickUp, Google/365, Slack/Telegram, CRM/storefront, analytics" },
  { title: "Brains", body: "Prompt orchestration, memory, retrieval, bias checks" },
  { title: "Actions", body: "Create/update tasks, schedule, draft comms, compile briefs" },
  { title: "Evals", body: "Offline tests + live feedback; transparent logs you can review" }
];

export const agentProcess = [
  { step: "Discovery",   body: "Map decisions draining time; define 'hours returned/week' and 'ideas shipped/week' targets." },
  { step: "Design",      body: "Choose use cases; set guardrails and approval checkpoints." },
  { step: "Pilot",       body: "Wire connectors; ship MVP agent to 1–2 workflows." },
  { step: "Evaluate",    body: "Measure quality, latency, safety; refine prompts and actions." },
  { step: "Rollout",     body: "Expand scope; train team; hand off playbooks and dashboards." }
];

export const agentMetrics = [
  "Hours returned per founder/week",
  "Time-to-decision and time-to-ship",
  "Lead response time and pipeline throughput",
  "Quality & safety scores from evals (faithfulness, relevance, PII checks)"
];

export const agentPrinciples = [
  "Augment, don’t replace — automate toil so people do creative, commercial, and relational work.",
  "Responsible AI — ethical and environmental considerations in every deployment.",
  "Transparency — clear logs, human approval, reversible actions."
];
```

---

## 4) SEO, Analytics, and Structured Data

- **Metadata:** Title “Custom AI Agent for Founders | aiBuddy”, description from hero.  
- **OpenGraph/Twitter:** Use hero image (same gradient theme).  
- **Canonical:** `/agent`.  
- **Structured data:** Add `Service` schema with areaServed, provider, offers (pilot), and `FAQPage` if we mirror any FAQs.  
- **Performance:** preconnect to analytics/CDN; lazy‑load below‑the‑fold images.  
- **UTM:** Ensure CTAs append `?utm_source=site&utm_medium=agent_page` if relevant.

---

## 5) Accessibility & A11y

- Semantic headings (one `h1` in Hero, `h2` per section).  
- Focus-visible styles for CTAs.  
- Reduced‑motion respect via `prefers-reduced-motion`.  
- Alt text for all decorative/semantic images (empty alt for decorative).  
- Color contrast must match the portfolio baseline.  

---

## 6) Animations (client-only islands)

- Use Framer Motion in **isolated client components** only: hero highlight cards, on‑view fades for grids, timeline slide‑in, metric count‑ups.  
- Guard with `useReducedMotion()`.  
- Avoid global animation wrappers that force the whole page to be client‑side.

---

## 7) Reusability & Theming

- Import shared tokens: spacing, radii, shadows, gradient background, card styles.  
- If any component differs only in copy/icon, keep it generic (e.g., `<FeatureCard title body icon />`).  
- Export all copy from `/lib/copy/agent.ts` to allow future A/B tests without touching JSX.

---

## 8) Performance Budget (Core Web Vitals)

- LCP: < 2.5s on 3G Fast; CLS < 0.02; TBT < 100ms on mid‑tier devices.  
- **No large JS bundles:** keep client JS under the portfolio page footprint.  
- Use `next/image` for all images/illustrations.  
- Ensure fonts are preloaded if used in hero headline.

---

## 9) QA Checklist & Acceptance Criteria

**Visual parity**
- Spacing, typography, and card visuals match `/portfolio` within a 4px tolerance.
- Dark gradient background aligns with theme tokens.

**Functional**
- Primary CTA opens contact or routes correctly with context param.  
- Secondary CTA smooth‑scrolls to **Use cases** (`id="use-cases"`).  
- All section anchors exist for deep‑links: `#benefits`, `#use-cases`, `#inside`, `#process`, `#metrics`, `#principles`, `#cta`.

**SEO**
- Server‑rendered HTML contains all key copy.  
- Metadata and OG tags verified.  
- Lighthouse SEO score ≥ 95 on desktop.

**Performance**
- Lighthouse Performance ≥ 90 on mobile.  
- No hydration warnings.  
- Only necessary components have `"use client"`.

**Accessibility**
- Axe/core passes with zero critical issues.  
- Keyboard navigation through all interactive elements.

---

## 10) Dev Notes

- Keep the route registered in the main nav (same position as Portfolio sibling) and footer.  
- Reuse the existing contact modal component if available; otherwise link to `/contact` with the correct `context` query.  
- If you introduce a new shared component, place it under `/components/shared/` with Storybook stories (if Storybook exists in repo).

---

## 11) Content Blocks (ready to paste)

**CTA labels**
- Primary: Request a scoped pilot
- Secondary: See use cases
- Final CTA: Start your agent pilot

**Small disclaimer (use cases section footer):**
> We evaluate for accuracy, usefulness, safety, and environmental impact before rollout. Guardrails reduce AI↔human “hallucination loops.”

---

### Done = Page deployed at `/agent`, visually consistent with `/portfolio`, SSR‑rendered, Lighthouse green across the board, and CTAs wired to capture leads for the pilot.
