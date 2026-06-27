"use client";
import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Marketing Director",
    role: "Real Estate Firm",
    initial: "M",
    color: "#1A5CDD",
    bgGrad: "linear-gradient(135deg, #1A5CDD 0%, #0D3FA6 100%)",
    quote:
      "Since partnering with Syscorp, our online visibility and lead generation have improved dramatically. Their SEO and paid ad strategies deliver consistent results month after month. We continue to stay with them because they truly understand our business goals.",
    rating: 5,
  },
  {
    name: "Founder",
    role: "E-commerce Brand",
    initial: "F",
    color: "#0D8A6A",
    bgGrad: "linear-gradient(135deg, #0D8A6A 0%, #065F46 100%)",
    quote:
      "Their team works like an extension of our internal marketing department. From social media creatives to performance campaigns, everything is handled professionally. Staying with Syscorp has been one of our best business decisions.",
    rating: 5,
  },
  {
    name: "Operations Head",
    role: "Healthcare Company",
    initial: "O",
    color: "#7C3AED",
    bgGrad: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
    quote:
      "What we value most is their transparency. We receive detailed reports and clear insights into campaign performance. No hidden numbers — just real growth. That's why we continue our partnership.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = useCallback(
    (idx: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(idx);
      setActiveIndex(idx);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    setActiveIndex((i) => (i + 1) % testimonials.length);
  }, [emblaApi]);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-32 px-6 md:px-12 lg:px-24"
      style={{ background: "linear-gradient(160deg, #050C1F 0%, #0D1730 60%, #111827 100%)" }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at top, rgba(26,92,221,0.18) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#4A9EFF] mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A9EFF]" />
              Client Says
            </span>
            <h2
              id="testimonials-heading"
              className="font-extrabold text-white leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              What our clients say about{" "}
              <span style={{ background: "linear-gradient(90deg, #4A9EFF, #1A5CDD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                staying with us
              </span>
            </h2>
          </div>

          {/* Nav controls */}
          <div className="flex items-center gap-3 self-start lg:self-end">
            <button
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:bg-[#1A5CDD] hover:text-white hover:border-[#1A5CDD] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #1A5CDD, #0D3FA6)", boxShadow: "0 4px 20px rgba(26,92,221,0.4)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Two-column: selector + carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Selector sidebar */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 overflow-x-auto pb-3 lg:pb-0 scrollbar-none snap-x">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`group flex-shrink-0 min-w-[240px] lg:min-w-0 lg:flex-initial text-left p-5 rounded-2xl border transition-all duration-300 snap-start ${
                  activeIndex === i
                    ? "border-[#1A5CDD]/40 shadow-xl"
                    : "border-white/8 bg-white/3 hover:border-white/15"
                }`}
                style={{
                  background: activeIndex === i ? "rgba(26,92,221,0.10)" : "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-extrabold text-white flex-shrink-0"
                    style={{ background: t.bgGrad }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className={`text-sm font-extrabold ${activeIndex === i ? "text-white" : "text-gray-300"}`}>{t.name}</p>
                    <p className={`text-[11px] ${activeIndex === i ? "text-gray-400" : "text-gray-500"}`}>{t.role}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div className="lg:col-span-8">
            <div
              className="overflow-hidden rounded-3xl border border-white/8"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.3)",
              }}
              ref={emblaRef}
            >
              <div className="flex">
                {testimonials.map((item, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0 p-10 sm:p-14">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {Array.from({ length: item.rating }).map((_, si) => (
                        <svg key={si} className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote mark */}
                    <div
                      className="text-7xl font-serif leading-none mb-4"
                      style={{ color: item.color, opacity: 0.25 }}
                    >
                      "
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-200 text-lg sm:text-xl leading-relaxed font-medium mb-10">
                      {item.quote}
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
                        style={{ background: item.bgGrad }}
                      >
                        {item.initial}
                      </div>
                      <div>
                        <p className="font-extrabold text-white">{item.name}</p>
                        <p className="text-sm text-gray-400 uppercase tracking-wider font-bold">{item.role}</p>
                      </div>
                      <img
                        src="/images/logo/logo.webp"
                        alt="Syscorp"
                        className="ml-auto h-8 w-auto object-contain opacity-60"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-8 bg-[#1A5CDD]" : "w-2 bg-white/20 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
