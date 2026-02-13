import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const CorporateWebsites = () => {
    const whyChooseUs = [
        "Clean, modern, and professional corporate design",
        "Fully responsive across all devices",
        "Brand-aligned UI / UX design",
        "SEO-friendly website structure",
        "Fast loading and secure architecture",
        "Scalable for enterprise growth",
    ];

    const services = [
        {
            title: "Custom Corporate Website Design",
            desc: "We design made corporate websites that align with your brand identity, vision, and industry standards.",
            icon: "fas fa-building",
        },
        {
            title: "Responsive Corporate Websites",
            desc: "As an experienced Corporate Website Company in Chennai, we ensure seamless performance on desktops, tablets, and mobile devices.",
            icon: "fas fa-mobile-alt",
        },
        {
            title: "SEO-Optimized Corporate Websites",
            desc: "Our corporate websites are built with SEO best practices improve visibility and search engine rankings.",
            icon: "fas fa-search",
        },
        {
            title: "Content-Focused Corporate Layouts",
            desc: "We structure corporate websites to services, company profiles, leadership teams, and case studies clearly.",
            icon: "fas fa-layer-group",
        },
        {
            title: "Performance & Security Optimization",
            desc: "We implement advanced security and performance optimization to ensure reliability and trust.",
            icon: "fas fa-shield-alt",
        },
    ];

    return (
        <>
            <div className="bg-white text-gray-800">
                {/* Hero Section */}
                <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                            Corporate Website
                        </h1>

                        <div className="flex justify-center">
                            <div className="inline-flex bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                                <Breadcrumbs />
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20" />
                </section>

                {/* Intro Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Corporate Website Company in Chennai </h2>
                                <p className="text-lg text-gray-600">
                                    Looking for a reliable Corporate Website Company in Chennai to build a strong
                                    digital presence? We specialize in designing high-quality corporate websites that
                                    enhance credibility and support long-term growth.
                                </p>
                                <p className="text-lg text-gray-600 mt-4">
                                    As a trusted Corporate Website Company in Chennai, we create corporate websites are
                                    visually polished, user-friendly, secure, and optimized performance.
                                </p>
                            </div>

                            <div className="flex justify-center md:justify-end">
                                <Image
                                    src="/images/services/ui-ux.jpg"
                                    alt="Corporate Website Design Company in Chennai"
                                    width={500}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="bg-gray-50 py-14">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="flex justify-center">
                                <Image
                                    src="/images/services/custom-web.png"
                                    alt="Corporate Website Development"
                                    width={500}
                                    height={400}
                                    className="object-contain"
                                />
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-6">
                                    Why Choose Our Corporate Website Company in Chennai?
                                </h2>

                                <p className="text-gray-600 max-w-xl mb-8">
                                    A corporate website is more an online brochure it’s your brand’s digital face. We
                                    ensure website delivers trust, clarity, and professionalism.
                                </p>

                                <div className="space-y-4">
                                    {whyChooseUs.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-2">
                                            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#00A3FF] text-white text-xs font-semibold">
                                                ✓
                                            </span>
                                            <p className="text-gray-600">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-10 text-center">
                            Our Corporate Website Development Services
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center mx-auto rounded-full bg-[#00a3ff] mb-4 text-white text-xl">
                                        <i className={service.icon} />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                                    <p className="text-gray-600 text-center">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industries */}
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Corporate Industries We Serve</h2>

                            <div className="space-y-4">
                                {[
                                    "IT & Technology Companies",
                                    "Manufacturing & Industrial Firms",
                                    "Financial & Consulting Businesses",
                                    "Real Estate & Infrastructure Companies",
                                    "Healthcare & Educational Institutions",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 border rounded-lg bg-white">
                                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                            {i + 1}
                                        </span>
                                        <p className="text-sm font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg text-gray-600 mt-4">
                                Our Corporate Website Company in Chennai industry-specific corporate solutions.
                            </p>
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <Image
                                src="/images/services/Custom-Website.webp"
                                alt="Corporate Website Solutions"
                                width={500}
                                height={400}
                                className="object-cover w-full h-auto"
                            />
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                        <div className="flex justify-center md:justify-start">
                            <Image
                                src="/images/services/Custom-Website.webp"
                                alt="Corporate Website Development Process"
                                width={500}
                                height={400}
                                className="object-cover w-full h-auto"
                            />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Corporate Website Development Process</h2>
                            <div className="space-y-4">
                                {" "}
                                {[
                                    "Corporate requirement & brand analysis",
                                    "Website architecture & planning",
                                    "UI / UX design & approval",
                                    "Website development & optimization",
                                    "Testing, security checks & launch",
                                ].map((step, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-3 border rounded-lg bg-white mb-3"
                                    >
                                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                            {i + 1}
                                        </span>
                                        <p className="text-sm font-medium">{step}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg text-gray-600 mt-4">
                                Our Corporate Website Company in Chennai industry-specific corporate solutions.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Why We’re Trusted Section */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Why Businesses Trust Our Corporate Website Company in Chennai
                        </h2>

                        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                            Businesses choose us for our expertise, transparency, and commitment to delivering
                            high-quality corporate websites that meet enterprise standards.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
                            {[
                                {
                                    title: "Experienced Corporate Web Specialists",
                                    icon: "🎓",
                                },
                                {
                                    title: "Enterprise-Level Design Standards",
                                    icon: "🏢",
                                },
                                {
                                    title: "On-Time Project Delivery",
                                    icon: "⏱️",
                                },
                                {
                                    title: "Flexible & Transparent Pricing",
                                    icon: "💰",
                                },
                                {
                                    title: "Dedicated Post-Launch Support",
                                    icon: "🛠️",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="group p-6 border rounded-2xl bg-white hover:shadow-xl transition flex flex-col items-center text-center"
                                >
                                    {/* Icon */}
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-2xl mb-4 group-hover:bg-blue-100 group-hover:text-blue-700 transition">
                                        {item.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-[#00a3ff] py-16 text-white text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Build a Strong Corporate Digital Presence</h2>
                    <p className="mb-8 max-w-2xl mx-auto">
                        A professional corporate builds trust, strengthens your brand, and supports business growth.
                        Partner a reliable Corporate Website Company in Chennai to create a corporate website that
                        represents business with confidence.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-[#00a3ff] font-semibold rounded-lg "
                    >
                        Get a Quaote
                    </a>
                </section>
            </div>
        </>
    );
};

export default CorporateWebsites;
