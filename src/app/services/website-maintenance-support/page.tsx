import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";

export const metadata = {
    title: "Website Maintenance & Support Company in Chennai | Reliable Website Support",
    description:
        "Trusted Website Maintenance & Support Company in Chennai providing secure updates, performance monitoring, backups, and technical support to keep your website running smoothly.",
};

export default function WebsiteMaintenanceSupport() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Website Maintenance & Support
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
                            Website Maintenance & Support Company in Chennai
                        </h2>
                        <p className="text-lg text-gray-600">
                            Looking for a dependable Website Maintenance & Support Company in Chennai to keep your website secure, updated,running smoothly? We provide comprehensive website maintenance and support services ensure optimal performance, security, and reliability so you can focus on growing your business. As a trusted Website Maintenance & Support Company in Chennai, we take care of everything from regular updates to performance monitoring and technical support.
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <Image
                            src="/images/services/website-maintenance.jpg"
                            alt="Website Maintenance & Support"
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
                            src="/images/services/maintenance.png"
                            alt="Website Maintenance Support Company in Chennai"
                            width={500}
                            height={400}
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Why Choose Our Website Maintenance & Support Company in Chennai?
                        </h2>

                        <p className="text-gray-600 max-w-xl mb-8">
                            A well-maintained website improves user experience, protects your data, and supports consistent business
                            operations. Our approach keeps your website healthy and secure.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Regular website updates & content changes",
                                "Security monitoring & malware protection",
                                "Website speed & performance optimization",
                                "Backup management & quick recovery",
                                "Technical support & issue resolution",
                                "Ongoing monitoring & reporting",
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
                        Our Website Maintenance & Support Services
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Website Updates & Content Management",
                                desc: "We keep your website content, images, and features updated to reflect your latest business needs.",
                                icon: "📝",
                            },
                            {
                                title: "Security & Malware Protection",
                                desc: "As an experienced Website Maintenance & Support Company in Chennai, we implement strong security measures protect your website from threats.",
                                icon: "🛡️",
                            },
                            {
                                title: "Performance Monitoring & Optimization",
                                desc: "We monitor website speed, uptime, and functionality to ensure smooth performance at all times.",
                                icon: "⚡",
                            },
                            {
                                title: "Backup & Disaster Recovery",
                                desc: "Regular backups and fast restoration help protect your data and minimize downtime.",
                                icon: "💾",
                            },
                            {
                                title: "Technical Support & Troubleshooting",
                                desc: "Our support team resolves technical issues quickly to keep your website running without disruptions.",
                                icon: "🛠️",
                            },
                            {
                                title: "Ongoing Website Monitoring & Reports",
                                desc: "We provide continuous monitoring and reports to ensure your website stays stable and secure.",
                                icon: "📊",
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

            {/* WEBSITES WE MAINTAIN */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* LEFT CARD */}
                        <div className="">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Websites We Maintain & Support
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We provide complete maintenance support for websites of all types, ensuring
                                stability, performance, and security.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Business & Corporate Websites",
                                    "E-Commerce Websites",
                                    "Web Applications & Dashboards",
                                    "WordPress & CMS-Based Websites",
                                    "Custom-Built Websites",
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition"
                                    >
                                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a5cdd] to-[#00a3ff] text-white text-sm font-bold shadow">
                                            {i + 1}
                                        </span>
                                        <p className="text-sm md:text-base font-medium text-gray-800">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-base text-gray-700 mt-8 leading-relaxed">
                                Our Website Maintenance & Support Company in Chennai supports websites of all types and sizes.
                            </p>
                        </div>

                        {/* RIGHT CARD */}
                        <div className="">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Our Maintenance Process
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We follow a structured workflow to ensure your website stays updated,
                                secure, and running smoothly without downtime.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Website audit & assessment",
                                    "Maintenance plan selection",
                                    "Regular updates & monitoring",
                                    "Performance & security checks",
                                    "Ongoing support & reporting",
                                ].map((step, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-green-50 hover:border-green-200 transition"
                                    >
                                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a5cdd] to-[#00a3ff] text-white text-sm font-bold shadow">
                                            {i + 1}
                                        </span>
                                        <p className="text-sm md:text-base font-medium text-gray-800">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-base text-gray-700 mt-8 leading-relaxed">
                                We follow a transparent and structured maintenance workflow.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* PROCESS */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">


                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Why Businesses Trust Our Website Maintenance & Support Company in Chennai
                        </h2>

                        {[
                            "Experienced technical support team",
                            "Proactive maintenance approach",
                            "Quick response & issue resolution",
                            "Affordable maintenance packages",
                            "Reliable long-term support",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 p-3 border rounded-lg bg-white mb-3"
                            >
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                    ✓
                                </span>
                                <p className="text-sm font-medium text-gray-800">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/word-maintenance-services.webp"
                                alt="Website Maintenance Support"
                                width={480}
                                height={420}
                                className="object-contain"
                                priority={false}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Choose Us for Website Maintenance & Support in Chennai?
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
                        {[
                            { title: "Experienced Support Team", icon: "👨‍💻" },
                            { title: "Secure Website Monitoring", icon: "🔒" },
                            { title: "Affordable Support Plans", icon: "💰" },
                            { title: "Fast Issue Resolution", icon: "⚡" },
                            { title: "Reliable Long-Term Support", icon: "🤝" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 bg-white border rounded-2xl hover:shadow-xl transition"
                            >
                                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-blue-50 text-2xl">
                                    {item.icon}
                                </div>
                                <p className="font-semibold text-gray-800 text-sm">
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
                        Keep Your Website Running at Its Best
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                        A secure and well-maintained website is essential for business success. Partner with a reliable Website
                        Maintenance & Support Company in Chennai to ensure your website stays updated, secure, and high-performing.
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
