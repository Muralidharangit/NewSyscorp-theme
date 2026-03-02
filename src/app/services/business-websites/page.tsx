// pages/business-websites.jsx
"use client";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import React from "react";
import Image from "next/image";
import { Laptop, Smartphone, Search, Target, Zap, CheckCircle } from "lucide-react";

const BusinessWebsites = () => {
    const whyChooseUs = [
        "Professional and business-focused website designs",
        "Fully responsive across all devices",
        "SEO-friendly website structure",
        "Fast loading and secure websites",
        "Easy content management",
        "Scalable for future business growth",
    ];

    const services = [
        {
            title: "Custom Business Website Design",
            desc: "We create tailor-made website designs that align your business objectives and brand identity.",
            icon: <Laptop className="w-6 h-6" />,
        },
        {
            title: "Responsive Business Websites",
            desc: "As an experienced Business Websites Company in Chennai, ensure your website performs seamlessly on mobiles, tablets, and desktops.",
            icon: <Smartphone className="w-6 h-6" />,
        },
        {
            title: "SEO-Optimized Business Websites",
            desc: "Our websites follow SEO best practices to help your business rank higher in search engines.",
            icon: <Search className="w-6 h-6" />,
        },
        {
            title: "Lead-Generation Focused Design",
            desc: "We design websites with clear CTAs, forms, and user flows that convert visitors into leads.",
            icon: <Target className="w-6 h-6" />,
        },
        {
            title: "Website Performance Optimization",
            desc: "We optimize speed, structure, and usability to deliver smooth user experiences.",
            icon: <Zap className="w-6 h-6" />,
        },
    ];

    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Business Websites
                    </h1>

                    {/* Breadcrumb wrapper */}
                    <div className="flex justify-center">
                        <div className="inline-flex bg-transparent border-0 p-0 text-center sm:bg-white/10 sm:backdrop-blur-md sm:px-6 sm:py-2 sm:rounded-full sm:border sm:border-white/20">
                            <Breadcrumbs />
                        </div>
                    </div>
                </div>

                {/* Decorative blur */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20" />
            </section>

            {/* Intro Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Business Websites Company in Chennai</h2>
                            <p className="text-lg text-gray-600">
                                Looking for a reliable Business Websites Company in Chennai to build a professional
                                online presence for your business? We design and develop modern, responsive,result
                                websites that help brands attract customers, build trust, and grow consistently online.
                            </p>
                            <p className="text-lg text-gray-600 mt-4">
                                As a trusted Business Websites Company in Chennai, we create websites that combine
                                design, strong branding, smart functionality to support your business goals.
                            </p>
                        </div>

                        <Image
                            src="/images/services/Bussiness-website-1.png"
                            alt="Responsive UI UX Design Company in Chennai"
                            width={500}
                            height={400}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                            priority
                            fetchPriority="high"
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gray-50 py-14">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-[500px] h-[350px]">
                                <Image
                                    src="/images/services/Bussiness-website-2.png"
                                    alt="Responsive UI UX Company in Chennai"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 500px"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Why Choose Our Business Websites Company in Chennai?
                            </h2>

                            <p className="text-gray-600 max-w-xl mb-8">
                                Your business website is your digital identity. We ensure it represents your brand
                                professionally and as a powerful marketing tool.
                            </p>
                            <div className="space-y-4">
                                {whyChooseUs.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 p-2">
                                        <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />

                                        <p className="text-gray-600">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10 text-center">Our Business Website Development Services</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-12 h-12 flex items-center justify-center mx-auto rounded-full bg-[#00a3ff] mb-4 text-white text-xl">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                                <p className="text-gray-600 text-center">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Process Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
                        <div className="space-y-4">
                            {[
                                "Small & Medium Businesses",
                                "Corporate & Enterprise Companies",
                                "Startups & Entrepreneurs",
                                "Service-Based Businesses",
                                "Professional Consultants",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 ">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                        {i + 1}
                                    </span>
                                    <p className="text-sm font-medium text-gray-800">{item}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 max-w-xl mb-6 mt-6">
                            Your industry, our Business Websites Company in Chennai delivers reliable and
                            growth-oriented solutions.
                        </p>
                    </div>


                    <div className="relative w-full max-w-[500px] h-[350px] mx-auto md:ml-auto">
                        <Image
                            src="/images/services/Bussiness-website-4.png"
                            alt="Responsive UI UX Design Company in Chennai"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>

                </div>
            </section>

            {/* Process Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div className="flex justify-center md:justify-end">
                        <Image
                            src="/images/services/Custom-Website.webp"
                            alt="Custom Website Development Company in Chennai"
                            width={500}
                            height={400}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Business Website Development Process</h2>
                        <div className="space-y-4">
                            {[
                                "Business requirement analysis",
                                "Website structure & planning",
                                "UI/UX design for business needs",
                                "Website development & optimization",
                                "Testing & final launch",
                            ].map((step, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                        {i + 1}
                                    </span>
                                    <p className="text-sm font-medium text-gray-800">{step}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 max-w-xl mb-6 mt-6">
                            We follow a transparent and collaborative approach throughout the project.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why We’re Trusted Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Why We’re a Trusted Business Websites Company in Chennai
                    </h2>

                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        We combine design expertise, business-centric strategies, and reliable delivery to create
                        websites that drive real results.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            {
                                title: "Experienced Designers & Developers",
                                icon: <Laptop className="w-8 h-8 text-blue-600" />,
                            },
                            {
                                title: "Business-Centric Design Strategy",
                                icon: <Target className="w-8 h-8 text-blue-600" />,
                            },
                            {
                                title: "Affordable Pricing Packages",
                                icon: <Zap className="w-8 h-8 text-blue-600" />,
                            },
                            {
                                title: "On-Time Project Delivery",
                                icon: <Zap className="w-8 h-8 text-blue-600" />,
                            },
                            {
                                title: "Dedicated Support After Launch",
                                icon: <Zap className="w-8 h-8 text-blue-600" />,
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group p-6 border rounded-2xl bg-white hover:shadow-xl transition flex flex-col items-center text-center"
                            >
                                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 mb-4 group-hover:bg-blue-100 transition">
                                    {item.icon}
                                </div>

                                <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#00a3ff] py-16 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Business with a Professional Website</h2>
                <p className="mb-8 max-w-2xl mx-auto">
                    A well-designed business website attract customers, establish credibility, and increase revenue.
                    Partner with a reliable Business Websites Company in Chennai to build a website delivers real
                    business results.
                </p>
                <a
                    href="/contact"
                    className="inline-block px-8 py-4 bg-white text-[#00A3FF] font-semibold rounded-lg shadow hover:bg-gray-100 hover:scale-105 transition-transform"
                >
                    Get Started
                </a>
            </section>
        </div>
    );
};

export default BusinessWebsites;