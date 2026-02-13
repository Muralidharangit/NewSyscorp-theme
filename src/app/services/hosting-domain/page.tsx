import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";

export const metadata = {
    title: "Hosting & Domain Setup Company in Chennai | Secure Web Hosting",
    description:
        "Trusted Hosting & Domain Setup Company in Chennai offering secure, fast, and scalable hosting solutions with expert domain management.",
};

export default function HostingDomainSetup() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Hosting & Domain Setup
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
                            Hosting & Domain Setup Company in Chennai
                        </h2>
                        <p className="text-lg text-gray-600">
                            Looking for a reliable Hosting & Domain Setup Company in Chennai to get your website online quickly and securely? We provide end-to-end hosting and domain solutions that ensure your website is fast, secure, and always accessible. As a trusted Hosting & Domain Setup Company in Chennai, we help businesses choose the right domain, configure high-performance hosting, and manage everything from setup to ongoing support.
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <Image
                            src="/images/services/domain-hosting.png"
                            alt="Hosting & Domain Setup"
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
                            src="/images/services/custom-web.png"
                            alt="Custom Website Design Company in Chennai"
                            width={500}
                            height={400}
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Why Choose Our Hosting & Domain Setup Company in Chennai?
                        </h2>

                        <p className="text-gray-600 max-w-xl mb-8">
                            The right hosting and domain setup form the foundation of a successful website. We make the process simple, secure, and hassle-free.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Domain name registration & management",
                                "Reliable shared, VPS & cloud hosting",
                                "Fast loading & high uptime assurance",
                                "Secure SSL certificate installation",
                                "Email & DNS configuration",
                                "Scalable hosting solutions",
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
                        Our Hosting & Domain Setup Services
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Domain Registration & Configuration",
                                desc: "We help you select and register the perfect domain name aligned with your brand and business goals.",
                                icon: "🌐",
                            },
                            {
                                title: "Web Hosting Setup",
                                desc: "Optimized hosting environments focused on speed, security, and performance.",
                                icon: "⚙️",
                            },
                            {
                                title: "SSL & Security Setup",
                                desc: "SSL certificates and security best practices to protect your website and user data.",
                                icon: "🔐",
                            },
                            {
                                title: "Email Hosting & Configuration",
                                desc: "Professional email setup with secure access and spam protection.",
                                icon: "📧",
                            },
                            {
                                title: "Website Migration & Setup",
                                desc: "Seamless website migration to new hosting environments without downtime.",
                                icon: "🚀",
                            },
                            {
                                title: "Ongoing Hosting Support",
                                desc: "Continuous monitoring, updates, and technical support.",
                                icon: "🛠️",
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

            {/* HOSTING TYPES */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Hosting Solutions We Offer
                        </h2>

                        {[
                            "Shared Hosting",
                            "VPS Hosting",
                            "Cloud Hosting",
                            "Dedicated Server Hosting",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg bg-white mb-3"
                            >
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                    {i + 1}
                                </span>
                                <p className="text-sm font-medium text-gray-800">{item}</p>
                            </div>
                        ))}

                        <p className="text-base text-gray-700 mt-6">
                            Our Hosting & Domain Setup Company in Chennai recommends the best hosting option based on your website needs.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/images/services/Custom-Website.webp"
                            alt="Custom Website Design"
                            width={480}
                            height={420}
                            className="object-contain"
                            priority={false}
                        />
                    </div>
                </div>
            </section>

            {/* WHO + PROCESS */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Who We Serve</h2>
                        {[
                            "Business & Corporate Websites",
                            "E-Commerce Stores",
                            "Startups & Entrepreneurs",
                            "WordPress & CMS Websites",
                            "Web Applications",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 border rounded-lg bg-white mb-3">
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                    {i + 1}
                                </span>
                                <p className="text-sm font-medium text-gray-800">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Hosting Setup Process</h2>
                        {[
                            "Requirement analysis & consultation",
                            "Domain selection & registration",
                            "Hosting setup & configuration",
                            "Security & email integration",
                            "Testing & go-live support",
                        ].map((step, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 border rounded-lg bg-white mb-3">
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                    {i + 1}
                                </span>
                                <p className="text-sm font-medium text-gray-800">{step}</p>
                            </div>
                        ))}
                        <p className="text-base text-gray-700 mt-6">
                            We ensure smooth and secure website launch every time.
                        </p>
                    </div>
                </div>
            </section>

            {/* TRUST */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Businesses Trust Our Hosting & Domain Setup Company in Chennai
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
                        {[
                            { title: "Experienced Hosting Specialists", icon: "👨‍💻" },
                            { title: "Secure & Reliable Infrastructure", icon: "🔒" },
                            { title: "Affordable Pricing Plans", icon: "💰" },
                            { title: "Quick Setup & Deployment", icon: "⚡" },
                            { title: "Dedicated Technical Support", icon: "🤝" },
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
                        Get Your Website Online with Confidence
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                        A strong hosting and domain foundation ensures your website performs its best. Partner with a reliable Hosting & Domain Setup Company in Chennai secure, scalable, and hassle-free hosting solutions
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
