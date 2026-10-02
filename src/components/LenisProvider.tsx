"use client";

import { ReactLenis } from "lenis/react";
import { LazyMotion, domAnimation } from "motion/react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <LazyMotion features={domAnimation}>
        {children}
      </LazyMotion>
    </ReactLenis>
  );
}
