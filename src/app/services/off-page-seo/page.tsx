import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
    CheckCircle, LineChart,
    DollarSign,
    Wrench,
    PieChart,
    Link,
    PenTool,
    MapPin,
    Megaphone,
    ShieldCheck,
    Check
} from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Off-Page SEO Company in Chennai | Syscorp",
    description:
        "Syscorp is a trusted Off-Page SEO company in Chennai helping businesses improve domain authority, search engine rankings, and online credibility with ethical link building strategies.",
};

export default function OffPageSEOPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Off-Page SEO
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
                            Off-Page SEO Company in Chennai
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Syscorp is a trusted <strong>Off-Page SEO company in Chennai</strong>{" "}
                            helping businesses improve domain authority, search engine rankings,
                            and online credibility. Our Off-Page SEO services focus on building
                            high-quality backlinks, increasing brand trust, and improving
                            website visibility across the web. As a professional{" "}
                            <strong>Off-Page SEO company in Chennai</strong>, we follow ethical,
                            Google-approved strategies to deliver long-term SEO growth.
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
                            src="/images/services/off-page.png"
                            alt="On Page SEO Service"
                            width={500}
                            height={400}
                            className="w-full max-w-md object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-1o">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Why Choose Syscorp as Your Off-Page SEO Company in Chennai?
                        </h2>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Choosing the right Off-Page SEO company in Chennai is essential for
                            building website authority. At Syscorp, we focus on quality,
                            relevance, and sustainability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT SIDE - IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/off-page.png"
                                alt="On Page SEO Service"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-cover"
                            />
                        </div>

                        {/* RIGHT SIDE - UL + PARAGRAPH */}
                        <div>
                            <ul className="grid gap-6">
                                {[
                                    "White-hat link building strategies",
                                    "High-authority and niche-relevant backlinks",
                                    "Brand reputation management",
                                    "Competitor backlink analysis",
                                    "Google-safe SEO practices",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />

                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-lg text-gray-700 mt-8 leading-relaxed">
                                This makes Syscorp a reliable{" "}
                                <strong>Off-Page SEO company in Chennai</strong> for businesses of all sizes.
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
                            Our Off-Page SEO Services Include
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Our Off-Page SEO services are designed to build trust, authority, and
                            long-term search engine rankings through ethical practices.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "High-Quality Link Building",
                                icon: <Link size={24} strokeWidth={1.5} />,
                                desc: "As an experienced Off-Page SEO company in Chennai, we build:",
                                points: [
                                    "Authoritative backlinks",
                                    "Industry-relevant links",
                                    "Natural anchor text profiles",
                                ],
                            },
                            {
                                title: "Guest Posting & Content Outreach",
                                icon: <PenTool size={24} strokeWidth={1.5} />,
                                desc: "Our Off-Page SEO company in Chennai creates and places:",
                                points: [
                                    "High-quality guest articles",
                                    "Contextual backlinks",
                                    "Editorial mentions",
                                ],
                            },
                            {
                                title: "Local SEO & Citations",
                                icon: <MapPin size={24} strokeWidth={1.5} />,
                                desc: "We optimize local presence through:",
                                points: [
                                    "Business listings",
                                    "NAP consistency",
                                    "Chennai-focused local citations",
                                ],
                            },
                            {
                                title: "Brand Mentions & Online PR",
                                icon: <Megaphone size={24} strokeWidth={1.5} />,
                                desc: "As a professional Off-Page SEO company in Chennai, we help improve:",
                                points: [
                                    "Brand mentions",
                                    "Online visibility",
                                    "Trust signals",
                                ],
                            },
                            {
                                title: "Backlink Audit & Cleanup",
                                icon: <ShieldCheck size={24} strokeWidth={1.5} />,
                                desc: "We identify and remove:",
                                points: [
                                    "Toxic backlinks",
                                    "Spammy domains",
                                    "Penalty risks",
                                ],
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

                                <p className="text-lg text-gray-600 leading-relaxed mb-5">
                                    {item.desc}
                                </p>

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
                </div>
            </section>

            {/* IMPORTANCE + PROCESS SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* CENTER TITLE */}
                    <div className="text-center max-w-4xl mx-auto mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Importance & Process of Off-Page SEO
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Off-Page SEO plays a major role in how search engines measure trust and authority. As a skilled Off-Page SEO company in Chennai, Syscorp ensures website earns strong, reliable signals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* LEFT IMPORTANCE */}
                        <div className="">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Why Off-Page SEO Matters
                            </h3>

                            <ul className="space-y-4">
                                {[
                                    "Improves domain authority",
                                    "Boosts keyword rankings",
                                    "Increases organic traffic",
                                    "Builds brand credibility",
                                    "Protects websites from penalties",
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

                        {/* RIGHT PROCESS */}
                        <div className="">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Our Off-Page SEO Process
                            </h3>

                            <div className="space-y-5">
                                {[
                                    "Backlink profile analysis",
                                    "Competitor backlink research",
                                    "Link-building strategy planning",
                                    "Outreach and link acquisition",
                                    "Continuous monitoring & optimization",
                                    "Transparent reporting",
                                ].map((step, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="flex items-center justify-center flex-shrink-0">
                                            {index + 1}<span>.</span>
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
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Tools We Use for Off-Page SEO
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Syscorp uses industry-leading SEO tools to deliver accurate backlink
                            reports and Off-Page performance improvements.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Ahrefs", icon: <LineChart size={22} strokeWidth={1.5} /> },
                            { name: "SEMrush", icon: <DollarSign size={22} strokeWidth={1.5} /> },
                            { name: "Google Search Console", icon: <Wrench size={22} strokeWidth={1.5} /> },
                            { name: "Google Analytics (GA4)", icon: <PieChart size={22} strokeWidth={1.5} /> },
                            { name: "Link Monitoring Tools", icon: <Link size={22} strokeWidth={1.5} /> },
                        ].map((tool, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition flex items-center gap-4"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#011146] text-white shadow-md">
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
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Who Needs Off-Page SEO Services?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Our Off-Page SEO company in Chennai services are ideal for.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/Custom-Website.webp"
                                alt="Off Page SEO Audience"
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
                                "Local Chennai businesses",
                                "Competitive industries",
                                "Websites with low domain authority",
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Get Started with the Best Off-Page SEO Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If looking for reliable Off-Page SEO company in Chennai, Syscorp delivers ethical strategies that improve rankings, authority, and online trust.
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
