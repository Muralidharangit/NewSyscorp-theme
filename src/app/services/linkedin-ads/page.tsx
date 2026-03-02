import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "LinkedIn Ads Company in Chennai | LinkedIn Ads Services",
    description:
        "Syscorp a B2B-focused LinkedIn Ads company in Chennai helping brands decision-makers, professionals, high-value audiences through targeted LinkedIn advertising.",
};

export default function LinkedInAdsPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        LinkedIn Ads
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
                            LinkedIn Ads Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp a B2B-focused LinkedIn Ads company in Chennai helping brands decision-makers, professionals, high-value audiences through targeted LinkedIn advertising. Strategic LinkedIn ad campaigns that drive quality leads, brand authority, and measurable business growth. Trusted LinkedIn Ads company in Chennai, we combine audience intelligence, compelling ad creatives, and performance tracking to ensure your campaigns deliver real results.
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
                            src="/images/services/linkedin-ads-1.png"
                            alt="LinkedIn Ads Service"
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
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Choose Syscorp as Your LinkedIn Ads Company in Chennai
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            LinkedIn ads require precision targeting and clear messaging. As an experienced LinkedIn Ads company in Chennai, Syscorp helps businesses connect right professionals at the right stage of the buying journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/linkedin-ads-2.png"
                                alt="LinkedIn Ads Company"
                                width={400}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "B2B and professional audience targeting",
                                "Lead generation & brand awareness campaigns",
                                "High-quality ad copy and creatives",
                                "Advanced retargeting & funnel strategies",
                                "Transparent reporting & optimization",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                That’s why Syscorp is a preferred LinkedIn Ads company in Chennai
                                for B2B growth.
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
                            Our LinkedIn Ads Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "LinkedIn Ads Strategy & Planning",
                                desc: "As professional LinkedIn Ads company in Chennai, we offer:",
                                points: [
                                    "Campaign goal & funnel planning",
                                    "Audience research (job title, industry, company size)",
                                    "Budget planning & bid strategy",
                                ],
                            },
                            {
                                title: "LinkedIn Ad Campaign Management",
                                desc: "Our LinkedIn Ads company in Chennai manages:",
                                points: [
                                    "Sponsored content ads",
                                    "Lead generation form ads",
                                    "Message ads & conversation ads",
                                    "Website traffic & conversion campaigns",
                                ],
                            },
                            {
                                title: "Ad Creative & Copywriting",
                                desc: "As creative LinkedIn Ads company in Chennai, we design:",
                                points: [
                                    "Professional ad visuals",
                                    "Persuasive ad copy & CTAs",
                                    "Multiple ad variations for A/B testing",
                                ],
                            },
                            {
                                title: "Retargeting & Account-Based Marketing (ABM)",
                                desc: "Our LinkedIn Ads company in Chennai helps you:",
                                points: [
                                    "Retarget website visitors",
                                    "Re-engage ad viewers",
                                    "Run account-based marketing campaigns",
                                ],
                            },
                            {
                                title: "Performance Tracking & Optimization",
                                desc: "Every reliable LinkedIn Ads company in Chennai tracks results closely. We ensure:",
                                points: [
                                    "Conversion & lead tracking setup",
                                    "Cost-per-lead optimization",
                                    "Detailed performance reports & insights",
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
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT CARD */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why LinkedIn Ads Matter for Your Business
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Choosing the right LinkedIn Ads company in Chennai helps your
                                business:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Reach decision-makers & professionals",
                                    "Generate high-quality B2B leads",
                                    "Build brand authority in your industry",
                                    "Shorten sales cycles with targeted outreach",
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
                                Syscorp ensures your LinkedIn ad spend delivers value, not just
                                visibility.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/linkedin-ads-3.png"
                                alt="LinkedIn Ads Growth"
                                width={500}
                                height={400}
                                className="w-full max-w-sm object-contain"
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
                                src="/images/services/linkedin-ads-4.png"
                                alt="Industries We Serve"
                                width={500}
                                height={400}
                                className="w-full max-w-sm object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Industries We Serve
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                As a versatile LinkedIn Ads company in Chennai, Syscorp works
                                with:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "B2B companies",
                                    "IT & SaaS businesses",
                                    "Corporate service providers",
                                    "Real estate & consulting firms",
                                    "Startups & enterprises",
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
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-[#00A3FF] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl max-w-4xl mx-auto md:text-4xl font-bold mb-6">
                        Partner with the Best LinkedIn Ads Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If looking a reliable LinkedIn Ads company in Chennai, Syscorp is
                        your strategic advertising partner. We help connect with the right
                        professionals and convert them into customers.
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
