"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
const faqData = [
    {
        question: "What services does Syscorp offer?",
        answer: "Syscorp provides complete digital marketing solutions including SEO, Social Media Marketing, Performance Ads (Google & Meta), Branding & Creative Design, and Website Development.",
    },
    {
        question: "How can Syscorp help my business grow?",
        answer: "We create customized, data-driven marketing strategies that increase brand visibility, generate qualified leads, and improve conversions. Our focus is on measurable ROI and long-term business growth.",
    },
    {
        question: "Do you provide customized digital marketing strategies?",
        answer: "Yes. Every business is different, so we develop personalized marketing plans based on your industry, competition, target audience, and specific business goals.",
    },
    {
        question: "How long does SEO take to show results?",
        answer: "SEO is a long-term strategy. Typically, noticeable improvements can be seen within 3 to 6 months depending on your industry competition and the current condition of your website.",
    },
    {
        question: "Do you run paid advertising campaigns?",
        answer: "Yes. We manage Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and YouTube Ads. Our campaigns are performance-focused and optimized for maximum ROI.",
    },
    {
        question: "Will I receive performance reports?",
        answer: "Absolutely. We provide transparent monthly reports detailing traffic growth, leads generated, ad performance, keyword rankings, and campaign insights.",
    },
    {
        question: "Do you work with small businesses and startups?",
        answer: "Yes. We work with startups, small businesses, and large enterprises. Our strategies are scalable and designed according to your budget and growth stage.",
    },
];
export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    return (
        <section className="bg-[#F3F8FF] py-24 px-6 md:px-12 lg:px-24" aria-labelledby="faq-heading">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Left Side: Content */}
                <div className="lg:col-span-5 space-y-8">
                    <div>
                        <span className="inline-block bg-[#1A5CDD] text-white text-[11px] font-bold px-5 py-2 rounded-full uppercase tracking-widest ring-4 ring-[#1A5CDD]/10">
                            Frequently Asked Questions
                        </span>
                    </div>

                    <h2 id="faq-heading" className="heading-1 font-extrabold text-[#0D1C16] leading-tight">
                        Got Questions? We’ve Got Clear, Honest Answers
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Learn how our strategies drive real business growth. From SEO and paid ads to complete digital solutions,
                        we break down everything in simple terms so you can move forward with confidence.
                    </p>

                    <Button href="#" aria-label="View more services">
                        More Services
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M8 4l8 8-8 8" />
                        </svg>
                    </Button>
                </div>

                {/* Right Side: Accordion */}
                <div className="lg:col-span-7 space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-xl shadow-sm border transition-all duration-300 ${isOpen ? "border-blue-200" : "border-blue-50"
                                    }`}
                            >

                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full p-6 flex items-center justify-between text-left group"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-panel-${index}`}
                                    id={`faq-button-${index}`}
                                >

                                    <span
                                        className={`text-lg font-bold transition-colors ${isOpen ? "text-[#1A5CDD]" : "text-[#0D1C16]"
                                            }`}
                                    > {/* Number */}
                                        <span className="font-extrabold mr-3">
                                            {String(index + 1).padStart(2)}.
                                        </span>
                                        {item.question}
                                    </span>

                                    {/* Toggle Icon */}
                                    <div
                                        className={`w-8 h-8 flex-shrink-0 rounded-md flex items-center justify-center transition-all ${isOpen ? "bg-[#3FB5FD] text-white" : "bg-[#E9F2FF] text-[#3FB5FD]"
                                            }`}
                                    >
                                        {isOpen ? (
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="3"
                                                    d="M20 12H4"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="3"
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </button>

                                {/* Answer Panel */}
                                <div
                                    id={`faq-panel-${index}`}
                                    role="region"
                                    aria-labelledby={`faq-button-${index}`}
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t border-gray-50">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
