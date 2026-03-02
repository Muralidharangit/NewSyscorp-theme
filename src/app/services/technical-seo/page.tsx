import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
    Check, CheckCircle, LineChart,
    PieChart,
    Gauge,
    Activity,
    Bug,
    Search
} from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Technical SEO Company in Chennai | Technical SEO Services",
    description:
        "Syscorp is a trusted Technical SEO company in Chennai offering website performance optimization, crawlability fixes, indexing improvements, schema markup, and Google-compliant technical SEO solutions.",
};

export default function TechnicalSEOPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Technical SEO
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
                            Technical SEO Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a professional Technical SEO company in Chennai helping businesses build strong, search-engine friendly websites. Our Technical SEO services focus improving website performance, crawlability, indexing & overall technical website can rank higher on Google. As a trusted Technical SEO company in Chennai, Syscorp ensures your website meets the latest Google technical standards.
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
                            src="/images/services/technical-seo.webp"
                            alt="On Page SEO Service"
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
                            Why Choose Syscorp as Your Technical SEO Company in Chennai?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Choosing the right Technical SEO company in Chennai is essential for long term SEO success. At Syscorp, we fix the technical issues that hold your website back.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services_images/keyword_research_15.png"
                                alt="On Page SEO Service"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Google-compliant technical optimization",
                                "Improved crawlability and indexing",
                                "Faster page load speed",
                                "Mobile-friendly and secure websites",
                                "Long-term SEO stability"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />

                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                This makes Syscorp a reliable Technical SEO company in Chennai for businesses across industries.
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
                            Our Technical SEO Services Include
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Website Crawl & Indexing Optimization",
                                desc: "As an expert Technical SEO company in Chennai, we fix:",
                                points: [
                                    "Crawl errors and broken links",
                                    "Indexing and coverage issues",
                                    "XML sitemap and robots.txt problems",
                                ],
                            },
                            {
                                title: "Page Speed & Performance Optimization",
                                desc: "Our Technical SEO company in Chennai improves:",
                                points: ["Core Web Vitals", "Page load speed", "Server response time"],
                            },
                            {
                                title: "Mobile & UX Optimization",
                                desc: "We ensure:",
                                points: [
                                    "Mobile-friendly design",
                                    "Responsive layouts",
                                    "Better user experience across devices",
                                ],
                            },
                            {
                                title: "Website Security & HTTPS",
                                desc: "As a reliable Technical SEO company in Chennai, we handle:",
                                points: [
                                    "HTTPS implementation",
                                    "Secure website configuration",
                                    "Trust and safety improvements",
                                ],
                            },
                            {
                                title: "Structured Data & Schema Markup",
                                desc: "We implement:",
                                points: [
                                    "Schema markup",
                                    "Rich result eligibility",
                                    "Improved search visibility",
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
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Importance of Technical SEO
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Technical SEO forms the foundation website ranking. As an experienced Technical SEO company in Chennai, Syscorp ensures your website performs efficiently for both users and search engines.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT SIDE CONTENT */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Why Technical SEO Matters:
                            </h3>

                            <ul className="space-y-4">
                                {[
                                    "Better Google crawling and indexing",
                                    "Improved rankings and visibility",
                                    "Faster website performance",
                                    "Enhanced user experience",
                                    "Strong SEO foundation"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />

                                        <span className="text-lg text-gray-700 font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services_images/keyword_research_018.png"
                                alt="Technical SEO Importance"
                                width={500}
                                height={400}
                                className="object-contain rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Our Technical SEO Process
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            As a professional Technical SEO company in Chennai, we follow a structured approach.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT SIDE IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services_images/keyword_research_017.png"
                                alt="Technical SEO Process"
                                width={500}
                                height={400}
                                className="object-contain rounded-2xl"
                            />
                        </div>

                        {/* RIGHT SIDE PROCESS */}
                        <div>
                            <div className="space-y-5">
                                {[
                                    "Complete technical SEO audit",
                                    "Website performance analysis",
                                    "Issue identification and prioritization",
                                    "Technical fixes and optimization",
                                    "Testing and validation",
                                    "Performance monitoring and reporting"
                                ].map((step, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-9 h-9  flex items-center justify-center rounded-full bg-[#00A3FF] text-white font-bold text-lg shadow-md flex-shrink-0">
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

            {/* TOOLS SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Tools We Use for Technical SEO
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Syscorp uses advanced tools to deliver measurable results as a Technical SEO company in Chennai:
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Google Search Console", icon: <LineChart size={22} strokeWidth={1.5} /> },
                            { name: "Google Analytics (GA4)", icon: <PieChart size={22} strokeWidth={1.5} /> },
                            { name: "PageSpeed Insights", icon: <Gauge size={22} strokeWidth={1.5} /> },
                            { name: "GTmetrix", icon: <Activity size={22} strokeWidth={1.5} /> },
                            { name: "Screaming Frog SEO Spider", icon: <Bug size={22} strokeWidth={1.5} /> },
                            { name: "SEMrush", icon: <Search size={22} strokeWidth={1.5} /> },
                        ].map((tool, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition flex items-center gap-4"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00A3FF]/10 text-[#00A3FF]">
                                    {tool.icon}
                                </div>

                                <p className="text-lg text-gray-800 font-semibold m-0">
                                    {tool.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO NEEDS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Who Needs Technical SEO Services?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Our Technical SEO company in Chennai services are ideal for.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/domain-hosting.png"
                                alt="On Page SEO Service"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Business websites",
                                "E-commerce platforms",
                                "High-traffic websites",
                                "Websites affected by Google updates",
                                "Websites with technical errors"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />

                                    <p className="text-lg text-gray-700 m-0">{item}</p>
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
                        Get Started with the Best Technical SEO Company in Chennai

                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If looking for a dependable Technical SEO company in Chennai, Syscorp delivers expert solutions that improve performance, rankings, and stability.

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
