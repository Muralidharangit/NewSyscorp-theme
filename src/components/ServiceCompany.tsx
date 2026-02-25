import React from "react";

export default function ServiceCompany() {
    return (
        <section
            className="relative w-full py-24 px-6 overflow-hidden min-h-[500px] flex items-center"
            aria-labelledby="service-hero-heading"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/images/bg.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                aria-hidden="true"
            ></div>

            {/* Dark Overlay */}
            <div
                className="absolute inset-0 z-[1] bg-gradient-to-b from-[#06163A]/90 via-[#06163A]/85 to-[#040D21]"
                aria-hidden="true"
            ></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                {/* Badge */}
                <div className="flex justify-center">
                    <span className="inline-block bg-[#1A5CDD] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ring-4 ring-[#1A5CDD]/10">
                        Best Software Company
                    </span>
                </div>

                {/* Heading */}
                <h1 id="service-hero-heading" className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    The Future Of Corporate And <br className="hidden md:block" /> Business Solutions
                </h1>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                    {/* Glassmorphism Button */}
                    <button
                        className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold flex items-center justify-center gap-2 backdrop-blur-md hover:bg-white/20 transition"
                        aria-label="Discover more about our services"
                    >
                        Discover More
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>

                    {/* Solid Gradient Button */}
                    <button
                        className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#3FB5FD] to-[#0B6EDA] text-white font-bold flex items-center justify-center gap-2 hover:from-[#1A5CDD] hover:to-[#0B6EDA] transition"
                        aria-label="Get a quote from our company"
                    >
                        Get A Quote
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
