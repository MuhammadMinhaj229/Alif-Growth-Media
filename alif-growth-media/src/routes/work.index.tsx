import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Section } from "@/components/site/Sections";
import { AnimatedStat, Parallax, Stagger, StaggerItem } from "@/components/motion/primitives";
import { collaborations, results, caseStudies } from "@/content/site";

const title = "Our Work & Brand Partners | Alif Growth Media";
const description =
  "Trusted collaborations with local brands across Telangana and the Gulf — retail, interiors and fashion businesses growing with clearer branding, websites and automated customer communication.";
const canonical = "https://alif-growth-media.vercel.app/work";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
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
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Trusted collaborations"
        title="Brand partners we grow alongside"
        intro="Real working relationships with local businesses — not just portfolio pieces. We partner with ambitious brands to strengthen their digital presence and customer experience."
      />

      <section className="bg-background/75 px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 md:pb-28">
        <Stagger className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collaborations.map((c, i) => (
            <StaggerItem key={c.name} lift className="h-full">
              <div className="surface-card group flex h-full flex-col p-5 sm:p-7 transition-shadow hover:shadow-[var(--shadow-lift)]">
              <Link to="/work/$slug" params={{ slug: caseStudies[i].slug }} className="block">
                <Parallax distance={10} className={`mb-8 flex items-center ${i === 1 ? "h-32 sm:h-44 lg:h-[12.5rem]" : "h-20 sm:h-24 lg:h-28"}`}>
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    className={`w-auto object-contain object-left transition-transform duration-500 group-hover:scale-[1.04] ${
                      i === 1 ? "max-h-32 max-w-[95%] sm:max-h-44 lg:max-h-[12.5rem]" : "max-h-20 max-w-[90%] sm:max-h-24 lg:max-h-28"
                    }`}
                  />
                </Parallax>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{c.industry}</span>
                <h2 className="mt-3 text-xl font-semibold">{c.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <p className="mt-4 flex-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.scope}</p>
              </Link>
              <div className="mt-5 flex items-center justify-between">
                <Link
                  to="/work/$slug"
                  params={{ slug: caseStudies[i].slug }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  Live site <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Section
        eyebrow="Results"
        title="Outcomes local owners can feel"
        intro="When the system is clear, the business becomes easier to run and easier to grow."
        tone="muted"
      >
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
      </Section>

      <CtaBand title="Want results like these for your business?" />
    </SiteLayout>
  );
}
