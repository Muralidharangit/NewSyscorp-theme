import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Brand Focused Marketing Strategy Company in Chennai | Brand Marketing Services",
    description:
        "Syscorp is a trusted Brand-Focused Marketing Strategy company in Chennai helping businesses build strong brand identity, consistent messaging, and long-term market presence.",
};

export default function BrandFocusedMarketingStrategyPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Brand Focused Marketing Strategy
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
                        <h2 className="text-3xl font-bold mb-4">
                            Brand Focused Marketing Strategy Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a trusted Brand-Focused Marketing Strategy company in Chennai helping businesses build strong brand identity, consistent messaging, and long-term market presence. Our brand-focused strategies are designed to increase brand awareness, trust customer engagement digital platforms. As a professional Brand-Focused Marketing Strategy company in Chennai, Syscorp marketing efforts with brand values drive measurable business growth.
                        </p>

                        <div className="mt-8 flex gap-4 flex-wrap">
                            <button className="bg-[#00A3FF] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-600 transition">
                                Get Free SEO Audit
                            </button>

                            <button className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-800 hover:bg-gray-100 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/services/Brand-foucs.webp"
                            alt="On Page SEO Service"
                            width={500}
                            height={400}
                            className="w-full max-w-md object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Choose Syscorp as Your Brand-Focused Marketing Strategy Company in Chennai?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Choosing the right Brand-Focused Marketing Strategy company in Chennai is essential creating a memorable and impactful brand. At Syscorp, we focus clarity, consistency, and results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/Brand-foucs-4.webp"
                                alt="On Page SEO Service"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Strategic brand positioning",
                                "Consistent brand messaging",
                                "Data-driven marketing planning",
                                "Multi-channel brand visibility",
                                "Long-term brand growth focus",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Syscorp a reliable Brand-Focused Marketing Strategy company in Chennai for businesses across industries.
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
                            Our Brand-Focused Marketing Strategy Services Include
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Brand Positioning & Market Research",
                                desc: "As an experienced Brand-Focused Marketing Strategy company in Chennai, we help define:",
                                points: [
                                    "Brand voice and identity",
                                    "Target audience insights",
                                    "Market and competitor analysis",
                                ],
                            },
                            {
                                title: "Content & Messaging Strategy",
                                desc: "Our Brand-Focused Marketing Strategy company in Chennai creates:",
                                points: [
                                    "Clear brand messaging",
                                    "Consistent content guidelines",
                                    "Story marketing communication",
                                ],
                            },
                            {
                                title: "Multi-Channel Brand Marketing",
                                desc: "We implement brand strategies across:",
                                points: [
                                    "Search engines",
                                    "Social media platforms",
                                    "Paid advertising channels",
                                    "Content marketing campaigns",
                                ],
                            },
                            {
                                title: "Brand Performance Tracking",
                                desc: "As a professional Brand-Focused Marketing Strategy company in Chennai, we track:",
                                points: [
                                    "Brand visibility and reach",
                                    "Engagement metrics",
                                    "Audience growth and impact",
                                ],
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>

                                {service.desc && (
                                    <p className="text-gray-600 text-lg mb-5 leading-relaxed">
                                        {service.desc}
                                    </p>
                                )}

                                <ul className="space-y-3">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="mt-1" size={18} />
                                            <span className="text-gray-700 text-lg">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMPORTANCE SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Importance of a Brand-Focused Marketing Strategy
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            A brand-focused approach helps businesses stand competitive markets. As a skilled Brand-Focused Marketing Strategy company in Chennai, Syscorp your brand remains relevant and recognizable.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT SIDE CONTENT */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Why Brand-Focused Marketing Matters:
                            </h3>

                            <ul className="space-y-4">
                                {[
                                    "Builds strong brand identity",
                                    "Increases customer trust",
                                    "Improves brand recall",
                                    "Supports long-term growth",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                        <span className="text-lg text-gray-700 font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/Brand-foucs-5.webp"
                                alt="Local SEO Importance"
                                width={500}
                                height={400}
                                className="object-contain rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
