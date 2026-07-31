import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Quote } from "lucide-react";
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
  ScrollScene,
  ScrollStage,
  Stagger,
  StaggerItem,
  EASE,
} from "@/components/motion/primitives";
import { collaborations, company, pillars, problems, results, services, steps } from "@/content/site";

const title = "Alif Growth Media | Digital Marketing, Websites & Automation";
const description =
  "Alif Growth Media helps local businesses in Telangana, Hyderabad and the Gulf grow with digital marketing, websites, WhatsApp automation and clear growth systems.";
const canonical = "https://alif-growth-media.vercel.app/";

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
      { property: "og:image", content: "https://alif-growth-media.vercel.app/og-image.jpg" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://alif-growth-media.vercel.app/og-image.jpg" },
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

function Index() {
  const headline = "Helping local businesses grow with".split(" ");
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pt-32 md:pb-28 md:pt-40 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/85 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary sm:px-4 sm:text-xs"
            >
              Telangana · Hyderabad · Gulf
            </motion.span>
            <h1 className="mt-5 text-[clamp(2.1rem,7.6vw,3.75rem)] font-semibold leading-[1.06] sm:mt-6">
              {headline.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.06, ease: EASE }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
              <motion.span
                className="gradient-gold-text inline-block"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + headline.length * 0.06, ease: EASE }}
              >
                smart digital systems.
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg"
            >
              We build your trusted digital identity, keep customers answered with automated communication, and show
              your growth through simple visual insight — for businesses in India and the Gulf.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62, ease: EASE }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <HoverLift className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] sm:w-auto"
                >
                  Get a Free Growth Audit <ArrowRight className="h-4 w-4" />
                </Link>
              </HoverLift>
              <HoverLift className="w-full sm:w-auto">
                <Link
                  to="/services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/85 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-muted sm:w-auto"
                >
                  Explore our services
                </Link>
              </HoverLift>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.78 }}
              className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
              {["Clear process", "Local business focused", "India & GCC ready"].map((p) => (
                <span key={p} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-primary" /> {p}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative mb-16 md:mb-0"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <Parallax distance={26} scale={[1, 1.08]}>
              <img
                src={heroArt}
                alt="Abstract emerald and gold artwork representing Alif Growth Media digital growth systems"
                width={1200}
                height={1200}
                fetchPriority="high"
                decoding="async"
                className="aspect-square w-full rounded-[calc(var(--radius)+8px)] object-cover shadow-[var(--shadow-lift)]"
              />
            </Parallax>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
              className="surface-card absolute -bottom-12 left-2 right-2 p-4 sm:-bottom-6 sm:left-4 sm:right-4 sm:p-5 md:-left-8 md:right-10"
            >
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">
                What changes for your business
              </h2>
              <ul className="mt-3 space-y-1.5 text-[0.82rem] leading-relaxed text-muted-foreground sm:space-y-2 sm:text-sm">
                <li>Your business looks clear, modern and trustworthy online.</li>
                <li>Customers get faster replies on WhatsApp, Instagram and email.</li>
                <li>You see progress without technical confusion.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="h-10 md:h-14" />

      {/* Partner strip */}
      <section className="border-y border-border bg-secondary/30 px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
          <Reveal>
            <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:text-xs md:text-left">
              Trusted by growing brands in Telangana
            </p>
          </Reveal>
          <ScrollDrift distance={34}>
            <Stagger className="grid w-full grid-cols-3 items-end gap-4 sm:gap-10 md:flex md:flex-wrap md:gap-14">
              {collaborations.map((c, i) => (
                <StaggerItem key={c.name} lift className="min-w-0">
                  <div className="flex min-w-0 flex-col items-center gap-2">
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className={`w-auto max-w-full object-contain opacity-90 transition-opacity hover:opacity-100 ${
                        i === 1
                          ? "h-16 sm:h-24 md:h-28 md:max-w-[260px]"
                          : "h-12 sm:h-20 md:max-w-[220px]"
                      }`}
                    />
                    {i < 2 && (
                      <span className="w-full truncate text-center text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-xs sm:tracking-[0.16em]">
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

      <Section
        eyebrow="The reality"
        title="If digital growth feels heavy, you are not alone."
        intro="Most local business owners are focused on daily operations. It is normal to feel stretched when digital tasks pile up."
      >
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {problems.map((p) => (
            <StaggerItem key={p.t}>
              <Card index={p.i} title={p.t} body={p.b} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Framework */}
      <div className="gradient-deep text-primary-foreground">
        <section className="px-5 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal className="max-w-2xl">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold sm:text-xs">
                Our framework
              </span>
              <h2 className="mt-3 text-balance text-[clamp(1.65rem,5.2vw,2.6rem)] font-semibold leading-[1.15]">
                Three pillars that turn digital effort into growth
              </h2>
              <p className="mt-4 text-pretty text-[0.975rem] leading-relaxed text-primary-foreground/75 sm:text-base">
                Practical foundations that make daily digital work compound into steady business growth for service
                brands across Telangana and the Gulf.
              </p>
            </Reveal>
            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {pillars.map((p) => (
                <StaggerItem key={p.k} lift>
                  <div className="h-full rounded-[var(--radius)] border border-primary-foreground/15 bg-primary-foreground/5 p-6 transition-colors hover:border-gold/40 sm:p-7">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{p.k}</span>
                    <h3 className="mt-3 text-xl font-semibold">{p.t}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{p.b}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </div>

      <Section
        eyebrow="Services"
        title="One unified solution: the Alif Growth System"
        intro="Everything is connected, so you never need separate agencies for marketing, websites, automation and digital guidance."
        tone="muted"
      >
        <Stagger className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
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
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            See what each service includes <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      <Section eyebrow="How it works" title="Simple steps, clear support, no unnecessary complexity">
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StaggerItem key={s.t}>
              <Card index={`0${i + 1}`} title={s.t} body={s.b} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Transformation — pinned crossfade from Before into After */}
      <ScrollStage length={1.7} className="bg-secondary/40">
        <section className="px-5 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal className="max-w-2xl">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
                Transformation
              </span>
              <h2 className="mt-3 text-balance text-[clamp(1.65rem,5.2vw,2.6rem)] font-semibold leading-[1.15]">
                Before and after working with Alif
              </h2>
              <p className="mt-4 text-pretty text-[0.975rem] leading-relaxed text-muted-foreground sm:text-base">
                A realistic view of how a local business changes once the system is in place.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
              <ScrollScene from={-0.1} to={0.22} y={[36, 0]} scale={[1, 0.97]}>
                <div className="surface-card h-full p-6 sm:p-7">
                  <h3 className="text-lg font-semibold text-muted-foreground">Before</h3>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <li>Manual replies across many chat channels</li>
                    <li>Low visibility to nearby customers</li>
                    <li>Inconsistent branding and trust signals</li>
                  </ul>
                </div>
              </ScrollScene>
              <ScrollScene from={0.28} to={0.56} y={[64, 0]} scale={[0.94, 1]} delay={0.12}>
                <div className="surface-card h-full border-primary/25 bg-secondary/40 p-6 sm:p-7">
                  <h3 className="text-lg font-semibold text-primary">After</h3>
                  <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                    <li>Structured and professional digital presence</li>
                    <li>Automated response flow for common enquiries</li>
                    <li>Steady customer enquiries and stronger trust</li>
                  </ul>
                </div>
              </ScrollScene>
            </div>
          </div>
        </section>
      </ScrollStage>

      {/* Results — numbers count up as they enter view */}
      <div className="bg-background/75">
        <section className="px-5 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal className="max-w-2xl">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
                Results
              </span>
              <h2 className="mt-3 text-balance text-[clamp(1.65rem,5.2vw,2.6rem)] font-semibold leading-[1.15]">
                Outcomes local owners can feel
              </h2>
              <p className="mt-4 text-pretty text-[0.975rem] leading-relaxed text-muted-foreground sm:text-base">
                When the system is clear, the business becomes easier to run and easier to grow.
              </p>
            </Reveal>
            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {results.map((r) => (
                <StaggerItem key={r.t} lift>
                  <div className="surface-card h-full p-6 sm:p-7">
                    <AnimatedStat value={r.s} className="font-display text-3xl font-semibold text-primary" />
                    <h3 className="mt-3 text-base font-semibold">{r.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.b}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal>
              <Link
                to="/work"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                See our brand partners <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>

      <Section eyebrow="Testimonial" title="What partners say" tone="deep">
        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Quote className="mx-auto h-10 w-10 text-gold" />
          </motion.div>
          <blockquote className="mt-6 text-pretty text-[clamp(1.05rem,3.6vw,1.5rem)] font-medium leading-relaxed">
            <MaskedLines
              delay={0.15}
              lines={[
                `"Alif Growth Media helped us turn scattered enquiries`,
                `into a clear system. Our customers now get faster`,
                `replies and we can finally see what is working."`,
              ]}
            />
          </blockquote>
          <footer className="mt-6 text-sm text-primary-foreground/75">
            — Partner at a Telangana retail brand
          </footer>
        </Reveal>
      </Section>

      <CtaBand />
    </SiteLayout>
  );
}
