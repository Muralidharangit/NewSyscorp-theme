"use client";

import React from "react";
import Link from "next/link";

const services = [
    {name: "Search Engine Optimization", href: "/seo-service"},
    {name: "Search Engine Marketing", href: "/search-engine-marketing"},
    {name: "Social Media Marketing", href: "/socialmedia-marketing"},
    {name: "Web Development", href: "/best-website-development-company-in-chennai"},
    {name: "CRM Software", href: "/overseas-education-consulting-crm-software"},
];

const company = [
    {name: "About Us", href: "/about-us"},
    {name: "Contact", href: "/contact-us"},
    {name: "Blog", href: "/blog"},
    {name: "Services", href: "/services"},
    {name: "Careers", href: "/careers"},
];

const socials = ["facebook", "twitter", "linkedin", "instagram", "youtube"];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#011146] text-white">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                    {/* About */}
                    <div className="lg:col-span-4 space-y-6">
                        <img src="/images/logo/logo-1.webp" alt="Syscorp Technology" className="w-32" />
                        <p className="text-gray-400 leading-relaxed max-w-md">
                            Syscorp, Best Website Development Company in Chennai. Trust our expert team to bring your
                            vision to life. We deliver excellence in every project! Contact us today and take the first
                            step towards success.
                        </p>

                        {/* Newsletter */}
                        <form className="relative max-w-md mt-4">
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full bg-white text-gray-800 rounded-full px-5 py-3 pr-32 text-sm placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3FB5FD]"
                            />

                            <button
                                type="submit"
                                className="absolute right-1 top-1 bottom-1 px-6 rounded-full bg-[#0b6eda] text-white text-sm font-semibold hover:bg-[#095bb5] transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3 space-y-5">
                        <h4 className="text-lg font-semibold uppercase tracking-wide">Services</h4>
                        <ul className="space-y-3">
                            {services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-[#3FB5FD] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2 space-y-5">
                        <h4 className="text-lg font-semibold uppercase tracking-wide">Company</h4>
                        <ul className="space-y-3">
                            {company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-[#3FB5FD] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3 space-y-5">
                        <h4 className="text-lg font-semibold uppercase tracking-wide">Contact</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>📍 Vadapalani, Chennai – 26</li>
                            <li>📍 Puducherry</li>
                            <li>
                                ✉️{" "}
                                <a href="mailto:syscorptechno@gmail.com" className="hover:text-[#3FB5FD]">
                                    syscorptechno@gmail.com
                                </a>
                            </li>
                            <li>
                                ✉️{" "}
                                <a href="mailto:hr@itsk.in" className="hover:text-[#3FB5FD]">
                                    hr@itsk.in
                                </a>
                            </li>
                            <li>
                                📞{" "}
                                <a href="tel:+919344430402" className="hover:text-[#3FB5FD]">
                                    +91 93444 30402
                                </a>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-4">
                            {socials.map((icon) => (
                                <Link
                                    key={icon}
                                    href={`https://${icon}.com`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={icon}
                                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-[#3FB5FD] hover:text-white hover:border-[#3FB5FD] transition-all"
                                >
                                    <i className={`fab fa-${icon}`} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-gray-400">
                    <div className="flex gap-4">
                        <Link href="/privacy-policy" className="hover:text-[#3FB5FD]">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-and-conditions" className="hover:text-[#3FB5FD]">
                            Terms & Conditions
                        </Link>
                        <Link href="/disclaimer" className="hover:text-[#3FB5FD]">
                            Disclaimer
                        </Link>
                    </div>

                    <p>
                        © {year}{" "}
                        <Link href="/" className="text-white hover:text-[#3FB5FD]">
                            Syscorp Technology Pvt Ltd
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
