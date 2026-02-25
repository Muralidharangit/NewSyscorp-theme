import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";
import ClientSatisfactionAccordion from "@/components/Services/ClientSatisfactionAccordion";

import {
    Cog,
    FileText,
    PenTool,
    Link,
    MapPin,
    Check,
    Zap,
    LineChart
} from "lucide-react";

export const metadata = {
    title: "Website SEO Audit Company in Chennai | Professional SEO Audit Services",
    description:
        "Syscorp is a trusted Website SEO Audit company in Chennai providing technical SEO audit, on-page SEO audit, backlink audit, content audit, and local SEO audit to improve Google rankings.",
};

export default function SEOAuditPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Website SEO Audit
                    </h1>

                    <div className="flex justify-center">
                        <div className="inline-flex sm:bg-white/10 sm:backdrop-blur-md sm:px-6 sm:py-2 sm:rounded-full sm:border sm:border-white/20">
                            <Breadcrumbs />
                        </div>
                    </div>
                </div>

                {/* <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20" /> */}
            </section>


            {/* WHAT IS SEO AUDIT */}

            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            What is an SEO Audit?
                        </h2>
                        <p className="text-lg text-gray-600">
                            An SEO Audit is a complete evaluation a website to identify issues that affect its search engine visibility, performance, and rankings. As a professional Website SEO Audit company in Chennai, Syscorp analyzes technical structure, on-page elements, content quality, backlinks, and user experience to gaps that prevent websites from ranking on Google.Our SEO audit provides clear insights into what working, what is broken, and what needs improvement to achieve better organic traffic and higher keyword rankings.

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

                    <div className="flex justify-center md:justify-end">

                        <Image
                            src="/images/services/seo-audit.png"
                            alt="E-Commerce Website Development"
                            width={500}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>
            {/* TYPES OF SEO AUDIT */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Types of Website SEO Audit We Do
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            As a trusted <strong>Website SEO Audit company in Chennai</strong>,
                            Syscorp provides complete SEO auditing services to improve rankings,
                            performance, and visibility.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Technical SEO Audit",
                                icon: <Cog size={28} />,
                                points: [
                                    "Crawl errors & index issues",
                                    "Page speed & Core Web Vitals",
                                    "Mobile-friendliness & responsiveness",
                                    "HTTPS, redirects & canonical issues",
                                    "XML sitemap & robots.txt review",
                                ],
                            },
                            {
                                title: "On-Page SEO Audit",
                                icon: <FileText size={28} />,
                                points: [
                                    "Title tags & meta descriptions",
                                    "Header structure (H1–H6)",
                                    "URL structure & internal linking",
                                    "Keyword optimization",
                                    "Image alt tags & content formatting",
                                ],
                            },
                            {
                                title: "Content SEO Audit",
                                icon: <PenTool size={28} />,
                                points: [
                                    "Duplicate & thin content detection",
                                    "Keyword relevance & cannibalization",
                                    "Content quality & intent matching",
                                    "Blog and landing page optimization",
                                ],
                            },
                            {
                                title: "Off-Page & Backlink Audit",
                                icon: <Link size={28} />,
                                points: [
                                    "Toxic and spam backlink analysis",
                                    "Domain authority review",
                                    "Anchor text optimization",
                                    "Competitor backlink comparison",
                                ],
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#011146] text-white shadow-md">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#011146] transition">
                                        {item.title}
                                    </h3>
                                </div>

                                <ul className="space-y-3 text-gray-700 text-lg">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="mt-1" size={18} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Local SEO */}
                    <div className="mt-10 group bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#011146] text-white shadow-md">
                                <MapPin size={28} />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#011146] transition">
                                Local SEO Audit (For Chennai & India-based businesses)
                            </h3>
                        </div>

                        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
                            {[
                                "Google Business Profile optimization",
                                "NAP consistency",
                                "Local keyword visibility",
                                "Local citation analysis",
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="mt-1" size={18} />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>


            {/* IMPORTANCE */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Importance of an SEO Audit
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        An SEO Audit is essential for identifying hidden issues impacting
                        website rankings and traffic. As a trusted{" "}
                        <strong>Website SEO Audit company in Chennai</strong>, Syscorp gives
                        businesses clarity and control over their SEO performance.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                        Why SEO Audit Matters
                    </h3>

                    <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
                        <li>✔ Fixes ranking and indexing issues</li>
                        <li>✔ Improves organic traffic and conversions</li>
                        <li>✔ Prevents Google penalties</li>
                        <li>✔ Enhances user experience</li>
                        <li>✔ Prepares websites for Google core updates</li>
                        <li>✔ Builds a strong SEO foundation</li>
                    </ul>

                    <p className="text-gray-700 text-lg mt-6 leading-relaxed">
                        Without a proper audit, SEO efforts become guesswork. That’s why
                        choosing an experienced{" "}
                        <strong>Website SEO Audit company in Chennai</strong> is critical.
                    </p>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            How We Perform an SEO Audit for Our Clients
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            At Syscorp, our SEO audit process is structured, transparent, and
                            designed to deliver clear improvements in ranking, performance, and
                            visibility.
                        </p>
                    </div>

                    {/* Timeline Layout */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="hidden md:block absolute left-6 top-0 h-full w-[2px] bg-gray-200"></div>

                        <div className="space-y-10">
                            {[
                                {
                                    step: "01",
                                    title: "Website Crawl & Technical Review",
                                    desc: "We scan the entire website to identify technical errors affecting crawling, indexing, speed, and performance.",
                                },
                                {
                                    step: "02",
                                    title: "On-Page & Content Analysis",
                                    desc: "Our team reviews keyword usage, metadata, page structure, internal links, and content relevance for ranking improvement.",
                                },
                                {
                                    step: "03",
                                    title: "Backlink & Authority Analysis",
                                    desc: "We analyze backlink quality, spam risks, and domain authority issues that affect trust and Google rankings.",
                                },
                                {
                                    step: "04",
                                    title: "Competitor & Keyword Gap Analysis",
                                    desc: "We identify missed keywords, competitor ranking opportunities, and content gaps to build a strong SEO roadmap.",
                                },
                                {
                                    step: "05",
                                    title: "Audit Report & Action Plan",
                                    desc: "Clients receive a detailed report with issues, priority fixes, recommendations, and a step-by-step SEO improvement roadmap.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col md:flex-row gap-6 md:gap-10"
                                >
                                    {/* Step Number */}
                                    <div className="flex items-start">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#011146] text-white font-bold text-lg shadow-md">
                                            {item.step}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 w-full group">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#011146] transition">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {item.desc}
                                        </p>

                                        {/* Highlight Line */}
                                        <div className="mt-6 h-[3px] w-16 bg-yellow-400 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* TOOLS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            SEO Audit Tools We Use for Our Clients
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: <Zap size={28} />,
                                title: "Technical & Performance Tools",
                                tools: [
                                    "Google Search Console",
                                    "Google Analytics (GA4)",
                                    "PageSpeed Insights",
                                    "GTmetrix",
                                ],
                            },
                            {
                                icon: <LineChart size={28} />,
                                title: "On-Page & Keyword Analysis Tools",
                                tools: ["SEMrush", "Ahrefs", "Screaming Frog SEO Spider"],
                            },
                            {
                                icon: <Link size={28} />,
                                title: "Backlink & Off-Page Tools",
                                tools: ["Ahrefs Backlink Checker", "SEMrush Backlink Audit"],
                            },
                            {
                                icon: <MapPin size={28} />,
                                title: "Local SEO Tools",
                                tools: ["Google Business Profile Insights", "Local citation analysis tools"],
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#011146] text-white shadow-md">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#011146] transition">
                                        {item.title}
                                    </h3>
                                </div>

                                <ul className="space-y-3 text-gray-700 text-lg">
                                    {item.tools.map((tool, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <Check size={18} />
                                            {tool}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CLIENT SATISFACTION */}

            <ClientSatisfactionAccordion />


        </>
    );
}
