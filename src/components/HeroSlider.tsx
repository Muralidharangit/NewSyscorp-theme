"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

/* ─── SLIDE DATA ─── */
const slides = [
  {
    num: "01",
    tag: "Custom Website Development",
    title: "Stunning Websites",
    titleAccent: "That Convert",
    sub: "We craft high-performance, pixel-perfect websites with Next.js & React — built for speed, SEO, and maximum customer conversion.",
    stat1: { val: "500+", label: "Sites Delivered" },
    stat2: { val: "98", label: "PageSpeed Score" },
    features: ["Next.js & React", "Mobile-first Design", "SEO Optimised", "99% Uptime Hosting"],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800&h=900",
    cta: "View Web Plans",
    accent: "#1A5CDD",
    accentSecondary: "#4F46E5",
    bgDark: "#010e2e",
    bgDarkSecondary: "#011146",
    bg: "linear-gradient(135deg, #010e2e 0%, #011146 55%, #051a5a 100%)",
    navLabel: "Web Development",
    icon: "🌐",
  },
  {
    num: "02",
    tag: "Cloud & DevOps Infrastructure",
    title: "Enterprise Cloud",
    titleAccent: "Built to Scale",
    sub: "Deploy anywhere with 99.99% uptime SLA. From serverless to dedicated servers — we architect, secure and manage your cloud stack.",
    stat1: { val: "99.99%", label: "Uptime SLA" },
    stat2: { val: "300+", label: "Cloud Projects" },
    features: ["AWS / GCP / Azure", "CI/CD Pipelines", "Auto-scaling", "24/7 Monitoring"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=900",
    cta: "See Cloud Plans",
    accent: "#0ea5e9",
    accentSecondary: "#0284c7",
    bgDark: "#020d1f",
    bgDarkSecondary: "#031a35",
    bg: "linear-gradient(135deg, #020d1f 0%, #031a35 55%, #042044 100%)",
    navLabel: "Cloud Solutions",
    icon: "☁️",
  },
  {
    num: "03",
    tag: "Custom CRM & Business Systems",
    title: "Smart CRM Systems",
    titleAccent: "That Close Deals",
    sub: "Custom-built CRM pipelines with lead automation, real-time dashboards, and email integration — designed around your workflow.",
    stat1: { val: "3x", label: "Lead Conversion" },
    stat2: { val: "200+", label: "CRMs Deployed" },
    features: ["Lead Management", "Email Automation", "Analytics Dashboard", "Custom Workflows"],
    img: "https://images.unsplash.com/photo-1639066648921-82d4500abf1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cta: "Explore CRM Plans",
    accent: "#8b5cf6",
    accentSecondary: "#7c3aed",
    bgDark: "#080818",
    bgDarkSecondary: "#0d0b2a",
    bg: "linear-gradient(135deg, #080818 0%, #0d0b2a 55%, #130e36 100%)",
    navLabel: "CRM Systems",
    icon: "📊",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const animRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((next: number) => {
    if (animRef.current || next === active) return;
    animRef.current = true;
    setActive(next);
    setTimeout(() => {
      animRef.current = false;
    }, 900);
  }, [active]);

  // Auto-play timer (resets automatically when slide is changed)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(p => (p + 1) % slides.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active]);

  // GSAP Choreographed entrance animation on active change
  useEffect(() => {
    if (!wrapRef.current) return;
    
    const meta = wrapRef.current.querySelector(".hs-meta");
    const heading = wrapRef.current.querySelector(".hs-heading");
    const sub = wrapRef.current.querySelector(".hs-sub");
    const pills = wrapRef.current.querySelectorAll(".hs-feature-pill");
    const stats = wrapRef.current.querySelectorAll(".hs-stat");
    const ctas = wrapRef.current.querySelector(".hs-ctas");
    const orb = wrapRef.current.querySelector(".hs-orb");
    
    const tl = gsap.timeline();
    
    // Set initial states for premium transition
    tl.set([meta, heading, sub, ctas], { opacity: 0, y: 30 });
    tl.set(pills, { opacity: 0, scale: 0.85, y: 10 });
    tl.set(stats, { opacity: 0, x: -15 });
    tl.set(orb, { scale: 0.7, opacity: 0 });
    
    // Run animations sequentially
    tl.to(orb, { scale: 1, opacity: 0.18, duration: 1.4, ease: "power3.out" })
      .to(meta, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=1.2")
      .to(heading, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.9")
      .to(sub, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.7")
      .to(pills, { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "back.out(1.2)" }, "-=0.5")
      .to(stats, { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4")
      .to(ctas, { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.1)" }, "-=0.3");
      
  }, [active]);

  const slide = slides[active];

  return (
    <div ref={wrapRef}>
      <style>{`
        .hs-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 650px;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* ── BACKGROUNDS ── */
        .hs-bg {
          position: absolute;
          inset: 0;
          transition: background 0.9s cubic-bezier(0.16,1,0.3,1);
          z-index: 0;
        }
        .hs-dots-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(26,92,221,0.07) 1px, transparent 1px);
          background-size: 30px 30px;
          z-index: 1;
          pointer-events: none;
        }
        .hs-orb {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          pointer-events: none;
          z-index: 1;
          top: -100px; left: -100px;
          transition: background 0.9s ease;
        }

        /* ── MAIN GRID SYSTEM (No Collapsing) ── */
        .hs-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          height: 100%;
          width: 100%;
          position: relative;
          z-index: 10;
        }
        @media (min-width: 1024px) {
          .hs-main-grid {
            grid-template-columns: 55% 45%;
          }
        }

        /* Left Content Column */
        .hs-content-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 8% 0 10%;
          height: calc(100vh - 90px);
          min-height: 560px;
          width: 100%;
        }

        /* Right Image Column */
        .hs-image-col {
          position: relative;
          height: calc(100vh - 90px);
          width: 100%;
          overflow: hidden;
          z-index: 2;
        }

        /* Ambient Image wrapper & fades */
        .hs-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .hs-image-mask {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          transition: background 0.9s ease;
        }
        .hs-image-bottom-tint {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 40%;
          z-index: 4;
          pointer-events: none;
          transition: background 0.9s ease;
        }

        /* ── TEXT PANEL ── */
        .hs-panel {
          max-width: 540px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        /* Meta Tag */
        .hs-meta {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .hs-num {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.12em;
        }
        .hs-divider {
          width: 28px; height: 1px;
          background: rgba(255,255,255,0.2);
        }
        .hs-tag {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* Heading */
        .hs-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.04em;
          color: #ffffff;
          margin: 0;
        }
        .hs-heading-accent {
          display: inline;
        }

        /* Sub text */
        .hs-sub {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: rgba(255,255,255,0.5);
          line-height: 1.65;
          max-width: 460px;
          margin: 0;
        }

        /* Feature pills */
        .hs-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .hs-feature-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 50px;
          border: 1px solid;
          background: rgba(255,255,255,0.03);
          letter-spacing: 0.02em;
          transition: background 0.2s ease;
        }
        .hs-feature-pill:hover { background: rgba(255,255,255,0.06); }

        /* Stats */
        .hs-stats {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }
        .hs-stat {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .hs-stat-val {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .hs-stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }

        /* CTAs */
        .hs-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .hs-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #fff !important;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          padding: 13px 28px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          white-space: nowrap;
        }
        .hs-btn-primary:hover {
          transform: translateY(-2px);
        }
        .hs-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.55);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.12);
          padding: 12px 22px;
          border-radius: 50px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .hs-btn-ghost:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.05);
        }

        /* ── BOTTOM NAV BAR ── */
        .hs-nav {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 20;
          display: flex;
          height: 90px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .hs-nav-item {
          flex: 1;
          position: relative;
          padding: 0 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          background: rgba(1,10,30,0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: none;
          text-align: left;
          transition: background 0.3s ease;
          border-right: 1px solid rgba(255,255,255,0.05);
          height: 100%;
        }
        .hs-nav-item:last-child { border-right: none; }
        .hs-nav-item.is-active { background: rgba(255,255,255,0.03); }
        .hs-nav-item:hover:not(.is-active) { background: rgba(255,255,255,0.04); }

        /* Progress line on top of active nav */
        .hs-nav-progress {
          position: absolute;
          top: 0; left: 0;
          height: 2px;
          width: 0%;
          transition: none;
        }
        .hs-nav-item.is-active .hs-nav-progress {
          animation: hsNavProgress 6s linear forwards;
        }
        @keyframes hsNavProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }

        .hs-nav-icon {
          font-size: 18px;
          flex-shrink: 0;
          filter: grayscale(0.4);
          transition: filter 0.3s ease, transform 0.3s ease;
        }
        .hs-nav-item.is-active .hs-nav-icon {
          filter: grayscale(0);
          transform: scale(1.1);
        }

        .hs-nav-text { display: flex; flex-direction: column; gap: 2px; }
        .hs-nav-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.35);
          transition: color 0.3s ease;
          line-height: 1.2;
        }
        .hs-nav-item.is-active .hs-nav-label { color: rgba(255,255,255,0.9); }
        .hs-nav-sub {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.2);
          transition: color 0.3s ease;
        }
        .hs-nav-item.is-active .hs-nav-sub { color: rgba(255,255,255,0.45); }

        /* ── MOBILE / TABLET OVERRIDE ── */
        @media (max-width: 1023px) {
          .hs-main-grid {
            grid-template-columns: 1fr;
          }
          .hs-image-col {
            position: absolute;
            right: 0; top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.15;
            z-index: 1;
            pointer-events: none;
          }
          .hs-content-col {
            position: relative;
            z-index: 10;
            height: calc(100vh - 80px);
            padding: 80px 24px 20px;
          }
          .hs-image-mask {
            background: radial-gradient(circle at center, transparent 20%, var(--bg-base) 80%) !important;
          }
          .hs-nav-text { display: none; }
          .hs-nav-item { padding: 0 16px; justify-content: center; }
          .hs-nav-icon { font-size: 22px; }
          .hs-nav { height: 80px; }
        }

        @media (max-width: 640px) {
          .hs-heading { font-size: clamp(2rem, 8vw, 2.5rem); }
          .hs-sub { font-size: 14px; }
        }
      `}</style>

      <section className="hs-hero" id="home-banner" style={{ "--bg-base": slide.bgDark } as React.CSSProperties}>
        {/* Slide background */}
        <div className="hs-bg" style={{ background: slide.bg }} />
        <div className="hs-orb" style={{ background: `radial-gradient(circle, ${slide.accent}, transparent)` }} />
        <div className="hs-dots-grid" />

        {/* Main Grid Wrapper */}
        <div className="hs-main-grid">
          
          {/* Left Column (Content) */}
          <div className="hs-content-col">
            <div className="hs-panel">

              {/* Number + tag */}
              <div className="hs-meta">
                <span className="hs-num">{slide.num}</span>
                <span className="hs-divider" />
                <span className="hs-tag" style={{ color: `${slide.accent}cc` }}>{slide.tag}</span>
              </div>

              {/* Heading */}
              <h1 className="hs-heading">
                <span>{slide.title}</span>
                <br />
                <span className="hs-heading-accent" style={{ color: slide.accent }}>
                  {slide.titleAccent}
                </span>
              </h1>

              {/* Subtext */}
              <p className="hs-sub">{slide.sub}</p>

              {/* Feature pills */}
              <div className="hs-features">
                {slide.features?.map((f, i) => (
                  <span key={i} className="hs-feature-pill" style={{ borderColor: `${slide.accent}33`, color: `${slide.accent}cc` }}>
                    <span style={{ color: slide.accent, fontSize: 9 }}>●</span> {f}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="hs-stats">
                <div className="hs-stat">
                  <span className="hs-stat-val" style={{ color: slide.accent }}>{slide.stat1.val}</span>
                  <span className="hs-stat-label">{slide.stat1.label}</span>
                </div>
                <div style={{ width: 1, background: "rgba(255,255,255,0.08)", alignSelf: "stretch" }} />
                <div className="hs-stat">
                  <span className="hs-stat-val" style={{ color: slide.accent }}>{slide.stat2.val}</span>
                  <span className="hs-stat-label">{slide.stat2.label}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hs-ctas">
                <a
                  href="/services"
                  className="hs-btn-primary"
                  style={{
                    background: `linear-gradient(135deg, ${slide.accent} 0%, ${slide.accentSecondary} 100%)`,
                    boxShadow: `0 4px 20px ${slide.accent}55`,
                  }}
                >
                  {slide.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </a>
                <a href="/contact" className="hs-btn-ghost">
                  Get in Touch
                </a>
              </div>

            </div>
          </div>

          {/* Right Column (Image with custom cross-fade & zoom animation) */}
          <div className="hs-image-col">
            <div className="hs-image-wrapper">
              {slides.map((s, idx) => (
                <div
                  key={idx}
                  className="hs-slide-img"
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: active === idx ? 1 : 0,
                    transform: active === idx ? "scale(1)" : "scale(1.12)",
                    transition: "opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.4s cubic-bezier(0.25, 1, 0.5, 1)",
                    zIndex: active === idx ? 2 : 1,
                    pointerEvents: active === idx ? "auto" : "none",
                  }}
                >
                  <img
                    src={s.img}
                    alt={s.tag}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              ))}
              {/* Image Overlays */}
              <div
                className="hs-image-mask"
                style={{
                  background: `linear-gradient(90deg, ${slide.bgDark} 0%, transparent 60%)`,
                }}
              />
              <div
                className="hs-image-bottom-tint"
                style={{
                  background: `linear-gradient(0deg, ${slide.bgDark} 0%, transparent 100%)`,
                }}
              />
            </div>
          </div>

        </div>

        {/* Bottom tabbed navigation */}
        <nav className="hs-nav" style={{ background: `${slide.bgDark}ee` }}>
          {slides.map((s, i) => (
            <button
              key={i}
              className={`hs-nav-item${active === i ? " is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${s.num}: ${s.navLabel}`}
              style={active === i ? { background: `${s.accent}18` } : {}}
            >
              <div
                className="hs-nav-progress"
                key={`prog-${active}-${i}`}
                style={active === i ? { background: `linear-gradient(90deg, ${s.accent}, ${s.accentSecondary})`, boxShadow: `0 0 10px ${s.accent}88` } : {}}
              />
              <span className="hs-nav-icon">{s.icon}</span>
              <div className="hs-nav-text">
                <span className="hs-nav-label" style={active === i ? { color: "rgba(255,255,255,0.95)" } : {}}>{s.navLabel}</span>
                <span className="hs-nav-sub">{s.tag}</span>
              </div>
            </button>
          ))}
        </nav>
      </section>
    </div>
  );
}
