import { Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

import { company } from "@/content/site";

export function FloatingActions() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 sm:bottom-5 sm:right-5 sm:gap-3"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.a
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        href={company.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Alif Growth Media on WhatsApp"
        className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] sm:px-5 sm:py-3"
      >
        <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        href={company.phoneHref}
        aria-label="Call Alif Growth Media"
        className="flex items-center gap-2 rounded-full bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-[var(--shadow-lift)] ring-1 ring-border sm:px-5 sm:py-3"
      >
        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="hidden sm:inline">Call</span>
      </motion.a>
    </motion.div>
  );
}
