import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Content & Creative Marketing Company in Chennai | Content Marketing Services",
    description:
        "Syscorp is a leading Content & Creative Marketing company in Chennai helping brands communicate clearly, creatively, and consistently across digital platforms.",
};

export default function ContentCreativeMarketingPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Content & Creative Marketing
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
                            Content & Creative Marketing Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a leading Content & Creative Marketing company in Chennai helping brands communicate clearly, creatively, and consistently across digital platforms. We content that connects with your audience and creative ideas leave a lasting impression. As a trusted Content & Creative Marketing company in Chennai, we combine strategy, storytelling,design to turn your brand message into meaningful engagement and measurable growth.
                        </p>

                        <div className="mt-8 flex gap-4 flex-wrap">
                            <button className="bg-[#00A3FF] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-600 transition">
                                Get Quotation
                            </button>

                            <button className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-800 hover:bg-gray-100 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/services/Creative-Marketing-1.png"
                            alt="Content Marketing Service"
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
                            Why Choose Syscorp as Your Content & Creative Marketing Company in Chennai
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Great marketing starts with great content. As experienced Content & Creative Marketing company in Chennai, Syscorp focuses creating content that is not only visually appealing but also purpose-driven and conversion-focused.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/Creative-Marketing-2.png"
                                alt="Content Creative Marketing"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Brand-focused content strategy",
                                "Creative visuals & storytelling",
                                "SEO-friendly and audience-first content",
                                "Consistent brand messaging",
                                "Performance-backed creative execution",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                That’s why businesses trust Syscorp as their Content & Creative Marketing company in Chennai.
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
                            Our Content & Creative Marketing Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Content Strategy & Planning",
                                desc: "As a professional Content & Creative Marketing company in Chennai, we create:",
                                points: [
                                    "Content calendars & brand messaging frameworks",
                                    "Audience & competitor research",
                                    "Platform-specific content planning",
                                ],
                            },
                            {
                                title: "Creative Design & Visual Content",
                                desc: "Our Content & Creative Marketing company in Chennai delivers:",
                                points: [
                                    "Social media creatives",
                                    "Ad banners & campaign visuals",
                                    "Brand graphics & infographics",
                                    "Video thumbnails & short-form creatives",
                                ],
                            },
                            {
                                title: "Website & Marketing Content",
                                desc: "As a reliable Content & Creative Marketing company in Chennai, we write:",
                                points: [
                                    "Website content & landing pages",
                                    "SEO blogs & articles",
                                    "Product & service descriptions",
                                    "Email & campaign copy",
                                ],
                            },
                            {
                                title: "Social Media Content Creation",
                                desc: "Our Content & Creative Marketing company in Chennai produces:",
                                points: [
                                    "Engaging posts & captions",
                                    "Reels, carousels & storytelling content",
                                    "Brand voice consistency across platforms",
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
                            Importance of Content & Creative Marketing
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Choosing the right Content & Creative Marketing company in Chennai helps your brand:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT SIDE CONTENT */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Importance of Content & Creative Marketing
                            </h3>

                            <ul className="space-y-4">
                                {[
                                    "Build trust and brand authority",
                                    "Increase audience engagement",
                                    "Improve conversion rates",
                                    "Strengthen brand identity",
                                    "Support SEO and performance marketing",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                        <span className="text-lg text-gray-700 font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                At Syscorp, we piece of content serves a purpose.
                            </p>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/Creative-Marketing-3.png"
                                alt="Content Marketing Importance"
                                width={400}
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
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Industries We Work With
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            As a flexible Content & Creative Marketing company in Chennai, Syscorp supports:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT SIDE IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/Creative-Marketing-4.png"
                                alt="Industries We Work With"
                                width={500}
                                height={400}
                                className="object-contain rounded-2xl"
                            />
                        </div>

                        {/* RIGHT SIDE PROCESS */}
                        <div>
                            <div className="space-y-5">
                                {[
                                    "Startups & small businesses",
                                    "Corporate brands",
                                    "E-commerce companies",
                                    "Real estate & construction",
                                    "Education & service industries",
                                ].map((step, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00A3FF] text-white font-bold text-lg shadow-md flex-shrink-0">
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

            {/* CTA SECTION */}
            <section className="py-20 bg-[#00A3FF] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl max-w-4xl mx-auto md:text-4xl font-bold mb-6">
                        Partner with the Best Content & Creative Marketing Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If you’re searching for a dependable Content & Creative Marketing company in Chennai, Syscorp is your creative growth partner. Transform ideas into impactful content drives real results.
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
