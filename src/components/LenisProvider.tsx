"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { LazyMotion, domAnimation } from "framer-motion";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <LazyMotion features={domAnimation}>
        {children}
      </LazyMotion>
    </ReactLenis>
  );
}
