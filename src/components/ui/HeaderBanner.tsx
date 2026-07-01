"use client";

import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface HeaderBannerProps {
    title: React.ReactNode;
    description: string;
    primaryBtnText?: string;
    primaryBtnLink?: string;
    secondaryBtnLink?: string;
    showCubes?: boolean;
    showSmiley?: boolean;
}

export default function HeaderBanner({
    title,
    description,
    primaryBtnText = "Explore Services",
    primaryBtnLink = "/services",
    secondaryBtnLink = "/contact",
    showCubes = true,
    showSmiley = true,
}: HeaderBannerProps) {
    return (
        <section className="relative min-h-[75vh] bg-gradient-to-br from-[#010925] via-[#011146] to-[#0a2373] py-16 px-6 md:px-12 lg:px-24 flex items-center overflow-hidden transition-colors duration-500">
            <style>{`
                .animate-float-slow {
                    animation: floatSlow 8s ease-in-out infinite;
                }
                .animate-float-reverse {
                    animation: floatReverse 7s ease-in-out infinite;
                }
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(3deg); }
                }
                @keyframes floatReverse {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(12px) rotate(-4deg); }
                }
            `}</style>

            {/* Background grids and blobs */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
            <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(26,92,221,0.15)_0%,transparent_70%)] top-[-10%] left-[-10%] pointer-events-none z-0" />
            <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(96,165,250,0.1)_0%,transparent_70%)] bottom-[-10%] right-[-10%] pointer-events-none z-0" />

            {/* Left/Bottom-Left Cubes Asset (styled like image) */}
            {showCubes && (
                <div className="absolute left-[-20px] bottom-[-20px] md:left-[40px] md:bottom-[40px] z-0 opacity-40 md:opacity-75 pointer-events-none animate-float-reverse">
                    <svg width="180" height="180" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#94A3B8" />
                                <stop offset="100%" stopColor="#475569" />
                            </linearGradient>
                            <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#475569" />
                                <stop offset="100%" stopColor="#1E293B" />
                            </linearGradient>
                            <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#64748B" />
                                <stop offset="100%" stopColor="#334155" />
                            </linearGradient>
                        </defs>
                        <g transform="translate(40, 50) rotate(-10 30 30)">
                            <path d="M 30,0 L 60,15 L 30,30 L 0,15 Z" fill="url(#cubeTop)" />
                            <path d="M 0,15 L 30,30 L 30,65 L 0,50 Z" fill="url(#cubeLeft)" />
                            <path d="M 30,30 L 60,15 L 60,50 L 30,65 Z" fill="url(#cubeRight)" />
                        </g>
                        <g transform="translate(10, 95) scale(0.6) rotate(15 30 30)">
                            <path d="M 30,0 L 60,15 L 30,30 L 0,15 Z" fill="url(#cubeTop)" />
                            <path d="M 0,15 L 30,30 L 30,65 L 0,50 Z" fill="url(#cubeLeft)" />
                            <path d="M 30,30 L 60,15 L 60,50 L 30,65 Z" fill="url(#cubeRight)" />
                        </g>
                    </svg>
                </div>
            )}

         
        
            <div className="container mx-auto max-w-[1240px] relative z-10 grid lg:grid-cols-[1fr_3fr] gap-12 items-start pt-16">
                {/* Left Column: Breadcrumbs */}
                <div className="flex items-center w-full">
                    <Breadcrumbs />
                </div>

                {/* Right Column: Title, Description, Scroll, Buttons */}
                <div>
                    <h1 data-animate="fade-up" className="text-3xl md:text-5xl lg:text-[54px] font-extrabold text-white leading-tight tracking-tight m-0 font-sans">
                        {title}
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-8 items-start mt-12 max-w-2xl">
                        {/* Scroll Down Capsule Button */}
                        <div className="w-10 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white flex-shrink-0 animate-bounce cursor-pointer hover:border-white/40 transition-colors">
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        {/* Subtext Paragraph and Actions */}
                        <div className="flex flex-col gap-6">
                            <p data-animate="fade-up" className="text-gray-300 text-sm md:text-base leading-relaxed m-0 font-sans">
                                {description}
                            </p>
                            <div data-animate="fade-up" className="flex items-center gap-3">
                                <a href={primaryBtnLink} className="border border-white/30 bg-white/10 hover:bg-white text-white hover:text-black rounded-full px-7 py-3 text-[11px] sm:text-xs font-bold transition-all duration-300 no-underline uppercase tracking-wider">
                                    {primaryBtnText}
                                </a>
                                <a href={secondaryBtnLink} className="w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300 no-underline">
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
