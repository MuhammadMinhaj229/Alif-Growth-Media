"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Users,
  Code2,
  Server,
  Headphones,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Zap
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/content/site";
import { Reveal, HoverLift, Stagger, StaggerItem, EASE } from "@/components/motion/primitives";

export function HybridTechTeamBanner() {
  const comparison = [
    {
      feature: "Upfront Investment",
      inHouse: "₹60,000+ / mo salary",
      freelancer: "High hourly quotes",
      genericSaaS: "Monthly USD subscriptions",
      alif: "₹0 Upfront Risk (Success First)"
    },
    {
      feature: "Daily Management & Uptime",
      inHouse: "Requires tech management",
      freelancer: "Zero support after launch",
      genericSaaS: "Self-serve ticket support",
      alif: "100% Fully Managed 24/7"
    },
    {
      feature: "System Customization",
      inHouse: "Limited to 1 person's skill",
      freelancer: "Extra charge for every tweak",
      genericSaaS: "Rigid corporate templates",
      alif: "Tailored to Your Exact Workflow"
    },
    {
      feature: "Support Channel",
      inHouse: "Internal office hours",
      freelancer: "Ignored phone calls",
      genericSaaS: "Slow email queue",
      alif: "Direct VIP WhatsApp Hotline"
    }
  ];

  const pillars = [
    {
      icon: Code2,
      title: "We Build Your Custom Systems",
      desc: "Websites with in-place visual editors, custom WhatsApp CRMs, 1-tap billing generators, and mobile KPI dashboards engineered specifically for your business."
    },
    {
      icon: Server,
      title: "We Manage & Maintain Daily",
      desc: "Cloud servers, database backups, security patches, speed optimization, and uptime are monitored continuously. You never have to touch a server or deal with code."
    },
    {
      icon: Users,
      title: "We Train Your Floor Staff",
      desc: "Our systems are built mobile-first with simple, intuitive screens so shop assistants, cashiers, and receptionists become proficient in under 10 minutes."
    },
    {
      icon: Headphones,
      title: "Dedicated WhatsApp Hotline",
      desc: "Need to change a store policy, launch a new festival promotion, or add a new team member? Send a message to your dedicated Alif tech partner and it gets done."
    }
  ];

  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-20 lg:px-8 md:py-24 border-y border-border bg-gradient-to-b from-secondary/20 via-background to-secondary/10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span>Your Hybrid Technical Partner</span>
          </div>
          <h2 className="text-balance text-[clamp(1.75rem,5.2vw,2.8rem)] font-bold leading-[1.12] text-foreground">
            You focus on your customers and sales. <br className="hidden sm:inline" />
            <span className="gradient-gold-text">We build and manage your complete technology.</span>
          </h2>
          <p className="mt-4 text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
            Hiring a full-time in-house software engineer is too expensive, and freelance developers vanish after delivering code. Alif Growth Media acts as your dedicated hybrid IT team—we build the custom software your business needs and actively run and manage it for you every single day.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                className="surface-card flex flex-col justify-between p-6 rounded-2xl border border-border/80 hover:border-primary/40 transition-all hover:shadow-[var(--shadow-lift)]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-border/60 text-[11px] font-semibold text-primary flex items-center gap-1">
                  <span>Included in Partnership</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Strategic Comparison Table */}
        <div className="mt-14 rounded-3xl border border-border/90 bg-card p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Why Local Businesses Choose Our Hybrid Model
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Comparing your options for running software systems in 2026
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Client Ownership Guaranteed</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground text-[11px] uppercase tracking-wider">
                  <th className="py-3 pr-4 font-semibold">Decision Factor</th>
                  <th className="py-3 px-3 font-semibold text-muted-foreground/70">In-House IT Hire</th>
                  <th className="py-3 px-3 font-semibold text-muted-foreground/70">Freelancer</th>
                  <th className="py-3 px-3 font-semibold text-muted-foreground/70">Corporate SaaS</th>
                  <th className="py-3 pl-3 font-bold text-primary bg-primary/5 rounded-t-lg">Alif Hybrid Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {comparison.map((c, i) => (
                  <tr key={c.feature} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3.5 pr-4 font-semibold text-foreground">{c.feature}</td>
                    <td className="py-3.5 px-3 text-muted-foreground">{c.inHouse}</td>
                    <td className="py-3.5 px-3 text-muted-foreground">{c.freelancer}</td>
                    <td className="py-3.5 px-3 text-muted-foreground">{c.genericSaaS}</td>
                    <td className="py-3.5 pl-3 font-bold text-primary bg-primary/5">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{c.alif}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              Ready to give your business a modern tech department without the payroll overhead?
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow transition-transform hover:opacity-95"
              >
                <span>Partner With Alif Today</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
