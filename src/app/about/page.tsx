import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialSlider from "@/components/TestimonialSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { Link } from "lucide-react";
import Image from "next/image";

const Aboutus = () => {
    return (
        <>
            {/* Dynamic Header Banner */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Us</h1>

                    <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-[2rem] border border-white/20">
                        <Breadcrumbs />
                    </div>
                </div>
            </section>

            <AboutSection />

            <section className="bg-white py-20 px-6 md:px-12 lg:px-24 font-sans">
                <div className="container mx-auto">
                    {/* Top Header Section */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="inline-flex w-fit items-center rounded-full bg-[#1A5CDD] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white ring-4 ring-[#1A5CDD]/10">
                                    ✦ Our Approach
                                </span>
                            </div>
                            <h2 className="heading-1 font-extrabold text-[#0D3B31] leading-tight">
                                Building Smart, Scalable & Future-Ready <span className="text-[#1a5cdd]">Software Solutions</span>
                                {/* Empowering businesses with <span className="text-[#1a5cdd]">tailored solutions</span> */}
                            </h2>
                        </div>
                        <div className="lg:pt-10">
                            <p className="text-lg leading-relaxed">
                                Syscorp is a technology-driven software development company dedicated to building powerful, scalable, and customized digital solutions for modern businesses.
                            </p>
                            <p className="text-lg leading-relaxed">
                                From startups to enterprises, help businesses leverage technology to streamline operations and create competitive advantages. At Syscorp, we believe great software is built on strong architecture, clean coding practices, and a deep understanding of business goals
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column: Mission & Vision */}
                        <div className="space-y-12">
                            {/* Our Mission */}
                            <div className="group mb-4">
                                <div className="mb-6 relative inline-block">
                                    {/* Icon */}
                                    <i className="fa-solid fa-server text-3xl text-[#1a5cdd] transition-transform duration-300 group-hover:scale-110"></i>
                                </div>

                                <h3 className="text-2xl font-bold text-[#1a5cdd] mb-3">Our Mission</h3>

                                <p className="leading-relaxed max-w-md mb-6">
                                    To empower businesses with innovative software solutions that enhance productivity, efficiency, and digital transformation.
                                </p>

                                {/* Divider */}
                                <div className="h-px w-full bg-[#0D3B31]/10"></div>
                            </div>

                            {/* Our Vision */}
                            <div className="group">
                                <div className="mb-6 inline-block">
                                    {/* Icon */}
                                    <i className="fa-solid fa-gem text-3xl text-[#1a5cdd] transition-transform duration-300 group-hover:scale-110"></i>
                                </div>

                                <h3 className="text-2xl font-bold text-[#1a5cdd] mb-3">Our Vision</h3>

                                <p className="leading-relaxed max-w-md">
                                    Become a trusted technology partner for businesses seeking reliable and future-ready software development solutions.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                            <Image
                                src="/images/aboutt.avif"
                                alt="Business consultant presenting growth strategies to a client"
                                width={500}
                                height={600}
                                priority
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <AchievementsSection />

            <TestimonialSlider />
        </>
    );
};

export default Aboutus;
