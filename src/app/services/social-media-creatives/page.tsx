import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Social Media Creatives Company in Chennai | Syscorp",
    description:
        "Syscorp is a trusted Social Media Creatives company in Chennai helping businesses elevate brand presence with engaging, scroll-stopping social media designs.",
};

export default function SocialMediaCreativesPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Social Media Creatives
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
                            Social Media Creatives Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Are you looking for a professional Social Media Creatives company
                            in Chennai that elevate your brand presence online? Welcome to
                            Syscorp, where creativity meets strategy to deliver engaging,
                            scroll-stopping social media designs. Trusted Social Media
                            Creatives company in Chennai, Design visually compelling and
                            marketing-focused creatives help businesses attract attention,
                            increase engagement, drive conversions across major platforms.
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
                            src="/images/services/social-media-creatives-1.png"
                            alt="Social Media Creatives"
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
                            Why Choose Syscorp as Your Social Media Creatives Company in
                            Chennai?
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Choosing right Social Media Creatives company in Chennai can make
                            a huge difference in how your audience perceives your brand. At
                            Syscorp, we don’t just design posts Create visuals that
                            communicate your message clearly and effectively.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/social-media-creatives-2.png"
                                alt="Why Choose Social Media Creatives"
                                width={400}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">What makes different as a Social Media Creatives company in Chennai:</h3>
                            {[
                                "Eye-catching and modern design concepts",
                                "Brand-consistent visual identity",
                                "High-engagement layouts",
                                "Platform-specific optimization",
                                "Conversion-focused creatives",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                We ensure every creative aligns with your marketing objectives
                                and brand voice.
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
                            Our Social Media Creative Services
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            As a leading Social Media Creatives company in Chennai, we offer
                            complete design solutions for businesses of all sizes.
                        </p>
                    </div>



                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Instagram & Facebook Creatives",
                                desc: "Promotional posts, carousel designs, offer banners, product highlights, and festive creatives designed to increase reach and engagement.",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M7 8h10M7 12h6m-6 4h10M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "LinkedIn Business Creatives",
                                desc: "Professional and corporate creatives that build authority and strengthen your brand presence.",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4V9h4v2a4 4 0 014-3z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2 9h4v12H2z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 4a2 2 0 110 4 2 2 0 010-4z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Paid Ad Creatives",
                                desc: "High-converting ad creatives optimized for better click-through rates and improved ROI.",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 11V7a4 4 0 118 0v4m-8 0h8m-8 0H7a4 4 0 000 8h4m8-8v8a4 4 0 01-8 0v-4"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Stories & Reel Designs",
                                desc: "Engaging vertical creatives tailored for Stories and Reels to capture instant attention.",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Custom Branding Templates",
                                desc: "Reusable and consistent design templates that maintain brand identity across all posts.",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                ),
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* ICON CENTER */}
                                <div className="flex justify-center mb-5">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-lg leading-relaxed text-center">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>


                    <p className="text-lg text-gray-700 mt-12 leading-relaxed text-center max-w-4xl mx-auto">
                        If searching for a reliable Social Media Creatives company in
                        Chennai, Syscorp delivers impactful and performance-driven designs.
                    </p>
                </div>
            </section>

            {/* IMPORTANCE SECTION */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT CONTENT */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                How Our Social Media Creatives Help Your Business Grow
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                As an experienced Social Media Creatives company in Chennai, we
                                focus on results, not just aesthetics. Our designs help you:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Increase engagement rates",
                                    "Strengthen brand recognition",
                                    "Improve audience interaction",
                                    "Generate quality leads",
                                    "Enhance overall social media performance",
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
                                We combine creativity, market research, and audience psychology
                                to create designs that truly perform.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/social-media-creatives-3.png"
                                alt="Social Media Creatives Growth"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES SECTION */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/social-media-creatives-4.png"
                                alt="Industries We Serve"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Industries We Serve
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Being a versatile Social Media Creatives company in Chennai, we
                                work with:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Real Estate",
                                    "Healthcare",
                                    "Education",
                                    "E-commerce",
                                    "IT & Corporate Companies",
                                    "Startups & Entrepreneurs",
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
                                Your industry, our team creates customized social media creatives
                                that reflect your brand identity and goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-[#00A3FF] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl max-w-5xl mx-auto md:text-4xl font-bold mb-6">
                        Partner with the Best Social Media Creatives Company in Chennai
                    </h2>

                    <p className="text-lg max-w-4xl mx-auto leading-relaxed mb-10">
                        If ready to transform your social media presence, connect with
                        Syscorp trusted Social Media Creatives company in Chennai committed
                        delivering creative excellence and measurable results.
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
