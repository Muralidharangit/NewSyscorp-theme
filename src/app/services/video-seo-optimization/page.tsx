import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Video SEO & Optimization Company in Chennai | Syscorp",
    description:
        "Syscorp is a results driven Video SEO & Optimization company in Chennai helping businesses and creators improve video visibility, increase reach, drive organic traffic through strategic optimization.",
};

export default function VideoSEOOptimizationPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Video SEO & Optimization
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
                            Video SEO & Optimization Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a results driven Video SEO & Optimization company in
                            Chennai helping businesses and creators improve video visibility,
                            increase reach, drive organic traffic through strategic
                            optimization. Creating videos is just the first step making rank is
                            truly drives growth. Trusted Video SEO & Optimization company in
                            Chennai, we ensure videos are optimized for YouTube, Google & other
                            platforms to maximize discoverability and engagement.
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
                            src="/images/services/Video-Optimization-For-SEO-1.png"
                            alt="Video SEO & Optimization"
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
                            Why Choose Syscorp as Your Video SEO & Optimization Company in
                            Chennai?
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Uploading videos without proper optimization limits their reach. As
                            an experienced Video SEO & Optimization company in Chennai, we focus
                            on ranking strategies that improve visibility and performance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/Video-Optimization-For-SEO-4.png"
                                alt="Video SEO Company"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Keyword research for video content",
                                "SEO-friendly titles and descriptions",
                                "Optimized tags and hashtags",
                                "Thumbnail optimization guidance",
                                "Audience retention strategy",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                That’s why brands and creators rely on Syscorp as their preferred
                                Video SEO & Optimization company in Chennai.
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
                            Our Video SEO & Optimization Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Video Keyword Research",
                                desc: "As a professional Video SEO & Optimization company in Chennai, we identify:",
                                points: [
                                    "High-search-volume video keywords",
                                    "Low-competition ranking opportunities",
                                    "Trending and evergreen topics",
                                ],
                            },
                            {
                                title: "Title, Description & Tag Optimization",
                                desc: "Our Video SEO & Optimization company in Chennai ensures:",
                                points: [
                                    "SEO-optimized video titles",
                                    "Engaging and keyword-rich descriptions",
                                    "Proper tagging strategy",
                                    "Strategic hashtag usage",
                                ],
                            },
                            {
                                title: "YouTube Channel Optimization",
                                desc: "As a leading Video SEO & Optimization company in Chennai, we optimize:",
                                points: [
                                    "Channel keywords",
                                    "Playlists for ranking",
                                    "Video categorization",
                                    "End screens & cards setup",
                                ],
                            },
                            {
                                title: "Audience Retention & Performance Tracking",
                                desc: "Every reliable Video SEO & Optimization company in Chennai monitors results. We focus on:",
                                points: [
                                    "Improving watch time",
                                    "Click-through rate (CTR) optimization",
                                    "Analytics tracking and reporting",
                                    "Continuous performance improvements",
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
                            Why Video SEO & Optimization Matters
                        </h3>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Choosing right Video SEO & Optimization company in Chennai helps
                            you:
                        </p>

                        <div className="space-y-4">
                            {[
                                "Increase organic video views",
                                "Rank videos on YouTube and Google",
                                "Improve subscriber growth",
                                "Boost engagement and conversions",
                                "Build long-term digital authority",
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

                        <p className="text-base text-gray-700 mt-8 leading-relaxed">
                            At Syscorp, we combine SEO expertise with video marketing
                            strategies to ensure sustainable growth.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/services/Video-Optimization-For-SEO-5.png"
                            alt="Video SEO Growth"
                            width={500}
                            height={400}
                            className="w-full max-w-md object-contain"
                        />
                    </div>
                </div>

            </section>

            {/* WHO WE WORK WITH SECTION */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center ">
                            <Image
                                src="/images/services/Video-Optimization-For-SEO-3.png"
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
                                As a versatile Video SEO & Optimization company in Chennai, we
                                support:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "YouTube creators",
                                    "Influencers and educators",
                                    "E-commerce brands",
                                    "Corporate businesses",
                                    "Digital marketing agencies",
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
                        Partner with the Best Video SEO & Optimization Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If you are searching for a reliable Video SEO & Optimization company
                        in Chennai, Syscorp is your strategic growth partner. Help your videos
                        get discovered, watched, and remembered.
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
