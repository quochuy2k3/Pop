"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

const points = [
  { num: "01", text: "Phù hợp bối cảnh hiện tại" },
  { num: "02", text: "Kiến trúc mở, sẵn sàng nâng cấp" },
  { num: "03", text: "Áp dụng ngay cho Sale LandX" },
];

export default function ConclusionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".concl-heading", { y: 30, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".concl-heading", start: "top 85%" } });
      gsap.from(".concl-card", { y: 25, opacity: 0, duration: 0.7, ease: "power2.out", stagger: 0.12, scrollTrigger: { trigger: ".concl-grid", start: "top 80%" } });
      gsap.from(".concl-footer", { y: 20, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".concl-footer", start: "top 92%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.dispatchEvent(new CustomEvent("navGoTo", { detail: { index: 0 } }));
  };

  return (
    <section ref={sectionRef} id="conclusion" className="section-page flex-col justify-center">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 100%)" }} />
      <div className="container-main w-full">
        {/* Top area: heading + cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-center mb-10 lg:mb-14">
          {/* Left: big heading */}
          <div>
            <h2 className="concl-heading heading-page">Kết luận</h2>
          </div>

          {/* Right: 3 numbered points as cards */}
          <div className="concl-grid flex flex-col gap-3">
            {points.map((p) => (
              <div key={p.num} className="concl-card flex items-center gap-4 lg:gap-5 rounded-xl" style={{
                padding: "clamp(16px, 2vw, 24px) clamp(20px, 2.5vw, 28px)",
                border: "1px solid rgba(59,130,246,0.12)",
                background: "rgba(59,130,246,0.03)",
              }}>
                <span style={{
                  fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 800, color: "var(--color-accent-blue)", opacity: 0.2,
                  lineHeight: 1, minWidth: "40px",
                }}>{p.num}</span>
                <p style={{
                  fontFamily: "var(--font-syne)", fontSize: "clamp(16px, 1.8vw, 22px)",
                  fontWeight: 600, lineHeight: 1.3,
                }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: author + CTA */}
        <div className="concl-footer flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 lg:pt-10" style={{ borderTop: "1px solid rgba(232,232,227,0.06)" }}>
          <div className="text-center sm:text-left">
            <p style={{ fontSize: "12px", color: "rgba(232,232,227,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "6px" }}>Cảm ơn Hội đồng</p>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 700 }}>Võ Quốc Huy</p>
            <p style={{ fontSize: "12px", color: "rgba(232,232,227,0.35)", letterSpacing: "0.06em", marginTop: "2px" }}>Front-End Developer — Software</p>
          </div>
          <button onClick={scrollToTop} className="inline-flex items-center gap-2 cursor-pointer transition-all duration-300 hover:border-[rgba(232,232,227,0.3)] hover:text-[var(--color-text-primary)]" style={{ padding: "10px 20px", border: "1px solid rgba(232,232,227,0.1)", borderRadius: "9999px", background: "transparent", color: "rgba(232,232,227,0.3)", fontSize: "11px", letterSpacing: "0.05em" }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </section>
  );
}
