import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";

export const metadata = {
    title: "High-Impact Performance Ads Company in Chennai | Performance Ads Services",
    description:
        "Syscorp is a results High-Impact Performance Ads company in Chennai helping businesses generate quality leads, sales, and measurable ROI through data-focused advertising strategies.",
};

export default function HighImpactPerformanceAdsPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        High-Impact Performance Ads
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
                            High-Impact Performance Ads Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a results High-Impact Performance Ads company in Chennai helping businesses generate quality leads, sales, and measurable ROI through data-focused advertising strategies. We create performance ads just look good they convert.As a trusted High-Impact Performance Ads company in Chennai, we focus on precision targeting, compelling creatives, and continuous optimization ensure every ad spend delivers maximum impact.
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
                            src="/images/services/High-Impact-Performance.webp"
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
                            Why Choose Syscorp as Your High-Impact Performance Ads Company in Chennai
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Running ads without a strategy leads to wasted budgets. As experienced High-Impact Performance Ads company in Chennai, Syscorp ensures every campaign is planned, tracked,optimized performance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/technical-seo.webp"
                                alt="On Page SEO Service"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "ROI-focused ad strategies",
                                "Platform-specific ad execution",
                                "Advanced audience targeting",
                                "Creative testing & optimization",
                                "Transparent performance reporting",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <i className="fas fa-check-circle text-[#00A3FF] text-xl"></i>
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                This makes Syscorp dependable High-Impact Performance Ads company in Chennai for brands aiming for real grow
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
                            Our High-Impact Performance Ads Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Paid Advertising Strategy",
                                desc: "As professional High-Impact Performance Ads company in Chennai, we design:",
                                points: [
                                    "Goal-based ad funnels",
                                    "Audience research & segmentation",
                                    "Budget planning & bid strategy",
                                ],
                            },
                            {
                                title: "Google Ads Management",
                                desc: "Our High-Impact Performance Ads company in Chennai manages:",
                                points: [
                                    "Search Ads",
                                    "Display Ads",
                                    "YouTube Ads",
                                    "Performance Max campaigns",
                                ],
                            },
                            {
                                title: "Social Media Ads (Meta, Instagram, LinkedIn)",
                                desc: "As a leading High-Impact Performance Ads company in Chennai, we create:",
                                points: [
                                    "Facebook & Instagram Ads",
                                    "Lead generation campaigns",
                                    "Conversion-focused creatives",
                                    "Retargeting & lookalike audiences",
                                ],
                            },
                            {
                                title: "Conversion Tracking & Optimization",
                                desc: "Every High-Impact Performance Ads company in Chennai must track results we do it right:",
                                points: [
                                    "Pixel & conversion setup",
                                    "A/B testing of ads",
                                    "Funnel optimization",
                                    "Cost-per-lead and ROAS tracking",
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
                                            <i className="fas fa-check text-[#00A3FF] mt-1"></i>
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
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why High-Impact Performance Ads Matter
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Choosing a High-Impact Performance Ads company in Chennai helps your business:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT SIDE CONTENT */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Why High-Impact Performance Ads Matter
                            </h3>

                            <ul className="space-y-4">
                                {[
                                    "Reach the right audience at the right time",
                                    "Reduce wasted ad spend",
                                    "Increase conversions and sales",
                                    "Scale campaigns with confidence",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <i className="fas fa-check-circle text-[#00A3FF] text-xl"></i>
                                        <span className="text-lg text-gray-700 font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                As a growth-focused High-Impact Performance Ads company in Chennai, Syscorp turns data decisions.
                            </p>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/technical-seo.webp"
                                alt="Local SEO Importance"
                                width={500}
                                height={400}
                                className="object-contain rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Industries We Serve
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            As a versatile High-Impact Performance Ads company in Chennai, Syscorp works with:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT SIDE IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/technical-seo.webp"
                                alt="Local SEO Process"
                                width={500}
                                height={400}
                                className="object-contain rounded-2xl"
                            />
                        </div>

                        {/* RIGHT SIDE PROCESS */}
                        <div>
                            <div className="space-y-5">
                                {[
                                    "E-commerce brands",
                                    "Service-based businesses",
                                    "Real estate & construction",
                                    "Education & training institutes",
                                    "Startups & enterprises",
                                ].map((step, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00A3FF] text-white font-bold text-lg shadow-md flex-shrink-0">
                                            {index + 1}
                                        </div>

                                        <p className="text-lg text-gray-700 leading-relaxed m-0">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-[#00A3FF] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl max-w-4xl mx-auto md:text-4xl font-bold mb-6">
                        Work with the Best High-Impact Performance Ads Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If looking for a reliable High-Impact Performance Ads company in Chennai, Syscorp is your ideal performance marketing partner. Combine creativity, analytics, and experience to deliver ads that drive results.
                    </p>

                    <a
                        href="/contact"
                        className="bg-white text-[#00a3ff] px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    );
}
