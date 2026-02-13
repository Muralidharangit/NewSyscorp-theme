import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";

export const metadata = {
    title: "Web Applications & Dashboards Company in Chennai",
    description:
        "Trusted Web Applications & Dashboards Company in Chennai delivering scalable, secure and data-driven digital solutions for modern businesses.",
};

export default function WebApplicationsDashboards() {
    return (
        <>
            {/* HERO SECTION */}

            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Web Applications & Dashboards
                    </h1>

                    <div className="flex justify-center">
                        <div className="inline-flex sm:bg-white/10 sm:backdrop-blur-md sm:px-6 sm:py-2 sm:rounded-full sm:border sm:border-white/20">
                            <Breadcrumbs />
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20" />
            </section>

            {/* INTRO */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Web Applications & Dashboards Company in Chennai
                        </h2>
                        <p className="text-lg text-gray-600">
                            Looking for a reliable Web Applications & Dashboards Company in Chennai to build powerful, scalable & user-friendly digital solutions? We specialize in developing custom web applications and interactive dashboards that streamline operations, visualize data, and drive smarter business decisions. As a trusted Web Applications & Dashboards Company in Chennai, we deliver secure, high-performance solutions  your business processes and growth goals.
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-end">

                        <Image
                            src="/images/services/webapplication.png"
                            alt="E-Commerce Website Development"
                            width={500}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="bg-gray-50 py-14">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center">

                        <Image
                            src="/images/services/ecommorce-e-commerce.png"
                            alt="E-Commerce Solutions Company in Chennai"
                            width={500}
                            height={400}
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Why Choose Our Web Applications & Dashboards Company in Chennai?

                        </h2>

                        <p className="text-gray-600 max-w-xl mb-8">
                            Modern businesses need more than websites they need intelligent applications. We design & develop solutions that improve efficiency, control, and insights. </p>

                        <div className="space-y-4">
                            {[
                                "Custom web application development",
                                "Interactive and data-driven dashboards",
                                "Responsive UI / UX across all devices",
                                "Secure and scalable architecture",
                                "Role-based access and controls",
                                "Performance-optimized applications",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#00A3FF] text-white text-xs font-semibold">
                                        ✓
                                    </span>
                                    <p className="text-sm font-medium text-gray-800">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* SERVICES */}

            <section className="py-14 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our Web Applications & Dashboards Services
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Custom Web Application Development",
                                desc: "We build custom web applications designed to automate workflows and support complex business operations.",
                                icon: "🧩",
                            },
                            {
                                title: "Business Dashboards & Data Visualization",
                                desc: "As an experienced Web Applications & Dashboards Company in Chennai, we create intuitive dashboards that present real-time data and actionable insights.",
                                icon: "📊",
                            },
                            {
                                title: "Admin Panels & Management Systems",
                                desc: "User-friendly admin panels for managing users, content, reports, and system operations.",
                                icon: "🗂️",
                            },
                            {
                                title: "API Integration & Third-Party Services",
                                desc: "Seamless integration with payment gateways, CRMs, ERPs, and third-party tools.",
                                icon: "🔗",
                            },
                            {
                                title: "Scalable & Secure Architecture",
                                desc: "We ensure high security, data protection, and scalability as your business grows.",
                                icon: "🔐",
                            },
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="group border-l-4 border-[#1a5cdd] bg-white p-6 rounded-xl hover:shadow-lg transition"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">{service.icon}</span>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1 group-hover:text-[#1a5cdd] transition">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{service.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* INDUSTRIES + PROCESS */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                    {/* INDUSTRIES */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Industries We Serve
                        </h2>

                        {[
                            "SaaS & Technology Companies",
                            "Corporate & Enterprise Businesses",
                            "E-Commerce & Retail",
                            "Healthcare & Education",
                            "Logistics & Service-Based Companies",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg bg-white mb-3 hover:shadow-sm transition"
                            >
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                    {i + 1}
                                </span>
                                <p className="text-sm font-medium text-gray-800">
                                    {item}
                                </p>
                            </div>
                        ))}

                        <p className="text-base text-gray-700 mt-6 leading-relaxed">
                            Our <strong>Web Applications & Dashboards Company in Chennai</strong>
                            delivers scalable digital solutions across diverse industries.
                        </p>
                    </div>

                    {/* PROCESS */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Our Web Application Development Process
                        </h2>

                        {[
                            "Requirement analysis & system planning",
                            "Architecture & database design",
                            "UI / UX design & prototyping",
                            "Application development & integration",
                            "Testing, deployment & support",
                        ].map((step, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg bg-white mb-3 hover:shadow-sm transition"
                            >
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                    {i + 1}
                                </span>
                                <p className="text-sm font-medium text-gray-800">
                                    {step}
                                </p>
                            </div>
                        ))}

                        <p className="text-base text-gray-700 mt-6 leading-relaxed">
                            We follow a <strong>structured, transparent, and agile development approach</strong>
                            to ensure quality, security, and on-time delivery.
                        </p>
                    </div>

                </div>
            </section>


            {/* TRUST */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Businesses Trust Our Web Applications & Dashboards Company in Chennai
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-14">
                        We design and develop secure, scalable, and business-focused web applications
                        that empower organizations with better control, efficiency, and insights.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            {
                                title: "Experienced Web Application Developers",
                                icon: "👨‍💻",
                            },
                            {
                                title: "Business-Focused Development Strategy",
                                icon: "🎯",
                            },
                            {
                                title: "Secure & Scalable Solutions",
                                icon: "🔐",
                            },
                            {
                                title: "On-Time Project Delivery",
                                icon: "⏱️",
                            },
                            {
                                title: "Dedicated Post-Launch Support",
                                icon: "🤝",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition duration-300"
                            >
                                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-blue-50 text-2xl group-hover:scale-110 transition">
                                    {item.icon}
                                </div>
                                <p className="font-semibold text-gray-800 text-sm leading-snug">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="bg-[#00a3ff] py-16 text-white text-center">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Build Smarter Digital Solutions
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                        Transform your business operations with powerful web applications and intelligent dashboards. Partner  reliable Web Applications & Dashboards Company in Chennai to build solutions that enhance productivity and decision-making.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-[#00a3ff] px-6 py-3 rounded-lg font-semibold"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    );
}
