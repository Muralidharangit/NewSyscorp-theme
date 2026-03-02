import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
    Building,
    Smartphone,
    Search,
    Layers,
    ShieldCheck,
    GraduationCap,
    Clock,
    DollarSign,
    Wrench,
    Building2,
    CheckCircle
} from "lucide-react";

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
            icon: <Building size={28} />,
        },
        {
            title: "Responsive Corporate Websites",
            desc: "As an experienced Corporate Website Company in Chennai, we ensure seamless performance on desktops, tablets, and mobile devices.",
            icon: <Smartphone size={28} />,
        },
        {
            title: "SEO-Optimized Corporate Websites",
            desc: "Our corporate websites are built with SEO best practices improve visibility and search engine rankings.",
            icon: <Search size={28} />,
        },
        {
            title: "Content-Focused Corporate Layouts",
            desc: "We structure corporate websites to services, company profiles, leadership teams, and case studies clearly.",
            icon: <Layers size={28} />,
        },
        {
            title: "Performance & Security Optimization",
            desc: "We implement advanced security and performance optimization to ensure reliability and trust.",
            icon: <ShieldCheck size={28} />,
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
                            <div className="inline-flex bg-transparent border-0 p-0 text-center sm:bg-white/10 sm:backdrop-blur-md sm:px-6 sm:py-2 sm:rounded-full sm:border sm:border-white/20">
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
                                <div className="mt-8 flex gap-4 flex-wrap">
                                    <button className="bg-[#00A3FF] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-600 transition">
                                        Get Free Quatation
                                    </button>

                                    <button className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-800 hover:bg-gray-100 transition">
                                        Contact Us
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center md:justify-end">

                                <div className="relative w-full max-w-[500px] h-[350px]">
                                    <Image
                                        src="/images/services/Corporate-website.png"
                                        alt="Corporate Website Design Company in Chennai"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        priority
                                    />
                                </div>
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
                                    src="/images/services/Corporate-website-1.webp"
                                    alt="Corporate Website Development"
                                    width={500}
                                    height={400}
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 500px"
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
                                            <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />

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
                                    <div className="w-12 h-12 flex items-center justify-center mx-auto rounded-full bg-[#00a3ff] mb-4 text-white">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                                    <p className="text-gray-600 text-center">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why We’re Trusted Section */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Why Businesses Trust Our Corporate Website Company in Chennai
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
                            {[
                                { title: "Experienced Corporate Web Specialists", icon: <GraduationCap size={28} /> },
                                { title: "Enterprise-Level Design Standards", icon: <Building2 size={28} /> },
                                { title: "On-Time Project Delivery", icon: <Clock size={28} /> },
                                { title: "Flexible & Transparent Pricing", icon: <DollarSign size={28} /> },
                                { title: "Dedicated Post-Launch Support", icon: <Wrench size={28} /> },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="group p-6 border rounded-2xl bg-white hover:shadow-xl transition flex flex-col items-center text-center"
                                >
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-gray-900">
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