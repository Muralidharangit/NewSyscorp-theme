"use client";

import Image from "next/image";
import Button from "./ui/Button";

export default function CommunitySection() {
    const advantages = [
        "ROI-Focused Campaigns",
        "Creative + Analytical Approach",
        "Transparent Reporting",
        "Experienced Digital Experts",
        "Complete Digital Solutions Under One Roof",
        "Faster Response & Dedicated Support",
    ];

    return (
        <section
            aria-labelledby="community-heading"
            className="bg-[#E6EDFD] py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl space-y-4">
                        <span className="inline-block bg-[#1A5CDD] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ring-4 ring-[#1A5CDD]/10">
                            Why Choose Us!
                        </span>

                        <h2 id="community-heading" className="heading-1 font-extrabold text-gray-900 leading-tight">
                            We build strategies that deliver measurable results.
                        </h2>
                    </div>

                    <Button href="#" aria-label="Learn more about our services" className="service-sect-btn">
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

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Side */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Headquarter Card */}
                            <div className="bg-gradient-to-r from-[#34A5F6] to-[#1E87E7] p-8 rounded-2xl text-white shadow-xl">
                                <h3 className="text-2xl font-bold mb-4">Headquarter</h3>
                                <p className="leading-relaxed">
                                    No.151 Raahat plaza Arcot road, <br />Ottagapalayam Vadapalani
                                    <br />
                                    Chennai-26.
                                </p>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
                                <div className="space-y-1 text-gray-700 font-medium">
                                    <p>syscorptechno@gmail.com</p>
                                    <p>hr@itsk.in</p>
                                </div>
                            </div>
                        </div>

                        {/* Advantages List Card */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-blue-50">
                            <h3 className="text-xl font-bold text-gray-900 mb-8">
                                The Advantages of Connecting with Us
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                {advantages.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <span className="flex-shrink-0 w-5 h-5 bg-[#DFDFDF] rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-3 h-3 text-black"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="3"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-gray-800 text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="lg:col-span-5 relative flex justify-center">
                        <div className="relative w-full max-w-sm">
                            <Image
                                src="/images/home/about-home.png"
                                alt="Business consultant providing advice"
                                width={400}
                                height={400}
                                className="w-full h-auto z-10 relative rounded-xl"
                            />

                            {/* Floating Chart Card */}
                            <div className="hidden md:block absolute top-10 -right-20 bg-white p-4 rounded-xl shadow-2xl z-20 w-40 border border-gray-50">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-bold text-gray-600 uppercase">Profit Chart</span>
                                    <span className="text-[10px] text-gray-300 italic">Monthly</span>
                                </div>
                                {/* Simplified Pie Chart */}
                                <div className="relative w-16 h-16 mx-auto my-4">
                                    <div className="absolute inset-0 rounded-full border-[12px] border-blue-50"></div>
                                    <div className="absolute inset-0 rounded-full border-[12px] border-[#1A5CDD] border-t-transparent border-l-transparent -rotate-45"></div>
                                </div>
                                <div className="flex justify-between text-[9px] font-bold">
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-[#1A5CDD] rounded-full" aria-hidden="true"></span>{" "}
                                        65%
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-blue-100 rounded-full" aria-hidden="true"></span>{" "}
                                        35%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
