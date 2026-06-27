"use client";
import Image from "next/image";

const advantages = [
  { icon: "📈", text: "ROI-Focused Campaigns" },
  { icon: "🎯", text: "Creative + Analytical Approach" },
  { icon: "📊", text: "Transparent Reporting" },
  { icon: "👥", text: "Experienced Digital Experts" },
  { icon: "🔗", text: "Complete Digital Solutions" },
  { icon: "⚡", text: "Faster Response & Support" },
];

export default function CommunitySection() {
  return (
    <section
      aria-labelledby="community-heading"
      className="relative overflow-hidden py-32 px-6 md:px-12 lg:px-24 bg-white"
    >
      {/* Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A5CDD]/20 to-transparent" />
      <div
        className="absolute top-0 right-0 w-[700px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle at top right, rgba(26,92,221,0.05) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle at bottom left, rgba(26,92,221,0.04) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1A5CDD]/20 bg-[#1A5CDD]/6 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#1A5CDD] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD]" />
              Why Choose Us
            </span>
            <h2
              id="community-heading"
              className="font-extrabold text-gray-900 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Strategies built to deliver
              <br />
              <span className="text-[#1A5CDD]">measurable results.</span>
            </h2>
          </div>
          <a
            href="/services"
            className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:shadow-xl active:scale-95"
            style={{ background: "linear-gradient(135deg, #1A5CDD 0%, #0D3FA6 100%)", boxShadow: "0 8px 30px rgba(26,92,221,0.22)" }}
          >
            More Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Left column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Headquarter card */}
            <div
              className="p-8 rounded-3xl relative overflow-hidden hover:scale-[1.01] transition-transform duration-300"
              style={{
                background: "linear-gradient(135deg, #1A5CDD 0%, #0D3FA6 100%)",
                boxShadow: "0 24px 64px rgba(26,92,221,0.32)",
              }}
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(255,255,255,0.15)" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5v9a1.5 1.5 0 01-1.5 1.5h-6V15h-3v6H4.5A1.5 1.5 0 013 19.5v-9z" />
                </svg>
              </div>
              <h3 className="text-lg font-extrabold text-white mb-3">Headquarter</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                No.151 Raahat Plaza, Arcot Road,<br />
                Ottagapalayam, Vadapalani,<br />
                Chennai - 600 026
              </p>
            </div>

            {/* Email card */}
            <div
              className="p-8 rounded-3xl border border-gray-100 bg-[#F8FAFF] hover:bg-white hover:border-[#1A5CDD]/20 hover:shadow-xl transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(26,92,221,0.1)", border: "1px solid rgba(26,92,221,0.2)" }}
              >
                <svg className="w-5 h-5 text-[#1A5CDD]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-extrabold text-gray-900 mb-3">Email Us</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <a href="mailto:syscorptechno@gmail.com" className="hover:text-[#1A5CDD] transition-colors font-medium">
                  syscorptechno@gmail.com
                </a>
                <a href="mailto:hr@itsk.in" className="hover:text-[#1A5CDD] transition-colors font-medium">
                  hr@itsk.in
                </a>
              </div>
            </div>

            {/* Advantages card — full width */}
            <div className="sm:col-span-2 p-8 rounded-3xl border border-gray-100 bg-[#F8FAFF]">
              <h3 className="text-base font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
                Why Partner with Syscorp
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {advantages.map((a, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <span
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: "rgba(26,92,221,0.08)", border: "1px solid rgba(26,92,221,0.15)" }}
                    >
                      {a.icon}
                    </span>
                    <span className="text-sm text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">{a.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — image */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 flex-1" style={{ minHeight: "340px" }}>
              <Image
                src="/images/home/about-home.png"
                alt="Syscorp team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

              {/* Floating profit widget */}
              <div
                className="absolute bottom-5 right-5 p-4 rounded-2xl border border-white/20"
                style={{
                  background: "rgba(255,255,255,0.90)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
              >
                <p className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-3">Profit Chart</p>
                <div className="relative w-16 h-16 mx-auto">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <path className="text-gray-100" strokeWidth="4" stroke="currentColor" fill="transparent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path
                      strokeWidth="4"
                      strokeDasharray="65,100"
                      strokeLinecap="round"
                      fill="transparent"
                      stroke="url(#blue-grad-light)"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <defs>
                      <linearGradient id="blue-grad-light" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4A9EFF" />
                        <stop offset="100%" stopColor="#1A5CDD" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-extrabold text-gray-900">65%</div>
                </div>
                <div className="flex justify-between text-[9px] font-bold text-gray-400 mt-3 gap-4">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#4A9EFF]" />ROI</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-200" />Organic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
