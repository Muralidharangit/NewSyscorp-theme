"use client";

import Image from "next/image";

export default function AchievementsSection() {
    const stats = [
        {
            number: "150+",
            label: "Expert Team Members",
            img: "/images/icons/3.svg",
        },
        {
            number: "1000+",
            label: "Projects delivered",
            img: "/images/icons/4.svg",
        },
        {
            number: "100+",
            label: "Awards & Recognitions",
            img: "/images/icons/5.svg",
        },
    ];

    return (
        <section aria-labelledby="achievements-heading" className="bg-[#F3F8FF] py-24 px-6 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl flex flex-col items-center gap-16 lg:flex-row">
                {/* Left Content */}
                <div className="space-y-6 text-center lg:w-2/5 lg:text-left">
                    <span className="inline-block rounded-full bg-[#1A5CDD] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white ring-4 ring-[#1A5CDD]/10">
                        Our Achievements
                    </span>

                    <h2 id="achievements-heading" className="heading-1 font-extrabold leading-[1.2] text-gray-900">
                        Best Software Company in Chennai
                    </h2>
                </div>

                {/* Right Stats Grid */}
                <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:w-3/5">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center p-8 text-center transition-transform duration-300 hover:-translate-y-1 ${
                                index !== stats.length - 1 ? "md:border-r md:border-[#D9D9D9]" : ""
                            }`}
                        >
                            {/* Image Box */}
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#32A3F5] to-[#1379DF] shadow-lg shadow-blue-200">
                                <Image
                                    src={stat.img}
                                    alt={stat.label}
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>

                            {/* Stats */}
                            <p className="text-5xl font-black tracking-tight text-gray-900">{stat.number}</p>
                            <p className="mt-3 text-sm font-medium tracking-wide text-gray-800">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
