"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "images/icons/1.svg",
    title: "Data-Driven Development",
    desc: "Leverage analytics & modern frameworks to craft high-performing, insight-led solutions.",
  },
  {
    icon: "images/icons/2.svg",
    title: "Creativity & Performance",
    desc: "Innovative design meets performance optimization for secure, scalable, user-friendly systems.",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-white py-32 px-6 md:px-12 lg:px-24"
    >
      <style>{`
        @keyframes aboutSlideLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes aboutSlideRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes aboutFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .about-left  { animation: aboutSlideLeft  0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .about-right { animation: aboutSlideRight 0.8s cubic-bezier(0.22,1,0.36,1) both 0.15s; }
        .about-card-1 { animation: aboutFadeUp 0.6s ease both 0.3s; }
        .about-card-2 { animation: aboutFadeUp 0.6s ease both 0.45s; }
        .about-card-3 { animation: aboutFadeUp 0.6s ease both 0.2s; }
        .about-card-4 { animation: aboutFadeUp 0.6s ease both 0.6s; }
      `}</style>

      {/* Decorative top stripe */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A5CDD]/30 to-transparent" />

      {/* Radial glow */}
      <div
        className="absolute -top-40 right-0 w-[700px] h-[700px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle at top right, rgba(26,92,221,0.06) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ── LEFT: image cluster ── */}
        <div className={`relative flex justify-center lg:justify-start ${visible ? "about-left" : "opacity-0"}`}>
          <div className="relative w-full max-w-[440px]">

            {/* Dotted grid bg */}
            <div
              className="absolute -inset-8 rounded-3xl pointer-events-none"
              aria-hidden="true"
              style={{
                backgroundImage: "radial-gradient(rgba(26,92,221,0.12) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Main image */}
            <div
              className="relative z-10 overflow-hidden rounded-3xl"
              style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.12), 0 0 0 1px rgba(26,92,221,0.10)" }}
            >
              <Image
                src="/images/home/about-home.webp"
                alt="Syscorp team presenting digital strategy"
                width={500}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A5CDD]/12 to-transparent pointer-events-none" />
            </div>

            {/* Growth Rate widget */}
            <div
              className={`absolute -left-8 -top-8 z-20 hidden sm:flex flex-col gap-3 p-5 rounded-2xl bg-white ${visible ? "about-card-1" : "opacity-0"}`}
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)" }}
              aria-hidden="true"
            >
              <p className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400">Growth Rate</p>
              <div className="flex items-end gap-1.5 h-10">
                {[40, 60, 100, 75, 85].map((h, i) => (
                  <div
                    key={i}
                    className="w-2.5 rounded-full"
                    style={{
                      height: `${h}%`,
                      background: i === 2
                        ? "linear-gradient(to top, #1A5CDD, #4A9EFF)"
                        : `rgba(26,92,221,${0.12 + i * 0.1})`,
                    }}
                  />
                ))}
              </div>
              <p className="text-[10px] font-extrabold text-[#1A5CDD]">↑ 43% YoY</p>
            </div>

            {/* Experience chip */}
            <div
              className={`absolute -bottom-8 -right-8 z-20 hidden sm:block p-6 rounded-2xl bg-[#050C1F] text-white ${visible ? "about-card-2" : "opacity-0"}`}
              style={{ boxShadow: "0 24px 64px rgba(5,12,31,0.35)" }}
            >
              <p className="text-4xl font-extrabold text-white leading-none">10+</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1 mb-4">Years of Excellence</p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#050C1F] overflow-hidden bg-gray-600">
                      <Image src="/images/user.avif" alt="" width={28} height={28} />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 font-semibold leading-tight">
                  5M+ customers <br />worldwide
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: content ── */}
        <div className={`flex flex-col gap-8 ${visible ? "about-right" : "opacity-0"}`}>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1A5CDD]/20 bg-[#1A5CDD]/5 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#1A5CDD] about-card-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD]" />
            About Us
          </span>

          <h2
            id="about-heading"
            className="font-extrabold text-gray-900 leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            Best Software Company in Chennai —{" "}
            <span className="text-[#1A5CDD]">Syscorp</span>
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
            Syscorp delivers custom software development, web applications, mobile
            apps &amp; enterprise solutions designed to streamline operations and
            maximize ROI — from Chennai to the world.
          </p>

          {/* Feature cards bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {features.map((f, idx) => (
              <div
                key={idx}
                className={`group p-6 rounded-2xl border border-gray-100 bg-[#F8FAFF] hover:bg-white hover:border-[#1A5CDD]/25 hover:shadow-2xl transition-all duration-300 ${visible ? (idx === 0 ? "about-card-3" : "about-card-4") : "opacity-0"}`}
                style={{ transitionDuration: "320ms" }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#1A5CDD]/10 flex items-center justify-center mb-4 group-hover:bg-[#1A5CDD] transition-colors duration-300">
                  <img
                    src={f.icon}
                    alt=""
                    className="w-5 h-5 group-hover:invert group-hover:brightness-200 transition-all"
                  />
                </div>
                <h3 className="text-sm font-extrabold text-gray-900 mb-1.5">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-sm transition-all duration-300 hover:shadow-xl active:scale-95"
              style={{
                background: "linear-gradient(135deg, #1A5CDD 0%, #0D3FA6 100%)",
                boxShadow: "0 8px 30px rgba(26,92,221,0.28)",
              }}
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
