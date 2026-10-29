"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Server,
  Users,
  Headphones,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { EASE } from "@/components/motion/primitives";

export function HybridTechTeamBanner() {
  const [activeTab, setActiveTab] = useState<"alif" | "inHouse" | "freelancer">("alif");

  const pillars = [
    {
      icon: Code2,
      title: "We Build",
      desc: "Custom websites with visual editors, WhatsApp CRMs & mobile cash trackers.",
      tag: "Custom Engineered",
    },
    {
      icon: Server,
      title: "We Manage",
      desc: "Cloud servers, automated daily backups, security & 99.9% uptime handled 24/7.",
      tag: "Zero Tech Stress",
    },
    {
      icon: Users,
      title: "We Train",
      desc: "Simple mobile-first screens so floor staff become proficient in 5 minutes.",
      tag: "Easy for Staff",
    },
    {
      icon: Headphones,
      title: "VIP Hotline",
      desc: "Message your dedicated Alif partner on WhatsApp whenever you need an update.",
      tag: "Direct WhatsApp",
    },
  ];

  const comparisonData = {
    alif: {
      title: "Alif Hybrid Team",
      badge: "Recommended for Local Businesses",
      color: "border-primary bg-primary/5",
      points: [
        { label: "Cost & Risk", val: "₹0 Upfront Risk · Pay only after you succeed", good: true },
        {
          label: "Ongoing Upkeep",
          val: "100% Fully Managed 24/7 (servers, backups, updates)",
          good: true,
        },
        {
          label: "Customization",
          val: "Tailor-made in your brand's name for your exact flow",
          good: true,
        },
        { label: "Support", val: "Direct WhatsApp hotline with fast replies", good: true },
      ],
    },
    inHouse: {
      title: "In-House IT Hire",
      badge: "Expensive for Local Shops",
      color: "border-border bg-card/60",
      points: [
        { label: "Cost & Risk", val: "₹60,000 to ₹1,00,000+ monthly fixed salary", good: false },
        {
          label: "Ongoing Upkeep",
          val: "Requires technical manager to supervise daily work",
          good: false,
        },
        { label: "Customization", val: "Limited to what 1 junior developer knows", good: false },
        { label: "Support", val: "Office hours only · Sick leave & vacation delays", good: false },
      ],
    },
    freelancer: {
      title: "Freelance Developers",
      badge: "High Disappearance Risk",
      color: "border-border bg-card/60",
      points: [
        { label: "Cost & Risk", val: "High upfront quote with surprise extra fees", good: false },
        {
          label: "Ongoing Upkeep",
          val: "Disappears after delivery · No long-term maintenance",
          good: false,
        },
        { label: "Customization", val: "Cloned templates · Hard to edit yourself", good: false },
        { label: "Support", val: "Unresponsive phone calls when your site breaks", good: false },
      ],
    },
  };

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 bg-gradient-to-b from-secondary/30 via-background to-secondary/15">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span>Your Dedicated Hybrid Tech Partner</span>
          </div>
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground">
            You run the business. <br className="hidden sm:inline" />
            <span className="gradient-gold-text">
              We build & manage your complete online systems.
            </span>
          </h2>
          <p className="mt-3 text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl mx-auto">
            No full-time coders to hire. No disappearing freelancers. We build your custom tools and
            actively manage your tech every single day.
          </p>
        </div>

        {/* 4 Pillars Grid (Compact, Visual, Mobile-first) */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: EASE }}
                className="surface-card flex flex-col justify-between p-4 sm:p-5 rounded-2xl border border-border/80 hover:border-primary/40 transition-all hover:shadow-[var(--shadow-lift)]"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-border/60">
                  <span className="text-[10px] font-semibold text-primary uppercase tracking-wider block">
                    {p.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile & Desktop Comparison */}
        <div className="mt-10 sm:mt-12 rounded-3xl border border-border/80 bg-card p-5 sm:p-7 lg:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-border">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                How We Compare to Other Options
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Why smart local owners avoid in-house overhead and freelance risks
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 self-start sm:self-auto">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Full Ownership Guarantee</span>
            </div>
          </div>

          {/* Mobile Tab Selector (shown on mobile, hidden on md+) */}
          <div className="flex md:hidden gap-1.5 p-1 bg-muted/60 rounded-xl mb-5">
            <button
              onClick={() => setActiveTab("alif")}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === "alif"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Alif Hybrid Team
            </button>
            <button
              onClick={() => setActiveTab("inHouse")}
              className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === "inHouse"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              In-House IT
            </button>
            <button
              onClick={() => setActiveTab("freelancer")}
              className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === "freelancer"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Freelancer
            </button>
          </div>

          {/* Mobile Card View (md:hidden) */}
          <div className="block md:hidden">
            <div className={`p-4 rounded-2xl border ${comparisonData[activeTab].color}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-sm text-foreground">
                  {comparisonData[activeTab].title}
                </span>
                <span className="text-[10px] font-semibold text-muted-foreground">
                  {comparisonData[activeTab].badge}
                </span>
              </div>
              <div className="space-y-3 pt-2 border-t border-border/60">
                {comparisonData[activeTab].points.map((pt) => (
                  <div key={pt.label} className="text-xs">
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block">
                      {pt.label}
                    </span>
                    <div className="flex items-start gap-1.5 mt-0.5">
                      {pt.good ? (
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-destructive/80 shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`font-medium ${pt.good ? "text-foreground font-semibold" : "text-muted-foreground"}`}
                      >
                        {pt.val}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Table View (hidden on mobile, shown on md+) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground text-[11px] uppercase tracking-wider">
                  <th className="py-2.5 pr-4 font-semibold">Key Factor</th>
                  <th className="py-2.5 px-3 font-semibold text-muted-foreground/70">
                    In-House Coders
                  </th>
                  <th className="py-2.5 px-3 font-semibold text-muted-foreground/70">Freelancer</th>
                  <th className="py-2.5 pl-3 font-bold text-primary bg-primary/5 rounded-t-lg">
                    Alif Hybrid Team
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3 pr-4 font-semibold text-foreground">Upfront Investment</td>
                  <td className="py-3 px-3 text-muted-foreground">₹60k–₹1L/mo fixed payroll</td>
                  <td className="py-3 px-3 text-muted-foreground">High quotes + surprise fees</td>
                  <td className="py-3 pl-3 font-bold text-primary bg-primary/5">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>₹0 Upfront Risk (Success First)</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3 pr-4 font-semibold text-foreground">Daily Upkeep & Cloud</td>
                  <td className="py-3 px-3 text-muted-foreground">
                    Requires daily technical management
                  </td>
                  <td className="py-3 px-3 text-muted-foreground">Zero support after delivery</td>
                  <td className="py-3 pl-3 font-bold text-primary bg-primary/5">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>100% Fully Managed 24/7</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3 pr-4 font-semibold text-foreground">System Customization</td>
                  <td className="py-3 px-3 text-muted-foreground">Limited to 1 person's skill</td>
                  <td className="py-3 px-3 text-muted-foreground">Extra charge for every tweak</td>
                  <td className="py-3 pl-3 font-bold text-primary bg-primary/5">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Tailored in Your Business Name</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3 pr-4 font-semibold text-foreground">Support Speed</td>
                  <td className="py-3 px-3 text-muted-foreground">Office hours only</td>
                  <td className="py-3 px-3 text-muted-foreground">Ignored calls when busy</td>
                  <td className="py-3 pl-3 font-bold text-primary bg-primary/5">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Direct VIP WhatsApp Hotline</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-muted-foreground text-center sm:text-left">
              Get an entire tech team in your corner with zero payroll overhead.
            </span>
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow hover:opacity-95 transition-all"
            >
              <span>Get Your Tech Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
