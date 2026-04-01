"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "@/hooks/useGsap";

const sectionIds = [
  "hero", "problem", "vulnerabilities", "solutions",
  "context", "flow", "benefits", "roadmap", "conclusion",
];

export default function Nav() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show/hide nav
    ScrollTrigger.create({
      trigger: "#hero", start: "bottom top",
      onEnter: () => setVisible(true), onLeaveBack: () => setVisible(false),
    });

    // Track active section on mobile (normal scroll)
    sectionIds.forEach((id, i) => {
      ScrollTrigger.create({
        trigger: `#${id}`, start: "top center", end: "bottom center",
        onEnter: () => setActive(i), onEnterBack: () => setActive(i),
      });
    });

    // Listen for desktop Observer-driven section changes
    const handleSectionChange = (e: Event) => {
      const idx = (e as CustomEvent).detail?.index;
      if (typeof idx === "number") setActive(idx);
    };
    window.addEventListener("sectionChange", handleSectionChange);

    return () => {
      window.removeEventListener("sectionChange", handleSectionChange);
    };
  }, []);

  const scrollTo = (i: number) => {
    // Dispatch event for the Observer-based hook to handle
    window.dispatchEvent(new CustomEvent("navGoTo", { detail: { index: i } }));
    setActive(i);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-transform duration-500" style={{
      padding: "14px clamp(24px, 6vw, 100px)",
      background: "rgba(10,10,10,0.88)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(232,232,227,0.06)",
      transform: visible ? "translateY(0)" : "translateY(-100%)",
      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      <div className="hidden sm:block label-sm" style={{ color: "rgba(232,232,227,0.35)" }}>PI GROUP — Software</div>
      <div className="flex gap-2.5 items-center ml-auto sm:ml-0">
        {sectionIds.map((_, i) => (
          <button key={i} onClick={() => scrollTo(i)} className="border-0 p-0 cursor-pointer transition-all duration-300" style={{
            width: "7px", height: "7px", borderRadius: "50%",
            background: active === i ? "var(--color-accent-blue)" : "rgba(232,232,227,0.18)",
            transform: active === i ? "scale(1.5)" : "scale(1)",
          }} aria-label={`Section ${i + 1}`} />
        ))}
      </div>
    </nav>
  );
}
