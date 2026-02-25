import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Marketing & Ad Designs Company in Chennai | Syscorp",
    description:
        "Syscorp is a trusted Marketing & Ad Designs company in Chennai helping businesses create powerful visuals that drive results through high-impact marketing creatives.",
};

export default function MarketingAdDesignsPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Marketing & Ad Designs
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
                            Marketing & Ad Designs Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Looking professional Marketing & Ad Designs company in Chennai to
                            create powerful visuals that drive results? At Syscorp, we
                            specialize designing high-impact marketing and advertising
                            creatives that attract attention, build trust, increase
                            conversions. Leading Marketing & Ad Designs company in Chennai,
                            Combine creativity with strategy to deliver designs that not only
                            look stunning but also generate measurable business growth.
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
                            src="/images/services/marketing-ads-11.png"
                            alt="Marketing & Ad Designs"
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
                            Why Choose Syscorp Marketing & Ad Designs Company in Chennai?
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Choosing right Marketing & Ad Designs company in Chennai can
                            directly impact your brand visibility and sales performance.
                            Syscorp, we understand every design must serve a purpose whether
                            lead generation, brand awareness, product promotion.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/marketing-ads-12.png"
                                alt="Marketing & Ad Designs Company"
                                width={400}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Creative designs aligned with marketing goals",
                                "High-conversion ad creatives",
                                "Brand-focused design approach",
                                "Fast delivery & professional quality",
                                "Customized design solutions",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                We ensure every marketing creative reflects your brand identity
                                while maximizing engagement.
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
                            Our Marketing & Ad Design Services
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            As trusted Marketing & Ad Designs company in Chennai, we offer
                            complete creative solutions for businesses of all sizes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Social Media Ad Designs",
                                desc: "Eye-catching Facebook, Instagram, LinkedIn, and X (Twitter) ad creatives designed to improve CTR and ROI.",
                            },
                            {
                                title: "Google Display Ad Creatives",
                                desc: "Banner ads and responsive display creatives optimized for Google Ads campaigns.",
                            },
                            {
                                title: "Promotional Campaign Designs",
                                desc: "Seasonal offers, festive promotions, product launches, and sales campaign creatives.",
                            },
                            {
                                title: "Print & Outdoor Marketing Designs",
                                desc: "Brochures, flyers, posters, hoardings, standees, and newspaper ads.",
                            },
                            {
                                title: "Performance Marketing Creatives",
                                desc: "Conversion-focused ad visuals designed specifically for paid advertising campaigns.",
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {index + 1}. {service.title}
                                </h3>

                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-lg text-gray-700 mt-12 leading-relaxed text-center max-w-4xl mx-auto">
                        If searching for a reliable Marketing & Ad Designs company in
                        Chennai, Syscorp delivers impactful creative solutions to your
                        business goals.
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
                                How Our Marketing & Ad Designs Boost Your Business
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                As an experienced Marketing & Ad Designs company in Chennai, we
                                create designs that:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Capture instant attention",
                                    "Improve ad engagement rates",
                                    "Increase conversion rates",
                                    "Strengthen brand identity",
                                    "Support performance marketing campaigns",
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
                                Our designs backed by market research, audience psychology, and
                                the latest design trends to ensure maximum results.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/marketing-ads-13.png"
                                alt="Marketing & Ad Designs"
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
                                src="/images/services/marketing-ads-14.png"
                                alt="Marketing & Ad Designs"
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
                                Being a versatile Marketing & Ad Designs company in Chennai, we
                                serve:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Real Estate & Construction",
                                    "Healthcare & Clinics",
                                    "Education Institutions",
                                    "E-commerce Brands",
                                    "Startups & Entrepreneurs",
                                    "Corporate Companies",
                                    "Local Businesses",
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
                                Industry, our team creates compelling marketing visuals that
                                resonate with your audience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY SYSCORP SECTION */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT CONTENT */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Syscorp is the Best Marketing & Ad Designs Company in Chennai
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                As trusted Marketing & Ad Designs company in Chennai, we focus
                                delivering designs that only look professional but also drive
                                real business growth.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Creative & strategic team",
                                    "ROI-focused design approach",
                                    "Affordable pricing packages",
                                    "On-time delivery",
                                    "Dedicated client support",
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

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/marketing-ads-15.png"
                                alt="Marketing & Ad Designs"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-[#00A3FF] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl max-w-4xl mx-auto md:text-4xl font-bold mb-6">
                        Let’s Create High-Converting Marketing Designs
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        Ready boost your brand visibility with expert creative support?
                        Partner with Syscorp most reliable Marketing & Ad Designs company in
                        Chennai.
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
