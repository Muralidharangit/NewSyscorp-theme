"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 150, suffix: "+", label: "Expert Team Members", img: "/images/icons/3.svg", color: "#1A5CDD" },
  { number: 1000, suffix: "+", label: "Projects Delivered", img: "/images/icons/4.svg", color: "#0D8A6A" },
  { number: 100, suffix: "+", label: "Awards & Recognitions", img: "/images/icons/5.svg", color: "#7C3AED" },
  { number: 10, suffix: "+", label: "Years of Excellence", img: "/images/icons/3.svg", color: "#EA580C" },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ stat, active, idx }: { stat: typeof stats[0]; active: boolean; idx: number }) {
  const count = useCountUp(stat.number, active);
  return (
    <div
      className="group relative p-10 rounded-3xl border border-white/8 overflow-hidden transition-all duration-500 hover:-translate-y-2"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
        animationDelay: `${idx * 0.12}s`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{ background: `radial-gradient(circle at 50% 50%, ${stat.color}18 0%, transparent 70%)` }}
      />

      {/* Animated border gradient on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${stat.color}25, transparent 50%, ${stat.color}15)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${stat.color}20`, border: `1px solid ${stat.color}35` }}
      >
        <Image src={stat.img} alt="" width={28} height={28} className="object-contain" />
      </div>

      {/* Animated number */}
      <p
        className="text-6xl font-extrabold leading-none mb-3"
        style={{
          background: `linear-gradient(135deg, #fff 0%, ${stat.color} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count.toLocaleString()}{stat.suffix}
      </p>

      <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{stat.label}</p>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${stat.color}, transparent)` }}
      />
    </div>
  );
}

export default function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="achievements-heading"
      className="relative overflow-hidden py-32 px-6 md:px-12 lg:px-24"
      style={{ background: "linear-gradient(160deg, #050C1F 0%, #0D1730 60%, #111827 100%)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at top, rgba(26,92,221,0.18) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#4A9EFF] mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A9EFF]" />
            Our Achievements
          </span>
          <h2
            id="achievements-heading"
            className="font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Numbers that speak{" "}
            <span style={{ background: "linear-gradient(90deg, #4A9EFF, #1A5CDD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              for themselves
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Best Software Company in Chennai — proven by results, trusted by clients worldwide.
          </p>
        </div>

        {/* Bento stat cards — 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} active={active} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
