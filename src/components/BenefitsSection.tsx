"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

const benefits = [
  { num: "01", title: "Giảm gian lận", desc: "Chống Fake GPS cơ bản và check-in không di chuyển" },
  { num: "02", title: "Bằng chứng kép", desc: "Khuôn mặt + quỹ đạo di chuyển thực tế" },
  { num: "03", title: "Chi phí thấp", desc: "Triển khai nhanh, phù hợp tiến độ" },
  { num: "04", title: "Không cần hạ tầng", desc: "Hoạt động hoàn toàn trên thiết bị di động" },
];

function BenefitIcon({ num }: { num: string }) {
  switch (num) {
    case "01":
      // Shield with checkmark
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3L5 8v7c0 7.18 4.7 13.89 11 16 6.3-2.11 11-8.82 11-16V8L16 3z" stroke="var(--color-accent-green)" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(34,197,94,0.08)" />
          <path d="M11 16l3.5 3.5L21 13" stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "02":
      // Two overlapping circles (face + location)
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="16" r="8" stroke="var(--color-accent-green)" strokeWidth="1.5" fill="rgba(34,197,94,0.06)" />
          <circle cx="19" cy="16" r="8" stroke="var(--color-accent-green)" strokeWidth="1.5" fill="rgba(34,197,94,0.06)" />
        </svg>
      );
    case "03":
      // Lightning bolt
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 3L7 18h7l-2 11L27 14h-7l2-11z" stroke="var(--color-accent-green)" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(34,197,94,0.08)" />
        </svg>
      );
    case "04":
      // Smartphone outline
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="3" width="14" height="26" rx="3" stroke="var(--color-accent-green)" strokeWidth="1.5" fill="rgba(34,197,94,0.06)" />
          <line x1="14" y1="25" x2="18" y2="25" stroke="var(--color-accent-green)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".ben-heading", { y: 40, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".ben-heading", start: "top 85%" } });
      gsap.from(".ben-card", { y: 35, opacity: 0, duration: 0.7, ease: "power2.out", stagger: 0.1, scrollTrigger: { trigger: ".ben-grid", start: "top 80%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="benefits" className="section-page">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 30% at 60% 40%, rgba(34,197,94,0.03) 0%, transparent 100%)" }} />
      <div className="container-main">
        <h2 className="ben-heading heading-page mb-8 lg:mb-10">Lợi ích</h2>
        <div className="ben-grid grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          {/* First card: spans 2 rows */}
          <div className="ben-card md:row-span-2 rounded-xl hover:border-[rgba(34,197,94,0.15)] transition-colors duration-500 flex flex-col justify-between" style={{ padding: "clamp(20px, 2.5vw, 32px)", border: "1px solid rgba(232,232,227,0.07)", background: "rgba(232,232,227,0.02)" }}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span style={{ fontFamily: "var(--font-syne)", fontSize: "11px", fontWeight: 700, color: "var(--color-accent-green)", opacity: 0.5 }}>{benefits[0].num}</span>
                <span className="inline-block w-3 h-px" style={{ background: "var(--color-accent-green)", opacity: 0.3 }} />
              </div>
              <div className="mb-4">
                <BenefitIcon num={benefits[0].num} />
              </div>
              <h4 className="heading-card mb-2" style={{ fontSize: "clamp(20px, 2vw, 28px)" }}>{benefits[0].title}</h4>
              <p style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "rgba(232,232,227,0.45)", lineHeight: 1.7 }}>{benefits[0].desc}</p>
            </div>
          </div>

          {/* Second card */}
          <div className="ben-card rounded-xl hover:border-[rgba(34,197,94,0.15)] transition-colors duration-500" style={{ padding: "clamp(20px, 2.5vw, 32px)", border: "1px solid rgba(232,232,227,0.07)", background: "rgba(232,232,227,0.02)" }}>
            <div className="flex items-center gap-2 mb-3">
              <span style={{ fontFamily: "var(--font-syne)", fontSize: "11px", fontWeight: 700, color: "var(--color-accent-green)", opacity: 0.5 }}>{benefits[1].num}</span>
              <span className="inline-block w-3 h-px" style={{ background: "var(--color-accent-green)", opacity: 0.3 }} />
            </div>
            <div className="mb-3">
              <BenefitIcon num={benefits[1].num} />
            </div>
            <h4 className="heading-card mb-1" style={{ fontSize: "clamp(17px, 1.6vw, 22px)" }}>{benefits[1].title}</h4>
            <p style={{ fontSize: "clamp(12px, 0.9vw, 14px)", color: "rgba(232,232,227,0.45)", lineHeight: 1.6 }}>{benefits[1].desc}</p>
          </div>

          {/* Third card */}
          <div className="ben-card rounded-xl hover:border-[rgba(34,197,94,0.15)] transition-colors duration-500" style={{ padding: "clamp(20px, 2.5vw, 32px)", border: "1px solid rgba(232,232,227,0.07)", background: "rgba(232,232,227,0.02)" }}>
            <div className="flex items-center gap-2 mb-3">
              <span style={{ fontFamily: "var(--font-syne)", fontSize: "11px", fontWeight: 700, color: "var(--color-accent-green)", opacity: 0.5 }}>{benefits[2].num}</span>
              <span className="inline-block w-3 h-px" style={{ background: "var(--color-accent-green)", opacity: 0.3 }} />
            </div>
            <div className="mb-3">
              <BenefitIcon num={benefits[2].num} />
            </div>
            <h4 className="heading-card mb-1" style={{ fontSize: "clamp(17px, 1.6vw, 22px)" }}>{benefits[2].title}</h4>
            <p style={{ fontSize: "clamp(12px, 0.9vw, 14px)", color: "rgba(232,232,227,0.45)", lineHeight: 1.6 }}>{benefits[2].desc}</p>
          </div>

          {/* Fourth card: spans 2 columns */}
          <div className="ben-card md:col-span-2 rounded-xl hover:border-[rgba(34,197,94,0.15)] transition-colors duration-500" style={{ padding: "clamp(20px, 2.5vw, 32px)", border: "1px solid rgba(232,232,227,0.07)", background: "rgba(232,232,227,0.02)" }}>
            <div className="flex items-center gap-2 mb-3">
              <span style={{ fontFamily: "var(--font-syne)", fontSize: "11px", fontWeight: 700, color: "var(--color-accent-green)", opacity: 0.5 }}>{benefits[3].num}</span>
              <span className="inline-block w-3 h-px" style={{ background: "var(--color-accent-green)", opacity: 0.3 }} />
            </div>
            <div className="mb-3">
              <BenefitIcon num={benefits[3].num} />
            </div>
            <h4 className="heading-card mb-1" style={{ fontSize: "clamp(17px, 1.6vw, 22px)" }}>{benefits[3].title}</h4>
            <p style={{ fontSize: "clamp(12px, 0.9vw, 14px)", color: "rgba(232,232,227,0.45)", lineHeight: 1.6 }}>{benefits[3].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
