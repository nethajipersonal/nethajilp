"use client";

import { useActionState } from "react";
import { ArrowRight, ChevronDown, FileText, Lock, Mail, PenLine, Send, User } from "lucide-react";
import { motion } from "framer-motion";
import { submitContactForm, type ContactFormState } from "@/app/actions";

const initialState: ContactFormState = { status: "idle" };

const subjects = ["Project Inquiry", "Job Opportunity", "Collaboration", "General Question"];

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="mt-6 grid gap-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-muted mb-1.5 block text-xs font-medium">
            Your Name <span className="text-accent-purple">*</span>
          </label>
          <div className="border-border bg-background focus-within:border-accent-purple flex items-center gap-2 rounded-xl border px-3.5 py-2.5 transition">
            <User className="text-muted h-4 w-4 shrink-0" />
            <input
              name="name"
              placeholder="John Doe"
              required
              className="placeholder:text-muted/60 w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>
        <div>
          <label className="text-muted mb-1.5 block text-xs font-medium">
            Your Email <span className="text-accent-purple">*</span>
          </label>
          <div className="border-border bg-background focus-within:border-accent-purple flex items-center gap-2 rounded-xl border px-3.5 py-2.5 transition">
            <Mail className="text-muted h-4 w-4 shrink-0" />
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="placeholder:text-muted/60 w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="text-muted mb-1.5 block text-xs font-medium">
          Subject <span className="text-accent-purple">*</span>
        </label>
        <div className="border-border bg-background focus-within:border-accent-purple flex items-center gap-2 rounded-xl border px-3.5 py-2.5 transition">
          <FileText className="text-muted h-4 w-4 shrink-0" />
          <select
            name="subject"
            required
            defaultValue="Project Inquiry"
            className="w-full appearance-none bg-transparent text-sm outline-none"
          >
            {subjects.map((s) => (
              <option key={s} value={s} className="bg-surface text-foreground">
                {s}
              </option>
            ))}
          </select>
          <ChevronDown className="text-muted h-4 w-4 shrink-0" />
        </div>
      </div>

      <div>
        <label className="text-muted mb-1.5 block text-xs font-medium">
          Your Message <span className="text-accent-purple">*</span>
        </label>
        <div className="border-border bg-background focus-within:border-accent-purple flex gap-2 rounded-xl border px-3.5 py-2.5 transition">
          <PenLine className="text-muted mt-0.5 h-4 w-4 shrink-0" />
          <textarea
            name="message"
            placeholder="Tell me about your project, idea or just say hi..."
            required
            rows={4}
            className="placeholder:text-muted/60 w-full resize-none bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={isPending}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-gradient-accent mt-1 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90 hover:shadow-[0_0_24px_rgba(168,85,247,0.5)] disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        {isPending ? "Sending..." : "Send Message"}
        <ArrowRight className="h-4 w-4" />
      </motion.button>

      <p className="text-muted flex items-center justify-center gap-1.5 text-center text-xs">
        <Lock className="h-3 w-3 shrink-0" />
        Your information is safe with me. I&apos;ll never share it with anyone.
      </p>

      {state.message && (
        <p
          className={`text-center text-sm ${state.status === "success" ? "text-green-400" : "text-red-400"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
