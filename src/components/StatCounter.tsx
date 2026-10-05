"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type StatCounterProps = {
  value: string;
  className?: string;
};

function extractNumber(val: string): { num: number; suffix: string; prefix: string } {
  const match = val.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { num: 0, suffix: val, prefix: "" };
  return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
}

export function StatCounter({ value, className }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const { num, suffix, prefix } = extractNumber(value);
  const [display, setDisplay] = useState(() => (num === 0 ? value : "0"));

  useEffect(() => {
    if (!isInView || num === 0) return;

    const duration = 1500;
    const step = 16;
    const steps = Math.ceil(duration / step);
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      const currentVal = Math.round(eased * num);
      setDisplay(`${prefix}${currentVal}${suffix}`);
      if (current >= steps) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, step);

    return () => clearInterval(timer);
  }, [isInView, num, value, suffix, prefix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
