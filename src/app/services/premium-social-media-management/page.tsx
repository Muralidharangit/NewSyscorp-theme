import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Premium Social Media Management Company in Chennai | Syscorp",
    description:
        "Syscorp is a trusted Premium Social Media Management company in Chennai helping brands grow, engage, and convert audiences across social platforms with strategy-driven content and consistent posting.",
};

export default function SocialMediaManagementPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Premium Social Media Management
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
                            Premium Social Media Management Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a trusted Premium Social Media Management company in Chennai helping brands grow, engage, convert audiences across social platforms. We just post content we build a strong social presence that reflects your brand voice and drives real business results. As a professional Premium Social Media Management company in Chennai, we manage your social media end-to-end, so focus on running your business while we grow your online visibility.
                        </p>


                        <div className="mt-8 flex gap-4 flex-wrap">
                            <button className="bg-[#00A3FF] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-600 transition">
                                Get Free Consultation
                            </button>

                            <button className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-800 hover:bg-gray-100 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/services/Social-media-1.png"
                            alt="Premium Social Media Management"
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
                            Why Syscorp Is the Right Premium Social Media Management Company in Chennai
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Social media is more than likes and followers. As a results-driven Premium Social Media Management company in Chennai, Syscorp focuses on strategy, creativity, and consistency.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/why-social-media-2.png"
                                alt="Social Media Growth"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Brand-focused content planning",
                                "Platform-specific social strategies",
                                "High-quality creatives & captions",
                                "Consistent posting schedules",
                                "Engagement-driven growth",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                This approach makes Syscorp a reliable Premium Social Media Management company in Chennai for startups, SMEs, and established brands.

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
                            Our Premium Social Media Management Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Social Media Strategy & Planning",
                                desc: "Leading Premium Social Media Management company in Chennai, we create a clear roadmap that includes:",
                                points: [
                                    "Platform selection (Instagram, Facebook, LinkedIn, X, etc)",
                                    "Monthly content calendars",
                                    "Audience targeting strategy",

                                ],
                            },
                            {
                                title: "Content Creation & Branding",
                                desc: "Our Premium Social Media Management Company in Chennai delivers:",
                                points: [
                                    "Eye-catching creatives",
                                    "Brand-aligned visuals",
                                    "Engaging captions & hashtags",
                                    "Reels and short-form content ideas",
                                ],
                            },
                            {
                                title: "Community Management",
                                desc: "We help brands connected. As a trusted Premium Social Media Management company in Chennai, we manage:",
                                points: [
                                    "Comments and messages",
                                    "Audience engagement",
                                    "Brand reputation monitoring",

                                ],
                            },
                            {
                                title: "Growth & Performance Tracking",
                                desc: "As a professional Premium Social Media Management company in Chennai, we track:",
                                points: [
                                    "Follower growth",
                                    "Reach & engagement",
                                    "Content performance insights",
                                    "Monthly performance reports",
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
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Premium Social Media Management Matters
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Choosing a Premium Social Media Management company in Chennai ensures brand stays consistent, active, and relevant online. Social media is often the first impression of your business  we make sure strong one.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT SIDE CONTENT */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Benefits of Our Premium Social Media Management:

                            </h3>

                            <ul className="space-y-4">
                                {[
                                    "Strong brand visibility",
                                    "Improved audience engagement",
                                    "Consistent brand messaging",
                                    "Higher trust and credibility",
                                    "Long-term organic growth",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                        <span className="text-lg text-gray-700 font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Syscorp helps brands build a strong presence that drives real
                                customer engagement and long-term results.
                            </p> */}
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/why-social-media-2.png"
                                alt="Social Media Benefits"
                                width={500}
                                height={400}
                                className="object-contain rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Industries We Serve
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            As an experienced Premium Social Media Management company in
                            Chennai, Syscorp works with:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT SIDE IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/why-social-media-2.png"
                                alt="Industries We Serve"
                                width={500}
                                height={400}
                                className="object-contain rounded-2xl"
                            />
                        </div>

                        {/* RIGHT SIDE PROCESS */}
                        <div>
                            <div className="space-y-5">
                                {[
                                    "Corporate businesses",
                                    "E-commerce brands",
                                    "Startups",
                                    "Service-based companies",
                                    "Local & global brands",
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
                        Partner with the Best Premium Social Media Management Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If looking for a reliable Premium Social Media Management company in Chennai, Syscorp is your ideal partner. Our goal is turn your social media platforms powerful brand-building and lead-generating channels.
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
