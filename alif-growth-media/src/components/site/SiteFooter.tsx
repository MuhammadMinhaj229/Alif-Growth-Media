import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import alifMark from "@/assets/alif-symbol.png";
import { company, navLinks, services } from "@/content/site";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/alifgrowthmedia/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alif-growth-media-2526453b2/" },
  { label: "YouTube", href: "https://www.youtube.com/@alifgrowthmedia" },
  { label: "X", href: "https://x.com/alifgrowthmedia" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__invitation">
          <div>
            <p className="eyebrow"><span className="eyebrow__dot" /> The next step / starts here</p>
            <h2>Good systems.<br /><em>Room to grow.</em></h2>
          </div>
          <Link to="/contact" className="site-footer__big-link">
            Tell us what you're building <span><ArrowUpRight aria-hidden="true" size={21} /></span>
          </Link>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="site-brand" aria-label="Alif Growth Media home">
              <span className="site-brand__mark"><img src={alifMark} alt="" width={40} height={40} loading="lazy" /></span>
              <span className="site-brand__wordmark"><strong>ALIF</strong><small>Growth Media</small></span>
            </Link>
            <p>A digital systems studio helping ambitious businesses create clearer customer experiences and smoother operations.</p>
            <span className="site-footer__location"><MapPin aria-hidden="true" size={14} /> {company.address}</span>
          </div>

          <div className="site-footer__column">
            <h3>Explore</h3>
            <ul>
              {navLinks.filter((link) => link.to !== "/").map((link) => (
                <li key={link.to}><Link to={link.to}>{link.label === "Software Systems" ? "Services" : link.label === "Client Platforms" ? "Work" : link.label === "About" ? "Studio" : link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <h3>Capabilities</h3>
            <ul>
              {services.map((service) => (
                <li key={service.slug}><Link to="/services" hash={service.slug}>{service.t}</Link></li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column site-footer__contact">
            <h3>Say hello</h3>
            <a href={"mailto:" + company.email}><Mail aria-hidden="true" size={15} /> {company.email}</a>
            <a href={company.phoneHref}><Phone aria-hidden="true" size={15} /> {company.phone}</a>
            <p>{company.hours}</p>
            <div className="site-footer__socials">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">{social.label}<ArrowUpRight aria-hidden="true" size={12} /></a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Alif Growth Media. All rights reserved.</span>
          <span>Made with intent in Telangana.</span>
          <div>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
