"use client";

import { ReactLenis } from "lenis/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const LenisScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
