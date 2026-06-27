"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  { name: "Google" },
  { name: "Microsoft" },
  { name: "Amazon AWS" },
  { name: "Shopify" },
  { name: "Figma" },
  { name: "HubSpot" },
  { name: "Zoho" },
  { name: "Salesforce" },
];

const Hero = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay({ delay: 0, stopOnInteraction: false, playOnInit: true })]
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        @keyframes heroSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-10px) rotate(0.5deg); }
          66%       { transform: translateY(-5px) rotate(-0.5deg); }
        }
        @keyframes heroPing {
          0%   { transform: scale(1); opacity: 0.9; }
          100% { transform: scale(2.6); opacity: 0; }
        }
        @keyframes gradientText {
          0%,100% { background-position: 0% 50%; }
          50%     { background-position: 100% 50%; }
        }
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes orbPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.08); }
        }
        @keyframes gridFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes cardSlide {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes borderGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(26,92,221,0); }
          50%     { box-shadow: 0 0 20px 4px rgba(26,92,221,0.3); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .hero-animated-gradient {
          background: linear-gradient(270deg, #93C5FD, #60A5FA, #3B82F6, #1A5CDD, #1D4ED8, #60A5FA);
          background-size: 400% 400%;
          animation: gradientText 5s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .h-a1 { animation: heroSlideUp 0.9s cubic-bezier(0.22,1,0.36,1) both 0.0s; }
        .h-a2 { animation: heroSlideUp 0.9s cubic-bezier(0.22,1,0.36,1) both 0.15s; }
        .h-a3 { animation: heroSlideUp 0.9s cubic-bezier(0.22,1,0.36,1) both 0.28s; }
        .h-a4 { animation: heroSlideUp 0.9s cubic-bezier(0.22,1,0.36,1) both 0.42s; }
        .h-a5 { animation: heroSlideUp 0.9s cubic-bezier(0.22,1,0.36,1) both 0.56s; }

        .float-card-1 { animation: cardSlide 0.8s ease both 0.7s, heroFloat 6s ease-in-out infinite 1.5s; }
        .float-card-2 { animation: cardSlide 0.8s ease both 0.9s, heroFloat 7s ease-in-out infinite 2s; }

        .ticker-wrap { animation: tickerScroll 32s linear infinite; }
        .ticker-wrap:hover { animation-play-state: paused; }

        .orb-1 { animation: orbPulse 8s ease-in-out infinite; }
        .orb-2 { animation: orbPulse 10s ease-in-out infinite 2s; }
        .orb-3 { animation: orbPulse 7s ease-in-out infinite 4s; }

        .cta-primary {
          background: linear-gradient(135deg, #1A5CDD 0%, #0D3FA6 100%);
          box-shadow: 0 0 0 0 rgba(26,92,221,0.4);
          animation: borderGlow 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(26,92,221,0.55);
        }
        .cta-secondary {
          transition: all 0.3s ease;
        }
        .cta-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.1);
        }

        .stat-num {
          background: linear-gradient(135deg, #fff 30%, rgba(74,158,255,0.8));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full overflow-hidden min-h-screen flex items-center" style={{ background: "#040B1A" }}>

        {/* ── Deep layered background ── */}
        {/* Base gradient */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(26,92,221,0.50) 0%, rgba(4,11,26,0) 60%)"
        }} />

        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          animation: "gridFade 1.5s ease both"
        }} />

        {/* Glowing orbs */}
        <div className="orb-1 absolute top-[-100px] left-[-150px] w-[700px] h-[700px] rounded-full pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(circle, rgba(26,92,221,0.28) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="orb-2 absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(circle, rgba(56,100,220,0.20) 0%, transparent 65%)", filter: "blur(80px)" }} />
        <div className="orb-3 absolute top-[40%] right-[15%] w-[300px] h-[300px] rounded-full pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 60%)", filter: "blur(40px)" }} />

        {/* Decorative geometric shapes */}
        <div className="absolute top-[15%] right-[8%] w-48 h-48 rounded-full border border-[#1A5CDD]/12 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-[18%] right-[9.5%] w-32 h-32 rounded-full border border-[#1A5CDD]/08 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-[20%] left-[6%] w-36 h-36 rounded-full border border-white/05 pointer-events-none" aria-hidden="true" />

        {/* ── Floating Metric Cards ── */}
        {mounted && (
          <>
            {/* Left card */}
            <div
              className="float-card-1 absolute hidden xl:flex flex-col gap-2 p-5 rounded-2xl z-20"
              style={{
                top: "28%", left: "3.5%",
                background: "rgba(8,18,46,0.75)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                minWidth: "175px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: "rgba(26,92,221,0.20)", border: "1px solid rgba(26,92,221,0.35)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="16" height="16" fill="none" stroke="#4A9EFF" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "20px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>1000+</p>
                  <p style={{ fontSize: "9px", color: "#6B7280", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "2px" }}>Projects Delivered</p>
                </div>
              </div>
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ display: "flex", gap: "3px", alignItems: "flex-end", height: "24px" }}>
                  {[35, 55, 42, 80, 65, 100].map((h, i) => (
                    <div key={i} style={{
                      width: "5px", height: `${h * 0.24}px`, borderRadius: "3px",
                      background: i === 5 ? "linear-gradient(to top, #1A5CDD, #60A5FA)" : `rgba(26,92,221,${0.15 + i * 0.08})`
                    }} />
                  ))}
                </div>
                <span style={{ fontSize: "9px", color: "#34D399", fontWeight: 700 }}>↑ 43% this year</span>
              </div>
            </div>

            {/* Right card */}
            <div
              className="float-card-2 absolute hidden xl:flex flex-col gap-3 p-5 rounded-2xl z-20"
              style={{
                bottom: "28%", right: "3.5%",
                background: "rgba(8,18,46,0.75)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                minWidth: "165px",
              }}
            >
              <p style={{ fontSize: "9px", color: "#6B7280", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Client Satisfaction</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ position: "relative", width: "52px", height: "52px" }}>
                  <svg viewBox="0 0 36 36" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="transparent" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="transparent" stroke="url(#radGrad)" strokeWidth="4" strokeDasharray="98,100" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="radGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4A9EFF" />
                        <stop offset="100%" stopColor="#1A5CDD" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 800, color: "#fff" }}>98%</div>
                </div>
                <div>
                  <p style={{ fontSize: "16px", fontWeight: 800, color: "#fff" }}>5M+</p>
                  <p style={{ fontSize: "9px", color: "#6B7280", fontWeight: 600 }}>Global clients</p>
                  <div style={{ display: "flex", marginTop: "4px", gap: "-4px" }}>
                    {["#1A5CDD", "#0D8A6A", "#7C3AED"].map((c, i) => (
                      <div key={i} style={{ width: "18px", height: "18px", borderRadius: "50%", background: c, border: "2px solid rgba(8,18,46,0.9)", marginLeft: i > 0 ? "-6px" : "0" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── Content ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-28 text-center">

          {/* Badge */}
          <div className="inline-flex items-center mb-10 h-a1">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full" style={{
              background: "rgba(26,92,221,0.12)",
              border: "1px solid rgba(26,92,221,0.30)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 24px rgba(26,92,221,0.15)",
            }}>
              <span className="flex h-2 w-2 relative flex-shrink-0">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-[#1A5CDD] opacity-75" style={{ animation: "heroPing 1.4s cubic-bezier(0,0,0.2,1) infinite" }} />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60A5FA]" />
              </span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#93C5FD", textTransform: "uppercase", letterSpacing: "0.18em" }}>
                Guardians Of Your Digital World
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="mx-auto mb-8 font-black tracking-tight h-a2"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 6.2rem)",
              lineHeight: "1.03",
              color: "#F0F6FF",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.025em",
            }}
          >
            Best Software Company
            <br />
            <span className="hero-animated-gradient">in Chennai</span>
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mb-14 max-w-2xl leading-relaxed h-a3" style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(180,195,230,0.85)",
            letterSpacing: "0.01em",
            lineHeight: "1.75",
          }}>
            Scalable &amp; performance-driven digital systems — built with innovation,
            technology, and strategic thinking to secure your business future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 h-a4">
            <a href="/contact" className="cta-primary group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white overflow-hidden active:scale-95">
              <span className="relative z-10 text-base">Get Started Free</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="/services" className="cta-secondary group inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white active:scale-95" style={{
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              fontSize: "base",
            }}>
              Explore Services
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 4l8 8-8 8" />
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-20 h-a5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2.5rem" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
              {[
                { value: "150+", label: "Team Members" },
                { value: "1000+", label: "Projects Delivered" },
                { value: "10+", label: "Years of Excellence" },
                { value: "100+", label: "Awards & Recognition" },
              ].map((stat) => (
                <div key={stat.value} className="text-center group cursor-default select-none">
                  <p className="stat-num font-black" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: "10px", color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.18em", marginTop: "8px", fontWeight: 700 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DASHBOARD MOCKUP ── */}
      <div className="relative pb-0 px-6 lg:px-20" style={{ background: "#040B1A" }}>
        {/* Glow behind mockup */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(26,92,221,0.4), transparent)" }} />
        <div
          className="mx-auto max-w-6xl rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 60px 160px rgba(26,92,221,0.28), 0 0 0 1px rgba(255,255,255,0.04), inset 0 0 80px rgba(26,92,221,0.06)",
          }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-5 py-3.5" style={{ background: "#090F1F", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-5 flex-1 max-w-xs h-6 rounded-md flex items-center px-3 gap-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <svg className="w-3 h-3" fill="none" stroke="rgba(100,116,139,1)" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span style={{ fontSize: "9px", color: "#64748B", fontWeight: 500 }}>syscorp.itsk.in</span>
            </div>
            <div className="ml-auto flex gap-1.5">
              <div style={{ width: "14px", height: "14px", borderRadius: "3px", background: "rgba(255,255,255,0.04)" }} />
              <div style={{ width: "14px", height: "14px", borderRadius: "3px", background: "rgba(255,255,255,0.04)" }} />
            </div>
          </div>
          <Image
            src="/images/home/home-banner.webp"
            alt="Syscorp Dashboard Preview"
            width={1192}
            height={545}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* ── PARTNER TICKER ── */}
      <div style={{ background: "#040B1A", paddingTop: "64px", paddingBottom: "80px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p style={{ textAlign: "center", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.28em", color: "#374151", marginBottom: "40px" }}>
          Trusted by industry-leading companies
        </p>
        <div className="relative w-full overflow-hidden" style={{
          maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)"
        }}>
          <div className="ticker-wrap" style={{ display: "flex", gap: "16px", width: "max-content" }}>
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0, height: "44px", padding: "0 28px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.03)",
                  color: "#6B7280", fontSize: "13px", fontWeight: 700,
                  letterSpacing: "0.04em", whiteSpace: "nowrap",
                  backdropFilter: "blur(8px)",
                  cursor: "default", userSelect: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,92,221,0.4)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(26,92,221,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#6B7280";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
