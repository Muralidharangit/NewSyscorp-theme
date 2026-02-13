import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";

export const metadata = {
    title: "Facebook Ads Company in Chennai | Facebook Ads Services",
    description:
        "Syscorp is a performance-driven Facebook Ads company in Chennai helping businesses reach the right audience, generate high-quality leads, increase sales through result-oriented Facebook advertising.",
};

export default function FacebookAdsPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Facebook Ads
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
                            Facebook Ads Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a performance-driven Facebook Ads company in Chennai helping businesses reach the right audience, generate high-quality leads, increase sales through result-oriented Facebook advertising. We design campaigns that are creative, targeted, optimized for conversions. As trusted Facebook Ads company in Chennai, we focus on data, audience behavior, ad creatives to ensure every campaign delivers measurable results.
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
                            src="/images/services/fbadsdesign.png"
                            alt="Facebook Ads Service"
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
                            Why Choose Syscorp as Your Facebook Ads Company in Chennai
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Running Facebook ads without strategy leads wasted spend. As an experienced Facebook Ads company in Chennai, Syscorp builds campaigns are goal-driven and continuously optimized.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/fbicons.png"
                                alt="Facebook Ads Company"
                                width={400}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "ROI-focused Facebook ad strategies",
                                "Advanced audience targeting & retargeting",
                                "Scroll-stopping creatives & ad copies",
                                "Conversion tracking & performance analysis",
                                "Transparent reporting",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <i className="fas fa-check-circle text-[#00A3FF] text-xl"></i>
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                This is businesses trust Syscorp as their Facebook Ads company in Chennai.
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
                            Our Facebook Ads Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Facebook Ads Strategy & Planning",
                                desc: "As a professional Facebook Ads company in Chennai, we provide:",
                                points: [
                                    "Business goal analysis",
                                    "Funnel-based ad strategy",
                                    "Budget & bidding optimization",
                                    "Campaign structure planning",
                                ],
                            },
                            {
                                title: "Facebook & Instagram Ad Management",
                                desc: "Our Facebook Ads company in Chennai manages:",
                                points: [
                                    "Lead generation ads",
                                    "Website traffic & conversion ads",
                                    "E-commerce sales campaigns",
                                    "App promotion ads",
                                    "Instagram feed & story ads",
                                ],
                            },
                            {
                                title: "Ad Creative & Copywriting",
                                desc: "As a creative Facebook Ads company in Chennai, we design:",
                                points: [
                                    "High-converting ad creatives",
                                    "Engaging ad copies",
                                    "Multiple creative variations for A/B testing",
                                ],
                            },
                            {
                                title: "Retargeting & Lookalike Audiences",
                                desc: "Our Facebook Ads company in Chennai helps you:",
                                points: [
                                    "Retarget website visitors",
                                    "Re-engage past customers",
                                    "Scale campaigns using lookalike audiences",
                                ],
                            },
                            {
                                title: "Performance Tracking & Optimization",
                                desc: "Every reliable Facebook Ads company in Chennai tracks results. ensure:",
                                points: [
                                    "Pixel & event tracking setup",
                                    "Cost-per-lead optimization",
                                    "Conversion rate improvement",
                                    "Detailed performance reports",
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
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT CARD */}
                        <div className="">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Facebook Ads Matter for Your Business
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Choosing right Facebook Ads company in Chennai helps your business:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Reach highly targeted audiences",
                                    "Increase brand visibility",
                                    "Generate consistent leads & sales",
                                    "Control and optimize ad spend",
                                    "Scale faster with data-backed insights",
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
                                Syscorp ensures your Facebook ads deliver impact, just impressions.
                            </p>
                        </div>

                        {/* RIGHT IMAGE CARD */}
                        <div className="flex justify-center">
                            {/* <div className=""> */}
                            <Image
                                src="/images/services/fbicons.png"
                                alt="Facebook Ads Company"
                                width={450}
                                height={400}
                                className="w-full max-w-sm object-contain"
                            />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES SECTION */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE CARD */}
                        <div className="flex justify-center">
                            {/* <div className=""> */}
                            <Image
                                src="/images/services/fbicons.png"
                                alt="Facebook Ads Company"
                                width={450}
                                height={400}
                                className="w-full max-w-sm object-contain"
                            />
                            {/* </div> */}
                        </div>

                        {/* RIGHT CARD */}
                        <div className="">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Industries We Serve
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                As flexible Facebook Ads company in Chennai, Syscorp works with:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Local service businesses",
                                    "E-commerce brands",
                                    "Real estate & construction",
                                    "Education & training institutes",
                                    "Startups & corporate companies",
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
                        Partner with the Best Facebook Ads Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If you’re looking  reliable Facebook Ads company in Chennai, Syscorp is your growth partner. We turn clicks into customers through strategic Facebook advertising.
                    </p>

                    <a
                        href="/contact"
                        className="bg-white text-[#00a3ff] px-6 py-3 rounded-lg font-semibold transition hover:bg-gray-100 hover:scale-105 inline-block duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    );
}
