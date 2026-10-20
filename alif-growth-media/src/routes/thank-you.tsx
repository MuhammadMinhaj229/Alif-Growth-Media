import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/motion/primitives";
import { company, steps } from "@/content/site";

const title = "Thank You | Alif Growth Media";
const description =
  "Your free growth audit request has reached Alif Growth Media. Our team will review it and contact you shortly.";
const canonical = "https://alif-growth.netlify.app/thank-you";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <SiteLayout>
      <section className="px-5 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary">
              <CheckCircle2 className="h-8 w-8" />
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-8 text-3xl font-semibold leading-tight md:text-5xl">
              Thank you. Your growth audit request is received.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Our team will review your details and contact you shortly. You can also reach us
              directly for faster coordination.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[var(--shadow-lift)]"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary/60"
              >
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary/60"
              >
                Back to homepage
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-16 grid gap-4 text-left sm:grid-cols-2">
              {steps.map((s, i) => (
                <div key={s.t} className="surface-card p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold">{s.t}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <p className="mt-12 text-sm text-muted-foreground">
            {company.name} · {company.address}
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
