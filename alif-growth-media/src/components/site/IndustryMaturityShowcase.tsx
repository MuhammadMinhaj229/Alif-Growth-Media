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
  MessageCircle,
  Check,
  X
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/content/site";
import { EASE } from "@/components/motion/primitives";

interface IndustryTrack {
  id: "retail" | "wholesale" | "fitness" | "services";
  title: string;
  subtitle: string;
  icon: typeof Store;
  badge: string;
  clientExamples: string;
  beforePoints: string[];
  afterPoints: string[];
  deployedTools: string[];
  metric: string;
  metricLabel: string;
  whatsappText: string;
}

const INDUSTRIES: IndustryTrack[] = [
  {
    id: "retail",
    title: "Retail & Showrooms",
    subtitle: "Fashion · Interiors · Jewellery",
    icon: Store,
    badge: "Showrooms",
    clientExamples: "Sumera Collections & DT Interiors",
    beforePoints: [
      "Inquiries lost in personal chat feeds",
      "Weeks of delay to change prices or photos",
      "Zero customer repeat purchase tracking"
    ],
    afterPoints: [
      "Visual editor: edit prices & photos from phone in seconds",
      "Instant automated WhatsApp catalog replies",
      "VIP repeat customer profile history"
    ],
    deployedTools: ["Visual CMS", "WhatsApp Sales Hub", "Catalog Bot"],
    metric: "+42%",
    metricLabel: "Inquiry Conversion",
    whatsappText: "Hello Alif Growth Media, I run a retail showroom and want to upgrade our digital store and WhatsApp customer system."
  },
  {
    id: "wholesale",
    title: "Supermarkets & Wholesale",
    subtitle: "Daily Marts · Fresh Foods · Bulk",
    icon: ShoppingBag,
    badge: "High Volume",
    clientExamples: "SAFA Fresh & Wholesalers",
    beforePoints: [
      "Handwritten paper slips & lost receipts",
      "Evening cash doesn't match UPI totals",
      "Unexpected stockouts during rush hours"
    ],
    afterPoints: [
      "1-Tap digital invoice to customer WhatsApp",
      "Real-time cash vs. UPI reconciliation ledger",
      "Automatic low-stock threshold alerts"
    ],
    deployedTools: ["1-Tap Invoicing", "Daily Cash vs UPI", "Stock Alerts"],
    metric: "100%",
    metricLabel: "Daily Register Accuracy",
    whatsappText: "Hello Alif Growth Media, I operate a supermarket/wholesale business and want to automate our billing, cash ledger, and inventory."
  },
  {
    id: "fitness",
    title: "Gyms & Academies",
    subtitle: "Fitness Clubs · Clinics · Studios",
    icon: Dumbbell,
    badge: "Memberships",
    clientExamples: "E-RepCount Gym Manager",
    beforePoints: [
      "Members forget monthly expiry dates",
      "Staff feel awkward calling for renewal fees",
      "Paper cards get torn, lost, or misplaced"
    ],
    afterPoints: [
      "Automatic WhatsApp fee reminders with UPI links",
      "Color-coded membership statuses (Active/Due)",
      "Instant monthly revenue tracking on phone"
    ],
    deployedTools: ["Member Roster", "Auto WhatsApp Alerts", "Dues Dashboard"],
    metric: "95%+",
    metricLabel: "On-Time Fee Collection",
    whatsappText: "Hello Alif Growth Media, I manage a gym/clinic/academy and want to automate member records and automated WhatsApp fee reminders."
  },
  {
    id: "services",
    title: "Contractors & Studios",
    subtitle: "Designers · Curators · Consultants",
    icon: Briefcase,
    badge: "Services",
    clientExamples: "Interior Studios & Agencies",
    beforePoints: [
      "Scattered DMs across Instagram, calls & texts",
      "Manual Word/Excel PDF invoices take hours",
      "Slow client project milestone approvals"
    ],
    afterPoints: [
      "High-speed portfolio web portal with lead form",
      "Branded PDF billing with instant WhatsApp link",
      "Project pipeline: Lead -> Active -> Paid"
    ],
    deployedTools: ["Portfolio Portal", "Lead Intake Bot", "Milestone Billing"],
    metric: "2.4x",
    metricLabel: "Faster Client Sign-offs",
    whatsappText: "Hello Alif Growth Media, I run a consultancy/contracting service and need a custom client portal and milestone billing setup."
  }
];

export function IndustryMaturityShowcase() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryTrack["id"]>("retail");

  const current = INDUSTRIES.find((i) => i.id === selectedIndustry) || INDUSTRIES[0];
  const IconComponent = current.icon;

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 md:py-20 bg-background">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Businesses We Grow & Mature</span>
          </div>
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground">
            Built for local businesses ready to operate like modern enterprises
          </h2>
          <p className="mt-2 text-pretty text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
            Select your industry to see the exact transformation we engineer for your business:
          </p>
        </div>

        {/* Scrollable / Responsive Industry Selector */}
        <div className="mt-6 sm:mt-8 flex overflow-x-auto gap-2.5 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-4 sm:overflow-visible no-scrollbar">
          {INDUSTRIES.map((ind) => {
            const isSelected = selectedIndustry === ind.id;
            const TabIcon = ind.icon;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`flex-shrink-0 w-[170px] sm:w-auto flex flex-col items-start p-3 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-sm"
                    : "border-border/70 bg-card/60 hover:bg-card hover:border-border"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isSelected ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {ind.badge}
                  </span>
                </div>
                <span className="font-bold text-xs sm:text-sm text-foreground block truncate w-full">
                  {ind.title}
                </span>
                <span className="text-[10px] text-muted-foreground truncate w-full block mt-0.5">
                  {ind.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Transformation Card */}
        <div className="mt-5 rounded-3xl border border-border/80 bg-card shadow-[var(--shadow-lift)] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="p-5 sm:p-7 lg:p-8"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-border/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {current.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {current.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-[11px] bg-muted/60 px-3 py-1.5 rounded-xl border border-border/60 text-muted-foreground self-start sm:self-auto">
                  <span className="font-semibold text-foreground">Proof: </span>
                  <span>{current.clientExamples}</span>
                </div>
              </div>

              {/* Transformation Comparison Grid */}
              <div className="mt-5 grid md:grid-cols-2 gap-4 sm:gap-6">
                {/* Before: Pain Points */}
                <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-destructive font-bold text-[10px] uppercase tracking-wider mb-2.5">
                      <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                      <span>Before Alif: Common Bottlenecks</span>
                    </div>

                    <div className="space-y-2">
                      {current.beforePoints.map((pt) => (
                        <div key={pt} className="flex items-start gap-2 text-xs text-foreground/80">
                          <X className="w-3.5 h-3.5 text-destructive shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="mt-4 pt-2.5 border-t border-destructive/15 text-[10px] font-medium text-destructive/80 block">
                    Causes owner stress & lost revenue.
                  </span>
                </div>

                {/* After: Matured System */}
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-primary font-bold text-[10px] uppercase tracking-wider mb-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      <span>After Alif: Matured Digital Setup</span>
                    </div>

                    <div className="space-y-2">
                      {current.afterPoints.map((b) => (
                        <div key={b} className="flex items-start gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5 font-bold" />
                          <span className="font-medium">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metric Strip */}
                  <div className="mt-4 pt-3 border-t border-primary/20 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-semibold">
                        {current.metricLabel}
                      </span>
                      <span className="text-xl sm:text-2xl font-bold font-display text-primary">
                        {current.metric}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {current.deployedTools.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-semibold bg-primary/15 text-primary border border-primary/25 px-2 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Callout Bar */}
              <div className="mt-5 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground text-center sm:text-left">
                  Staff trained in 5 minutes · ₹0 upfront fee until you succeed.
                </span>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${company.whatsappPhone}?text=${encodeURIComponent(current.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary text-primary-foreground px-4 py-2.5 text-xs font-semibold shadow hover:opacity-95 transition-all w-full sm:w-auto"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-1 rounded-xl border border-border bg-card hover:bg-muted text-foreground px-3.5 py-2.5 text-xs font-semibold transition-colors w-full sm:w-auto"
                  >
                    <span>Free Audit</span>
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
