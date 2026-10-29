import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  LayoutDashboard,
  MessageCircle,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { company, collaborations, services } from "@/content/site";
import "@/experience-home.css";

const title = "Alif Growth Media | Digital Experiences That Move Business Forward";
const description =
  "Alif Growth Media creates standout websites, customer enquiry systems, WhatsApp workflows and practical business software for growing businesses in India and the Gulf.";
const canonical = "https://alif-growth.netlify.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "google-site-verification", content: "-UxbZWHEqHl_b6MksWiyOC-YDhjVw39QkRejIVWXqN8" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: "https://alif-growth.netlify.app/og-image.jpg" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://alif-growth.netlify.app/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Alif Growth Media",
          description,
          email: company.email,
          telephone: company.phoneE164,
          areaServed: ["Telangana, India", "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Warangal",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

type PreviewMode = "website" | "customers" | "operations";
type SolutionMode = "attract" | "convert" | "operate";

const previewTabs: { id: PreviewMode; label: string; icon: typeof PanelsTopLeft }[] = [
  { id: "website", label: "Website", icon: PanelsTopLeft },
  { id: "customers", label: "Customers", icon: MessageCircle },
  { id: "operations", label: "Operations", icon: LayoutDashboard },
];

const solutionTracks: {
  id: SolutionMode;
  number: string;
  title: string;
  sub: string;
  label: string;
  headline: string;
  description: string;
  features: string[];
  slug: string;
  icon: typeof PanelsTopLeft;
}[] = [
  {
    id: "attract",
    number: "01",
    title: "Attract customers",
    sub: "A first impression people remember",
    label: "WEBSITE + DIGITAL PRESENCE",
    headline: "Give people a better reason to choose you.",
    description:
      "A clear, distinctive digital presence that explains what you offer, builds confidence, and makes it easy for the right customers to take the next step.",
    features: ["Websites & storefronts", "Editable content", "Mobile-first experience"],
    slug: services[0].slug,
    icon: PanelsTopLeft,
  },
  {
    id: "convert",
    number: "02",
    title: "Convert enquiries",
    sub: "Turn interest into a clear next step",
    label: "CUSTOMER JOURNEYS + WHATSAPP",
    headline: "Make every enquiry easier to follow up.",
    description:
      "Bring customer conversations into a more organised workflow, so enquiries don't disappear across personal phones, social messages, and forms.",
    features: ["WhatsApp workflows", "Lead organisation", "Follow-up reminders"],
    slug: services[1].slug,
    icon: MessageCircle,
  },
  {
    id: "operate",
    number: "03",
    title: "Run the business",
    sub: "Less scattered work. More visibility.",
    label: "BUSINESS SOFTWARE + DASHBOARDS",
    headline: "Know what's happening without chasing updates.",
    description:
      "Practical tools for billing, stock, daily collections, and owner-level visibility—designed around the way your team already works.",
    features: ["Billing & inventory", "Daily business overview", "Owner dashboards"],
    slug: services[2].slug,
    icon: LayoutDashboard,
  },
];

function Index() {
  const [previewMode, setPreviewMode] = useState<PreviewMode>("website");
  const [solutionMode, setSolutionMode] = useState<SolutionMode>("attract");
  const activeSolution = solutionTracks.find((item) => item.id === solutionMode) ?? solutionTracks[0];
  const ActiveSolutionIcon = activeSolution.icon;

  return (
    <SiteLayout>
      <div className="ah-home">
        <section className="ah-hero" aria-labelledby="ah-hero-title">
          <div className="ah-container">
            <div className="ah-hero-top">
              <p className="ah-eyebrow"><span className="ah-eyebrow-dot" /> Independent digital studio</p>
              <p className="ah-hero-location">Warangal, India <span aria-hidden="true">·</span> Working across the Gulf</p>
            </div>

            <div className="ah-hero-grid">
              <div className="ah-hero-copy">
                <p className="ah-eyebrow">Strategy / Design / Systems</p>
                <h1 id="ah-hero-title" className="ah-hero-title">
                  <span>Make your</span>
                  <span>business easier</span>
                  <span className="ah-title-italic">to choose.</span>
                </h1>
                <p className="ah-hero-description">
                  We build standout websites and connected business tools that help you attract customers, follow up
                  with confidence, and run day-to-day operations with less friction.
                </p>
                <div className="ah-hero-actions">
                  <Link to="/contact" className="ah-button">
                    Tell us what you need <ArrowUpRight aria-hidden="true" size={17} />
                  </Link>
                  <Link to="/work" className="ah-link">
                    Explore selected work <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
                <div className="ah-hero-proof">
                  <span className="ah-proof-mark"><Check aria-hidden="true" size={15} /></span>
                  <span><strong>Designed around your workflow.</strong><br />Not another off-the-shelf setup.</span>
                </div>
              </div>

              <div className="ah-stage-wrap">
                <div className="ah-stage-glow" aria-hidden="true" />
                <div className="ah-stage" aria-label="Interactive preview of digital business experiences">
                  <div className="ah-stage-topbar">
                    <span className="ah-browser-dots" aria-hidden="true"><i /><i /><i /></span>
                    <span className="ah-stage-site">preview.alif.studio / experience</span>
                    <span className="ah-live-pill">Explore</span>
                  </div>
                  <div className="ah-stage-tabs" role="tablist" aria-label="Preview different business tools">
                    {previewTabs.map((tab) => {
                      const TabIcon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          className="ah-stage-tab"
                          role="tab"
                          aria-selected={previewMode === tab.id}
                          aria-pressed={previewMode === tab.id}
                          onClick={() => setPreviewMode(tab.id)}
                        >
                          <TabIcon aria-hidden="true" size={14} />
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={previewMode}
                      className="ah-stage-content"
                      role="tabpanel"
                      initial={{ opacity: 0, y: 7 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {previewMode === "website" && <WebsitePreview />}
                      {previewMode === "customers" && <CustomerPreview />}
                      {previewMode === "operations" && <OperationsPreview />}
                    </motion.div>
                  </AnimatePresence>

                  <div className="ah-stage-caption">
                    <span>Illustrative interface preview</span>
                    <strong>Made to work together ↗</strong>
                  </div>
                </div>
                <div className="ah-stage-float">
                  <span className="ah-stage-float-icon"><Sparkles aria-hidden="true" size={15} /></span>
                  <span><b>One connected experience</b><small>From the first click to daily operations</small></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ah-capability-band" aria-label="Alif capabilities">
          <div className="ah-capability-track" aria-hidden="true">
            {Array.from({ length: 2 }, (_, repeat) => (
              <span key={repeat}>
                <span>Websites with a purpose</span>
                <span>Customer journeys</span>
                <span>WhatsApp workflows</span>
                <span>Business software</span>
                <span>Owner-first dashboards</span>
                <span>Designed to work together</span>
              </span>
            ))}
          </div>
        </div>

        <section className="ah-value" aria-labelledby="ah-value-title">
          <div className="ah-container">
            <div className="ah-value-header">
              <div>
                <p className="ah-section-kicker">A better way to grow / 01</p>
                <h2 id="ah-value-title" className="ah-display">
                  One business.
                  <br />
                  <em>Three ways forward.</em>
                </h2>
              </div>
              <p className="ah-body">
                You don't need to start with a complicated technology plan. Start with the part of the business you
                want to improve. We'll help shape the right solution around it.
              </p>
            </div>

            <div className="ah-value-layout">
              <div className="ah-value-nav" role="group" aria-label="Choose a business goal">
                {solutionTracks.map((track) => (
                  <button
                    type="button"
                    key={track.id}
                    className="ah-value-option"
                    aria-pressed={solutionMode === track.id}
                    onClick={() => setSolutionMode(track.id)}
                  >
                    <span className="ah-value-option-number">{track.number}</span>
                    <span>
                      <span className="ah-value-option-title">{track.title}</span>
                      <span className="ah-value-option-sub">{track.sub}</span>
                    </span>
                    <ChevronRight className="ah-value-option-chevron" aria-hidden="true" size={17} />
                  </button>
                ))}
              </div>

              <div className="ah-value-panel" aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeSolution.id}
                    initial={{ opacity: 0, y: 9 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="ah-value-panel-head">
                      <p className="ah-section-kicker">{activeSolution.label}</p>
                      <span className="ah-value-icon"><ActiveSolutionIcon aria-hidden="true" size={21} /></span>
                    </div>
                    <h3>{activeSolution.headline}</h3>
                    <p>{activeSolution.description}</p>
                    <div className="ah-value-panel-footer">
                      <div className="ah-value-bullets">
                        {activeSolution.features.map((feature) => <span key={feature}>{feature}</span>)}
                      </div>
                      <Link to="/services" hash={activeSolution.slug} className="ah-button ah-button--light">
                        Explore this solution <ArrowUpRight aria-hidden="true" size={16} />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section className="ah-work" aria-labelledby="ah-work-title">
          <div className="ah-container">
            <div className="ah-work-header">
              <div>
                <p className="ah-section-kicker">Selected work / 02</p>
                <h2 id="ah-work-title" className="ah-display">
                  Built for real
                  <br />
                  <em>businesses.</em>
                </h2>
              </div>
              <div>
                <p className="ah-body">
                  Different industries need different answers. Explore a few digital experiences built for the way
                  their customers browse, decide, and buy.
                </p>
                <Link to="/work" className="ah-link" style={{ marginTop: 18 }}>
                  View the full portfolio <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </div>

            <div className="ah-work-grid">
              {collaborations.map((client, index) => (
                <a
                  key={client.name}
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ah-work-card"
                  aria-label={"Explore the " + client.name + " project in a new tab"}
                >
                  <div className="ah-work-art">
                    <span className="ah-work-art-index">0{index + 1} <span aria-hidden="true">/</span> PROJECT</span>
                    <img src={client.logo} alt={client.name + " project visual"} loading="lazy" />
                    <span className="ah-work-open"><ArrowUpRight aria-hidden="true" size={19} /></span>
                  </div>
                  <div className="ah-work-meta">
                    <div>
                      <p className="ah-work-industry">{client.industry}</p>
                      <h3 className="ah-work-name">{client.name}</h3>
                      <p className="ah-work-scope">{client.desc}</p>
                    </div>
                    <ArrowUpRight className="ah-work-arrow" aria-hidden="true" size={21} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="ah-journey" aria-labelledby="ah-journey-title">
          <div className="ah-container ah-journey-grid">
            <div className="ah-journey-copy">
              <p className="ah-section-kicker">The whole picture / 03</p>
              <h2 id="ah-journey-title" className="ah-display">
                Don't just go digital.
                <br />
                <em>Connect the dots.</em>
              </h2>
              <p className="ah-body">
                Your website, customer conversations, and daily operations shouldn't feel like separate businesses.
                We design how those pieces work together—so the experience is clearer for customers and simpler for you.
              </p>
              <Link to="/services" className="ah-link" style={{ marginTop: 25 }}>
                See how the pieces connect <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>

            <div className="ah-journey-steps">
              {[
                { title: "Attract", text: "A clear online presence helps the right people find you and understand your offer." },
                { title: "Capture", text: "Give customers a simple way to ask questions, make enquiries, or start an order." },
                { title: "Follow up", text: "Keep conversations organised so your team knows what needs attention next." },
                { title: "Understand", text: "Bring key information like billing, stock, and daily activity into view." },
              ].map((step, index) => (
                <div key={step.title} className="ah-journey-step">
                  <span className="ah-journey-number">0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  <ArrowUpRight className="ah-journey-arrow" aria-hidden="true" size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ah-principles" aria-labelledby="ah-principles-title">
          <div className="ah-container">
            <div className="ah-principles-head">
              <div>
                <p className="ah-section-kicker">How we work / 04</p>
                <h2 id="ah-principles-title" className="ah-display">
                  Good technology.
                  <br />
                  <em>Less unnecessary friction.</em>
                </h2>
              </div>
              <Link to="/about" className="ah-link">
                Meet the studio <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <div className="ah-principles-grid">
              <article className="ah-principle">
                <span className="ah-principle-icon"><Workflow aria-hidden="true" size={20} /></span>
                <h3>Made around your workflow</h3>
                <p>We start with how the business actually operates, then shape the digital experience around real needs.</p>
              </article>
              <article className="ah-principle">
                <span className="ah-principle-icon"><ShieldCheck aria-hidden="true" size={20} /></span>
                <h3>Ownership from day one</h3>
                <p>Clear scope, planned handover, and practical control are part of the build—not an afterthought.</p>
              </article>
              <article className="ah-principle">
                <span className="ah-principle-icon"><TrendingUp aria-hidden="true" size={20} /></span>
                <h3>Built to grow with you</h3>
                <p>Thoughtful foundations make it easier to improve the experience as your customers and operations change.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="ah-closing" aria-labelledby="ah-closing-title">
          <div className="ah-container ah-closing-grid">
            <div>
              <p className="ah-section-kicker">Your next step / 05</p>
              <h2 id="ah-closing-title" className="ah-closing-title">
                Let's make
                <br />
                something <em>work better.</em>
              </h2>
              <p className="ah-closing-copy">
                Tell us where things feel harder than they should. We'll help you find a sensible next step—whether
                that's a website, a workflow, or a better connected system.
              </p>
            </div>
            <div className="ah-closing-actions">
              <Link to="/contact" className="ah-button">
                Start a conversation <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="ah-button ah-button--outline">
                <MessageCircle aria-hidden="true" size={16} /> Chat on WhatsApp
              </a>
              <small>Plain-language advice. Clear next steps. No pressure to proceed.</small>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function WebsitePreview() {
  return (
    <div aria-label="Illustrative website storefront interface">
      <div className="ah-web-masthead">
        <span className="ah-web-brand"><span className="ah-web-brand-mark">S</span> SAFA / FRESH</span>
        <span className="ah-web-nav"><span>Shop</span><span>Our story</span><span>⌕</span></span>
      </div>
      <div className="ah-web-hero">
        <div className="ah-web-hero-copy">
          <p className="ah-ui-muted" style={{ margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".12em", fontWeight: 800 }}>Fresh, from the source</p>
          <h3 className="ah-ui-heading">Good food.<br />A better day.</h3>
          <p className="ah-ui-muted">Thoughtfully picked favourites, delivered with care.</p>
          <span className="ah-mini-cta">Explore the collection <ArrowUpRight aria-hidden="true" size={10} /></span>
        </div>
        <div className="ah-produce-art" aria-hidden="true"><i className="ah-produce-orb" /><i className="ah-produce-orb" /><i className="ah-produce-orb" /></div>
      </div>
      <div className="ah-web-foot">
        <span>Made for mobile, built for growth</span>
        <span className="ah-web-product-dots" aria-hidden="true"><i /><i /><i /></span>
      </div>
    </div>
  );
}

function CustomerPreview() {
  return (
    <div aria-label="Illustrative customer enquiry management interface">
      <div className="ah-crm-head">
        <div><p className="ah-ui-muted" style={{ margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".11em", fontWeight: 800 }}>Customer hub</p><h3 className="ah-ui-heading">Every chat has a next step.</h3></div>
        <span className="ah-crm-count">3 new</span>
      </div>
      <div className="ah-crm-layout">
        <div className="ah-crm-list">
          <div className="ah-crm-list-title">Recent enquiries</div>
          <div className="ah-contact-row"><span className="ah-avatar">AS</span><span><b className="ah-contact-name">Ayesha S.</b><small className="ah-contact-note">Product enquiry</small></span></div>
          <div className="ah-contact-row"><span className="ah-avatar" style={{ background: "#f1e0c5", color: "#855c2e" }}>RK</span><span><b className="ah-contact-name">Rahul K.</b><small className="ah-contact-note">Asked for a quote</small></span></div>
          <div className="ah-contact-row"><span className="ah-avatar" style={{ background: "#dfe5ef", color: "#4a5b80" }}>FM</span><span><b className="ah-contact-name">Farhan M.</b><small className="ah-contact-note">Follow-up due</small></span></div>
        </div>
        <div className="ah-crm-conversation">
          <div className="ah-conversation-head"><span className="ah-avatar">AS</span><b>Ayesha S. <span style={{ color: "#728070", fontWeight: 500 }}>· New lead</span></b></div>
          <div className="ah-message">Hi, can I know the available options and price?</div>
          <div className="ah-message ah-message--sent">Of course. Here's the current catalogue. Anything specific you're looking for?</div>
          <div className="ah-reply-bar">Write a reply… <span style={{ float: "right" }}>↗</span></div>
        </div>
      </div>
    </div>
  );
}

function OperationsPreview() {
  const values = [
    { label: "Today's sales", value: "₹42.5k", delta: "Daily overview" },
    { label: "Open invoices", value: "08", delta: "Needs attention" },
    { label: "Stock alerts", value: "03", delta: "Low inventory" },
  ];
  const heights = ["22%", "38%", "31%", "57%", "46%", "66%", "52%", "88%", "71%", "100%", "79%", "91%"];
  return (
    <div aria-label="Illustrative business operations dashboard interface">
      <div className="ah-ops-top">
        <div><p className="ah-ui-muted" style={{ margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".11em", fontWeight: 800 }}>Owner overview</p><h3 className="ah-ui-heading">Your business, at a glance.</h3></div>
        <span className="ah-period">This week⌄</span>
      </div>
      <div className="ah-metric-grid">
        {values.map((item) => (
          <div className="ah-metric" key={item.label}>
            <span className="ah-metric-label">{item.label}</span>
            <strong className="ah-metric-value">{item.value}</strong>
            <span className="ah-metric-delta">{item.delta}</span>
          </div>
        ))}
      </div>
      <div className="ah-chart" aria-label="Illustrative weekly activity chart">
        {heights.map((height, index) => <span key={index} className="ah-chart-column"><i style={{ "--height": height } as React.CSSProperties} /></span>)}
      </div>
      <div className="ah-stage-caption" style={{ paddingInline: 0 }}>
        <span>Illustrative weekly activity</span><strong>One place to check ↗</strong>
      </div>
    </div>
  );
}
