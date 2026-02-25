import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";
import {
    Users,
    Briefcase,
    Clock,
    Headset,
    CheckCircle,
    Zap
} from "lucide-react";
export const metadata = {
    title: "Custom Website Design Company in Chennai | Professional Web Design",
    description:
        "Trusted Custom Website Design Company in Chennai offering SEO-friendly, mobile-responsive, high-performance websites for business growth.",
};

export default function CustomWebsiteDesign() {
    return (
        <>
            {/* Page Header - Consistent Brand Style */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Custom Website Design</h1>

                    <div
                        className="inline-flex
        bg-transparent border-0 p-0 text-center
        sm:bg-white/10 sm:backdrop-blur-md sm:px-6 sm:py-2 sm:rounded-full sm:border sm:border-white/20"
                    >
                        <Breadcrumbs />
                    </div>
                </div>
                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            </section>
            {/* Page Header - Consistent Brand Style */}

            <section className="bg-white text-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-4xl font-bold mb-4">Custom Website Design Company in Chennai</h1>
                            <p className="text-lg text-gray-600">
                                Looking for a reliable Custom Website Design Company in Chennai to create a website that
                                truly represents your brand? We specialize in designing fully customized, visually
                                appealing, and high-performance websites that help businesses grow online. As a trusted
                                Custom Website Design Company in Chennai, we focus on building websites that are not
                                only attractive but also user-friendly, SEO-ready, and conversion-focused.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center md:justify-end">

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
                </div>
                {/* Why Choose */}
                <section className="bg-gray-50 py-14">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Image */}
                            <div className="hidden lg:flex justify-center">
                                <Image
                                    src="/images/services/custom-web.png"
                                    alt="Custom Website Design Company in Chennai"
                                    width={500}
                                    height={400}
                                    className="object-contain rounded-lg"
                                    priority
                                />
                            </div>

                            {/* Right Content */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6">
                                    Why Choose Our Custom Website Design Company in Chennai?
                                </h2>
                                <p className="text-gray-600 max-w-xl mb-8">
                                    We believe every business is unique, and your website should be too.
                                    That’s why we avoid templates and deliver fully custom designs aligned
                                    with your business goals.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    {[
                                        "100% Custom Website Design Solutions",
                                        "Modern & Professional UI/UX",
                                        "Mobile-Responsive Across All Devices",
                                        "SEO-Friendly Design Structure",
                                        "Fast-Loading & Secure Websites",
                                        "Scalable Design for Future Growth",
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3 bg-white p-4 border rounded-xl hover:shadow-md transition"
                                        >
                                            <CheckCircle className="w-6 h-6 text-[#00A3FF] mt-1" />
                                            <p className="text-sm font-medium text-gray-800">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <div className="py-14">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Custom Website Design Services</h2>

                        {/* Left – Services */}

                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Tailor-Made Website Design",
                                    desc: "We create unique website designs that reflect your brand identity and business values.",
                                    icon: "🎨",
                                },
                                {
                                    title: "UI/UX Design",
                                    desc: "As an experienced Custom Website Design Company in Chennai, we focus on navigation and engaging user journeys.",
                                    icon: "🧭",
                                },
                                {
                                    title: "Mobile-Responsive Design",
                                    desc: "Your website delivers a seamless experience across all devices.",
                                    icon: "📱",
                                },
                                {
                                    title: "SEO-Optimized Website Design",
                                    desc: "Our designs follow SEO best practices to help your website rank better on search engines.",
                                    icon: "🚀",
                                },
                                {
                                    title: "Website Speed & Performance Optimization",
                                    desc: "We optimize for fast loading and smooth performance.",
                                    icon: "⚡",
                                },
                            ].map((service, i) => (
                                <div
                                    key={i}
                                    className="group border-l-4 border-[#00A3FF] bg-white p-6 rounded-xl hover:shadow-lg transition"
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
                </div>

                {/* Industries + Process Combined Section */}
                <div className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Left Side — Industries */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>

                                <p className="text-gray-600 mb-6">
                                    We deliver custom website design solutions across diverse industries, helping
                                    businesses build strong and results-driven online presence.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Corporate & Business Websites",
                                        "E-Commerce Websites",
                                        "Startups & Small Businesses",
                                        "Educational Institutions",
                                        "Healthcare & Professional Services",
                                    ].map((industry, i) => (
                                        <div key={i} className="flex items-center gap-4 p-3 border rounded-lg bg-white">
                                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00A3FF] text-white text-sm font-semibold">
                                                {i + 1}
                                            </span>
                                            <p className="text-sm font-medium text-gray-800">{industry}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 mt-4">
                                    No matter the industry Custom Website Design Company in Chennai delivers
                                    results-driven solutions.
                                </p>
                            </div>

                            {/* Right Side — Process */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Our Website Design Process</h2>

                                <p className="text-gray-600 mb-6">
                                    Our structured workflow ensures transparency, quality, and on-time project delivery
                                    at every stage.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Understanding business requirements",
                                        "Planning & wireframing",
                                        "Custom UI/UX design",
                                        "Development & optimization",
                                        "Testing & website launch",
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 p-3 border rounded-lg bg-white">
                                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00A3FF] text-white text-sm font-semibold">
                                                {i + 1}
                                            </span>
                                            <p className="text-sm font-medium text-gray-800">{step}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 mt-4">
                                    We ensure transparency, quality & timely delivery at every stage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Why We're Trusted */}
                <div className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Why We’re a Trusted Custom Website Design Company in Chennai
                        </h2>

                        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
                            We combine creativity, technology, and business strategy to deliver powerful website
                            solutions that help brands grow online.
                        </p>

                        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Experienced Team",
                                    desc: "Skilled designers & developers with proven expertise.",
                                    icon: <Users />,
                                },
                                {
                                    title: "Business-Focused Strategy",
                                    desc: "Web designs aligned with your business objectives.",
                                    icon: <Briefcase />,
                                },
                                {
                                    title: "Affordable Pricing",
                                    desc: "High-quality solutions at cost-effective packages.",
                                    icon: <Zap />,
                                },
                                {
                                    title: "On-Time Delivery",
                                    desc: "We deliver projects within committed timelines.",
                                    icon: <Clock />,
                                },
                                {
                                    title: "Dedicated Support",
                                    desc: "Ongoing support even after website launch.",
                                    icon: <Headset />,
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="p-6 border rounded-lg hover:shadow-md transition flex flex-col items-center text-center"
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00a3ff] text-white text-lg mb-4">
                                        {item.icon}
                                    </div>

                                    <h3 className="font-semibold mb-2 text-gray-900">{item.title}</h3>

                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-[#00a3ff] py-16 text-white text-center">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Get Started with the Best Custom Website Design Company in Chennai
                        </h2>

                        <p className="text-blue-100 text-lg mb-8">
                            A professionally designed website transforms your online presence. Partner with a reliable
                            Custom Website Design Company in Chennai to build a website that attracts visitors, builds
                            credibility, and increases conversions. Contact us today to discuss your custom website
                            design requirements.
                        </p>

                        <div className="flex justify-center gap-4">
                            <a
                                href="/contact"
                                className="bg-white text-[#00a3ff] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                            >
                                Contact Us
                            </a>

                            <a
                                href="/portfolio"
                                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1a5cdd] transition"
                            >
                                View Our Work
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
