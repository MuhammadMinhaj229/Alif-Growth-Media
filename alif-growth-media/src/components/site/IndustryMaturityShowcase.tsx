"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Store,
  ShoppingBag,
  Dumbbell,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Clock,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
  Layers,
  ChevronRight,
  Check
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, getPrototypeWhatsappUrl } from "@/content/site";
import { EASE } from "@/components/motion/primitives";

interface IndustryTrack {
  id: "retail" | "wholesale" | "fitness" | "services";
  title: string;
  subtitle: string;
  icon: typeof Store;
  badge: string;
  clientExamples: string[];
  before: {
    title: string;
    description: string;
    painPoints: string[];
  };
  after: {
    title: string;
    description: string;
    benefits: string[];
    deployedTools: string[];
    metric: string;
    metricLabel: string;
  };
  whatsappText: string;
}

const INDUSTRIES: IndustryTrack[] = [
  {
    id: "retail",
    title: "Retail & Showrooms",
    subtitle: "Fashion Boutiques · Luxury Interiors · Jewellery & Furniture",
    icon: Store,
    badge: "High Growth",
    clientExamples: ["Sumera Collections", "DT Interiors"],
    before: {
      title: "Traditional Walk-in Reality",
      description: "Business relies purely on foot traffic. Website is static and requires an expensive developer to change festive banners, seasonal prices, or new arrivals.",
      painPoints: [
        "Customer inquiries getting lost in chaotic personal WhatsApp chats",
        "Unable to update new collection photos without waiting weeks for coders",
        "Zero tracking of which products customers browse before visiting"
      ]
    },
    after: {
      title: "Matured Digital Showroom",
      description: "A fast online portal with built-in visual editor: owner edits prices and banners in seconds from their phone. Inquiries route automatically to a branded WhatsApp product catalog.",
      benefits: [
        "In-place visual photo & price editor with 1-click instant publish",
        "Automated WhatsApp catalog replies to every inbound message",
        "Customer repeat purchase history & VIP tier tracking"
      ],
      deployedTools: ["Visual Website CMS", "WhatsApp Sales Hub", "Catalogue Bot"],
      metric: "+42%",
      metricLabel: "More Showroom Inquiries Converted"
    },
    whatsappText: "Hello Alif Growth Media, I run a retail showroom and want to upgrade our digital store and WhatsApp customer system."
  },
  {
    id: "wholesale",
    title: "Supermarkets & Wholesale",
    subtitle: "Daily Groceries · Fresh Foods · Bulk Distributors · FMCG",
    icon: ShoppingBag,
    badge: "High Volume",
    clientExamples: ["SAFA Fresh Produce", "Wholesale Distributors"],
    before: {
      title: "Paper Slip & Register Headaches",
      description: "Bills written on paper slips. At the end of every busy day, physical cash in drawer never matches UPI QR code transaction records.",
      painPoints: [
        "Lost physical paper bills and uncollected customer dues",
        "End-of-day reconciliation takes 1-2 hours of manual bookkeeping",
        "Stock running out unexpectedly without low-inventory warnings"
      ]
    },
    after: {
      title: "Streamlined Cashflow & Stock Engine",
      description: "1-Tap digital invoicing dispatched directly to customer WhatsApp with QR payment. One unified screen shows total daily cash collected, UPI received, and outstanding credits.",
      benefits: [
        "1-Tap digital invoice to customer WhatsApp (100% paperless)",
        "Daily Cash vs. UPI reconciliation ledger updated in real time",
        "Automated low-stock threshold alerts before items sell out"
      ],
      deployedTools: ["1-Tap Invoicing Hub", "Daily Cash vs UPI Ledger", "Stock Tracker"],
      metric: "100%",
      metricLabel: "Daily Cash vs. UPI Match Accuracy"
    },
    whatsappText: "Hello Alif Growth Media, I operate a supermarket/wholesale business and want to automate our billing, cash ledger, and inventory."
  },
  {
    id: "fitness",
    title: "Gyms, Clinics & Academies",
    subtitle: "Fitness Clubs · Wellness Centers · Training Academies · Studios",
    icon: Dumbbell,
    badge: "Recurring Model",
    clientExamples: ["E-RepCount Gym Manager", "Health & Training Centers"],
    before: {
      title: "Chaotic Paper Member Cards",
      description: "Members forget when their monthly plan expires. Shop or gym staff feel awkward calling people manually to collect overdue fees.",
      painPoints: [
        "Uncollected membership fees causing 15-20% revenue leakage every month",
        "Paper register cards get lost, torn, or misplaced by desk staff",
        "No easy way to know who is active vs. expired today"
      ]
    },
    after: {
      title: "Automated Membership Retention Hub",
      description: "Every member has a digital profile on the owner's phone. Automated friendly WhatsApp reminders send payment links 3 days before renewal dates.",
      benefits: [
        "Automated WhatsApp fee renewal reminders with UPI links",
        "Color-coded membership statuses (Active, Expiring Soon, Overdue)",
        "Instant monthly revenue forecasting and attendance logging"
      ],
      deployedTools: ["Membership Hub", "Automated WhatsApp Alerts", "Collection Dashboard"],
      metric: "95%+",
      metricLabel: "On-Time Monthly Fee Collection"
    },
    whatsappText: "Hello Alif Growth Media, I manage a gym/clinic/academy and want to automate member records and automated WhatsApp fee reminders."
  },
  {
    id: "services",
    title: "Contractors & Consultancies",
    subtitle: "Interior Designers · Event Curators · Architects · B2B Firms",
    icon: Briefcase,
    badge: "Enterprise",
    clientExamples: ["Bespoke Interior Studios", "Project Consultants"],
    before: {
      title: "Unorganized Leads & Manual Invoices",
      description: "Client inquiries scattered across personal Instagram DMs, calls, and emails. Invoices manually typed into Word or Excel, causing delayed milestones.",
      painPoints: [
        "Inconsistent brand perception when sending raw text messages or Word docs",
        "Delayed client payments due to lack of itemized digital invoices",
        "Hard to track which project stage each client is currently in"
      ]
    },
    after: {
      title: "Full-Stack Brand & Client Pipeline",
      description: "High-credibility web showcase featuring previous work, instant lead qualification form, and milestone-based digital billing with automated payment receipts.",
      benefits: [
        "High-performance portfolio website with embedded enquiry forms",
        "Professional branded PDF invoice creation with instant WhatsApp dispatch",
        "Client stage pipeline: Initial Inquiry -> Proposal -> Active Project -> Paid"
      ],
      deployedTools: ["Portfolio Showcase", "Lead Qualification Form", "Milestone Billing"],
      metric: "2.4x",
      metricLabel: "Faster Client Project Sign-offs"
    },
    whatsappText: "Hello Alif Growth Media, I run a consultancy/contracting service and need a custom client portal and milestone billing setup."
  }
];

export function IndustryMaturityShowcase() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryTrack["id"]>("retail");

  const current = INDUSTRIES.find((i) => i.id === selectedIndustry) || INDUSTRIES[0];
  const IconComponent = current.icon;

  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-20 lg:px-8 md:py-24 bg-background">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Organisations We Help Grow & Mature</span>
          </div>
          <h2 className="text-balance text-[clamp(1.75rem,5.2vw,2.8rem)] font-bold leading-[1.12] text-foreground">
            Built for local enterprises that want to operate like modern corporations
          </h2>
          <p className="mt-4 text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
            Whether you run a luxury retail showroom, a busy supermarket, a fitness club, or a professional service firm — we eliminate the daily chaos of manual registers and disconnected tools.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {INDUSTRIES.map((ind) => {
            const isSelected = selectedIndustry === ind.id;
            const TabIcon = ind.icon;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`relative flex flex-col items-start p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "border-primary bg-primary/5 shadow-md shadow-primary/5"
                    : "border-border/80 bg-card/60 hover:bg-card hover:border-border"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeIndustryGlow"
                    className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
                    transition={{ duration: 0.3, ease: EASE }}
                  />
                )}
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isSelected ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {ind.badge}
                  </span>
                </div>
                <span className="font-bold text-sm sm:text-base text-foreground block">
                  {ind.title}
                </span>
                <span className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                  {ind.subtitle.split("·")[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Card */}
        <div className="mt-8 rounded-3xl border border-border/90 bg-card/90 shadow-[var(--shadow-lift)] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="p-6 sm:p-8 lg:p-10"
            >
              {/* Header Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/80">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {current.title}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30">
                        {current.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                      {current.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto bg-muted/60 px-3.5 py-1.5 rounded-xl border border-border/60 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Real Case References:</span>
                  <span>{current.clientExamples.join(" & ")}</span>
                </div>
              </div>

              {/* Transformation Comparison Grid */}
              <div className="mt-8 grid md:grid-cols-2 gap-6 lg:gap-8">
                {/* Before: Current Pain Points */}
                <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-destructive font-semibold text-xs uppercase tracking-wider mb-2">
                      <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                      <span>Before Alif: The Traditional Bottlenecks</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-foreground">
                      {current.before.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {current.before.description}
                    </p>

                    <div className="mt-5 space-y-2.5 border-t border-destructive/15 pt-4">
                      {current.before.painPoints.map((pt) => (
                        <div key={pt} className="flex items-start gap-2 text-xs text-foreground/80">
                          <span className="w-4 h-4 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                            ✕
                          </span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-destructive/15 text-[11px] font-medium text-destructive/80">
                    Causes owner stress, lost leads, and manual bookkeeping friction.
                  </div>
                </div>

                {/* After: The Mature Operating Engine */}
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-primary/10 to-card p-5 sm:p-6 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      <span>After Alif: Matured Digital System</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-foreground">
                      {current.after.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                      {current.after.description}
                    </p>

                    <div className="mt-5 space-y-2.5 border-t border-primary/20 pt-4">
                      {current.after.benefits.map((b) => (
                        <div key={b} className="flex items-start gap-2 text-xs text-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5 font-bold" />
                          <span className="font-medium">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metric Strip */}
                  <div className="mt-6 pt-4 border-t border-primary/20 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-muted-foreground block font-semibold">
                        {current.after.metricLabel}
                      </span>
                      <span className="text-2xl sm:text-3xl font-bold font-display text-primary">
                        {current.after.metric}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {current.after.deployedTools.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold bg-primary/15 text-primary border border-primary/25 px-2 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Callout Bar */}
              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-muted-foreground text-center sm:text-left">
                  <span className="font-semibold text-foreground">Customized for your exact brand identity</span> · Staff trained in under 10 minutes · ₹0 upfront fee until you profit.
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${company.whatsappPhone}?text=${encodeURIComponent(current.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-2.5 text-xs font-semibold shadow hover:opacity-95 transition-all w-full sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Talk With Our Tech Team on WhatsApp</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground px-4 py-2.5 text-xs font-semibold transition-colors w-full sm:w-auto"
                  >
                    <span>Request Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
