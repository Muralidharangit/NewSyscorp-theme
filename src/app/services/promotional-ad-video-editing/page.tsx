import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Promotional & Ad Video Editing Company in Chennai | Syscorp",
    description:
        "Syscorp is a creative and performance-driven Promotional & Ad Video Editing company in Chennai helping brands create powerful marketing videos convert viewers into customers.",
};

export default function PromotionalAdVideoEditingPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Promotional & Ad Video Editing
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
                            Promotional & Ad Video Editing Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a creative and performance-driven Promotional & Ad Video
                            Editing company in Chennai helping brands create powerful marketing
                            videos convert viewers into customers. We transform raw footage
                            high-impact promotional and advertising videos designed to boost
                            engagement, sales, brand awareness. As a trusted Promotional & Ad
                            Video Editing company in Chennai, we focus storytelling, visual
                            appeal, and conversion-driven editing that delivers measurable
                            business results.
                        </p>

                        <div className="mt-8 flex gap-4 flex-wrap">
                            <button className="bg-[#00A3FF] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-600 transition">
                                Get Free Consultation
                            </button>

                            <button className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-800 hover:bg-gray-100 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/services/Promotional-1.png"
                            alt="Promotional & Ad Video Editing"
                            width={500}
                            height={400}
                            className="w-full max-w-md object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Choose Syscorp as Your Promotional & Ad Video Editing Company in
                            Chennai?
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Promotional videos are not just about visuals about strategy,
                            emotion, and persuasion. As an experienced Promotional & Ad Video
                            Editing company in Chennai, we understand how to craft ads that grab
                            within seconds.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/Promotional-3.png"
                                alt="Promotional Video Editing Company"
                                width={400}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Conversion-focused editing style",
                                "Strong hooks and clear call-to-actions",
                                "Professional transitions and motion graphics",
                                "Background music and sound design",
                                "Platform-specific ad formatting",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                That’s why businesses rely on Syscorp as their preferred
                                Promotional & Ad Video Editing company in Chennai.
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
                            Our Promotional & Ad Video Editing Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Product & Service Promotion Videos",
                                desc: "As a professional Promotional & Ad Video Editing company in Chennai, we edit:",
                                points: [
                                    "Product launch videos",
                                    "Service introduction videos",
                                    "Corporate brand promotions",
                                    "Real estate promotional videos",
                                ],
                            },
                            {
                                title: "Social Media Ad Video Editing",
                                desc: "Our Promotional & Ad Video Editing company in Chennai creates:",
                                points: [
                                    "Facebook & Instagram ad videos",
                                    "YouTube ad creatives",
                                    "LinkedIn promotional ads",
                                    "Short-form performance ads",
                                ],
                            },
                            {
                                title: "Creative Enhancements",
                                desc: "As a creative Promotional & Ad Video Editing company in Chennai, we provide:",
                                points: [
                                    "Motion graphics & animated text",
                                    "Logo animation & branding",
                                    "Professional color grading",
                                    "Audio enhancement & sound effects",
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

                                <p className="text-gray-600 text-lg mb-5 leading-relaxed">
                                    {service.desc}
                                </p>

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


            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Professional Ad Video Editing Matters
                        </h3>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Choosing right Promotional & Ad Video Editing company in Chennai
                            helps your business:
                        </p>

                        <div className="space-y-4">
                            {[
                                "Increase ad engagement",
                                "Improve conversion rates",
                                "Build strong brand identity",
                                "Stand out from competitors",
                                "Maximize return on ad spend",
                            ].map((step, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a5cdd] to-[#00a3ff] text-white text-sm font-bold shadow">
                                        {index + 1}
                                    </span>

                                    <p className="text-sm md:text-base font-medium text-gray-800 m-0">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-base text-gray-700 mt-8 leading-relaxed">
                            At Syscorp, we edit every promotional video with a clear marketing
                            objective in mind.
                        </p>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/services/Promotional-4.png"
                            alt="Ad Video Editing Growth"
                            width={500}
                            height={400}
                            className="w-full max-w-md object-contain"
                        />
                    </div>
                </div>
            </section>


            {/* WHO WE WORK WITH SECTION */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    {/* LEFT IMAGE */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/services/Promotional-2.png"
                            alt="Who We Work With"
                            width={500}
                            height={400}
                            className="w-full max-w-md object-contain"
                        />
                    </div>

                    {/* RIGHT CARD */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Who We Work With
                        </h3>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            As a reliable Promotional & Ad Video Editing company in Chennai,
                            work with:
                        </p>

                        <div className="space-y-4">
                            {[
                                "Startups & small businesses",
                                "E-commerce brands",
                                "Real estate companies",
                                "Corporate organizations",
                                "Digital marketing agencies",
                            ].map((step, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a5cdd] to-[#00a3ff] text-white text-sm font-bold shadow">
                                        {index + 1}
                                    </span>

                                    <p className="text-sm md:text-base font-medium text-gray-800 m-0">
                                        {step}
                                    </p>
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
                        Partner with the Best Promotional & Ad Video Editing Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If you searching for a creative and result-oriented Promotional & Ad
                        Video Editing company in Chennai, Syscorp is your ideal partner. We
                        create ad videos that attract attention & drive action.
                    </p>

                    <a
                        href="/contact"
                        className="bg-white text-[#00a3ff] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 hover:scale-105 transition duration-300 inline-block"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    );
}
