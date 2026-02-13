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
        <main className="">
            {" "}
            {/* Mint green background from image */}
            {/* Banner */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
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
                            <span className="inline-flex w-fit items-center rounded-full bg-[#1A5CDD] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white ring-4 ring-[#1A5CDD]/10">
                                ✦ Contact Us
                            </span>
                        </div>

                        <h2 className="heading-1 font-extrabold text-[#0D3B31] mb-8 leading-[1.1]">
                            Get in touch <span className="text-[#1a5cdd]">with us</span>
                        </h2>

                        <p className="text-[#0D3B31]/70 text-lg mb-12 max-w-md">
                            Have questions or need expert guidance? Connect with our team for tailored financial
                            solutions and personalized support to meet your goals.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Address Box */}
                            <div className="space-y-4">
                                <div className="relative w-12 h-12 flex items-center">
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#1a5cdd63] rounded-full opacity-60"></div>
                                    <i className="fas fa-map-marker-alt text-3xl text-[#1a5cdd] relative z-10"></i>
                                </div>
                                <div>
                                    {/* <h4 className="text-xl font-bold text-[#1a5cdd] mb-2">Address</h4> */}
                                    <p className="text-xl font-bold text-[#1a5cdd] mb-2">Address</p>
                                    <p className="leading-relaxed">
                                        123 Street Avenue, 403, Port
                                        <br />
                                        Washington Road, Canada
                                    </p>
                                </div>
                            </div>

                            {/* Email Box */}
                            <div className="space-y-4">
                                <div className="relative w-12 h-12 flex items-center">
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#1a5cdd63] rounded-full opacity-60"></div>
                                    <i className="fas fa-envelope text-3xl text-[#1a5cdd] relative z-10"></i>
                                </div>
                                <div>
                                    {/* <h4 className="text-xl font-bold text-[#1a5cdd] mb-2">Email</h4> */}
                                    <p className="text-xl font-bold text-[#1a5cdd] mb-2">Email</p>
                                    <p className="leading-relaxed">
                                        info@domainname.com
                                        <br />
                                        sales@domainname.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="w-full lg:w-1/2 px-4">
                        <form onSubmit={handleSubmit} className=" space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                        {" "}
                                        Full Name{" "}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50/50"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                        {" "}
                                        Email Address{" "}
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="example@mail.com"
                                        className="w-full px-5 py-4 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50/50"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    {" "}
                                    Contact Number{" "}
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full px-5 py-4 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50/50"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-700 mb-2 block"> Your Message </label>
                                <textarea
                                    placeholder="Tell us about your requirements..."
                                    className="w-full flex-grow px-5 py-4 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50/50 resize-none min-h-[200px]"
                                    required
                                ></textarea>
                            </div>
                            <div className="md:col-span-2 flex justify-start mt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    aria-busy={loading}
                                    className="w-full md:w-auto bg-gradient-to-r from-[#3FB5FD] to-[#0B6EDA] text-white px-12 py-4 font-bold hover:bg-blue-700 transition-all flex items-center justify-center shadow-lg shadow-blue-200 active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                                >
                                    {loading ? (
                                        <>
                                            <i className="fas fa-circle-notch fa-spin mr-3" aria-hidden="true"></i>
                                            <span>Processing...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <i className="fas fa-paper-plane ml-3 text-sm opacity-70" aria-hidden="true"></i>
                                        </>
                                    )}
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* Map Section */}
            <section className="w-full h-[450px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.455807650604!2d79.80274197373379!3d11.942911588285844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536179f6a96021%3A0x6928eb4736d20045!2sSyscorp%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1767345645119!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    title="Syscorp Technology Pvt Ltd Location Map"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </section>

        </main>
    );
}
