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
      gsap.from(".road-phase", { y: 20, duration: 0.7, ease: "power2.out", stagger: 0.12, scrollTrigger: { trigger: ".road-phases", start: "top 85%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="roadmap" className="section-page">
      <div className="container-main w-full">
        <h2 className="road-heading heading-page mb-10 lg:mb-14">Lộ trình</h2>

        <div className="road-phases grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 relative">
          {/* Connecting lines between cards — desktop only, behind cards */}
          <div className="hidden md:block absolute left-0 right-0 pointer-events-none" style={{ top: "50%", zIndex: 0 }}>
            <div style={{ height: "2px", background: "linear-gradient(to right, var(--color-accent-blue), rgba(232,232,227,0.1) 40%, rgba(232,232,227,0.1))", margin: "0 10%" }} />
          </div>

          {phases.map((p) => (
            <div key={p.label} className="road-phase text-center rounded-2xl relative" style={{
              padding: "clamp(28px, 3vw, 40px)",
              border: p.active ? "1px solid rgba(59,130,246,0.35)" : "1px solid rgba(232,232,227,0.1)",
              background: p.active ? "rgba(59,130,246,0.06)" : "rgba(17,17,17,0.95)",
              zIndex: 1,
            }}>
              {/* Dot */}
              <div className="mx-auto mb-5" style={{
                width: "14px", height: "14px", borderRadius: "50%",
                background: p.active ? "var(--color-accent-blue)" : "rgba(232,232,227,0.2)",
                boxShadow: p.active ? "0 0 16px rgba(59,130,246,0.5)" : "none",
              }} />
              <div className="label-sm mb-2" style={{ fontSize: "10px", color: p.active ? "rgba(59,130,246,0.7)" : "rgba(232,232,227,0.4)" }}>{p.label}</div>
              <h4 className="heading-card mb-2" style={{ fontSize: "clamp(20px, 2.2vw, 28px)", color: p.active ? "var(--color-text-primary)" : "rgba(232,232,227,0.6)" }}>{p.title}</h4>
              <p className="whitespace-pre-line" style={{ fontSize: "14px", color: p.active ? "rgba(232,232,227,0.6)" : "rgba(232,232,227,0.4)", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
