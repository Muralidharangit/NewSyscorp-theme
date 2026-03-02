import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";
import { Users, BarChart2, UserCheck, CreditCard, Clock, CheckCircle, Compass, Phone, Puzzle, Zap } from "lucide-react";

export const metadata = {
    title: "Responsive UI / UX Company in Chennai | Professional UI UX Design",
    description:
        "Leading Responsive UI / UX Company in Chennai delivering mobile-first, user-centric, conversion-focused UI/UX design solutions across all devices.",
};

export default function ResponsiveUIUX() {
    return (
        <>
            {/* Page Header - Consistent Brand Style */}

            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Responsive UI / UX Design
                    </h1>

                    {/* Breadcrumb wrapper */}
                    <div className="flex justify-center">
                        <div
                            className="
        inline-flex
        bg-transparent border-0 p-0 text-center
        sm:bg-white/10 sm:backdrop-blur-md sm:px-6 sm:py-2 sm:rounded-full sm:border sm:border-white/20"
                        >
                            <Breadcrumbs />
                        </div>
                    </div>
                </div>

                {/* Decorative blur */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20" />
            </section>

            {/* Intro Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Responsive UI / UX Company in Chennai</h2>
                            <p className="text-lg text-gray-600">
                                Looking for a professional Responsive UI / UX Company in Chennai that creates seamless
                                digital experiences across all devices? We design intuitive, visually appealing, and
                                user-centric interfaces that help businesses engage users and drive conversions. Our
                                team blends creativity with usability to deliver designs that work flawlessly on
                                desktops, tablets, and mobile devices.
                            </p>
                        </div>

                        <div className="relative w-full max-w-[500px] h-[350px]">
                            <Image
                                src="/images/services/ui-ux.jpg"
                                alt="Responsive UI UX Design Company in Chennai"
                                fill
                                priority
                                fetchPriority="high"
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 500px"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Choose */}
            <section className="bg-gray-50 py-14">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left – Image */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/Responsive-UI-UX-1.webp"
                                alt="Responsive UI UX Company in Chennai"
                                width={500}
                                height={400}
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 500px"
                            />
                        </div>

                        {/* Right – Content */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Why Choose Our Responsive UI / UX Company in Chennai?
                            </h2>

                            <p className="text-gray-600 max-w-xl mb-8">
                                User experience plays a critical role in digital success. Our responsive UI/UX solutions
                                ensure consistency, usability and performance across every screen size.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Mobile-first UI/UX design approach",
                                    "Fully responsive layouts for all devices",
                                    "Clean, modern & intuitive interfaces",
                                    "Conversion-focused design strategy",
                                    "SEO-friendly UI structure",
                                    "Fast-loading & performance-optimized designs",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-2">
                                        <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />

                                        <p className="text-sm font-medium text-gray-800 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-14 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Responsive UI / UX Design Services</h2>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {[
                            {
                                title: "User Interface (UI) Design",
                                desc: "We create visually engaging interfaces with consistent branding, typography, and color schemes.",
                                icon: "🎨",
                            },
                            {
                                title: "User Experience (UX) Design",
                                desc: "As an experienced Responsive UI / UX Company in Chennai, Design user journeys that are simple, logical, and goal-oriented.",
                                icon: "🧭",
                            },
                            {
                                title: "Mobile-First & Responsive Design",
                                desc: "We ensure your website or application adapts perfectly to every device and screen resolution.",
                                icon: "📱",
                            },
                            {
                                title: "Wireframing & Prototyping",
                                desc: "Interactive wireframes and prototypes help visualize functionality before development begins.",
                                icon: "🧩",
                            },
                            {
                                title: "UI / UX Optimization",
                                desc: "We analyze user behavior and continuously refine the interface for better engagement and conversions.",
                                icon: "⚡",
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
            {/* Industries + Process */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
                        <div className="space-y-4">
                            {[
                                "Corporate & Business Websites",
                                "E-Commerce Platforms",
                                "SaaS & Web Applications",
                                "Startups & Product-Based Companies",
                                "Educational & Healthcare Platforms",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 border rounded-lg bg-white">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                        {i + 1}
                                    </span>
                                    <p className="text-sm font-medium text-gray-800">{item}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 max-w-xl mb-6 mt-6">
                            No matter industry, our Responsive UI / UX Company in Chennai delivers tailored design
                            solutions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our UI / UX Design Process</h2>
                        <div className="space-y-4">
                            {[
                                "User Research & Requirement Analysis",
                                "Information Architecture Planning",
                                "Wireframing & Prototyping",
                                "Responsive UI / UX Design",
                                "Usability Testing & Optimization",
                            ].map((step, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 border rounded-lg bg-white">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a5cdd] text-white text-sm font-semibold">
                                        {i + 1}
                                    </span>
                                    <p className="text-sm font-medium text-gray-800">{step}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 max-w-xl mb-6 mt-6">
                            Our structured process ensures smooth user experiences and measurable results.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Why Businesses Trust Our Responsive UI / UX Company in Chennai
                    </h2>

                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        We combine design expertise, data-driven insights, and a user-first approach to deliver UI/UX
                        solutions that drive measurable business results.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            {
                                title: "Experienced Designers",
                                desc: "Skilled UI/UX designers with proven industry experience.",
                                icon: <Users className="w-6 h-6" />,
                            },
                            {
                                title: "Data-Driven Approach",
                                desc: "Design decisions backed by research and analytics.",
                                icon: <BarChart2 className="w-6 h-6" />,
                            },
                            {
                                title: "User-Centric Philosophy",
                                desc: "Every design focuses on user needs and behavior.",
                                icon: <UserCheck className="w-6 h-6" />,
                            },
                            {
                                title: "Affordable Pricing",
                                desc: "Cost-effective UI/UX solutions without compromise.",
                                icon: <CreditCard className="w-6 h-6" />,
                            },
                            {
                                title: "On-Time Delivery",
                                desc: "Reliable timelines with ongoing support.",
                                icon: <Clock className="w-6 h-6" />,
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group p-6 border rounded-xl bg-white hover:shadow-lg transition flex flex-col items-center text-center"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a5cdd]/10 text-[#1a5cdd] text-2xl mb-4">
                                    {item.icon}
                                </div>

                                <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-[#1a5cdd] transition">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#00a3ff] py-16 text-white text-center">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get Started with the Best Responsive UI / UX Company in Chennai
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                        Great design is about usability, engagement, and results. Partner with a trusted Responsive UI /
                        UX Company in Chennai to create digital experiences your users love.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-[#00a3ff] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Contact Us Today
                    </a>
                </div>
            </section>
        </>
    );
}
