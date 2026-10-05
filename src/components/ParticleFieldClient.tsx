"use client";

import dynamic from "next/dynamic";

const ParticleFieldDynamic = dynamic(
  () => import("@/components/ParticleField").then((m) => m.ParticleField),
  { ssr: false }
);

export function ParticleFieldClient() {
  return <ParticleFieldDynamic />;
}
