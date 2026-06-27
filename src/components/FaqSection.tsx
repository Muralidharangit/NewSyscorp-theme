"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What services does Syscorp offer?",
    answer:
      "Syscorp provides complete digital solutions including custom software development, SEO, Social Media Marketing, Performance Ads (Google & Meta), Branding & Creative Design, and Website Development.",
  },
  {
    question: "How can Syscorp help my business grow?",
    answer:
      "We create customized, data-driven strategies that increase brand visibility, generate qualified leads, and improve conversions. Our focus is on measurable ROI and long-term business growth.",
  },
  {
    question: "Do you provide customized digital marketing strategies?",
    answer:
      "Yes. Every business is unique, so we develop personalized marketing plans based on your industry, competition, target audience, and specific business goals.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. Noticeable improvements typically appear within 3–6 months, depending on industry competition and your website's current state.",
  },
  {
    question: "Do you run paid advertising campaigns?",
    answer:
      "Yes. We manage Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and YouTube Ads — all performance-focused and optimized for maximum ROI.",
  },
  {
    question: "Will I receive performance reports?",
    answer:
      "Absolutely. We provide transparent monthly reports detailing traffic growth, leads generated, ad performance, keyword rankings, and campaign insights.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Yes. We work with startups, SMEs, and large enterprises. Our strategies are scalable and designed according to your budget and growth stage.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative overflow-hidden py-32 px-6 md:px-12 lg:px-24 bg-[#F5F4F4]"
    >
      <style>{`
        @keyframes faqExpand {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .faq-answer { animation: faqExpand 0.25s ease both; }
      `}</style>

      {/* Top stripe */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A5CDD]/20 to-transparent" />

      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/3 w-[700px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(26,92,221,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left: sticky header */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1A5CDD]/20 bg-[#1A5CDD]/8 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#1A5CDD]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD]" />
            FAQs
          </span>

          <h2
            id="faq-heading"
            className="font-extrabold text-gray-900 leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Got Questions?
            <br />
            <span className="text-[#1A5CDD]">
              We&apos;ve got clear,
              <br />
              honest answers.
            </span>
          </h2>

          <p className="text-gray-500 leading-relaxed">
            Learn how our strategies drive real business growth — from SEO and paid ads to complete digital transformation.
          </p>

          {/* Trust indicators */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
            <div className="flex -space-x-2">
              {["#1A5CDD", "#0D8A6A", "#7C3AED"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#F5F4F4] flex items-center justify-center text-xs text-white font-bold"
                  style={{ background: c }}
                >
                  {["M", "F", "O"][i]}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              <span className="text-gray-900 font-bold">100+</span> businesses trust Syscorp
            </p>
          </div>
        </div>

        {/* Right: Accordion */}
        <div className="lg:col-span-8 space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#1A5CDD]/30 bg-white shadow-lg shadow-[#1A5CDD]/5"
                    : "border-gray-200 bg-white hover:border-[#1A5CDD]/20 hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-7 py-5 flex items-center justify-between text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className="text-xs font-extrabold w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: isOpen ? "rgba(26,92,221,0.12)" : "rgba(26,92,221,0.06)",
                        color: isOpen ? "#1A5CDD" : "#9CA3AF",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-base font-bold transition-colors duration-300 ${isOpen ? "text-gray-900" : "text-gray-700"}`}>
                      {item.question}
                    </span>
                  </span>

                  <div
                    className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ml-4 transition-all duration-300 ${
                      isOpen ? "bg-[#1A5CDD] rotate-45" : "bg-gray-100"
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-500"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className={`transition-all duration-350 ease-in-out overflow-hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  {isOpen && (
                    <div className="faq-answer px-7 pb-6 pt-0 pl-[4.25rem] text-gray-500 leading-relaxed text-sm">
                      {item.answer}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
