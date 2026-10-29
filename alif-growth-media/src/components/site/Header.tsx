import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";

import alifMark from "@/assets/alif-symbol.png";
import { useCoarsePointer } from "@/components/motion/primitives";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Studio" },
  { to: "/blog", label: "Insights" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const coarse = useCoarsePointer();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  const progress = coarse ? scrollYProgress : smoothProgress;

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled((previous) => {
          const next = window.scrollY > 20;
          return previous === next ? previous : next;
        });
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      className={scrolled || open ? "site-header is-active" : "site-header"}
    >
      <div className="site-header__inner">
        <Link to="/" className="site-brand" aria-label="Alif Growth Media — home" onClick={() => setOpen(false)}>
          <span className="site-brand__mark">
            <img src={alifMark} alt="" width={40} height={40} decoding="async" />
          </span>
          <span className="site-brand__wordmark">
            <strong>ALIF</strong>
            <small>Growth Media</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "site-nav__link is-active" }}
              className="site-nav__link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="site-header__cta">
          Let's talk <ArrowUpRight aria-hidden="true" size={16} />
        </Link>

        <button
          type="button"
          className="site-header__menu-button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-site-menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>

      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="site-header__progress"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-site-menu"
            key="mobile-site-menu"
            className="site-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="site-menu__top">
              <span className="eyebrow">Navigation / 01</span>
              <button type="button" className="site-menu__close" onClick={() => setOpen(false)} aria-label="Close navigation menu">
                <X aria-hidden="true" size={21} />
              </button>
            </div>
            <nav className="site-menu__links" aria-label="Mobile primary">
              {links.map((link, i) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "site-menu__link is-active" }}
                  className="site-menu__link"
                >
                  <span className="site-menu__number">0{i + 1}</span>
                  <span>{link.label}</span>
                  <ArrowUpRight aria-hidden="true" size={20} />
                </Link>
              ))}
            </nav>
            <div className="site-menu__bottom">
              <p>Have a good problem to solve?</p>
              <Link to="/contact" onClick={() => setOpen(false)} className="button-primary">
                Start a project <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
              <a href="mailto:hello.alifstudio@gmail.com" className="site-menu__email">hello.alifstudio@gmail.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
