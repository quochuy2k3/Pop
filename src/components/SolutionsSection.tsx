"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

const solutions = [
  { label: "A", name: "Face Auth + PoP", keyword: "On-device, xác minh kép", selected: true, ratings: { "Hiệu quả": 3, "Chi phí": 1, "Tốc độ": 4 } },
  { label: "B", name: "Anomaly Detection", keyword: "Server-side, AI pattern", selected: false, ratings: { "Hiệu quả": 4, "Chi phí": 3, "Tốc độ": 1 } },
  { label: "C", name: "Photo Verification", keyword: "Image AI, device fingerprint", selected: false, ratings: { "Hiệu quả": 4, "Chi phí": 4, "Tốc độ": 1 } },
];

function RatingBar({ filled, max = 4, active }: { filled: number; max?: number; active: boolean }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: max }, (_, n) => (
        <div key={n} className="rounded-full" style={{ height: "5px", width: n < filled ? "20px" : "12px", background: n < filled ? (active ? "var(--color-accent-blue)" : "rgba(232,232,227,0.35)") : "rgba(232,232,227,0.08)", transition: "all 0.5s ease" }} />
      ))}
    </div>
  );
}

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".sol-heading", { y: 40, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".sol-heading", start: "top 85%" } });
      gsap.from(".sol-card", { y: 50, opacity: 0, duration: 0.8, ease: "power2.out", stagger: 0.15, scrollTrigger: { trigger: ".sol-grid", start: "top 80%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="solutions" className="section-page">
      <div className="container-main">
        <h2 className="sol-heading heading-page mb-8 lg:mb-10">3 hướng giải quyết</h2>
        <div className="sol-grid grid grid-cols-1 md:grid-cols-[1.3fr_0.85fr_0.85fr] gap-3 lg:gap-4">
          {solutions.map((s) => (
            <div key={s.label} className="sol-card relative rounded-2xl overflow-hidden" style={{
              padding: "clamp(20px, 2.5vw, 32px)",
              border: s.selected ? "1px solid rgba(59,130,246,0.35)" : "1px solid rgba(232,232,227,0.1)",
              background: s.selected ? "rgba(59,130,246,0.06)" : "rgba(232,232,227,0.03)",
              opacity: s.selected ? 1 : 0.7,
              boxShadow: s.selected ? "0 0 40px -12px rgba(59,130,246,0.2), inset 0 1px 0 rgba(59,130,246,0.1)" : "none",
            }}>
              {s.selected && (
                <div className="absolute -top-3 left-6 flex items-center gap-2 px-3 py-1 rounded-full" style={{
                  background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)",
                }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#3b82f6" }} />
                  <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--color-accent-blue)" }}>Đề xuất</span>
                </div>
              )}
              <div style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, lineHeight: 1, marginBottom: "12px", color: s.selected ? "var(--color-accent-blue)" : "var(--color-text-primary)", opacity: s.selected ? 0.15 : 0.08 }}>{s.label}</div>
              <h3 className="heading-card mb-1">{s.name}</h3>
              <p style={{ fontSize: "12px", color: "rgba(232,232,227,0.5)", marginBottom: "16px" }}>{s.keyword}</p>
              <div className="flex flex-col gap-3">
                {Object.entries(s.ratings).map(([label, val]) => (
                  <div key={label}>
                    <span style={{ fontSize: "10px", color: "rgba(232,232,227,0.4)", fontWeight: 500, display: "block", marginBottom: "4px" }}>{label}</span>
                    <RatingBar filled={val} active={s.selected} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
