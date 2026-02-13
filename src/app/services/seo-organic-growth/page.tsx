import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";

export const metadata = {
    title: "SEO & Organic Growth Company in Chennai | SEO Services",
    description:
        "Syscorp is a trusted SEO & Organic Growth company in Chennai helping businesses build long-term visibility, sustainable traffic, consistent lead generation through ethical SEO strategies.",
};

export default function SEOOrganicGrowthPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        SEO & Organic Growth
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
                            SEO & Organic Growth Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a trusted SEO & Organic Growth company in Chennai helping
                            businesses build long-term visibility, sustainable traffic,
                            consistent lead generation through ethical SEO strategies. We focus
                            on organic growth that delivers real value . As a reliable SEO &
                            Organic Growth company in Chennai, we combine data-driven SEO,
                            content strategy, technical optimization to help your brand search
                            results organically.
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
                            src="/images/services/SEO-Organic-Growth-1.png"
                            alt="SEO & Organic Growth Service"
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
                            Why Choose Syscorp as Your SEO & Organic Growth Company in Chennai
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Organic growth requires expertise, patience, precision. As
                            experienced SEO & Organic Growth company in Chennai, Syscorp
                            follows proven SEO practices aligned Google’s latest algorithms.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/SEO-Organic-Growth-2.png"
                                alt="SEO & Organic Growth Company"
                                width={400}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "White-hat SEO techniques",
                                "Keyword-focused growth strategy",
                                "Technical & content SEO expertise",
                                "Continuous performance optimization",
                                "Transparent reporting & insights",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <i className="fas fa-check-circle text-[#00A3FF] text-xl"></i>
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                This makes Syscorp dependable SEO & Organic Growth company in
                                Chennai for long-term success.
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
                            Our SEO & Organic Growth Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Keyword Research & Strategy",
                                desc: "As a professional SEO & Organic Growth company in Chennai, we perform:",
                                points: [
                                    "In-depth keyword research",
                                    "Search intent analysis",
                                    "Competitor keyword mapping",
                                    "SEO roadmap planning",
                                ],
                            },
                            {
                                title: "On-Page SEO Optimization",
                                desc: "Our SEO & Organic Growth company in Chennai optimizes:",
                                points: [
                                    "Meta titles & descriptions",
                                    "Header tags & internal linking",
                                    "Content structure & readability",
                                    "Image and page-level SEO",
                                ],
                            },
                            {
                                title: "Technical SEO",
                                desc: "As a leading SEO & Organic Growth company in Chennai, we handle:",
                                points: [
                                    "Website speed optimization",
                                    "Mobile & Core Web Vitals improvements",
                                    "Crawlability & indexation fixes",
                                    "Schema markup & URL structure",
                                ],
                            },
                            {
                                title: "Off-Page SEO & Link Building",
                                desc: "Our SEO & Organic Growth company in Chennai builds:",
                                points: [
                                    "High-quality backlinks",
                                    "Authority citations",
                                    "Brand mentions & outreach links",
                                ],
                            },
                            {
                                title: "Performance Tracking & Reporting",
                                desc: "Every SEO & Organic Growth company in Chennai must measure results, provide:",
                                points: [
                                    "Keyword ranking reports",
                                    "Traffic & conversion analysis",
                                    "Growth insights & action plans",
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

            {/* WHY SEO MATTERS */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT CARD */}
                        <div className="">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why SEO & Organic Growth Matters
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Choosing reliable SEO & Organic Growth company in Chennai helps
                                business:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Attract high-intent organic traffic",
                                    "Reduce dependency on paid ads",
                                    "Build brand trust & authority",
                                    "Achieve long-term ROI",
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
                                Syscorp ensures growth is steady, scalable, and sustainable.
                            </p>
                        </div>

                        {/* RIGHT IMAGE CARD */}
                        <div className="flex justify-center">
                            {/* <div className=""> */}
                            <Image
                                src="/images/services/seo-main.png"
                                alt="SEO & Organic Growth Company"
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
                                src="/images/services/seo-main.png"
                                alt="SEO & Organic Growth Company"
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
                                As a versatile SEO & Organic Growth company in Chennai, Syscorp
                                works with:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Local businesses",
                                    "E-commerce websites",
                                    "Corporate brands",
                                    "Startups & SaaS companies",
                                    "Service-based industries",
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
                        Work with the Best SEO & Organic Growth Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If you’re looking results driven SEO & Organic Growth company in
                        Chennai, Syscorp is your ideal SEO partner. We don’t chase shortcuts
                        we build growth that lasts.
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
