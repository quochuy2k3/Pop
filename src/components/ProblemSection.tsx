"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const failRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-problem").forEach((el) => {
        gsap.from(el, { y: 40, opacity: 0, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
      });
      if (failRef.current) {
        gsap.from(failRef.current, { x: 0, scrollTrigger: { trigger: failRef.current, start: "top 80%",
          onEnter: () => { gsap.fromTo(failRef.current, { x: 0 }, { keyframes: [{ x: -8, duration: 0.05 }, { x: 8, duration: 0.05 }, { x: -5, duration: 0.05 }, { x: 5, duration: 0.05 }, { x: 0, duration: 0.05 }], ease: "none" }); },
          once: true } });
      }
      gsap.utils.toArray<SVGElement>(".problem-draw").forEach((path) => {
        if ("getTotalLength" in path) {
          const len = (path as SVGPathElement).getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
          gsap.to(path, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut",
            scrollTrigger: { trigger: sectionRef.current, start: "top 55%", toggleActions: "play none none none" } });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="problem" className="section-page">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 50% at 65% 50%, rgba(239,68,68,0.03) 0%, transparent 100%)" }} />
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="reveal-problem heading-page mb-6">Vấn đề</h2>
            <p className="reveal-problem body-lg max-w-lg mb-8">
              Nhân viên Sale trong dự án LandX được giao khảo sát bất động sản tại hiện trường.
              Hệ thống check-in hiện tại xác minh được{" "}
              <span style={{ color: "var(--color-accent-blue)", fontWeight: 600 }}>ĐÚNG NGƯỜI</span> — nhưng không thể xác minh{" "}
              <span style={{ color: "var(--color-accent-red)", fontWeight: 600 }}>ĐÚNG ĐỊA ĐIỂM</span>.
            </p>
            <div className="flex flex-col gap-4 reveal-problem">
              <div className="flex items-center gap-3" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(16px, 1.6vw, 22px)", fontWeight: 600, color: "rgba(232,232,227,0.55)" }}>
                <svg viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="14" stroke="#22c55e" strokeWidth="1.5" fill="rgba(34,197,94,0.1)" /><path d="M10 16l4 4 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>&ldquo;Ai đang check-in?&rdquo;</span>
              </div>
              <div ref={failRef} className="flex items-center gap-3" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(16px, 1.6vw, 22px)", fontWeight: 600, color: "var(--color-accent-red)" }}>
                <svg viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="14" stroke="#ef4444" strokeWidth="1.5" fill="rgba(239,68,68,0.1)" /><path d="M11 11l10 10M21 11l-10 10" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" /></svg>
                <span>&ldquo;Người đó có thực sự ở đó?&rdquo;</span>
              </div>
            </div>
          </div>
          <div className="reveal-problem flex justify-center lg:justify-end">
            <svg viewBox="0 0 260 440" fill="none" style={{ width: "100%", maxWidth: "200px" }}>
              <defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(232,232,227,0.08)" /><stop offset="100%" stopColor="rgba(232,232,227,0.03)" /></linearGradient></defs>
              <rect x="30" y="10" width="200" height="420" rx="30" fill="url(#pg)" stroke="rgba(232,232,227,0.2)" strokeWidth="1.5" />
              <rect x="90" y="22" width="80" height="22" rx="11" fill="#0a0a0a" stroke="rgba(232,232,227,0.12)" strokeWidth="1" />
              <circle cx="130" cy="33" r="4" fill="rgba(232,232,227,0.08)" stroke="rgba(232,232,227,0.15)" strokeWidth="0.5" />
              <rect x="42" y="52" width="176" height="352" rx="4" fill="rgba(20,20,20,0.9)" stroke="rgba(232,232,227,0.06)" strokeWidth="0.5" />
              <line x1="42" y1="110" x2="218" y2="110" stroke="rgba(232,232,227,0.05)" strokeWidth="0.5" /><line x1="42" y1="165" x2="218" y2="165" stroke="rgba(232,232,227,0.05)" strokeWidth="0.5" /><line x1="100" y1="52" x2="100" y2="250" stroke="rgba(232,232,227,0.05)" strokeWidth="0.5" /><line x1="160" y1="52" x2="160" y2="250" stroke="rgba(232,232,227,0.05)" strokeWidth="0.5" />
              <g className="problem-draw"><path d="M130 95c-14 0-25 11-25 25 0 20 25 45 25 45s25-25 25-45c0-14-11-25-25-25z" stroke="#3b82f6" strokeWidth="2" fill="rgba(59,130,246,0.12)" /><circle cx="130" cy="118" r="8" stroke="#3b82f6" strokeWidth="1.5" fill="rgba(59,130,246,0.08)" /></g>
              <g className="problem-draw"><circle cx="130" cy="130" r="35" stroke="#ef4444" strokeWidth="1.5" fill="rgba(239,68,68,0.06)" strokeDasharray="4 4" /><line x1="110" y1="110" x2="150" y2="150" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" /><line x1="150" y1="110" x2="110" y2="150" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" /></g>
              <rect x="56" y="270" width="148" height="50" rx="10" fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.25)" strokeWidth="1" />
              <circle cx="78" cy="295" r="10" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.35)" strokeWidth="0.75" /><path d="M74 291l8 8M82 291l-8 8" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="96" y="287" width="90" height="5" rx="2.5" fill="rgba(232,232,227,0.12)" /><rect x="96" y="298" width="60" height="4" rx="2" fill="rgba(232,232,227,0.06)" />
              <rect x="100" y="416" width="60" height="4" rx="2" fill="rgba(232,232,227,0.15)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
