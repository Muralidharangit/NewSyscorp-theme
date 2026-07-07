"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy, Globe2, ShieldCheck, Sparkles, Star, ArrowRight, CheckCircle2 } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
];

const stats = [
  { value: "15+", label: "Years Of\nEngineering", growth: "+32% YoY", sub: "Global Experience" },
  { value: "05", label: "Global Tech\nAwards", growth: "Top 1%", sub: "Recognized Excellence" },
  { value: "250+", label: "Enterprise Clients\nServed", growth: "99.8% Retention", sub: "Worldwide Trust" },
  { value: "50M+", label: "End Users\nEngaged Daily", growth: "120+ Countries", sub: "High Concurrency" }
];

export default function AchievementsSection() {
  return (
    <section 
      aria-labelledby="achievements-heading"
      className="py-24 lg:py-32 bg-white dark:bg-[#010925] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#1A5CDD]/10 dark:bg-[#1A5CDD]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#38bdf8]/10 dark:bg-[#38bdf8]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Grid Mesh overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A5CDD_1px,transparent_1px)] dark:bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] dark:opacity-[0.06] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: 2 COLUMNS WITH RICH INTERACTIVE ELEMENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* LEFT COLUMN: Floating 3D Globe Hub + Dual Award Cards */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[360px] sm:min-h-[420px]">
            
            {/* Ambient Backlight Halo behind Globe */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#1A5CDD]/30 to-[#38bdf8]/20 dark:from-[#1A5CDD]/40 dark:to-[#38bdf8]/30 blur-2xl animate-pulse" />

            {/* Floating Top Badge 1: Security Certification */}
            <div className="absolute top-0 left-2 sm:left-4 z-20 bg-white/90 dark:bg-[#061854]/90 backdrop-blur-xl border border-slate-200 dark:border-white/15 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 transition-all duration-300 hover:-translate-y-1">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <p className="text-[11px] font-black text-slate-900 dark:text-white leading-none">ISO 27001 Certified</p>
                <p className="text-[9px] font-semibold text-slate-500 dark:text-slate-400 mt-1">Enterprise Security</p>
              </div>
            </div>

            {/* Central 3D Wireframe Globe Graphic with Orbiting Points */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              <Globe2 className="w-full h-full text-slate-400/50 dark:text-slate-300/40 stroke-[0.8] animate-[spin_50s_linear_infinite]" />
              
              {/* Orbital Dashed Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#1A5CDD]/40 dark:border-[#38bdf8]/40 animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute inset-6 rounded-full border border-slate-300/40 dark:border-white/10" />
              
              {/* Pulsing Core Center */}
              <div className="absolute w-12 h-12 rounded-full bg-[#1A5CDD]/20 dark:bg-[#38bdf8]/20 flex items-center justify-center backdrop-blur-md">
                <div className="w-4 h-4 rounded-full bg-[#1A5CDD] dark:bg-[#38bdf8] animate-ping" />
              </div>
            </div>

            {/* Floating Bottom Badge 2: Global Impact Award */}
            <div className="absolute bottom-2 right-2 sm:right-4 z-20 bg-white/95 dark:bg-[#061854]/95 backdrop-blur-xl border border-slate-200 dark:border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl flex items-center gap-4 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1A5CDD] to-[#38bdf8] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0">
                <Trophy className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xs font-black tracking-tight text-slate-900 dark:text-white block">
                  Impact Award 2026
                </span>
                <span className="text-[10px] font-bold text-[#1A5CDD] dark:text-[#38bdf8] block mt-0.5">
                  ★ Top 10 Tech Leaders
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Modern Header, Proof Badges, Checklist & Double CTAs */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#1A5CDD]/10 dark:bg-[#38bdf8]/10 text-[#1A5CDD] dark:text-[#38bdf8] border border-[#1A5CDD]/20 dark:border-[#38bdf8]/30">
              <Sparkles className="w-3.5 h-3.5" />
              Syscorp Achievements & Milestones
            </div>

            {/* Main Title */}
            <h2 
              id="achievements-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]"
            >
              Transforming Enterprise Ideas Into <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5CDD] via-blue-600 to-[#38bdf8] dark:from-white dark:via-slate-100 dark:to-[#38bdf8]">
                High-Performance Digital Reality
              </span>
            </h2>

            {/* Active User Proof Card */}
            <div className="flex flex-wrap items-center gap-4 p-3 bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl w-fit">
              <div className="flex -space-x-3 overflow-hidden">
                {avatars.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt="Syscorp satisfied client avatar"
                    width={38}
                    height={38}
                    className="inline-block h-9.5 w-9.5 rounded-full ring-2 ring-white dark:ring-[#010925] object-cover"
                  />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300 pr-2">
                <span className="text-slate-900 dark:text-white font-extrabold">25,000+ Enterprise Users</span>
                <div className="flex items-center gap-1 text-amber-500 text-[10px] mt-0.5">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-slate-500 dark:text-slate-400 font-semibold ml-1">(4.9/5 rating)</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              We build mission-critical web applications, enterprise platforms, and cloud infrastructure engineered for zero downtime, bank-grade security, and extreme scalability.
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs font-extrabold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#1A5CDD] dark:text-[#38bdf8] flex-shrink-0" />
                100/100 Core Web Vitals Guaranteed
              </div>
              <div className="flex items-center gap-2.5 text-xs font-extrabold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#1A5CDD] dark:text-[#38bdf8] flex-shrink-0" />
                Sub-Second Server Action Velocity
              </div>
            </div>

            {/* Dual CTA Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1A5CDD] hover:bg-[#154ebc] dark:bg-[#38bdf8] dark:hover:bg-[#0284c7] text-white dark:text-[#011146] font-extrabold text-sm px-7 py-4 rounded-full shadow-lg shadow-blue-500/20 dark:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get a Free Consultation
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                href="/services/website-development"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-900 dark:text-white font-extrabold text-sm px-6 py-4 rounded-full border border-slate-200 dark:border-white/15 transition-all duration-300"
              >
                Explore Stack
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: 2026 MINIMALIST BORDER-ROW COUNTERS WITH GROWTH ACCENTS */}
        <div className="relative pt-12 border-t border-slate-200 dark:border-slate-800/80">
          
          {/* Subtle Glowing Center Accent on Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#1A5CDD] dark:via-[#38bdf8] to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800/80 gap-y-8 md:gap-y-0">
            {stats.map((item, index) => (
              <div 
                key={index} 
                className={`group flex flex-col justify-between ${index !== 0 ? 'md:pl-8 lg:pl-10' : ''} ${index % 2 !== 0 ? 'pl-6 md:pl-8' : ''} transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight font-sans leading-none group-hover:text-[#1A5CDD] dark:group-hover:text-[#38bdf8] transition-colors duration-300">
                    {item.value}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    {item.growth}
                  </span>
                </div>

                <div>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 leading-snug whitespace-pre-line block font-sans">
                    {item.label}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mt-1">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
