"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

const vulns = [
  { num: "01", name: "Fake GPS", desc: "Ứng dụng giả lập tọa độ GPS. Không có mặt vẫn check-in thành công." },
  { num: "02", name: "Xác thực đơn yếu tố", desc: 'FaceID chỉ chứng minh "đúng người" — không chứng minh "đúng nơi".' },
  { num: "03", name: "Trục lợi Pi Point", desc: "Gian lận dữ liệu để nhận thưởng. Thất thoát ngân sách." },
];

export default function VulnerabilitiesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".vuln-card-item", {
        y: 40, opacity: 0, duration: 0.8, ease: "power2.out", stagger: 0.15,
        scrollTrigger: { trigger: ".vuln-grid", start: "top 80%" },
      });
      gsap.from(".vuln-bottom", {
        y: 20, opacity: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".vuln-bottom", start: "top 90%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="vulnerabilities" className="section-page">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(239,68,68,0.035) 0%, transparent 100%)" }} />
      <div className="container-main w-full">
        <h2 className="heading-page mb-8 lg:mb-12">
          3 lỗ hổng <span style={{ color: "var(--color-accent-red)" }}>nghiêm trọng</span>
        </h2>

        <div className="vuln-grid grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mb-8 lg:mb-12">
          {vulns.map((v) => (
            <div key={v.num} className="vuln-card-item rounded-2xl relative overflow-hidden" style={{
              padding: "clamp(20px, 2.5vw, 32px)",
              border: "1px solid rgba(239,68,68,0.12)",
              background: "rgba(239,68,68,0.03)",
            }}>
              {/* Watermark number */}
              <div className="absolute -top-2 -right-1 pointer-events-none select-none" style={{
                fontFamily: "var(--font-syne)", fontSize: "clamp(80px, 10vw, 120px)",
                fontWeight: 800, color: "var(--color-accent-red)", opacity: 0.06, lineHeight: 1,
              }}>{v.num}</div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block w-5 h-px" style={{ background: "var(--color-accent-red)", opacity: 0.5 }} />
                  <span className="label-sm" style={{ color: "var(--color-accent-red)", opacity: 0.8, fontSize: "10px" }}>Lỗ hổng {v.num}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 700, marginBottom: "8px" }}>{v.name}</h3>
                <p style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "rgba(232,232,227,0.55)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="vuln-bottom text-center">
          <p style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(16px, 2vw, 26px)", fontWeight: 700, lineHeight: 1.5, maxWidth: "700px", margin: "0 auto" }}>
            Hệ thống chỉ kiểm tra <span style={{ color: "var(--color-accent-red)" }}>ai đang check-in</span> — không kiểm tra người đó có thực sự ở <span style={{ color: "var(--color-accent-red)" }}>đúng địa điểm</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
