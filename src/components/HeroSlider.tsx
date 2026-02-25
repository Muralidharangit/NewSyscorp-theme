"use client"; // Required for hooks in Next.js App Router

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
    const brands = ["Figma", "Anima", "Monday.com", "InVision", "Trello", "INVIDED"];

    // Embla carousel with autoplay
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000, stopOnInteraction: false })]);

    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-[#020826] pt-20 pb-32">
                {/* Animated Background Globes */}
                {/* <div className="absolute -right-32 top-0 h-[500px] w-[500px] opacity-40 animate-[spin_60s_linear_infinite] pointer-events-none">
                    <Image
                        src="/images/home/globe.png"
                        alt="Globe Decor"
                        width={600}
                        height={600}
                        priority
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="absolute -left-32 top-0 h-[600px] w-[600px] opacity-40 animate-[spin_80s_linear_reverse_infinite] pointer-events-none">
                    <Image
                        src="/images/home/globe.png"
                        alt="Globe Decor"
                        width={400}
                        height={400}
                        priority
                        className="h-full w-full object-cover"
                    />
                </div> */}
                <div
                    className="
    absolute 
    -right-20 top-10 
    h-[220px] w-[220px]
    opacity-20
    animate-[spin_60s_linear_infinite]
    pointer-events-none

    sm:h-[260px] sm:w-[260px]
    md:h-[360px] md:w-[360px]
    lg:-right-32 lg:top-0 lg:h-[500px] lg:w-[500px] lg:opacity-40
"
                >
                    <Image
                        src="/images/home/globe.webp"
                        alt="Globe Decor"
                        width={600}
                        height={600}
                        priority
                        className="h-full w-full object-contain"
                    />
                </div>
                <div
                    className="
    absolute 
    -left-20 top-16 
    h-[240px] w-[240px]
    opacity-20
    animate-[spin_80s_linear_reverse_infinite]
    pointer-events-none

    sm:h-[280px] sm:w-[280px]
    md:h-[400px] md:w-[400px]
    lg:-left-32 lg:top-0 lg:h-[600px] lg:w-[600px] lg:opacity-40
"
                >
                    <Image
                        src="/images/home/globe.webp"
                        alt="Globe Decor"
                        width={600}
                        height={600}
                        priority
                        className="h-full w-full object-contain"
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                    <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 p-1 pr-4 backdrop-blur-sm">
                        <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                            New!
                        </span>
                        <span className="ml-3 text-sm font-medium text-gray-300">Guardians Of Your Digital World</span>
                    </div>

                    <h1 className="heading mx-auto mb-6 max-w-4xl font-bold tracking-tight text-white lg:leading-[1.15]">
                        Powerful, scalable & intelligent security solutions that adapt to new threats
                    </h1>

                    <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
                        Our experts combine advanced technology with years of experience to deliver end-to-end
                        protection, ensuring your business runs securely and without interruption.
                    </p>

                    <button className="rounded-full bg-blue-500 px-10 py-3 text-lg font-bold text-white transition-all hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95">
                        Contact us!
                    </button>
                </div>
            </section>

            {/* Overlapping Banner Section */}
            <div className="relative z-20 -mt-24 px-6">
                <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border-8 border-white bg-gray-900">
                    <Image
                        src="/images/home/home-banner.webp"
                        alt="Security Banner"
                        width={1192}
                        height={545}
                        priority
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Logo Cloud Carousel */}
            <section className="py-10 bg-white">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4 cursor-grab active:cursor-grabbing">
                            {brands.map((brand) => (
                                <div
                                    key={brand}
                                    className="flex-[0_0_50%] min-w-0 md:flex-[0_0_25%] lg:flex-[0_0_20%] px-4"
                                >
                                    <div className="flex items-center justify-center opacity-50 grayscale transition-all hover:grayscale-0">
                                        <span className="text-2xl font-bold text-gray-800 whitespace-nowrap">
                                            {brand}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
