import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "YouTube Channel Growth Strategy Company in Chennai | Syscorp",
    description:
        "Syscorp is a results-focused YouTube Channel Growth Strategy company in Chennai helping creators, influencers, and brands grow subscribers, increase watch time and build strong channel authority.",
};

export default function YouTubeChannelGrowthStrategyPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        YouTube Channel Growth Strategy
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
                            YouTube Channel Growth Strategy Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a results-focused YouTube Channel Growth Strategy
                            company in Chennai helping creators, influencers, and brands grow
                            subscribers, increase watch time build strong channel authority. We
                            manage content we create a clear, data-driven growth roadmap for
                            long-term success. As a trusted YouTube Channel Growth Strategy
                            company in Chennai, we combine content planning, video
                            optimization, analytics insights, audience engagement strategies
                            help your channel grow consistently.
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
                            src="/images/services/YouTube-Channel-Growth-1.png"
                            alt="YouTube Channel Growth Strategy"
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
                            Why Choose Syscorp as Your YouTube Channel Growth Strategy Company
                            in Chennai?
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Growing on YouTube requires than uploading videos regularly. As an
                            experienced YouTube Channel Growth Strategy company in Chennai, we
                            focus strategic planning and performance analysis.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/YouTube-Channel-Growth-2.png"
                                alt="YouTube Growth Planning"
                                width={400}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Niche & competitor research",
                                "Content strategy & topic planning",
                                "SEO-driven video optimization",
                                "Audience retention strategies",
                                "Data-based performance tracking",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                That’s why creators choose Syscorp as their preferred YouTube
                                Channel Growth Strategy company in Chennai.
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
                            Our YouTube Channel Growth Strategy Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Channel Audit & Competitor Analysis",
                                desc: "As professional YouTube Channel Growth Strategy company in Chennai, we:",
                                points: [
                                    "Analyze existing channel performance",
                                    "Identify growth gaps and opportunities",
                                    "Study competitors in your niche",
                                ],
                            },
                            {
                                title: "Content & Posting Strategy",
                                desc: "Our YouTube Channel Growth Strategy company in Chennai helps with:",
                                points: [
                                    "Weekly & monthly content calendars",
                                    "Trending topic identification",
                                    "Long-form and Shorts balance strategy",
                                ],
                            },
                            {
                                title: "Video SEO & Optimization",
                                desc: "As complete YouTube Channel Growth Strategy company in Chennai, we optimize:",
                                points: [
                                    "Titles, descriptions & tags",
                                    "Thumbnails for higher CTR",
                                    "Playlists for better ranking",
                                    "Channel keywords & structure",
                                ],
                            },
                            {
                                title: "Audience Retention & Engagement Strategy",
                                desc: "We improve:",
                                points: [
                                    "Watch time and session duration",
                                    "Hook strategy for first 10 seconds",
                                    "Call-to-action placement",
                                    "Community engagement tactics",
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

                                <p className="text-gray-600 text-lg mb-5 leading-relaxed">
                                    {service.desc}
                                </p>

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
                        {/* LEFT CONTENT */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why YouTube Growth Strategy Matters
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Choosing the right YouTube Channel Growth Strategy company in
                                Chennai helps you:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Increase subscribers consistently",
                                    "Improve video rankings",
                                    "Build authority in your niche",
                                    "Monetize your channel faster",
                                    "Create long-term brand value",
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
                                At Syscorp, Focus on sustainable growth not shortcuts.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}

                        <div className="flex justify-center">
                            <Image
                                src="/images/services/YouTube-Channel-Growth-3.png"
                                alt="YouTube Channel Growth Strategy"
                                width={500}
                                height={400}
                                className="w-fullmax-w-md object-contain"
                            />
                        </div>


                    </div>
                </div>
            </section>

            {/* WHO WE WORK WITH */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}

                        <div className="flex justify-center">
                            <Image
                                src="/images/services/YouTube-Channel-Growth-4.png"
                                alt="YouTube Channel Growth Strategy"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Who We Work With
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                As reliable YouTube Channel Growth Strategy company in Chennai,
                                we support:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "YouTubers & content creators",
                                    "Influencers & educators",
                                    "Business brands",
                                    "Coaches & consultants",
                                    "Digital agencies",
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
                        Partner with the Best YouTube Channel Growth Strategy Company in
                        Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If you looking for a strategic and dependable YouTube Channel Growth
                        Strategy company in Chennai, Syscorp is your growth partner. Help
                        turn your YouTube channel into a powerful digital asset.
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
