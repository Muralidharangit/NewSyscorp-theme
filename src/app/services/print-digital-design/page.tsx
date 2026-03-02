import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Print & Digital Design Company in Chennai | Syscorp",
    description:
        "Syscorp is a trusted Print & Digital Design company in Chennai delivering creative, impactful and result-driven designs for print and digital marketing.",
};

export default function PrintDigitalDesignPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Print & Digital Design
                    </h1>

                    <div className="flex justify-center">
                        <div className="inline-flex sm:bg-white/10 sm:backdrop-blur-md sm:px-6 sm:py-2 sm:rounded-full sm:border sm:border-white/20">
                            <Breadcrumbs />
                        </div>
                    </div>
                </div>
            </section>

            {/* HERO SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Print & Digital Design Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Are you searching a professional Print & Digital Design company in
                            Chennai that delivers creative, impactful, and result-driven
                            designs? Welcome to Syscorp, where creativity meets strategy to
                            build powerful brand visuals. As trusted Print & Digital Design
                            company in Chennai, we help businesses create stunning designs for
                            both offline online marketing. From brochures and flyers to social
                            media creatives and digital ads, Ensure your brand stands out
                            everywhere.
                        </p>

                        <div className="mt-8 flex gap-4 flex-wrap">
                            <button className="bg-[#00A3FF] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-600 transition">
                                Get Quotation
                            </button>

                            <button className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-800 hover:bg-gray-100 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/services/print-digital-design-1.png"
                            alt="Professional Print & Digital Design Services in Chennai"
                            width={500}
                            height={400}
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="w-full max-w-[500px] h-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Choose Syscorp – Print & Digital Design Company in Chennai?
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Choosing the right Print & Digital Design company in Chennai can
                            elevate your brand presence across multiple platforms. At Syscorp,
                            we understand every design represents your brand identity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/print-digital-design-2.png"
                                alt="Benefits of Professional Print & Digital Design Services in Chennai"
                                width={400}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="w-full max-w-[400px] h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Creative & brand-focused designs",
                                "High-quality print-ready files",
                                "Digital designs optimized for performance",
                                "Customized concepts for every business",
                                "Fast turnaround & professional support",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Combine creativity, marketing strategy, and design excellence to
                                deliver results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Our Print & Digital Design Services
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            As leading Print & Digital Design company in Chennai, we offer a
                            complete range of creative services:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Brochure & Flyer Design",
                                desc: "Professional marketing brochures, leaflets, and flyers designed to attract customers.",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Business Cards & Stationery",
                                desc: "Creative visiting cards, letterheads, envelopes, and corporate stationery that build a strong brand impression.",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 7h18M3 11h18M7 15h4m-6 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Social Media Creatives",
                                desc: "Eye-catching designs for Facebook, Instagram, LinkedIn, and other platforms to boost engagement.",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 8h2a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9a2 2 0 012-2h2"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 3h-6a2 2 0 00-2 2v3h10V5a2 2 0 00-2-2z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Banner & Poster Design",
                                desc: "Indoor and outdoor promotional banners, posters, and event creatives.",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 4h16v16H4z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8 8h8v4H8z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8 16h8"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Digital Ad Creatives",
                                desc: "Google Display Ads, social media ads, and promotional campaign designs optimized for conversions.",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 11V7a4 4 0 118 0v4m-8 0h8m-8 0H7a4 4 0 000 8h4m8-8v8a4 4 0 01-8 0v-4"
                                        />
                                    </svg>
                                ),
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* ICON CENTER */}
                                <div className="flex justify-center mb-5">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-lg leading-relaxed text-center">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>


                    <p className="text-lg text-gray-700 mt-12 leading-relaxed text-center max-w-4xl mx-auto">
                        If looking for a reliable Print & Digital Design company in Chennai,
                        Syscorp offers creative solutions tailored to your business needs.
                    </p>
                </div>
            </section>

            {/* IMPORTANCE SECTION */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT CONTENT */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                How Our Print & Digital Design Services Help Your Business
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                As experienced Print & Digital Design company in Chennai, we
                                focus on delivering designs that:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Improve brand visibility",
                                    "Increase customer engagement",
                                    "Support marketing campaigns",
                                    "Enhance brand professionalism",
                                    "Drive more leads and conversions",
                                ].map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4"
                                    >
                                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a5cdd] to-[#00a3ff] text-white text-sm font-bold shadow">
                                            {index + 1}
                                        </span>

                                        <p className="text-sm md:text-base font-medium text-gray-800 m-0">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-base text-gray-700 mt-8 leading-relaxed">
                                Our designs are not just visually appealing they strategically
                                crafted to achieve your marketing goals.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/print-digital-design-3.png"
                                alt="Business Growth Through Professional Print & Digital Design Services in Chennai"
                                width={500}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="w-full max-w-[500px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES SECTION */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/High-Impact-Performance-4.png"
                                alt="Print & Digital Design Services for Multiple Industries in Chennai"
                                width={500}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="w-full max-w-[500px] h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Industries We Serve
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Being a versatile Print & Digital Design company in Chennai, we
                                serve:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Real Estate Companies",
                                    "Healthcare & Hospitals",
                                    "Educational Institutions",
                                    "Retail & E-commerce Brands",
                                    "Corporate Businesses",
                                    "Startups & SMEs",
                                ].map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4"
                                    >
                                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a5cdd] to-[#00a3ff] text-white text-sm font-bold shadow">
                                            {index + 1}
                                        </span>

                                        <p className="text-sm md:text-base font-medium text-gray-800 m-0">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-base text-gray-700 mt-8 leading-relaxed">
                                No matter your industry, ensure your marketing materials reflect
                                professionalism and creativity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY SYSCORP SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Syscorp is the Best Print & Digital Design Company in Chennai
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            As a leading Print & Digital Design company in Chennai, our goal
                            is help your business communicate effectively through powerful
                            visual design.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Experienced creative designers",
                            "Marketing-driven design approach",
                            "Affordable packages",
                            "Quick delivery",
                            "Dedicated client support",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-7 h-7 text-[#00A3FF] flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>


                                <p className="text-lg font-medium text-gray-800 m-0">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-[#00A3FF] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl max-w-4xl mx-auto md:text-4xl font-bold mb-6">
                        Design Your Brand’s Success
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        Partner with Syscorp, most trusted Print & Digital Design company in
                        Chennai, and take your brand communication next level.
                    </p>

                    <a
                        href="/contact"
                        className="bg-white text-[#00a3ff] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 hover:scale-105 transition duration-300 inline-block"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    );
}
