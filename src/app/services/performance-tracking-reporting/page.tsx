import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
    Check, CheckCircle, PieChart,
    LineChart,
    BarChart3,
    Search,
    Link
} from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Performance Tracking & Reporting Company in Chennai | Performance Tracking Services",
    description:
        "Syscorp trusted Performance Tracking & Reporting company in Chennai helping businesses measure, analyze, improve digital performance. Our Performance Tracking & Reporting services provide insights into website traffic, SEO growth, conversions, overall online success.",
};

export default function PerformanceTrackingReportingPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Performance Tracking & Reporting
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
                            Performance Tracking & Reporting Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp trusted Performance Tracking & Reporting company in Chennai helping businesses measure, analyze, improve digital performance. Our Performance Tracking & Reporting services provide insights into website traffic, SEO growth, conversions, overall online success. Professional Performance Tracking & Reporting company in Chennai, we turn data actionable strategies drive measurable results.
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
                            src="/images/services_images/link_building_06.png"
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
                            Why Choose Syscorp as Your Performance Tracking & Reporting Company in Chennai?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Choosing the right Performance Tracking & Reporting company in Chennai is essential for making informed marketing decisions. At Syscorp, we focus on clarity, accuracy, and growth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services_images/performance_001.png"
                                alt="On Page SEO Service"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Data-driven performance analysis",
                                "Clear and easy-to-understand reports",
                                "Real-time tracking and insights",
                                "Transparent KPIs and metrics",
                                "Actionable recommendations",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                This makes Syscorp a reliable Performance Tracking & Reporting company in Chennai for businesses all sizes.
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
                            Our Performance Tracking & Reporting Services Include
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Website Performance Tracking",
                                desc: "As a leading Performance Tracking & Reporting company in Chennai, we track:",
                                points: [
                                    "Website traffic and user behavior",
                                    "Page performance and engagement",
                                    "Bounce rates and session duration",
                                ],
                            },
                            {
                                title: "SEO Performance Monitoring",
                                desc: "Our Performance Tracking & Reporting company in Chennai monitors:",
                                points: [
                                    "Keyword rankings",
                                    "Organic traffic growth",
                                    "Search visibility improvements",
                                ],
                            },
                            {
                                title: "Conversion & Goal Tracking",
                                desc: "We analyze:",
                                points: [
                                    "Lead generation performance",
                                    "Form submissions and calls",
                                    "Sales and conversion paths",
                                ],
                            },
                            {
                                title: "Custom Reports & Dashboards",
                                desc: "As a professional Performance Tracking & Reporting company in Chennai, we deliver:",
                                points: [
                                    "Monthly performance reports",
                                    "Custom dashboards",
                                    "KPI-based insights",
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
                            Importance of Performance Tracking & Reporting
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Performance tracking is essential to understand working and what needs improvement. As experienced Performance Tracking & Reporting company in Chennai, Syscorp ensures businesses stay informed and competitive.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT SIDE CONTENT */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Why Performance Tracking & Reporting Matters:
                            </h3>

                            <ul className="space-y-4">
                                {[
                                    "Measures ROI and growth",
                                    "Identifies opportunities and issues",
                                    "Supports data-driven decisions",
                                    "Improves marketing effectiveness",
                                    "Ensures continuous optimization",
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
                                src="/images/services_images/keyword_research_013.png"
                                alt="Local SEO Importance"
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
                            Our Performance Tracking & Reporting Process
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            As a professional Performance Tracking & Reporting company in Chennai, we follow a structured approach:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT SIDE IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services_images/performance_003.png"
                                alt="Local SEO Process"
                                width={500}
                                height={400}
                                className="object-contain rounded-2xl"
                            />
                        </div>

                        {/* RIGHT SIDE PROCESS */}
                        <div>
                            <div className="space-y-5">
                                {[
                                    "KPI and goal setup",
                                    "Tool integration and configuration",
                                    "Data collection and monitoring",
                                    "Performance analysis",
                                    "Reporting and insights sharing",
                                    "Optimization recommendations",
                                ].map((step, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#00A3FF] text-white font-bold text-lg shadow-md flex-shrink-0">
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
                            Tools We Use for Performance Tracking & Reporting
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Syscorp uses advanced tools to deliver results as a Performance Tracking & Reporting company in Chennai:
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Google Analytics (GA4)", icon: <PieChart size={22} strokeWidth={1.5} /> },
                            { name: "Google Search Console", icon: <LineChart size={22} strokeWidth={1.5} /> },
                            { name: "Google Looker Studio", icon: <BarChart3 size={22} strokeWidth={1.5} /> },
                            { name: "SEMrush", icon: <Search size={22} strokeWidth={1.5} /> },
                            { name: "Ahrefs", icon: <Link size={22} strokeWidth={1.5} /> },
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
                            Who Needs Performance Tracking & Reporting Services?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Our Performance Tracking & Reporting company in Chennai services are ideal for:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services_images/performance_002.png"
                                alt="On Page SEO Service"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Businesses investing in SEO",
                                "Digital marketing campaigns",
                                "E-commerce websites",
                                "Service-based companies",
                                "Growing brands",
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
                        Get Started with the Best Performance Tracking & Reporting Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If looking for a dependable Performance Tracking & Reporting company in Chennai, Syscorp delivers transparent reporting and actionable insights that fuel business growth.
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
