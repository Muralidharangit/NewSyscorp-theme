"use client";
import React, {useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Button from "./ui/Button";

const testimonials = [
    {
        name: "John Carter",
        role: "CTO, FinSecure Ltd.",
        company: "SYSCORP",
        quote: "Partnering with this cybersecurity team has completely transformed the way we protect our digital assets. Their proactive monitoring and immediate response have given us total confidence.",
    },
    {
        name: "Sarah Jenkins",
        role: "CEO, TechFlow",
        company: "TECHFLOW",
        quote: "The best business consulting we've ever had. Our productivity increased by 40% in the first quarter alone after implementing their strategic insights.",
    },
];

export default function TestimonialsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <section aria-labelledby="testimonials-heading" className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/* Left Column */}
                <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
                    <span className="inline-block bg-[#1A5CDD] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ring-4 ring-[#1A5CDD]/10">
                        Client Says
                    </span>

                    <h2 id="testimonials-heading" className="heading-1 font-extrabold leading-tight text-gray-900">
                        What our clients say about staying secure with us
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                        Empowering businesses to operate with total confidence through expert strategy.
                    </p>

                    <Button href="#" aria-label="View more services">
                        More Services
                        <svg
                            className="w-5 h-5 ml-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M8 4l8 8-8 8" />
                        </svg>
                    </Button>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-7 relative">
                    <div className="overflow-hidden bg-[#E6EDFD] rounded-[10px] shadow-sm" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 p-10">
                                    <div className="space-y-8">
                                        {/* Company Logo */}
                                        <div className="flex items-center gap-2">
                                            <img
                                                src="/images/logo/logo.webp"
                                                alt={`${item.company} logo`}
                                                className="w-30 h-auto"
                                            />
                                        </div>

                                        {/* Quote */}
                                        <blockquote className="font-bold text-gray-900 leading-snug text-lg">
                                            “{item.quote}”
                                        </blockquote>

                                        {/* Client Info and Navigation */}
                                        <div className="pt-8 border-t border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                            <div>
                                                <h3 className="text-xl text-gray-900 font-extrabold">{item.name}</h3>
                                                <p className="text-gray-600 font-medium">{item.role}</p>
                                            </div>

                                            <div className="flex gap-4">
                                                <button
                                                    onClick={scrollPrev}
                                                    aria-label="Previous testimonial"
                                                    className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-[#3FB5FD] hover:bg-[#1A5CDD] hover:text-white transition-all"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="m15 18-6-6 6-6" />
                                                    </svg>
                                                </button>

                                                <button
                                                    onClick={scrollNext}
                                                    aria-label="Next testimonial"
                                                    className="w-12 h-12 rounded-full bg-[#1A5CDD] flex items-center justify-center text-white hover:bg-[#1A5CDD] transition-all"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="m9 18 6-6-6-6" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
