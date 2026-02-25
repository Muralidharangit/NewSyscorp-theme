import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Instagram Ads Company in Chennai | Instagram Ads Services",
    description:
        "Syscorp is a results-focused Instagram Ads company in Chennai helping brands grow visibility, engagement, and conversions one of the most powerful social media platforms.",
};

export default function InstagramAdsPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Instagram Ads
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
                            Instagram Ads Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a results-focused Instagram Ads company in Chennai helping brands grow visibility, engagement, and conversions one of the most powerful social media platforms. We create  Instagram ad campaigns that connect with your audience drive real business outcomes. As a trusted Instagram Ads company in Chennai, we combine creative storytelling with performance marketing deliver ads that truly perform.
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
                            src="/images/services/instagram-add.png"
                            alt="Instagram Ads Service"
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
                            Why Choose Syscorp as Your Instagram Ads Company in Chennai
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Instagram ads creativity backed by data. Experienced Instagram Ads company in Chennai, Syscorp designs campaigns that are visually appealing, strategically targeted, and conversion-oriented.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/instagram-targeted-audience.webp"
                                alt="Instagram Ads Company"
                                width={300}
                                height={300}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Creative, scroll-stopping ad designs",
                                "Advanced audience targeting & retargeting",
                                "Platform-specific ad strategies",
                                "Conversion tracking & continuous optimization",
                                "Clear performance reporting",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Makes Syscorp a reliable Instagram Ads company in Chennai for brands looking to scale faster.
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
                            Our Instagram Ads Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Instagram Ads Strategy & Planning",
                                desc: "As professional Instagram Ads company in Chennai, we offer:",
                                points: [
                                    "Audience research & segmentation",
                                    "Funnel-based campaign planning",
                                    "Budget allocation & bidding strategy",
                                ],
                            },
                            {
                                title: "Instagram Feed, Story & Reels Ads",
                                desc: "Our Instagram Ads company in Chennai manages:",
                                points: [
                                    "Feed ads for brand visibility",
                                    "Story ads for quick engagement",
                                    "Reels ads for high reach & conversions",
                                    "Carousel & video ads",
                                ],
                            },
                            {
                                title: "Creative & Copy Development",
                                desc: "As  creative Instagram Ads company in Chennai, we create:",
                                points: [
                                    "High-quality visuals & videos",
                                    "Engaging captions & CTAs",
                                    "Multiple creative variations for A/B testing",
                                ],
                            },
                            {
                                title: "Retargeting & Lookalike Campaigns",
                                desc: "Our Instagram Ads company in Chennai helps you:",
                                points: [
                                    "Retarget website visitors",
                                    "Reconnect with past customers",
                                    "Scale campaigns using audiences",
                                ],
                            },
                            {
                                title: "Performance Tracking & Optimization",
                                desc: "Every dependable Instagram Ads company in Chennai must track results. We ensure:",
                                points: [
                                    "Pixel & conversion setup",
                                    "Cost-per-click and cost-per-lead optimization",
                                    "Regular performance insights & reports",
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
                        <div className="">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Instagram Ads Matter for Your Business
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Choosing a professional Instagram Ads company in Chennai helps your business:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Reach highly engaged users",
                                    "Build strong brand presence",
                                    "Drive quality traffic & leads",
                                    "Increase sales through visual marketing",
                                ].map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 p-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition"
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
                                Syscorp ensures Instagram ad campaigns deliver maximum ROI.
                            </p>
                        </div>

                        {/* RIGHT IMAGE CARD */}
                        <div className="flex justify-center">
                            {/* <div className="w-full flex justify-center"> */}
                            <Image
                                src="/images/services/Brand-foucs.png"
                                alt="Instagram Ads Company"
                                width={500}
                                height={400}
                                className="w-full max-w-sm object-contain"
                            />
                            {/* </div> */}
                        </div>

                    </div>
                </div>
            </section>


            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT IMAGE CARD */}
                        <div className="flex justify-center">
                            {/* <div className="w-full flex justify-center"> */}
                            <Image
                                src="/images/services/Managed-E-commerce.svg"
                                alt="Instagram Ads Company"
                                width={500}
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
                                As a Instagram Ads company in Chennai, Syscorp works with:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "E-commerce brands",
                                    "Local service businesses",
                                    "Fashion & lifestyle brands",
                                    "Real estate & education sectors",
                                    "Startups & growing companies",
                                ].map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 p-3 rounded-xl border border-gray-200 bg-white hover:bg-green-50 hover:border-green-200 transition"
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
                        Work with the Best Instagram Ads Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If searching for a reliable Instagram Ads company in Chennai, Syscorp is your trusted advertising partner.
                        Turn attention into action with high-performing Instagram ad campaigns.
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
