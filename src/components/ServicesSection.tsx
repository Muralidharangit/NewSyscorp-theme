"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Custom Software Development",
    desc: "Scalable, secure, high-performance software tailored to your unique business requirements.",
    img: "/images/icons/6.svg",
    tag: "Engineering",
    accent: "#1A5CDD",
    featured: true,
  },
  {
    title: "Web Application Development",
    desc: "Modern, responsive, SEO-friendly websites that enhance UX and boost conversions.",
    img: "/images/icons/7.svg",
    tag: "Web",
    accent: "#0D8A6A",
    featured: false,
  },
  {
    title: "E-Commerce Development",
    desc: "Powerful online store solutions with seamless payment integration and optimized flows.",
    img: "/images/icons/8.svg",
    tag: "Commerce",
    accent: "#7C3AED",
    featured: false,
  },
  {
    title: "Software Maintenance & Support",
    desc: "Ongoing monitoring, updates, and dedicated technical support for peak performance.",
    img: "/images/icons/9.svg",
    tag: "Support",
    accent: "#EA580C",
    featured: false,
  },
  {
    title: "Search Engine Optimization",
    desc: "Data-driven SEO to improve rankings, increase organic traffic, and boost visibility.",
    img: "/images/icons/10.svg",
    tag: "SEO",
    accent: "#0891B2",
    featured: false,
  },
  {
    title: "Digital Marketing Services",
    desc: "Performance-focused campaigns including Google Ads, social media, and lead generation.",
    img: "/images/icons/11.svg",
    tag: "Marketing",
    accent: "#BE185D",
    featured: false,
  },
];

export default function ServicesSection() {
  const featured = services.find((s) => s.featured)!;
  const rest = services.filter((s) => !s.featured);

  return (
    <section
      aria-labelledby="services-heading"
      className="relative bg-[#F5F4F4] overflow-hidden py-32 px-6 md:px-12 lg:px-24"
    >
      {/* Top decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A5CDD]/20 to-transparent" />

      {/* BG glow */}
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle at bottom right, rgba(26,92,221,0.06) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1A5CDD]/20 bg-[#1A5CDD]/8 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#1A5CDD] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD]" />
              Our Services
            </span>
            <h2
              id="services-heading"
              className="font-extrabold text-gray-900 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              End-to-end technology solutions
              <br />
              <span className="text-[#1A5CDD]">built for scale</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 self-start px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all duration-300 hover:shadow-xl active:scale-95"
            style={{ background: "linear-gradient(135deg, #1A5CDD 0%, #0D3FA6 100%)", boxShadow: "0 8px 30px rgba(26,92,221,0.22)" }}
          >
            All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Featured card — spans 5 columns & 2 rows */}
          <Link
            href="/services"
            className="group lg:col-span-5 lg:row-span-2 relative p-10 rounded-3xl border border-gray-200 bg-white hover:border-[#1A5CDD]/30 hover:shadow-2xl transition-all duration-400 flex flex-col gap-6 overflow-hidden"
            style={{ minHeight: "340px", transitionDuration: "350ms" }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
              style={{ background: `radial-gradient(circle at 20% 20%, ${featured.accent}09 0%, transparent 60%)` }}
            />
            {/* Accent line top */}
            <div
              className="absolute top-0 left-8 right-8 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: `linear-gradient(to right, transparent, ${featured.accent}, transparent)` }}
            />

            <div className="flex items-start justify-between">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: `${featured.accent}15`, border: `1px solid ${featured.accent}25` }}
              >
                <Image src={featured.img} alt="" width={32} height={32} className="object-contain" />
              </div>
              <span
                className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ background: `${featured.accent}12`, color: featured.accent }}
              >
                {featured.tag}
              </span>
            </div>

            <div className="flex-1 flex flex-col gap-4 mt-auto">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-[1.25]">
                {featured.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{featured.desc}</p>
            </div>

            <div
              className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest transition-colors duration-300"
              style={{ color: featured.accent }}
            >
              Learn More
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>

          {/* Remaining 5 cards in a 7-column grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rest.map((s, i) => (
              <Link
                key={i}
                href="/services"
                className="group relative p-7 rounded-3xl border border-gray-200 bg-white hover:bg-white hover:border-[#1A5CDD]/20 hover:shadow-xl transition-all duration-400 flex flex-col gap-4 overflow-hidden"
                style={{ transitionDuration: "320ms" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: `radial-gradient(circle at 20% 20%, ${s.accent}07 0%, transparent 60%)` }}
                />

                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}25` }}
                  >
                    <Image src={s.img} alt="" width={24} height={24} className="object-contain" />
                  </div>
                  <span
                    className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: `${s.accent}10`, color: s.accent }}
                  >
                    {s.tag}
                  </span>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="text-base font-extrabold text-gray-900 tracking-tight leading-[1.3]">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>

                <div
                  className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest transition-colors duration-300"
                  style={{ color: s.accent }}
                >
                  Learn More
                  <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${s.accent}, transparent)` }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
