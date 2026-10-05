"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

type Token = { text: string; cls?: string };
type Line = { indent?: number; tokens: Token[] };

const kw = "text-[#c678dd]";
const fn = "text-[#61afef]";
const str = "text-[#98c379]";
const num = "text-[#d19a66]";
const type = "text-[#e5c07b]";
const com = "text-[#5c6370] italic";
const plain = "text-[#abb2bf]";

const lines: Line[] = [
  { tokens: [{ text: "// about.tsx", cls: com }] },
  { tokens: [{ text: "type ", cls: kw }, { text: "Developer", cls: type }, { text: " = {", cls: plain }] },
  { indent: 1, tokens: [{ text: "name", cls: plain }, { text: ": ", cls: plain }, { text: "string", cls: type }, { text: ";", cls: plain }] },
  { indent: 1, tokens: [{ text: "experience", cls: plain }, { text: ": ", cls: plain }, { text: "number", cls: type }, { text: ";", cls: plain }] },
  { indent: 1, tokens: [{ text: "stack", cls: plain }, { text: ": ", cls: plain }, { text: "string", cls: type }, { text: "[];", cls: plain }] },
  { tokens: [{ text: "};", cls: plain }] },
  { tokens: [{ text: "" }] },
  { tokens: [{ text: "const ", cls: kw }, { text: "nethaji", cls: fn }, { text: ": Developer = {", cls: plain }] },
  { indent: 1, tokens: [{ text: "name: ", cls: plain }, { text: '"Nethaji LP"', cls: str }, { text: ",", cls: plain }] },
  { indent: 1, tokens: [{ text: "experience: ", cls: plain }, { text: "5", cls: num }, { text: ",", cls: plain }] },
  { indent: 1, tokens: [{ text: "stack: [", cls: plain }, { text: '"React"', cls: str }, { text: ", ", cls: plain }, { text: '"Next.js"', cls: str }, { text: "],", cls: plain }] },
  { tokens: [{ text: "};", cls: plain }] },
  { tokens: [{ text: "" }] },
  { tokens: [{ text: "export function ", cls: kw }, { text: "buildGreatThings", cls: fn }, { text: "() {", cls: plain }] },
  { indent: 1, tokens: [{ text: "return ", cls: kw }, { text: "nethaji.stack.map(ship);", cls: plain }] },
  { tokens: [{ text: "}", cls: plain }] },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.2 } },
};

const lineVariant = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export function CodeEditorCard() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: "radial-gradient(ellipse at 70% 30%, rgba(168,85,247,0.2) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="glass-card relative overflow-hidden rounded-2xl">
        <div className="border-border flex items-center gap-2 border-b px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="text-muted ml-3 font-mono text-xs">about.tsx</span>
        </div>

        <motion.pre
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]"
        >
          <code>
            {lines.map((line, i) => (
              <motion.div key={i} variants={lineVariant} className="flex">
                <span className="text-muted/40 mr-4 w-4 shrink-0 select-none text-right">
                  {i + 1}
                </span>
                <span style={{ paddingLeft: `${(line.indent ?? 0) * 1.25}rem` }}>
                  {line.tokens.map((t, j) => (
                    <span key={j} className={t.cls}>
                      {t.text}
                    </span>
                  ))}
                  {i === lines.length - 1 && (
                    <span className="bg-accent-purple cursor-blink ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5" />
                  )}
                </span>
              </motion.div>
            ))}
          </code>
        </motion.pre>
      </div>

      <motion.div
        className="glass absolute -top-4 -right-4 hidden items-center gap-2 rounded-xl px-3.5 py-2.5 sm:flex"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <CheckCircle2 className="h-4 w-4 text-[#27c93f]" />
        <p className="text-xs font-medium">Build passing</p>
      </motion.div>
    </div>
  );
}
