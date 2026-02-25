import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Google Ads Company in Chennai | Google Ads Services",
    description:
        "Syscorp is a performance-focused Google Ads company in Chennai helping businesses drive instant visibility, high-quality traffic, measurable conversions through strategic Google advertising.",
};

export default function GoogleAdsPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Google Ads
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
                            Google Ads Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a performance-focused Google Ads company in Chennai helping businesses drive instant visibility,
                            high-quality traffic, measurable conversions through strategic Google advertising. We manage Google Ads
                            campaigns that deliver real ROI, not just clicks. Trusted Google Ads company in Chennai, we combine data,
                            intent-based targeting, and continuous optimization to help your business grow faster.
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
                            src="/images/services/google-ads-1.png"
                            alt="Google Ads Service"
                            width={500}
                            height={400}
                            className="w-full max-w-md object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Choose Syscorp as Your Google Ads Company in Chennai
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Google Ads success depends strategy and precision. As an experienced Google Ads company in Chennai,
                            Syscorp every campaign aligned with your business goals and optimized for performance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/google-ads-2.webp"
                                alt="Google Ads Company"
                                width={400}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "ROI-driven Google Ads strategy",
                                "Keyword & search intent targeting",
                                "High-converting ad copies",
                                "Smart bidding & budget optimization",
                                "Transparent reporting & insights",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                This is why businesses on Syscorp as their Google Ads company in Chennai.
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
                            Our Google Ads Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Search Ads Management",
                                desc: "As a professional Google Ads company in Chennai, we manage:",
                                points: [
                                    "Keyword research & bidding",
                                    "High-intent search campaigns",
                                    "Competitor targeting",
                                    "Ad extensions & quality score optimization",
                                ],
                            },
                            {
                                title: "Display Ads & Remarketing",
                                desc: "Our Google Ads company in Chennai delivers:",
                                points: [
                                    "Display banner campaigns",
                                    "Website remarketing ads",
                                    "Brand awareness campaigns",
                                    "Audience-based targeting",
                                ],
                            },
                            {
                                title: "YouTube Ads Management",
                                desc: "As a leading Google Ads company in Chennai, we run:",
                                points: [
                                    "Skippable & non-skippable video ads",
                                    "YouTube remarketing campaigns",
                                    "Brand and performance video ads",
                                ],
                            },
                            {
                                title: "Performance Max Campaigns",
                                desc: "Our Google Ads company in Chennai handles:",
                                points: [
                                    "PMax campaign setup & optimization",
                                    "Multi-channel reach across Google",
                                    "Conversion-focused automation",
                                ],
                            },
                            {
                                title: "Conversion Tracking & Optimization",
                                desc: "Every reliable Google Ads company in Chennai tracks results carefully. We provide:",
                                points: [
                                    "Conversion & event tracking setup",
                                    "Cost-per-click and cost-per-lead optimization",
                                    "ROAS & performance reporting",
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
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT CARD */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Google Ads Matter for Your Business
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Choosing the right Google Ads company in Chennai helps your business:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Reach high customers instantly",
                                    "Control and scale ad budgets",
                                    "Generate consistent leads & sales",
                                    "Outperform competitors in search results",
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
                                Syscorp ensures your Google Ads campaigns deliver fast and sustainable growth.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/google-ads-2.webp"
                                alt="Google Ads Growth"
                                width={500}
                                height={400}
                                className="w-full max-w-sm object-contain"
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
                                src="/images/services/google-ads-2.webp"
                                alt="Industries We Serve"
                                width={500}
                                height={400}
                                className="w-full max-w-sm object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Industries We Serve
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                As a versatile Google Ads company in Chennai, Syscorp works with:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Local businesses",
                                    "E-commerce brands",
                                    "Real estate & construction",
                                    "Education & training institutes",
                                    "Startups & enterprises",
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
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-[#00A3FF] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl max-w-4xl mx-auto md:text-4xl font-bold mb-6">
                        Partner with the Best Google Ads Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If looking a dependable Google Ads company in Chennai, Syscorp is your growth partner. We turn searches into
                        customers expertly managed Google Ads campaigns.
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
