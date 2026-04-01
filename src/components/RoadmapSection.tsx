"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

const phases = [
  { label: "Phase 1", title: "Hiện tại", desc: "Face Auth + PoP", active: true },
  { label: "Phase 2", title: "Tăng trưởng", desc: "+ Backend Analytics\n+ Device Integrity", active: false },
  { label: "Phase 3", title: "Mở rộng", desc: "+ AI Trust Scoring\n+ Photo Verification", active: false },
];

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".road-heading", { y: 30, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".road-heading", start: "top 85%" } });
      gsap.from(".road-phase", { y: 20, opacity: 0, duration: 0.7, ease: "power2.out", stagger: 0.12, scrollTrigger: { trigger: ".road-phases", start: "top 85%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="roadmap" className="section-page">
      <div className="container-main w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left: heading */}
          <div>
            <h2 className="road-heading heading-page mb-4 lg:mb-6">Lộ trình</h2>
          </div>

          {/* Right: vertical timeline */}
          <div className="road-phases relative">
            {/* Vertical line on the left */}
            <div className="absolute left-7 top-0 bottom-0 w-px" style={{
              background: "linear-gradient(to bottom, var(--color-accent-blue), rgba(232,232,227,0.08) 40%, rgba(232,232,227,0.08))",
            }} />

            {phases.map((p, i) => (
              <div key={p.label} className="road-phase flex items-start gap-8 relative" style={{ paddingLeft: "56px", paddingTop: i === 0 ? "0" : "32px", paddingBottom: "32px" }}>
                {/* Dot on the line */}
                <div className="absolute left-[22px] top-[4px]" style={{
                  width: "14px", height: "14px", borderRadius: "50%",
                  background: p.active ? "var(--color-accent-blue)" : "rgba(232,232,227,0.15)",
                  boxShadow: p.active ? "0 0 12px rgba(59,130,246,0.5)" : "none",
                  border: "2px solid #0a0a0a",
                  marginTop: i === 0 ? "0" : "0",
                }} />
                <div>
                  <span className="label-sm" style={{ fontSize: "10px", color: p.active ? "var(--color-accent-blue)" : "rgba(232,232,227,0.35)" }}>{p.label}</span>
                  <h4 className="heading-card mt-1 mb-2" style={{ color: p.active ? "var(--color-text-primary)" : "rgba(232,232,227,0.5)" }}>{p.title}</h4>
                  <p className="whitespace-pre-line" style={{ fontSize: "14px", color: p.active ? "rgba(232,232,227,0.6)" : "rgba(232,232,227,0.35)", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
