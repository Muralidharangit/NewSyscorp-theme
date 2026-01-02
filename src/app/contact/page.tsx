"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function ContactUs() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <main className="bg-[#E9F7EF]"> {/* Mint green background from image */}
            {/* Banner */}
            <section className="bg-[#0D3B31] py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
                    <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-[2rem] border border-white/20 text-white">
                        <Breadcrumbs />
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6 lg:px-16 flex flex-wrap -mx-4">
                    
                    {/* Left Side: Contact Info */}
                    <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#0D3B31] text-lg">✦</span>
                            <span className="text-sm font-bold text-[#0D3B31] tracking-wide">Contact Us</span>
                        </div>
                        
                        <h2 className="text-5xl lg:text-6xl font-extrabold text-[#0D3B31] mb-8 leading-[1.1]">
                            Get in touch <span className="text-[#86EFAC]">with us</span>
                        </h2>
                        
                        <p className="text-[#0D3B31]/70 text-lg mb-12 max-w-md">
                            Have questions or need expert guidance? Connect with our team for 
                            tailored financial solutions and personalized support to meet your goals.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Address Box */}
                            <div className="space-y-4">
                                <div className="relative w-12 h-12 flex items-center">
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#86EFAC] rounded-full opacity-60"></div>
                                    <i className="fas fa-map-marker-alt text-3xl text-[#0D3B31] relative z-10"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#0D3B31] mb-2">Address</h4>
                                    <p className="text-[#0D3B31]/60 leading-relaxed">
                                        123 Street Avenue, 403, Port<br />
                                        Washington Road, Canada
                                    </p>
                                </div>
                            </div>

                            {/* Email Box */}
                            <div className="space-y-4">
                                <div className="relative w-12 h-12 flex items-center">
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#86EFAC] rounded-full opacity-60"></div>
                                    <i className="fas fa-envelope text-3xl text-[#0D3B31] relative z-10"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#0D3B31] mb-2">Email</h4>
                                    <p className="text-[#0D3B31]/60 leading-relaxed">
                                        info@domainname.com<br />
                                        sales@domainname.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="w-full lg:w-1/2 px-4">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-6 py-5 bg-[#F2FAF5] border-none text-[#0D3B31] placeholder-[#0D3B31]/40 focus:ring-1 focus:ring-[#86EFAC] outline-none"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-6 py-5 bg-[#F2FAF5] border-none text-[#0D3B31] placeholder-[#0D3B31]/40 focus:ring-1 focus:ring-[#86EFAC] outline-none"
                                    required
                                />
                            </div>
                            
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full px-6 py-5 bg-[#F2FAF5] border-none text-[#0D3B31] placeholder-[#0D3B31]/40 focus:ring-1 focus:ring-[#86EFAC] outline-none"
                                />
                                <span className="text-red-500 text-xs mt-1 block">Please fill out this field.</span>
                            </div>

                            <textarea
                                placeholder="Write Message.."
                                rows={6}
                                className="w-full px-6 py-5 bg-[#F2FAF5] border-none text-[#0D3B31] placeholder-[#0D3B31]/40 focus:ring-1 focus:ring-[#86EFAC] outline-none resize-none"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-[#0D3B31] text-white px-10 py-4 font-bold uppercase tracking-wider text-sm hover:bg-[#0a2e26] transition-all disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send Inquiry"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full h-[450px] grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580b0f0b0f0b0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1634567890123"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </section>
        </main>
    );
}