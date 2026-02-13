import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";

export const metadata = {
    title: "E-Commerce Solutions Company in Chennai | Scalable Online Stores",
    description:
        "Trusted E-Commerce Solutions Company in Chennai delivering secure, scalable, and high-performance online stores for business growth.",
};

export default function Ecommerce() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        E-Commerce Solutions
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
                            E-Commerce Solutions Company in Chennai
                        </h2>
                        <p className="text-lg text-gray-600">
                            Looking for a reliable E-Commerce Solutions Company in Chennai to build or scale your online store? We provide end-to-end e-commerce solutions that businesses sell online efficiently, securely, and profitably. As a trusted E-Commerce Solutions Company in Chennai, we design and develop high-performance online stores that deliver shopping experiences and drive revenue growth.
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-end">

                        <Image
                            src="/images/services/e-commerce-business.png"
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
                            Why Choose Our E-Commerce Solutions Company in Chennai?
                        </h2>

                        <p className="text-gray-600 max-w-xl mb-8">
                            Successful e-commerce requires more than just a website. We build complete e-commerce ecosystems focused usability, performance & conversions.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Custom e-commerce website design",
                                "Mobile-friendly & responsive stores",
                                "Secure payment gateway integration",
                                "SEO-optimized product & category pages",
                                "Fast loading & performance-optimized stores",
                                "Scalable solutions for business growth",
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
                        Our E-Commerce Solutions Services
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Custom E-Commerce Website Development",
                                desc: "We create made online stores aligned with your brand, products, and target audience.",
                                icon: "🛒",
                            },
                            {
                                title: "Responsive E-Commerce Design",
                                desc: "As an experienced E-Commerce Solutions Company in Chennai, we ensure smooth shopping experiences across all devices.",
                                icon: "📱",
                            },
                            {
                                title: "Shopping Cart & Checkout Optimization",
                                desc: "We design carts and streamlined checkout processes to reduce cart abandonment.",
                                icon: "⚡",
                            },
                            {
                                title: "Payment Gateway Integration",
                                desc: "Secure integration with popular payment gateways, wallets, and UPI options.",
                                icon: "💳",
                            },
                            {
                                title: "Product & Inventory Management",
                                desc: "Easy-to-manage product catalogs, inventory tracking, and order management systems.",
                                icon: "📦",
                            },
                            {
                                title: "SEO & Performance Optimization",
                                desc: "We optimize your e-commerce store for search engines, speed, and higher conversions.",
                                icon: "🚀",
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
            {/* E-Commerce Platforms We Work With */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            E-Commerce Platforms We Work With
                        </h2>

                        {[
                            "WooCommerce",
                            "Shopify",
                            "Magento",
                            "Custom E-Commerce Solutions",
                            "B2B & Wholesale Businesses",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg bg-white mb-3 hover:shadow-sm transition"
                            >
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                    {i + 1}
                                </span>
                                <p className="text-sm font-medium text-gray-800">{item}</p>
                            </div>
                        ))}

                        <p className="text-base text-gray-700 mt-6 leading-relaxed">
                            Our E-Commerce Solutions Company in Chennai recommends right platform based on your business needs.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/images/services/Managed-E-commerce.svg"
                            alt="E-Commerce Website Development"
                            width={500}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>


            {/* INDUSTRIES + PROCESS */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
                        {[
                            "Retail & Fashion",
                            "Electronics & Gadgets",
                            "FMCG & Consumer Products",
                            "Healthcare & Wellness",
                            "B2B & Wholesale Businesses",
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
                        <h2 className="text-3xl font-bold mb-6">Our E-Commerce Development Process</h2>
                        {[
                            "Business & product analysis",
                            "Platform selection & planning",
                            "UI / UX design for e-commerce",
                            "Development & integration",
                            "Testing, security & store launch",
                        ].map((step, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 border rounded-lg bg-white mb-3">
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                    {i + 1}
                                </span>
                                <p className="text-sm font-medium text-gray-800">{step}</p>
                            </div>
                        ))}
                        <p className="text-base text-gray-700 mt-6 leading-relaxed">
                            We ensure smooth project execution and quality at every stage.
                        </p>
                    </div>
                </div>
            </section>

            {/* TRUST */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Businesses Trust Our E-Commerce Solutions Company in Chennai
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-14">
                        We build high-performance e-commerce platforms that drive sales, scale effortlessly,
                        and deliver exceptional user experiences.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            {
                                title: "Experienced E-Commerce Developers",
                                icon: "🚀",
                            },
                            {
                                title: "Conversion-Focused Design approach",
                                icon: "📈",
                            },
                            {
                                title: "Secure & Scalable Architecture",
                                icon: "🔐",
                            },
                            {
                                title: "On-Time Delivery & Transparent Pricing",
                                icon: "⏱️",
                            },
                            {
                                title: "Dedicated Support & Maintenance",
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
                        Grow Your Online Business with E-Commerce Solutions
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                        A powerful e-commerce store can transform your business. Partner a reliable E-Commerce Solutions Company in Chennai to build an online store that attracts customers, builds trust, and increases sales.
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
