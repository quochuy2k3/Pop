"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

export default function FlowSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".flow-card", {
        y: 40, opacity: 0, duration: 0.8, ease: "power2.out", stagger: 0.2,
        scrollTrigger: { trigger: ".flow-grid", start: "top 78%" },
      });
      gsap.from(".flow-bottom-text", {
        y: 20, opacity: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".flow-bottom-text", start: "top 90%" },
      });
      ref.current!.querySelectorAll(".draw-path").forEach((p) => {
        if ("getTotalLength" in p) {
          const len = (p as SVGPathElement).getTotalLength();
          gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
          gsap.to(p, { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut",
            scrollTrigger: { trigger: p.closest(".flow-card"), start: "top 75%" } });
        }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="flow" className="section-page">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 100%)" }} />
      <div className="container-main w-full">
        <h2 className="heading-page mb-8 lg:mb-10">
          Cơ chế <span style={{ color: "var(--color-accent-blue)" }}>xác minh kép</span>
        </h2>

        <div className="flow-grid grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-0 items-stretch mb-8 lg:mb-10">
          {/* Step 1 */}
          <div className="flow-card rounded-2xl text-center" style={{
            padding: "clamp(24px, 3vw, 36px)",
            border: "1px solid rgba(59,130,246,0.2)",
            background: "rgba(59,130,246,0.04)",
          }}>
            <span className="label-sm" style={{ color: "var(--color-accent-blue)", fontSize: "10px" }}>Bước 1</span>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, margin: "8px 0" }}>Face Authentication</h3>
            <p style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "rgba(232,232,227,0.55)", lineHeight: 1.6, marginBottom: "16px" }}>
              Xác minh danh tính — <span style={{ color: "var(--color-accent-blue)", fontWeight: 600 }}>Đúng người</span>
            </p>
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 120 120" fill="none" width="120" height="120">
                <ellipse cx="60" cy="55" rx="30" ry="38" stroke="#3b82f6" strokeWidth="1.5" opacity="0.45" />
                <circle cx="50" cy="48" r="3" stroke="#3b82f6" strokeWidth="1" fill="rgba(59,130,246,0.1)" />
                <circle cx="70" cy="48" r="3" stroke="#3b82f6" strokeWidth="1" fill="rgba(59,130,246,0.1)" />
                <circle cx="50" cy="48" r="1.2" fill="#3b82f6" opacity="0.4" />
                <circle cx="70" cy="48" r="1.2" fill="#3b82f6" opacity="0.4" />
                <path d="M60 54 L58 62 L62 62" stroke="#3b82f6" strokeWidth="0.7" fill="none" opacity="0.25" />
                <path d="M53 70 Q60 78 67 70" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.35" />
                {/* Corner brackets */}
                <path d="M18 14 L18 6 L26 6" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
                <path d="M94 6 L102 6 L102 14" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
                <path d="M18 96 L18 104 L26 104" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
                <path d="M94 104 L102 104 L102 96" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
              </svg>
            </div>
            <div style={{ fontFamily: "var(--font-syne)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-accent-blue)" }}>ĐÚNG NGƯỜI</div>
          </div>

          {/* Arrow */}
          <div className="flow-card flex items-center justify-center px-2 lg:px-6">
            <svg viewBox="0 0 80 24" fill="none" className="hidden md:block" style={{ width: "60px" }}>
              <path className="draw-path" d="M0 12 L60 12 M50 5 L62 12 L50 19" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg viewBox="0 0 24 50" fill="none" className="md:hidden" width="20" height="40">
              <path d="M12 0 L12 35 M6 28 L12 38 L18 28" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="flow-card rounded-2xl text-center" style={{
            padding: "clamp(24px, 3vw, 36px)",
            border: "1px solid rgba(59,130,246,0.2)",
            background: "rgba(59,130,246,0.04)",
          }}>
            <span className="label-sm" style={{ color: "var(--color-accent-blue)", fontSize: "10px" }}>Bước 2</span>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, margin: "8px 0" }}>Proof of Presence</h3>
            <p style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "rgba(232,232,227,0.55)", lineHeight: 1.6, marginBottom: "16px" }}>
              Live Tracking — <span style={{ color: "var(--color-accent-blue)", fontWeight: 600 }}>Đúng địa điểm, đúng thời điểm</span>
            </p>
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 120 120" fill="none" width="120" height="120">
                <circle cx="60" cy="55" r="48" stroke="rgba(59,130,246,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="60" cy="55" r="30" stroke="rgba(59,130,246,0.18)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="60" cy="55" r="12" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                <circle cx="60" cy="55" r="2.5" fill="var(--color-accent-blue)" opacity="0.4" />
                <path className="draw-path" d="M42 42 C45 32 55 28 66 36 C77 44 82 58 75 70 C68 82 56 79 49 72 C42 65 38 52 42 42" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
                {/* Sensor dots */}
                <text x="20" y="115" textAnchor="middle" fill="rgba(232,232,227,0.4)" fontSize="8" style={{ fontFamily: "var(--font-inter)" }}>GPS</text>
                <text x="60" y="115" textAnchor="middle" fill="rgba(232,232,227,0.4)" fontSize="8" style={{ fontFamily: "var(--font-inter)" }}>Gia tốc kế</text>
                <text x="100" y="115" textAnchor="middle" fill="rgba(232,232,227,0.4)" fontSize="8" style={{ fontFamily: "var(--font-inter)" }}>Bước chân</text>
              </svg>
            </div>
            <div style={{ fontFamily: "var(--font-syne)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-accent-blue)" }}>ĐÚNG ĐỊA ĐIỂM</div>
          </div>
        </div>

        <div className="flow-bottom-text text-center">
          <p style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(16px, 2vw, 26px)", fontWeight: 700, lineHeight: 1.5, maxWidth: "650px", margin: "0 auto" }}>
            Không chỉ biết <em className="italic" style={{ color: "rgba(232,232,227,0.35)" }}>ai</em> đang check-in — mà biết chắc <span style={{ color: "var(--color-accent-blue)" }}>NGƯỜI ĐÓ ĐANG Ở ĐÚNG NƠI</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
