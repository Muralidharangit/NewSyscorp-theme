"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#000B2E] text-white pt-20 relative font-sans">
            {/* CTA BANNER */}
            <div className="max-w-7xl mx-auto px-6 relative z-20 -mb-32">
                <div className="bg-[#00A3FF] rounded-xl flex flex-col lg:flex-row overflow-hidden min-h-[350px] relative shadow-2xl">
                    {/* Content Side */}
                    <div className="flex-1 p-10 md:p-16 flex flex-col justify-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            From Idea to Innovation.
                          
                        </h2>
                        <p className="text-white/90 text-sm md:text-base max-w-xl leading-relaxed">
                             We Develop Software That Performs, We transform your ideas into high-performing, custom-built digital products that drive real business growth.
                        </p>
                    </div>

                    {/* Action Side */}
                    <div className="lg:w-1/3 flex flex-col items-center justify-center p-10 relative bg-[#00A3FF]">
                        <div
                            className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{
                                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                                backgroundSize: "40px 40px",
                            }}
                        ></div>

                        <div className="relative z-10 text-center">
                            <Link
                                href="#"
                                className="bg-white text-[#00A3FF] px-8 py-4 rounded-lg font-bold text-sm inline-flex items-center gap-2 hover:bg-gray-50 transition-colors mb-4"
                            >
                                Get Started Free
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                >
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </Link>
                            <p className="text-white text-sm font-medium">
                                No credit card required
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN FOOTER CONTENT */}
            <div className="bg-[#000B2E] pt-48 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                        {/* Company Logo & Newsletter */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-2">
                                <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                                    <span className="font-bold text-xl italic">S</span>
                                </div>
                                <span className="text-2xl font-black tracking-tighter italic uppercase">
                                    Syscorp
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                At vero eos et accusamus iusto odio dignissimos ducimus
                                blanditiise
                            </p>

                            <div className="relative flex items-center bg-white rounded-lg p-1.5 max-w-[280px]">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-transparent text-gray-900 px-3 text-sm outline-none placeholder:text-gray-400"
                                />
                                <button
                                    type="button"
                                    aria-label="Open link"
                                    className="bg-[#00A3FF] text-white p-2.5 rounded-md hover:bg-blue-600 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Navigation Columns */}
                        <div className="space-y-6 lg:pl-8">
                            <h3 className="text-lg font-bold">Resource</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Product
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Benefits
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-bold">Quick Link</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Pricing Plan
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Best Program
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-bold">Company</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Team Member
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Latest News
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold">Contact</h3>

                            <ul className="space-y-4 text-gray-400 text-sm">
                                {/* Address */}
                                <li className="flex items-start gap-3">
                                    <MapPin size={18} className="text-[#00A3FF] mt-1 shrink-0" />
                                    <span>
                                        55 Main Street, 2nd block <br />
                                        Melbourne, Australia
                                    </span>
                                </li>

                                {/* Email */}
                                <li className="flex items-center gap-3">
                                    <Mail size={18} className="text-[#00A3FF] shrink-0" />
                                    <span>support@gmail.com</span>
                                </li>

                                {/* Phone */}
                                <li className="flex items-center gap-3">
                                    <Phone size={18} className="text-[#00A3FF] shrink-0" />
                                    <span>+000 (123) 44 55</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* SCROLL TO TOP BUTTON */}
            <div className="flex justify-center -mb-6 relative z-30">
                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Scroll to top"
                    className="bg-[#00A3FF] p-3 rounded-lg text-white shadow-lg hover:bg-blue-600 transition-all"
                >
                    <svg
                        className="w-6 h-6 rotate-[-90deg]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </button>
            </div>

            {/* COPYRIGHT BAR */}
            <div className="bg-[#000824] py-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>
                        Copyright ©{year},{" "}
                        <span className="text-gray-300 font-semibold">Design</span> All Rights
                        Reserved
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-white transition">
                            Privacy policy
                        </Link>
                        <Link href="/terms-and-conditions" className="hover:text-white transition">
                            Terms and Conditions
                        </Link>
                        <Link href="/disclaimer" className="hover:text-white transition">
                            Disclaimer
                        </Link>
                        <Link href="/contact" className="hover:text-white transition">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
