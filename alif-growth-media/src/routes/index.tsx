import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Layers3, MonitorSmartphone, ShoppingBag, Workflow } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { company } from "@/content/site";
import "@/experience-home.css";

const title = "Alif Growth Media | Thoughtful Digital Experiences";
const description =
  "Alif Growth Media designs and builds considered websites, e-commerce experiences and practical digital systems for growing businesses across India and the Gulf.";
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

const projects = [
  {
    name: "SAFA Fresh",
    category: "E-commerce · Retail",
    description: "A welcoming digital storefront for fresh food and everyday essentials.",
    image: "https://safa-foods-xuac.vercel.app/images/hero-ingredients.png",
    imageAlt: "Fresh ingredients photographed for SAFA Fresh",
    href: "https://safa-foods-xuac.vercel.app/",
    className: "agency-project--wide",
  },
  {
    name: "DT Interiors",
    category: "Brand website · Interiors",
    description: "A considered online presence for a home interiors and design studio.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Warm, contemporary residential architecture",
    href: "https://dt-interiors.vercel.app/",
    className: "",
  },
  {
    name: "Sumera Collections",
    category: "E-commerce · Fashion",
    description: "A product-led shopping experience for contemporary ethnic wear.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fashion editorial image used for the Sumera Collections storefront",
    href: "https://sumeeracollections.vercel.app/",
    className: "",
  },
];

const services = [
  {
    number: "01",
    icon: MonitorSmartphone,
    title: "Websites & digital experiences",
    description:
      "Clear, distinctive websites that introduce your business, communicate your value, and help people take the next step.",
    items: ["Business websites", "Landing pages", "Content-managed websites"],
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "E-commerce & customer journeys",
    description:
      "Thoughtful storefronts and customer journeys that make it easier to discover products, enquire, and buy.",
    items: ["Online stores", "Product catalogues", "Enquiry and ordering flows"],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Digital systems & automation",
    description:
      "Practical tools that bring everyday work into better order, from follow-ups and operations to reporting.",
    items: ["Business portals", "WhatsApp workflows", "Dashboards and integrations"],
  },
];

function Index() {
  return (
    <SiteLayout>
      <div className="agency-home">
        <section className="agency-hero" aria-labelledby="agency-hero-title">
          <div className="agency-container">
            <div className="agency-hero__topline">
              <p className="agency-eyebrow"><span className="agency-status-dot" /> Independent digital studio</p>
              <p className="agency-hero__location">Warangal, India <span aria-hidden="true">·</span> Working across the Gulf</p>
            </div>

            <div className="agency-hero__grid">
              <div className="agency-hero__copy">
                <p className="agency-overline">Strategy · Design · Development</p>
                <h1 id="agency-hero-title" className="agency-hero__title">
                  Thoughtful digital work.
                  <em>Built to move you forward.</em>
                </h1>
                <p className="agency-hero__description">
                  We design and build websites, e-commerce experiences, and digital systems that help growing
                  businesses show up with confidence and work a little smarter.
                </p>
                <div className="agency-hero__actions">
                  <Link to="/contact" className="agency-button">
                    Discuss a project <ArrowUpRight aria-hidden="true" size={17} />
                  </Link>
                  <Link to="/work" className="agency-text-link">
                    Explore our work <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
                <div className="agency-hero__note">
                  <span className="agency-hero__note-icon"><Check aria-hidden="true" size={15} /></span>
                  <span>One considered partner from first conversation to launch.</span>
                </div>
              </div>

              <div className="agency-hero__visual" aria-label="Selected client work">
                <a
                  href="https://dt-interiors.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="agency-hero__image agency-hero__image--main"
                  aria-label="Explore DT Interiors"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
                    alt="Contemporary home architecture with carefully considered materials"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <span className="agency-image-caption">
                    <span><small>SELECTED PROJECT</small><strong>DT Interiors</strong></span>
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </span>
                </a>
                <a
                  href="https://safa-foods-xuac.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="agency-hero__image agency-hero__image--detail"
                  aria-label="Explore SAFA Fresh"
                >
                  <img
                    src="https://safa-foods-xuac.vercel.app/images/hero-ingredients.png"
                    alt="Fresh ingredients for SAFA Fresh"
                    decoding="async"
                  />
                </a>
                <div className="agency-hero__visual-label">
                  <span>ALIF / 001</span>
                  <span>Websites · Commerce · Systems</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="agency-capabilities" aria-label="Studio capabilities">
          <div className="agency-container agency-capabilities__inner">
            <span>Brand & digital strategy</span>
            <span>Web design & development</span>
            <span>E-commerce</span>
            <span>Custom digital systems</span>
          </div>
        </section>

        <section className="agency-work" aria-labelledby="agency-work-title">
          <div className="agency-container">
            <div className="agency-section-heading">
              <div>
                <p className="agency-section-label">Selected work <span>01 / 03</span></p>
                <h2 id="agency-work-title" className="agency-heading">
                  Different businesses.
                  <em>Considered solutions.</em>
                </h2>
              </div>
              <div className="agency-section-heading__aside">
                <p>
                  Every project starts with the business behind it. The result should feel right for the brand and
                  work well for the people using it.
                </p>
                <Link to="/work" className="agency-text-link">
                  View all projects <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </div>

            <div className="agency-project-grid">
              {projects.map((project, index) => (
                <a
                  className={"agency-project " + project.className}
                  href={project.href}
                  key={project.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"Explore the " + project.name + " project"}
                >
                  <div className="agency-project__image">
                    <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
                    <span className="agency-project__number">0{index + 1}</span>
                    <span className="agency-project__open"><ArrowUpRight aria-hidden="true" size={19} /></span>
                  </div>
                  <div className="agency-project__meta">
                    <div>
                      <p className="agency-project__category">{project.category}</p>
                      <h3>{project.name}</h3>
                    </div>
                    <ArrowUpRight className="agency-project__arrow" aria-hidden="true" size={20} />
                  </div>
                  <p className="agency-project__description">{project.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="agency-services" aria-labelledby="agency-services-title">
          <div className="agency-container">
            <div className="agency-section-heading agency-section-heading--services">
              <div>
                <p className="agency-section-label">What we do <span>02 / 03</span></p>
                <h2 id="agency-services-title" className="agency-heading">
                  The right work.
                  <em>Done with care.</em>
                </h2>
              </div>
              <p className="agency-services__intro">
                A focused set of capabilities, brought together around what your business actually needs.
              </p>
            </div>

            <div className="agency-service-list">
              {services.map((service) => {
                const ServiceIcon = service.icon;
                return (
                  <article className="agency-service" key={service.number}>
                    <div className="agency-service__number">{service.number}</div>
                    <div className="agency-service__icon"><ServiceIcon aria-hidden="true" size={22} strokeWidth={1.6} /></div>
                    <div className="agency-service__copy">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    <div className="agency-service__includes">
                      {service.items.map((item) => <span key={item}>{item}</span>)}
                    </div>
                    <Link to="/services" className="agency-service__link" aria-label={"Explore " + service.title}>
                      <ArrowUpRight aria-hidden="true" size={20} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="agency-statement" aria-labelledby="agency-statement-title">
          <div className="agency-container agency-statement__grid">
            <p className="agency-section-label">A good partner makes the work better</p>
            <div>
              <h2 id="agency-statement-title">
                Good digital work is equal parts <em>clarity, craft, and usefulness.</em>
              </h2>
              <p>
                We bring strategy, design, and engineering into one conversation—so the result looks considered,
                feels simple to use, and makes sense for the business behind it.
              </p>
              <Link to="/about" className="agency-statement__link">
                Get to know the studio <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="agency-process" aria-labelledby="agency-process-title">
          <div className="agency-container">
            <div className="agency-section-heading agency-section-heading--process">
              <div>
                <p className="agency-section-label">A straightforward process <span>03 / 03</span></p>
                <h2 id="agency-process-title" className="agency-heading">
                  Clear from the start.
                  <em>Thoughtful all the way through.</em>
                </h2>
              </div>
            </div>
            <div className="agency-process-grid">
              <article>
                <span>01</span>
                <h3>Understand</h3>
                <p>We start with your goals, your customers, and what needs to work better.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Design & build</h3>
                <p>We shape the experience and build the right solution around the brief.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Launch & support</h3>
                <p>We help you launch confidently, understand the system, and plan what comes next.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="agency-contact" aria-labelledby="agency-contact-title">
          <div className="agency-container agency-contact__inner">
            <div>
              <p className="agency-section-label">Have a project in mind?</p>
              <h2 id="agency-contact-title">
                Let’s make something <em>worth coming back to.</em>
              </h2>
              <p>Tell us what you’re building, improving, or figuring out. We’ll start with a useful conversation.</p>
            </div>
            <div className="agency-contact__actions">
              <Link to="/contact" className="agency-button agency-button--light">
                Start a conversation <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="agency-contact__whatsapp">
                Or message us on WhatsApp <ArrowRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
