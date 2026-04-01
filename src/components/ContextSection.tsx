"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

const factors = [
  { num: "01", title: "Mới release", desc: "Dự án đang giai đoạn đầu ra mắt" },
  { num: "02", title: "User ít", desc: "Quy mô người dùng còn nhỏ" },
  { num: "03", title: "Pi Point giá trị thấp", desc: "Chưa đủ lớn để thúc đẩy gian lận chuyên dụng" },
  { num: "04", title: "Gian lận cơ bản", desc: "Chủ yếu app Fake GPS phổ thông" },
  { num: "05", title: "Ưu tiên tốc độ", desc: "Phát hành đúng tiến độ là mục tiêu hàng đầu" },
];

export default function ContextSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".ctx-heading", { y: 40, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".ctx-heading", start: "top 85%" } });
      gsap.from(".ctx-factor", { y: 25, opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.08, scrollTrigger: { trigger: ".ctx-factors", start: "top 78%" } });
      gsap.from(".ctx-conclusion", { y: 25, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".ctx-conclusion", start: "top 88%" } });
      if (underlineRef.current) gsap.to(underlineRef.current, { width: "80px", duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: ".ctx-conclusion", start: "top 85%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="context" className="section-page">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 50% at 30% 60%, rgba(59,130,246,0.04) 0%, transparent 100%)" }} />
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="ctx-heading heading-page mb-6">Bối cảnh<br/>quyết định</h2>
            <div className="ctx-conclusion">
              <p style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(18px, 2.2vw, 28px)", fontWeight: 700, lineHeight: 1.3 }}>
                Phương án A — <span style={{ color: "var(--color-accent-blue)" }}>tối ưu nhất</span> cho bối cảnh hiện tại.
              </p>
              <div ref={underlineRef} className="rounded-full mt-3" style={{ width: 0, height: "2px", background: "var(--color-accent-blue)" }} />
            </div>
          </div>
          <div className="ctx-factors flex flex-col">
            {factors.map((f, i) => (
              <div key={f.num} className={`ctx-factor flex items-start gap-5 py-4 ${i === 0 ? "border-t" : ""}`} style={{ borderBottom: "1px solid rgba(232,232,227,0.06)", borderTopColor: i === 0 ? "rgba(232,232,227,0.06)" : undefined }}>
                <span style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(20px, 2vw, 32px)", fontWeight: 800, color: "var(--color-accent-blue)", opacity: 0.2, minWidth: "40px", lineHeight: 1 }}>{f.num}</span>
                <div>
                  <h4 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(16px, 1.5vw, 20px)", fontWeight: 700, marginBottom: "2px" }}>{f.title}</h4>
                  <p style={{ fontSize: "clamp(12px, 0.9vw, 14px)", color: "rgba(232,232,227,0.4)", lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
