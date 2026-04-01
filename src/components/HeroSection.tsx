"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current || !sectionRef.current || !subtitleRef.current) return;
    const ctx = gsap.context(() => {
      const text = titleRef.current!.textContent || "";
      titleRef.current!.innerHTML = text
        .split(" ")
        .map((word) => {
          const chars = word.split("").map((ch) => `<span class="inline-block will-change-transform">${ch}</span>`).join("");
          return `<span class="inline-block whitespace-nowrap">${chars}</span>`;
        })
        .join('<span class="inline-block" style="width:0.35em">&nbsp;</span>');

      gsap.from(titleRef.current!.querySelectorAll("span > span"), {
        y: 80, opacity: 0, rotateX: -60, stagger: 0.03, duration: 1, ease: "power3.out", delay: 0.3,
      });
      gsap.to(subtitleRef.current, { opacity: 1, y: 0, duration: 1, delay: 1.0, ease: "power2.out" });

      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: true },
      }).to(titleRef.current, { scale: 0.9, opacity: 0, y: -50 }, 0)
        .to(subtitleRef.current, { opacity: 0, y: -30 }, 0);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="section-page justify-center flex-col">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(232,232,227,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(232,232,227,0.025) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 40% at 50% 45%, rgba(59,130,246,0.07) 0%, transparent 100%)",
      }} />
      <div className="absolute top-8 left-6 md:left-12 lg:left-16 label-sm" style={{ color: "rgba(232,232,227,0.3)" }}>PI GROUP — Software Division</div>
      <div className="text-center z-10 px-6 w-full" style={{ maxWidth: "1100px" }}>
        <h1 ref={titleRef} className="heading-hero mb-7" style={{ perspective: "800px" }}>Proof of Presence</h1>
        <p ref={subtitleRef} style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(14px, 1.2vw, 18px)", color: "rgba(232,232,227,0.45)", fontWeight: 300, letterSpacing: "0.04em", opacity: 0, transform: "translateY(20px)" }}>
          Giải pháp xác minh hiện diện thực tế — Chống gian lận check-in
        </p>
      </div>
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-16 label-sm" style={{ color: "rgba(232,232,227,0.3)" }}>Võ Quốc Huy — 03.2026</div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(232,232,227,0.25)" }}>Scroll to explore</span>
        <div className="w-px h-10 scroll-pulse" style={{ background: "rgba(232,232,227,0.35)" }} />
      </div>
    </section>
  );
}
