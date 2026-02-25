import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "YouTube Ads Company in Chennai | YouTube Ads Services",
    description:
        "Syscorp is a results-driven YouTube Ads company in Chennai helping businesses capture attention, build brand awareness, and drive conversions through powerful video advertising.",
};

export default function YouTubeAdsPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        YouTube Ads
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
                            YouTube Ads Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a results-driven YouTube Ads company in Chennai helping
                            businesses capture attention, build brand awareness, and drive
                            conversions through powerful video advertising. We create YouTube
                            ad campaigns that tell story, engage viewers, and deliver
                            measurable results. Trusted YouTube Ads company in Chennai, we
                            combine creative video strategy with data-backed targeting to
                            ensure your ads reach the right audience at the right time.
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
                            src="/images/services/youtube-ads-1.png"
                            alt="YouTube Ads Service"
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
                            Why Choose Syscorp as Your YouTube Ads Company in Chennai
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            YouTube advertising requires the perfect balance of creativity and
                            performance. As experienced YouTube Ads company in Chennai,
                            Syscorp focuses on impactful storytelling supported by precise
                            audience targeting and continuous optimization.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/youtube-ads-2.png"
                                alt="YouTube Ads Company"
                                width={400}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Video-first advertising strategy",
                                "Audience targeting & remarketing",
                                "Skippable & non-skippable ad expertise",
                                "Conversion tracking & performance analysis",
                                "Transparent reporting",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                That’s brands trust Syscorp as their YouTube Ads company in
                                Chennai.
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
                            Our YouTube Ads Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "YouTube Ads Strategy & Planning",
                                desc: "As a professional YouTube Ads company in Chennai, we offer:",
                                points: [
                                    "Campaign goal & funnel planning",
                                    "Audience research & targeting",
                                    "Budget allocation & bidding strategy",
                                ],
                            },
                            {
                                title: "Video Ad Creation & Optimization",
                                desc: "Our YouTube Ads company in Chennai delivers:",
                                points: [
                                    "Skippable in-stream ads",
                                    "Non-skippable ads",
                                    "In-feed (discovery) ads",
                                    "Short-form video ads",
                                ],
                            },
                            {
                                title: "YouTube Remarketing Campaigns",
                                desc: "As a leading YouTube Ads company in Chennai, we help you:",
                                points: [
                                    "Retarget website visitors",
                                    "Re-engage past viewers",
                                    "Build brand recall through repeated exposure",
                                ],
                            },
                            {
                                title: "Performance Tracking & Optimization",
                                desc: "Every reliable YouTube Ads company in Chennai measures results. We ensure:",
                                points: [
                                    "Conversion & view tracking setup",
                                    "View rate and cost optimization",
                                    "Regular performance reports & insights",
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
                                Why YouTube Ads Matter for Your Business
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Choosing YouTube Ads company in Chennai helps your business:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Reach massive, highly engaged audiences",
                                    "Build strong brand awareness",
                                    "Increase consideration and conversions",
                                    "Complement search and social ad campaigns",
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
                                Syscorp ensures YouTube advertising delivers long-term impact and
                                ROI.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/youtube-ads-3.png"
                                alt="YouTube Ads Growth"
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
                                src="/images/services/youtube-ads-3.png"
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
                                As a YouTube Ads company in Chennai, Syscorp works with:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "E-commerce brands",
                                    "Local & service-based businesses",
                                    "Real estate & construction",
                                    "Education & training institutes",
                                    "Startups & corporate companies",
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
                        Work with the Best YouTube Ads Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If searching a reliable YouTube Ads company in Chennai, Syscorp is
                        your ideal video advertising partner. Views into engagement and
                        engagement into customers.
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
