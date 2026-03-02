import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "YouTube Shorts & Reels Editing Company in Chennai | Syscorp",
    description:
        "Syscorp is a creative fast-growing YouTube Shorts & Reels Editing company in Chennai helping creators and brands produce high short-form videos that attention instantly.",
};

export default function YouTubeShortsReelsEditingPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        YouTube Shorts & Reels Editing
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
                            YouTube Shorts & Reels Editing Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a creative fast-growing YouTube Shorts & Reels Editing
                            company in Chennai helping creators and brands produce high
                            short-form videos that attention instantly. today’s fast-scrolling
                            world, short videos be sharp, engaging, perfectly edited and that’s
                            exactly we deliver. As a trusted YouTube Shorts & Reels Editing
                            company in Chennai, we your raw clips into scroll-stopping content
                            designed to reach, engagement, and followers.
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
                            src="/images/services/youtube-shorts-11.png"
                            alt="Professional YouTube Shorts & Instagram Reels Video Editing Services in Chennai"
                            width={500}
                            height={400}
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-5xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Choose Syscorp as Your YouTube Shorts & Reels Editing Company in
                            Chennai?
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Short-form content requires a different editing style — quick cuts,
                            strong hooks, and engaging visuals. As an experienced YouTube Shorts
                            & Reels Editing company in Chennai, we understand platform algorithms
                            and audience behavior.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/YouTube-Shorts-1.png"
                                alt="Creative YouTube Shorts & Instagram Reels Editing Company in Chennai"
                                width={400}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="w-full max-w-[400px] h-auto object-contain rounded-2xl"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Fast-paced, engaging editing style",
                                "Strong hook within first 3 seconds",
                                "Subtitles & text animations",
                                "Trending music integration",
                                "Optimized vertical (9:16) format",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Brands and creators choose Syscorp as their preferred YouTube
                                Shorts & Reels Editing company in Chennai.
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
                            Our YouTube Shorts & Reels Editing Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Short-Form Video Editing",
                                desc: "As a professional YouTube Shorts & Reels Editing company in Chennai, we edit:",
                                points: [
                                    "YouTube Shorts",
                                    "Instagram Reels",
                                    "Facebook Reels",
                                    "Promotional short clips",
                                    "Influencer content",
                                ],
                            },
                            {
                                title: "Creative Enhancements",
                                desc: "Our YouTube Shorts & Reels Editing company in Chennai provides:",
                                points: [
                                    "Animated captions & subtitles",
                                    "Motion graphics & transitions",
                                    "Sound effects & background music",
                                    "Color correction & visual enhancements",
                                ],
                            },
                            {
                                title: "Platform Optimization",
                                desc: "As a results-driven YouTube Shorts & Reels Editing company in Chennai, we also focus on:",
                                points: [
                                    "Attention-grabbing hooks",
                                    "Retention-focused editing",
                                    "Trend-based content formats",
                                    "Call-to-action placement",
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
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    {/* LEFT CARD */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Professional Shorts & Reels Editing Matters
                        </h3>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Choosing the right YouTube Shorts & Reels Editing company in
                            Chennai helps you:
                        </p>

                        <div className="space-y-4">
                            {[
                                "Increase reach organically",
                                "Improve audience retention",
                                "Boost engagement & shares",
                                "Grow followers faster",
                                "Build strong personal or brand identity",
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
                            At Syscorp, we don’t just edit short videos we help you go viral
                            strategically.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/services/YouTube-Shorts-3.png"
                            alt="Shorts & Reels Growth"
                            width={500}
                            height={400}
                            className="w-full max-w-md object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* WHO WE WORK WITH SECTION */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/services/YouTube-Shorts-Reels-4.png"
                            alt="Who We Work With"
                            width={500}
                            height={400}
                            className="w-full max-w-md object-contain"
                        />
                    </div>

                    {/* RIGHT CARD */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Who We Work With
                        </h3>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            As a versatile YouTube Shorts & Reels Editing company in Chennai,
                            we work with:
                        </p>

                        <div className="space-y-4">
                            {[
                                "Content creators & influencers",
                                "YouTube channel owners",
                                "Startups & business brands",
                                "Coaches & educators",
                                "Marketing agencies",
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
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-[#00A3FF] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl max-w-4xl mx-auto md:text-4xl font-bold mb-6">
                        Partner with the Best YouTube Shorts & Reels Editing Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If you’re looking for a creative and reliable YouTube Shorts & Reels
                        Editing company in Chennai, Syscorp is your ideal partner. turn simple
                        into powerful short-form content that drives results.
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
