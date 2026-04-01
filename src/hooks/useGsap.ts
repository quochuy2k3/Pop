"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/dist/Observer";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);

ScrollTrigger.config({ ignoreMobileResize: true });

export function useSmoothScroll() {
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const goToSection = useCallback((index: number) => {
    const sections = document.querySelectorAll<HTMLElement>(".section-page");
    if (index < 0 || index >= sections.length || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    currentIndexRef.current = index;

    // Dispatch custom event for Nav to listen to
    window.dispatchEvent(new CustomEvent("sectionChange", { detail: { index } }));

    gsap.to(window, {
      scrollTo: { y: sections[index], autoKill: false },
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      // Desktop: Observer intercepts scroll → page-by-page
      const sections = document.querySelectorAll<HTMLElement>(".section-page");
      const numSections = sections.length;

      const observer = Observer.create({
        type: "wheel,touch",
        wheelSpeed: -1,
        tolerance: 30,
        preventDefault: true,
        onUp: () => {
          if (!isAnimatingRef.current && currentIndexRef.current < numSections - 1) {
            goToSection(currentIndexRef.current + 1);
          }
        },
        onDown: () => {
          if (!isAnimatingRef.current && currentIndexRef.current > 0) {
            goToSection(currentIndexRef.current - 1);
          }
        },
      });

      // Keyboard navigation
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowDown" || e.key === " " || e.key === "PageDown") {
          e.preventDefault();
          if (!isAnimatingRef.current && currentIndexRef.current < numSections - 1) {
            goToSection(currentIndexRef.current + 1);
          }
        }
        if (e.key === "ArrowUp" || e.key === "PageUp") {
          e.preventDefault();
          if (!isAnimatingRef.current && currentIndexRef.current > 0) {
            goToSection(currentIndexRef.current - 1);
          }
        }
      };
      document.addEventListener("keydown", handleKeyDown);

      // Listen for nav dot clicks
      const handleNavGo = (e: Event) => {
        const idx = (e as CustomEvent).detail?.index;
        if (typeof idx === "number") goToSection(idx);
      };
      window.addEventListener("navGoTo", handleNavGo);

      // Refresh after fonts
      document.fonts.ready.then(() => ScrollTrigger.refresh());

      return () => {
        observer.kill();
        document.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("navGoTo", handleNavGo);
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    } else {
      // Mobile: normal smooth scroll, no snap
      // Just refresh triggers after fonts
      document.fonts.ready.then(() => ScrollTrigger.refresh());

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }
  }, [goToSection]);

  return { goToSection, currentIndexRef };
}

export { gsap, ScrollTrigger };
