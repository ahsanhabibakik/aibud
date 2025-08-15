"use client";

import React from "react";
import { FooterSection } from "@/components/sections/Home/FooterSection";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";

export default function PrivacyPolicyClient() {
  // Custom colors to match the purple theme in the rest of the site
  const purpleGradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(270, 100%, 85%, .08) 0, hsla(270, 100%, 55%, .03) 50%, hsla(270, 100%, 45%, 0) 80%)";
  const purpleGradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 85%, .06) 0, hsla(270, 100%, 55%, .03) 80%, transparent 100%)";
  const purpleGradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 85%, .04) 0, hsla(270, 100%, 45%, .02) 80%, transparent 100%)";

  return (
    <main>
      <div className="relative bg-black/[0.96] min-h-screen">
        {/* Spotlight effect with purple hues */}
        <Spotlight
          gradientFirst={purpleGradientFirst}
          gradientSecond={purpleGradientSecond}
          gradientThird={purpleGradientThird}
          translateY={-350}
          width={800}
          height={1200}
          smallWidth={280}
          duration={9}
          xOffset={150}
        />

        <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center mb-6 text-neutral-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
              AI Buddy Privacy Policy
            </h1>

            <div className="text-neutral-300 space-y-6">
              <p className="text-sm text-neutral-500">
                Effective date: 2025-08-15 • Last updated: 2025-08-15
              </p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">1) Who we are & scope (Accountability)</h2>
                  <p>
                    This policy explains how AI Buddy Catalyst Labs Inc. (&quot;AI Buddy,&quot; &quot;we,&quot; &quot;us&quot;) collects, uses, discloses, and safeguards Personal Information in Canada. It applies to our websites, apps, and services (the &quot;Services&quot;).
                  </p>
                  <p className="mt-3">
                    We comply with Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA). We also honour applicable provincial private-sector privacy laws where they apply.
                  </p>
                  <p className="mt-3">
                    We have appointed a Privacy Officer responsible for this policy and our compliance program. You can contact the Privacy Officer at info@aibud.ca or 315 Holmwood Avenue, Postal Code K1S2R2, Ottawa, Canada.
                  </p>
                  <p className="mt-3">
                    We maintain internal policies, training, vendor oversight, and incident response procedures to ensure accountability across our team and service providers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">2) What we collect & why (Identifying Purposes)</h2>
                  <p>
                    We collect only what we need for identified purposes explained at or before the time of collection. Typical categories include: account/contact details, billing information, device and usage data, content you submit, and support communications.
                  </p>
                  <p className="mt-3">
                    Main purposes include: delivering and securing the Services, account administration and billing, customer support, product improvement (analytics, error logs), optional marketing (with consent), and legal compliance.
                  </p>
                  <p className="mt-3">
                    At each collection point, we state the purpose in clear language (e.g., sign-up form, checkout, support form). If we later need a new purpose, we will seek fresh consent where required.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">3) Your consent choices (Consent)</h2>
                  <p>
                    We obtain meaningful consent before collecting, using, or disclosing Personal Information, except where permitted or required by law. Consent may be express (e.g., checkbox) or implied (e.g., when you voluntarily provide information for a purpose we explain).
                  </p>
                  <p className="mt-3">
                    You may withdraw consent at any time, subject to legal or contractual restrictions, by contacting info@aibud.ca or using in-product settings (e.g., email preferences, cookie controls).
                  </p>
                  <p className="mt-3">
                    For non-essential cookies/analytics or marketing emails, we use opt-in controls and provide an easy way to opt out later.
                  </p>
                  <p className="mt-3">
                    If we need to rely on a different lawful basis or obtain parental/guardian consent for minors, we will explain this clearly at the time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">4) Only what&apos;s necessary (Limiting Collection)</h2>
                  <p>
                    We limit collection to information reasonably necessary for the stated purposes. We avoid collecting sensitive or unrelated data unless essential and consented to.
                  </p>
                  <p className="mt-3">
                    Where practical, we use de-identified or aggregated data to reduce privacy impact.
                  </p>
                  <p className="mt-3">
                    We do not knowingly collect information from children under 13 without verifiable parental consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">5) Use, disclosure, and retention (Limiting Use, Disclosure & Retention)</h2>
                  <p>
                    We use and disclose Personal Information solely for the purposes described in this policy or at collection, unless you consent otherwise or law permits/mandates.
                  </p>
                  <p className="mt-3">
                    Typical disclosures include service providers (hosting, analytics, payment processors, support tools) under written contracts with privacy and security obligations. See Schedule A: Sub-processors.
                  </p>
                  <p className="mt-3">
                    We retain Personal Information only as long as necessary for the purposes and legal requirements, then securely delete or de-identify it. See Schedule B: Retention Periods.
                  </p>
                  <p className="mt-3">
                    If we consider a corporate transaction, we apply confidentiality safeguards and, where required, notify you of any material changes to this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">6) Keeping information accurate (Accuracy)</h2>
                  <p>
                    We rely on you to help keep your information accurate and up to date. You can review and edit key fields in your account or contact info@aibud.ca to request corrections.
                  </p>
                  <p className="mt-3">
                    For critical fields (e.g., billing contacts), we may periodically prompt you to confirm accuracy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">7) Safeguards & security (Safeguards)</h2>
                  <p>
                    We apply administrative, technical, and physical safeguards proportionate to the sensitivity of the information, including access controls, encryption in transit and at rest, secure software development practices, and vendor due diligence.
                  </p>
                  <p className="mt-3">
                    We restrict employee access on a least-privilege basis and provide privacy/security training.
                  </p>
                  <p className="mt-3">
                    If we detect a breach of security safeguards that creates a real risk of significant harm, we will notify affected individuals and report to regulators as required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">8) Transparency (Openness)</h2>
                  <p>
                    This policy, our cookie preferences, and contact channels are available from our website footer and in-app settings.
                  </p>
                  <p className="mt-3">
                    We describe our data practices in plain language and will announce material changes to this policy with clear effective dates.
                  </p>
                  <p className="mt-3">
                    For questions about our practices, contact our Privacy Officer at <span className="text-purple-400">info@aibud.ca</span>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">9) Your access rights (Individual Access)</h2>
                  <p>
                    You can request access to your Personal Information in our custody/control, learn how it has been used or disclosed, and request corrections where inaccurate or incomplete.
                  </p>
                  <p className="mt-3">
                    To submit an access or correction request, contact <span className="text-purple-400">info@aibud.ca</span>. We will verify your identity, respond within timelines prescribed by law, and provide reasons if we cannot fulfil a request (subject to legal exceptions).
                  </p>
                  <p className="mt-3">
                    Where feasible, we provide copies in a portable format.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">10) Questions & complaints (Challenging Compliance)</h2>
                  <p>
                    If you have a concern about our privacy practices, contact our Privacy Officer first: <span className="text-purple-400">info@aibud.ca</span>. We will investigate and respond promptly.
                  </p>
                  <p className="mt-3">
                    If you remain unsatisfied, you may contact the Office of the Privacy Commissioner of Canada (OPC) or your provincial privacy regulator to file a complaint. Visit priv.gc.ca for current contact information and guidance.
                  </p>
                  <p className="mt-3">
                    We keep records of requests and complaints and use outcomes to improve our program.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">Cookies, analytics & tracking</h2>
                  <p>
                    We use essential cookies to operate the Services and non-essential cookies (e.g., analytics, personalization) only with consent. You can manage preferences anytime via our Cookie Settings link in the footer or in-app.
                  </p>
                  <p className="mt-3">
                    For analytics, we configure tools to minimize personal data (e.g., IP truncation where supported) and honour your opt-out choices.
                  </p>
                  <p className="mt-3">
                    Third-party embeds (e.g., videos, maps) may set cookies; we disclose these in our cookie list and provide controls where feasible.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">Cross-border transfers</h2>
                  <p>
                    Our service providers may process Personal Information outside of your province or Canada (e.g., the United States or EU). While in another jurisdiction, information may be subject to local laws and lawful access requests.
                  </p>
                  <p className="mt-3">
                    We use contractual and technical safeguards (e.g., standard contractual clauses, encryption) and vendor due diligence to protect Personal Information during cross-border processing.
                  </p>
                  <p className="mt-3">
                    Contact <span className="text-purple-400">info@aibud.ca</span> for details about cross-border safeguards relevant to your use.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">Marketing communications (CASL note)</h2>
                  <p>
                    We send commercial electronic messages only with consent or as otherwise permitted by Canada&apos;s Anti-Spam Legislation (CASL). You can unsubscribe at any time using in-message links or by contacting us.
                  </p>
                  <p className="mt-3">
                    Unsubscribing from marketing does not affect essential service communications (e.g., security, billing).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">Automated decision-making & AI features</h2>
                  <p>
                    Some features may use automated processing or machine learning to personalize or accelerate workflows. We design these features to be assistive and include human override where meaningful decisions are involved.
                  </p>
                  <p className="mt-3">
                    We avoid using your content to train models without your consent (unless strictly necessary to provide the feature). We describe data flows and options in-product and in supporting documentation.
                  </p>
                  <p className="mt-3">
                    You can contact us to learn how a feature works in plain language and what information it relies on.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">Third-party links</h2>
                  <p>
                    Our Services may link to third-party sites or apps. Their privacy practices are governed by their own policies, which we encourage you to review before providing information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">Changes to this policy</h2>
                  <p>
                    We may update this policy from time to time to reflect changes in our practices or laws. We will post the updated version with a new &quot;Last updated&quot; date and, where changes are material, provide prominent notice.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">Schedule A — Sub-processors (summary)</h2>
                  <div className="bg-neutral-900/50 p-4 rounded-lg space-y-3">
                    <div>
                      <span className="font-semibold text-white">Cloud hosting & storage:</span> <span className="text-neutral-300">Azure, region(s): Canada, purpose: infrastructure.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Analytics:</span> <span className="text-neutral-300">Google Analytics, data minimized; opt-out honoured.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Payments:</span> <span className="text-neutral-300">Stripe, processes billing details on our behalf.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Email delivery:</span> <span className="text-neutral-300">Brevo, service notifications and opted-in marketing.</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">Schedule B — Standard retention periods (summary)</h2>
                  <div className="bg-neutral-900/50 p-4 rounded-lg space-y-3">
                    <div>
                      <span className="font-semibold text-white">Account data:</span> <span className="text-neutral-300">retained for the life of the account; deleted within 30–60 days after closure unless legally required longer.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Billing records:</span> <span className="text-neutral-300">retained 7 years for tax/audit.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Support tickets & logs:</span> <span className="text-neutral-300">retained 24 months for quality and fraud prevention, then deleted or de-identified.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Backups:</span> <span className="text-neutral-300">rolling backups are retained up to 30–90 days before secure overwrite.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Marketing preferences:</span> <span className="text-neutral-300">kept until you unsubscribe or data becomes inactive for 24 months.</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-3">How to contact us</h2>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-white">Privacy Officer:</span> <span className="text-neutral-300">Sohan Haidear</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Email:</span> <a href="mailto:info@aibud.ca" className="text-purple-400 hover:underline">info@aibud.ca</a>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Mailing address:</span> <span className="text-neutral-300">315 Holmwood Avenue, Postal Code: K1S2R2, Ottawa, Ontario, Canada.</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}