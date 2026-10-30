import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Quote, MessageCircle, Sparkles } from "lucide-react";
import { InteractiveDemoSuite } from "@/components/site/InteractiveDemoSuite";
import { IndustryMaturityShowcase } from "@/components/site/IndustryMaturityShowcase";
import { HybridTechTeamBanner } from "@/components/site/HybridTechTeamBanner";
import { motion } from "motion/react";

import heroArt from "@/assets/hero-abstract.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { Section, Card } from "@/components/site/Sections";
import {
  AnimatedStat,
  HoverLift,
  MaskedLines,
  Parallax,
  Reveal,
  ScrollDrift,
  Stagger,
  StaggerItem,
  EASE,
} from "@/components/motion/primitives";
import { collaborations, company, pillars, results, services, steps } from "@/content/site";

const title = "Alif Growth Media | Custom Business Software, Visual CMS & Operating Systems";
const description =
  "Alif Growth Media acts as the dedicated IT team and fractional CTO for local businesses—engineering scalable websites with live visual editors, custom WhatsApp CRMs, digital invoicing, and unified mobile BI dashboards.";
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
          email: "hello.alifstudio@gmail.com",
          telephone: company.phoneE164,
          areaServed: [
            "Telangana, India",
            "UAE",
            "Saudi Arabia",
            "Qatar",
            "Kuwait",
            "Bahrain",
            "Oman",
          ],
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

function Index() {
  const headline = "Your Dedicated Hybrid Tech Team. We Build & Manage".split(" ");
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-14 pt-24 sm:px-6 sm:pt-32 md:pb-24 md:pt-36 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary sm:px-4 sm:text-xs"
            >
              <Sparkles className="w-3 h-3 text-gold" /> Dedicated Hybrid Tech Partner · Telangana &
              Gulf
            </motion.span>
            <h1 className="mt-4 text-[clamp(2rem,7vw,3.6rem)] font-semibold leading-[1.06] sm:mt-6">
              {headline.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08 + i * 0.05, ease: EASE }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
              <motion.span
                className="gradient-gold-text inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 + headline.length * 0.05, ease: EASE }}
              >
                Your Complete Online Systems.
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45, ease: EASE }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base"
            >
              Need a hybrid technical team who builds custom online systems and manages everything
              daily? We engineer fast websites with visual editors, custom WhatsApp CRMs, 1-tap
              digital billing, and mobile dashboards—so you never hire full-time developers or touch
              code.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55, ease: EASE }}
              className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <HoverLift className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] sm:w-auto"
                >
                  Free Tech Architecture Audit <ArrowRight className="h-4 w-4" />
                </Link>
              </HoverLift>
              <HoverLift className="w-full sm:w-auto">
                <Link
                  to="/services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/85 px-6 py-3 text-xs sm:text-sm font-semibold transition-colors hover:bg-muted sm:w-auto"
                >
                  Explore Software Suite
                </Link>
              </HoverLift>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground"
            >
              {[
                "We Build & Manage Everything",
                "Live Visual Admin (No Code)",
                "Custom WhatsApp CRM",
                "Mobile Cash & BI Tracker",
                "₹0 Upfront Risk",
              ].map((p) => (
                <span key={p} className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 shrink-0 text-primary" /> {p}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            <Parallax distance={22} scale={[1, 1.06]}>
              <img
                src={heroArt}
                alt="Alif Growth Media hybrid technical team systems architecture"
                width={1200}
                height={1200}
                fetchPriority="high"
                decoding="async"
                className="aspect-square w-full rounded-[calc(var(--radius)+8px)] object-cover shadow-[var(--shadow-lift)]"
              />
            </Parallax>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
              className="surface-card absolute -bottom-8 left-2 right-2 p-3.5 sm:-bottom-6 sm:left-4 sm:right-4 sm:p-4 md:-left-6 md:right-8 rounded-xl sm:rounded-2xl border border-border shadow-lg"
            >
              <h2 className="text-[0.68rem] sm:text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                What Changes For Your Business
              </h2>
              <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Update your website text, photos & prices instantly without coding.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Capture & auto-reply to incoming customer WhatsApp leads in seconds.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span>
                    Track daily cash collections, web visits & inventory from one mobile screen.
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="h-6 md:h-10" />

      {/* Partner Strip */}
      <section className="border-y border-border bg-secondary/30 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
          <Reveal>
            <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs md:text-left">
              Trusted software & platform partners in Telangana & Gulf
            </p>
          </Reveal>
          <ScrollDrift distance={28}>
            <Stagger className="grid w-full grid-cols-3 items-end gap-3 sm:gap-8 md:flex md:flex-wrap md:gap-12">
              {collaborations.map((c, i) => (
                <StaggerItem key={c.name} lift className="min-w-0">
                  <div className="flex min-w-0 flex-col items-center gap-1.5">
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className={`w-auto max-w-full object-contain opacity-90 transition-opacity hover:opacity-100 ${
                        i === 1
                          ? "h-12 sm:h-20 md:h-24 md:max-w-[240px]"
                          : "h-10 sm:h-16 md:max-w-[200px]"
                      }`}
                    />
                    {i < 2 && (
                      <span className="w-full truncate text-center text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
                        {c.name}
                      </span>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </ScrollDrift>
        </div>
      </section>

      {/* Hybrid Tech Team Value & Architecture */}
      <HybridTechTeamBanner />

      {/* Organisations We Help Grow & Mature */}
      <IndustryMaturityShowcase />

      {/* Interactive Prototypes Simulation Sandbox */}
      <section className="border-t border-border bg-background px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
            <Reveal className="max-w-2xl">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">
                Live Interactive Sandbox
              </span>
              <h2 className="mt-2 text-balance text-[clamp(1.6rem,4.8vw,2.4rem)] font-bold leading-[1.15]">
                Test our working software before you customize
              </h2>
              <p className="mt-2 text-pretty text-xs sm:text-sm leading-relaxed text-muted-foreground">
                We engineer production-grade systems. Test drive our working tools right here in
                your browser, then customize them for your brand with ₹0 upfront fee.
              </p>
            </Reveal>
            <Reveal>
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/90 hover:bg-muted px-4 py-2 text-xs font-semibold text-foreground transition-colors whitespace-nowrap"
              >
                View all prototypes & platforms <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <InteractiveDemoSuite />
        </div>
      </section>

      {/* Technology Framework */}
      <div className="gradient-deep text-primary-foreground">
        <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal className="max-w-2xl">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">
                Technology Framework
              </span>
              <h2 className="mt-2 text-balance text-[clamp(1.6rem,4.8vw,2.4rem)] font-semibold leading-[1.15]">
                Three pillars that turn your business into an automated machine
              </h2>
              <p className="mt-3 text-pretty text-xs sm:text-sm leading-relaxed text-primary-foreground/75">
                We engineer scalable web architecture, custom WhatsApp CRMs, and mobile executive
                dashboards so you run smoothly without technical stress.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {pillars.map((p) => (
                <StaggerItem key={p.k} lift>
                  <div className="h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 sm:p-6 transition-colors hover:border-gold/40">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {p.k}
                    </span>
                    <h3 className="mt-2.5 text-lg font-semibold">{p.t}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-primary-foreground/75">
                      {p.b}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </div>

      {/* Software Suite */}
      <Section
        eyebrow="Software Suite"
        title="Custom software built for your business identity"
        intro="Everything is integrated into one operating ecosystem, powered by Alif Growth Media so you never juggle separate freelance developers or incompatible apps."
        tone="muted"
      >
        <Stagger className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <Link to="/services" hash={s.slug} className="block h-full">
                <Card title={s.t} body={s.b} />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            See what each service includes <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      {/* How it works */}
      <Section eyebrow="How it works" title="Simple 4-step roadmap with zero technical complexity">
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StaggerItem key={s.t}>
              <Card index={`0${i + 1}`} title={s.t} body={s.b} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Results */}
      <div className="bg-background/75">
        <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal className="max-w-2xl">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
                Real Business Results
              </span>
              <h2 className="mt-2 text-balance text-[clamp(1.6rem,4.8vw,2.4rem)] font-semibold leading-[1.15]">
                Outcomes local owners can measure
              </h2>
              <p className="mt-3 text-pretty text-xs sm:text-sm leading-relaxed text-muted-foreground">
                When systems are simple and automated, your business becomes easier to run and
                consistently profitable.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {results.map((r) => (
                <StaggerItem key={r.t} lift>
                  <div className="surface-card h-full p-5 sm:p-6 rounded-2xl border border-border">
                    <AnimatedStat
                      value={r.s}
                      className="font-display text-2xl sm:text-3xl font-semibold text-primary"
                    />
                    <h3 className="mt-2 text-sm sm:text-base font-semibold">{r.t}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {r.b}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal>
              <Link
                to="/work"
                className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                See our brand partners <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>

      {/* Testimonial */}
      <Section eyebrow="Partner Feedback" title="What business owners say" tone="deep">
        <Reveal className="mx-auto mt-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Quote className="mx-auto h-8 w-8 sm:h-10 sm:w-10 text-gold" />
          </motion.div>
          <blockquote className="mt-5 text-pretty text-[clamp(1rem,3.2vw,1.4rem)] font-medium leading-relaxed">
            <MaskedLines
              delay={0.15}
              lines={[
                `"Alif Growth Media helped us turn scattered enquiries`,
                `into a clear system. Our customers now get faster`,
                `replies and we can finally see what is working."`,
              ]}
            />
          </blockquote>
          <footer className="mt-5 text-xs sm:text-sm text-primary-foreground/75">
            — Partner at a Telangana retail showroom
          </footer>
        </Reveal>
      </Section>

      <CtaBand />
    </SiteLayout>
  );
}
