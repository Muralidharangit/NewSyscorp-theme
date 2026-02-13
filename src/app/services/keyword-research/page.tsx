import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";

export const metadata = {
    title: "Keyword Research & Strategy Company in Chennai | Syscorp",
    description:
        "Syscorp is a trusted Keyword Research & Strategy company in Chennai helping businesses find high-value keywords that drive traffic, leads, and conversions.",
};

export default function KeywordResearchStrategy() {
    return (
        <>
            {/* Breadcrumb */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Keyword Research And Strategy
                    </h1>

                    <div className="flex justify-center">
                        <div className="inline-flex sm:bg-white/10 sm:backdrop-blur-md sm:px-6 sm:py-2 sm:rounded-full sm:border sm:border-white/20">
                            <Breadcrumbs />
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Keyword Research & Strategy Company in Chennai
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Syscorp is a trusted Keyword Research & Strategy company in Chennai
                            helping businesses identify high-value keywords that drive real
                            traffic, leads, and conversions. Our keyword research services are
                            designed to align search intent with business goals, ensuring
                            long-term SEO success. As a professional Keyword Research &
                            Strategy company in Chennai, we don’t just find keywords — we
                            build a complete strategy that helps your website rank higher and
                            attract the right audience.
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

                    <div className="flex justify-center">
                        <Image
                            src="/images/services/keyword.webp"
                            alt="Keyword Research Strategy"
                            width={500}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* SECTION TITLE */}
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Why Choose Syscorp as Your Keyword Research & Strategy Company in
                            Chennai?
                        </h2>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Choosing the right Keyword Research & Strategy company in Chennai
                            is critical for SEO growth. At Syscorp, we focus on accuracy,
                            relevance, and results.
                        </p>
                    </div>

                    {/* IMAGE + CONTENT GRID */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div>
                            <Image
                                src="/images/services/keyword.webp"
                                alt="Keyword Research Strategy"
                                width={600}
                                height={450}
                                className="w-full object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <ul className="gap-6">
                                {[
                                    "Data-driven keyword research",
                                    "Search intent–based strategy",
                                    "Competitor keyword analysis",
                                    "High-conversion keyword mapping",
                                    "Industry-specific keyword planning",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="p-5 flex items-start gap-3"
                                    >
                                        <i className="fas fa-check mt-1"></i>
                                        <span className="text-base font-semibold text-gray-900">{item}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICE INCLUDES */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            What Our Keyword Research & Strategy Service Includes
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Our keyword research service includes everything needed to build a
                            strong SEO foundation and content strategy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "In-Depth Keyword Research",
                                icon: "fa-key",
                                points: [
                                    "High-volume keywords",
                                    "Low-competition opportunities",
                                    "Long-tail keywords",
                                    "Commercial & transactional keywords",
                                ],
                            },
                            {
                                title: "Competitor Keyword Analysis",
                                icon: "fa-user-secret",
                                points: [
                                    "Competitor keyword gap analysis",
                                    "Identify ranking opportunities",
                                    "Keyword comparison reports",
                                    "Strategic keyword targeting",
                                ],
                            },
                            {
                                title: "Search Intent Mapping",
                                icon: "fa-layer-group",
                                points: [
                                    "Informational intent keywords",
                                    "Commercial intent keywords",
                                    "Transactional intent keywords",
                                    "Navigational intent keywords",
                                ],
                            },
                            {
                                title: "Keyword Mapping & SEO Planning",
                                icon: "fa-sitemap",
                                points: [
                                    "Service page keyword mapping",
                                    "Landing page keyword planning",
                                    "Blog content strategy",
                                    "Product page keyword planning",
                                ],
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#011146] text-white text-2xl shadow-md">
                                        <i className={`fas ${item.icon}`}></i>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#011146] transition">
                                        {item.title}
                                    </h3>
                                </div>

                                <ul className="space-y-3 text-gray-700 text-lg">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <i className="fas fa-check mt-1"></i>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMPORTANCE OF KEYWORD RESEARCH */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Importance of Keyword Research & Strategy
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Keyword research is the foundation of SEO success. As an
                            experienced{" "}
                            <strong>Keyword Research & Strategy company in Chennai</strong>,
                            Syscorp ensures your SEO efforts are built on strong data, real
                            search intent, and proven strategies that deliver long-term
                            growth.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Without expert keyword planning, SEO becomes guesswork. That’s why
                            businesses trust Syscorp as a reliable{" "}
                            <strong>Keyword Research & Strategy company in Chennai</strong>.
                        </p>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="bg-gray-50 border border-gray-200 shadow-md rounded-2xl p-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Why Keyword Strategy Matters
                        </h3>

                        <ul className="space-y-4 text-gray-700 text-lg">
                            {[
                                "Attracts the right audience",
                                "Improves Google rankings",
                                "Increases organic traffic",
                                "Boosts conversions and ROI",
                                "Supports content and SEO campaigns",
                            ].map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <i className="fas fa-check-circle text-yellow-500 mt-1"></i>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADING CENTER */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Our Keyword Research & Strategy Process
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            As a professional Keyword Research & Strategy company in Chennai, we follow a structured process:
                        </p>
                    </div>

                    {/* LEFT CONTENT + RIGHT IMAGE */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Understand business goals and target audience",
                                "Analyze industry and competitors",
                                "Research keyword volume, difficulty & intent",
                                "Shortlist high-performing keywords",
                                "Build a keyword strategy roadmap",
                                "Deliver a clear and actionable report",
                            ].map((step, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00A3FF] text-white font-bold text-lg shadow-md flex-shrink-0">
                                        {index + 1}
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {step}
                                    </p>
                                </div>

                            ))}
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/keyword.webp"
                                alt="Keyword Research Strategy"
                                width={500}
                                height={400}
                                className="object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>



            {/* TOOLS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Tools We Use for Keyword Research & Strategy
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Syscorp uses industry-leading tools combined expert analysis to deliver accurate results as a Keyword Research & Strategy company in Chennai.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            { name: "Google Keyword Planner", icon: "fa-brands fa-google" },
                            { name: "SEMrush", icon: "fa-chart-line" },
                            { name: "Ahrefs", icon: "fa-search" },
                            { name: "Google Search Console", icon: "fa-tools" },
                            { name: "Google Trends", icon: "fa-chart-area" },
                        ].map((tool, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#011146] text-white text-xl shadow-md">
                                    <i className={`fas ${tool.icon}`}></i>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900">{tool.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO NEEDS THIS SERVICE */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADING CENTER */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Who Needs a Keyword Research & Strategy Service?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Our keyword research services are ideal for businesses aiming to
                            improve SEO rankings and attract targeted traffic.
                        </p>
                    </div>

                    {/* LEFT CONTENT + RIGHT IMAGE */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "New websites launching SEO",
                                "Businesses not ranking on Google",
                                "E-commerce stores",
                                "Local Chennai-based businesses",
                                "Companies planning content or paid campaigns",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <i className="fas fa-check text-[#00A3FF] text-lg"></i>
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <img
                                src="/images/services/keyword-audience.png"
                                alt="Keyword Research Service"
                                className="w-full max-w-md object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>



            {/* CTA SECTION */}
            <section className="py-20 bg-[#00A3FF] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl  max-w-4xl mx-auto md:text-4xl font-bold mb-6">
                        Get Started with the Best Keyword Research & Strategy Company in
                        Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        Looking for a reliable Keyword Research & Strategy company in
                        Chennai to drive targeted traffic and measurable growth? Syscorp
                        delivers keyword strategies that rank, convert & scale.
                    </p>

                    <a
                        href="/contact"
                        className="bg-white text-[#00a3ff] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    );
}
