import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, MoveUpRight } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import heroArt from "@/assets/hero-abstract.jpg";
import { collaborations, company, services, steps } from "@/content/site";

const title = "Alif Growth Media | Digital Systems for Ambitious Businesses";
const description =
  "Alif Growth Media designs and engineers business websites, visual content systems, WhatsApp CRM workflows, invoicing tools and mobile dashboards for businesses in Telangana and the Gulf.";
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
  return (
    <SiteLayout>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="site-container">
          <div className="home-hero__topline">
            <p className="eyebrow"><span className="eyebrow__dot" /> Independent digital systems studio</p>
            <p className="home-hero__location">Warangal, Telangana <span>·</span> India &amp; GCC</p>
          </div>

          <div className="home-hero__body">
            <div className="home-hero__copy">
              <Reveal>
                <h1 id="home-title" className="home-hero__title">
                  Built for the way
                  <br />
                  you <em>actually work.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="home-hero__intro">
                  We design and engineer the digital systems behind growing businesses — from a memorable online
                  presence to the tools that keep customers, teams and daily operations moving.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="home-hero__actions">
                  <Link to="/contact" className="button-primary">
                    Free Tech Architecture Audit <ArrowUpRight aria-hidden="true" size={17} />
                  </Link>
                  <Link to="/work" className="text-link">
                    Explore our work <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </Reveal>
              <div className="home-hero__footnote">
                <span className="home-hero__footnote-mark"><ArrowDown aria-hidden="true" size={15} /></span>
                <span>From the first impression<br />to everyday operations.</span>
              </div>
            </div>

            <Reveal delay={0.16} className="home-hero__visual-wrap">
              <Parallax distance={10} scale={[1, 1.025]} className="home-hero__visual">
                <img
                  src={heroArt}
                  alt="Abstract visual artwork representing a connected digital business system"
                  width={1200}
                  height={1200}
                  fetchPriority="high"
                  decoding="async"
                  className="home-hero__image"
                />
                <div className="home-hero__visual-shade" />
                <div className="home-hero__visual-top">
                  <span>ALIF / SYSTEMS STUDIO</span>
                  <span>001 — 004</span>
                </div>
                <div className="home-hero__visual-bottom">
                  <p>Technology should feel<br /><em>like an advantage.</em></p>
                  <Link to="/services" aria-label="Explore Alif Growth Media services" className="home-hero__visual-link">
                    <MoveUpRight aria-hidden="true" size={20} />
                  </Link>
                </div>
              </Parallax>
              <div className="home-hero__visual-note">
                <span className="eyebrow">Built around you</span>
                <p>Clearer journeys. Simpler operations. Systems you can own.</p>
              </div>
            </Reveal>
          </div>

          <div className="home-hero__services" aria-label="What we do">
            <span>Digital strategy</span>
            <span>Web engineering</span>
            <span>Business automation</span>
            <span>Operational intelligence</span>
          </div>
        </div>
      </section>

      <section className="partner-strip" aria-label="Selected client partners">
        <div className="site-container partner-strip__inner">
          <p className="eyebrow">Made with businesses<br />built to move forward</p>
          <div className="partner-strip__logos">
            {collaborations.map((client) => (
              <a key={client.name} href={client.href} target="_blank" rel="noopener noreferrer" aria-label={"Visit " + client.name}>
                <img src={client.logo} alt={client.name} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-intro section-pad" aria-labelledby="studio-intro-title">
        <div className="site-container studio-intro__grid">
          <div className="studio-intro__label">
            <p className="eyebrow">The Alif approach / 01</p>
            <span className="studio-intro__vertical">DESIGNED WITH INTENT</span>
          </div>
          <div className="studio-intro__content">
            <Reveal>
              <h2 id="studio-intro-title" className="editorial-heading">
                Good design earns attention.
                <br />
                <em>Good systems earn trust.</em>
              </h2>
            </Reveal>
            <div className="studio-intro__bottom">
              <p>
                Your website should do more than look polished. It should help people understand your offer, make the
                next step obvious, and connect smoothly with how your business runs behind the scenes.
              </p>
              <Link to="/about" className="text-link">
                Get to know the studio <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="selected-work section-pad" id="selected-work" aria-labelledby="selected-work-title">
        <div className="site-container">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Selected work / 02</p>
              <h2 id="selected-work-title" className="editorial-heading">
                Different businesses.
                <br />
                <em>Thoughtful digital foundations.</em>
              </h2>
            </div>
            <div className="section-heading__aside">
              <p>Each engagement starts with the real problem, then builds the right digital experience around it.</p>
              <Link to="/work" className="text-link">View all work <ArrowRight aria-hidden="true" size={16} /></Link>
            </div>
          </div>

          <Stagger className="project-grid">
            {collaborations.map((client, i) => (
              <StaggerItem key={client.name} lift className="project-grid__item">
                <a href={client.href} target="_blank" rel="noopener noreferrer" className="project-card">
                  <div className={"project-card__stage project-card__stage--" + (i + 1)}>
                    <span className="project-card__index">0{i + 1} / 03</span>
                    <div className="project-card__artwork">
                      <img src={client.logo} alt={client.name + " brand visual"} loading="lazy" />
                    </div>
                    <span className="project-card__open">Open project <ArrowUpRight aria-hidden="true" size={16} /></span>
                  </div>
                  <div className="project-card__details">
                    <div>
                      <p className="eyebrow">{client.industry}</p>
                      <h3>{client.name}</h3>
                    </div>
                    <ArrowUpRight className="project-card__arrow" aria-hidden="true" size={21} />
                  </div>
                  <p className="project-card__scope">{client.scope}</p>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="services-overview section-pad" aria-labelledby="services-overview-title">
        <div className="site-container">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">What we make / 03</p>
              <h2 id="services-overview-title" className="editorial-heading">
                Built around your
                <br />
                <em>real-world workflow.</em>
              </h2>
            </div>
            <div className="section-heading__aside">
              <p>One accountable technical partner for the website, customer journey and operating tools your business needs.</p>
              <Link to="/services" className="text-link">Explore services <ArrowRight aria-hidden="true" size={16} /></Link>
            </div>
          </div>

          <div className="service-list">
            {services.map((service, i) => (
              <Link key={service.slug} to="/services" hash={service.slug} className="service-row">
                <span className="service-row__number">0{i + 1}</span>
                <div className="service-row__main">
                  <h3>{service.t}</h3>
                  <p>{service.b}</p>
                </div>
                <span className="service-row__action" aria-label={"Explore " + service.t}>
                  <ArrowUpRight aria-hidden="true" size={19} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-manifesto section-pad" aria-labelledby="manifesto-title">
        <div className="site-container studio-manifesto__grid">
          <div>
            <p className="eyebrow">A partner, not a hand-off / 04</p>
            <h2 id="manifesto-title" className="editorial-heading">
              Clarity in the brief.
              <br />
              <em>Care in the build.</em>
              <br />
              Confidence after launch.
            </h2>
          </div>
          <div className="studio-manifesto__right">
            <p className="studio-manifesto__lead">
              We bring strategy, design and engineering into one conversation — so the finished product feels
              coherent to your customers and practical for the people who use it every day.
            </p>
            <ul className="manifesto-list">
              <li><Check aria-hidden="true" size={16} /> Clear scope before work begins</li>
              <li><Check aria-hidden="true" size={16} /> Responsive, accessible interfaces</li>
              <li><Check aria-hidden="true" size={16} /> Ownership and handover planned in</li>
              <li><Check aria-hidden="true" size={16} /> Support that continues beyond launch</li>
            </ul>
            <Link to="/about" className="text-link">How we work <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="process-section section-pad" aria-labelledby="process-title">
        <div className="site-container">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">A simple process / 05</p>
              <h2 id="process-title" className="editorial-heading">Good work is a <em>shared process.</em></h2>
            </div>
            <p className="section-heading__description">A clear path from the first conversation to a system your team can use with confidence.</p>
          </div>
          <Stagger className="process-grid">
            {steps.map((step, i) => (
              <StaggerItem key={step.t} className="process-step">
                <span className="process-step__number">0{i + 1}</span>
                <h3>{step.t}</h3>
                <p>{step.b}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="prototype-promo" aria-labelledby="prototype-promo-title">
        <div className="site-container prototype-promo__inner">
          <div className="prototype-promo__visual" aria-hidden="true">
            <div className="prototype-promo__window">
              <span className="prototype-promo__window-top"><i /><i /><i /> <b>ALIF / WORKING PROTOTYPE</b></span>
              <div className="prototype-promo__window-body">
                <span className="prototype-promo__mini-label">A better way to work</span>
                <span className="prototype-promo__line prototype-promo__line--long" />
                <span className="prototype-promo__line prototype-promo__line--short" />
                <div className="prototype-promo__tiles"><i /><i /><i /></div>
                <span className="prototype-promo__window-button">Open dashboard ↗</span>
              </div>
            </div>
          </div>
          <div className="prototype-promo__copy">
            <p className="eyebrow">Explore the possibilities / 06</p>
            <h2 id="prototype-promo-title" className="editorial-heading">See the system.<br /><em>Try it for yourself.</em></h2>
            <p>Explore working business tools — from visual content editing to customer pipelines and daily tracking — before we shape one around your operation.</p>
            <Link to="/work" className="button-primary">Explore live prototypes <ArrowUpRight aria-hidden="true" size={17} /></Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's build something that works harder for your business."
        body="Start with a complimentary architecture audit. We'll map the friction, explain the trade-offs, and give you a clear next step before you commit."
      />
    </SiteLayout>
  );
}
