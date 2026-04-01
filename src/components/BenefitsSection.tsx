"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

const benefits = [
  { num: "01", title: "Giảm gian lận", desc: "Chống Fake GPS cơ bản và check-in không di chuyển" },
  { num: "02", title: "Bằng chứng kép", desc: "Khuôn mặt + quỹ đạo di chuyển thực tế" },
  { num: "03", title: "Chi phí thấp", desc: "Triển khai nhanh, phù hợp tiến độ" },
  { num: "04", title: "Không cần hạ tầng", desc: "Hoạt động hoàn toàn trên thiết bị di động" },
];

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
        <div className="ben-grid grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
          {benefits.map((b) => (
            <div key={b.num} className="ben-card rounded-xl hover:border-[rgba(34,197,94,0.15)] transition-colors duration-500" style={{ padding: "clamp(20px, 2.5vw, 32px)", border: "1px solid rgba(232,232,227,0.07)", background: "rgba(232,232,227,0.02)" }}>
              <div className="flex items-center gap-2 mb-3">
                <span style={{ fontFamily: "var(--font-syne)", fontSize: "11px", fontWeight: 700, color: "var(--color-accent-green)", opacity: 0.5 }}>{b.num}</span>
                <span className="inline-block w-3 h-px" style={{ background: "var(--color-accent-green)", opacity: 0.3 }} />
              </div>
              <h4 className="heading-card mb-1" style={{ fontSize: "clamp(17px, 1.6vw, 22px)" }}>{b.title}</h4>
              <p style={{ fontSize: "clamp(12px, 0.9vw, 14px)", color: "rgba(232,232,227,0.45)", lineHeight: 1.6 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
