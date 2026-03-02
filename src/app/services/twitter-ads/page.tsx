import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Twitter (X) Ads Company in Chennai | Twitter Ads Services",
    description:
        "Syscorp is a performance-focused Twitter (X) Ads company in Chennai helping brands amplify visibility, conversations, and generate measurable results on the X platform.",
};

export default function TwitterAdsPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Twitter (X) Ads
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
                            Twitter (X) Ads Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a performance-focused Twitter (X) Ads company in Chennai
                            helping brands amplify visibility, conversations, generate
                            measurable results on the X (formerly Twitter) platform. We create
                            targeted ad campaigns that connect your brand the right audience in
                            real time. Trusted Twitter (X) Ads company in Chennai, we combine
                            sharp messaging, audience targeting,data-driven optimization to
                            deliver impactful advertising results.
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
                            src="/images/services/twitter-ads-2.png"
                            alt="Twitter Ads Service"
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
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Choose Syscorp as Your Twitter (X) Ads Company in Chennai
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Twitter (X) advertising works best with content and precise
                            targeting. As an experienced Twitter (X) Ads company in Chennai,
                            Syscorp helps brands stand out in fast-moving conversations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/twitter-ads-1.png"
                                alt="Twitter Ads Company"
                                width={400}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Real-time audience targeting",
                                "Trend-based & interest-driven campaigns",
                                "Strong ad copy and messaging",
                                "Conversion and engagement tracking",
                                "Transparent performance reporting",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                This makes Syscorp reliable Twitter (X) Ads company in Chennai
                                for brand growth.
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
                            Our Twitter (X) Ads Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Twitter (X) Ads Strategy & Planning",
                                desc: "Professional Twitter (X) Ads company in Chennai, we offer:",
                                points: [
                                    "Campaign goal & funnel planning",
                                    "Audience and interest targeting",
                                    "Budget planning & bid optimization",
                                ],
                            },
                            {
                                title: "Twitter (X) Ad Campaign Management",
                                desc: "",
                                points: [
                                    "Promoted posts & ads",
                                    "Website traffic campaigns",
                                    "App install ads",
                                    "Brand awareness & engagement ads",
                                ],
                            },
                            {
                                title: "Ad Copy & Creative Development",
                                desc: "As a creative Twitter (X) Ads company in Chennai, we create:",
                                points: [
                                    "High-impact ad copies",
                                    "Visual creatives optimized for X",
                                    "Multiple ad variations for testing",
                                ],
                            },
                            {
                                title: "Retargeting & Follower Growth Campaigns",
                                desc: "Our Twitter (X) Ads company in Chennai helps you:",
                                points: [
                                    "Retarget website visitors",
                                    "Re-engage users who interacted with your brand",
                                    "Grow followers with targeted campaigns",
                                ],
                            },
                            {
                                title: "Performance Tracking & Optimization",
                                desc: "Every dependable Twitter (X) Ads company in Chennai tracks results carefully. We ensure:",
                                points: [
                                    "Conversion and event tracking",
                                    "Cost-per-click and engagement optimization",
                                    "Detailed performance insights & reports",
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
                                Why Twitter (X) Ads Matter for Your Business
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Choosing the right Twitter (X) Ads company in Chennai helps your
                                business:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Join real-time conversations",
                                    "Increase brand visibility quickly",
                                    "Drive website traffic and engagement",
                                    "Strengthen brand voice and authority",
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
                                Syscorp your Twitter (X) ad campaigns deliver consistent impact.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/twitter-ads-3.png"
                                alt="Twitter Ads Growth"
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
                                src="/images/services/twitter-ads-4.png"
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
                                As a flexible Twitter (X) Ads company in Chennai, Syscorp works
                                with:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Startups &tech brands",
                                    "Media & entertainment businesses",
                                    "E-commerce companies",
                                    "B2B & service-based industries",
                                    "Personal brands & enterprises",
                                ].map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 "
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
                        Work with the Best Twitter (X) Ads Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If you’re looking reliable Twitter (X) Ads company in Chennai,
                        Syscorp is your strategic advertising partner. We help your brand
                        get noticed, engaged and remembered.
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
