import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Logo & Brand Identity Design Company in Chennai | Syscorp",
    description:
        "Syscorp is a creative and professional Logo & Brand Identity Design company in Chennai helping businesses build powerful visual identities that leave a lasting impression.",
};

export default function LogoBrandIdentityDesignPage() {
    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Logo & Brand Identity Design
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
                            Logo & Brand Identity Design Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                            Syscorp is a creative and professional Logo & Brand Identity Design
                            company in Chennai helping businesses build powerful visual
                            identities that leave a lasting impression. Your logo and brand
                            identity the face of your business and we ensure they reflect your
                            values, vision, and professionalism. As a trusted Logo & Brand
                            Identity Design company in Chennai, we create meaningful designs
                            connect emotionally with your target audience and strengthen brand
                            recognition.
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
                            src="/images/services/Custom_Logo_Design-1.png"
                            alt="Professional Logo & Brand Identity Design Services"
                            width={500}
                            height={400}
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="w-full max-w-[500px] h-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Choose Syscorp as Your Logo & Brand Identity Design Company in
                            Chennai?
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            A strong brand identity builds trust and credibility. As an
                            experienced Logo & Brand Identity Design company in Chennai, we
                            focus on strategy-driven just visuals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/Custom_Logo_Design-2.webp"
                                alt="Professional Brand Identity Design Services"
                                width={400}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="w-full max-w-[400px] h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Unique and custom logo concepts",
                                "Brand color palette and typography selection",
                                "Professional brand guidelines",
                                "Scalable designs for digital & print use",
                                "Modern, clean, and timeless design approach",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}

                            <p className="text-lg text-gray-600 leading-relaxed">
                                That’s why businesses Syscorp as their reliable Logo & Brand
                                Identity Design company in Chennai.
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
                            Our Logo & Brand Identity Design Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Custom Logo Design",
                                desc: "As a leading Logo & Brand Identity Design company in Chennai, we create:",
                                points: [
                                    "Minimalist logo designs",
                                    "Modern and creative logo concepts",
                                    "Corporate and professional logos",
                                    "Icon-based and typography-based logos",
                                ],
                            },
                            {
                                title: "Complete Brand Identity Design",
                                desc: "Our Logo & Brand Identity Design company in Chennai provides:",
                                points: [
                                    "Brand color schemes",
                                    "Typography and font selection",
                                    "Business card & stationery design",
                                    "Social media branding kits",
                                ],
                            },
                            {
                                title: "Brand Guidelines Development",
                                desc: "Professional Logo & Brand Identity Design company in Chennai, we deliver:",
                                points: [
                                    "Logo usage guidelines",
                                    "Brand consistency rules",
                                    "Visual identity standards",
                                    "Digital and print branding formats",
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

            {/* IMPORTANCE SECTION */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT CONTENT */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Brand Identity Design Matters
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Choosing right Logo & Brand Identity Design company in Chennai
                                helps your business:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Build strong brand recognition",
                                    "Create a professional first impression",
                                    "Stand out from competitors",
                                    "Maintain visual consistency across platforms",
                                    "Improve customer trust and loyalty",
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
                                At Syscorp, we design brand identities that grow with your
                                business.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/Custom_Logo_Design-4.webp"
                                alt="Brand Identity Design Growth Strategy"
                                width={500}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="w-full max-w-[500px] h-auto object-contain"
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
                                src="/images/services/Custom_Logo_Design-7.png"
                                alt="Industries We Serve – Logo & Branding Solutions"
                                width={500}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="w-full max-w-[500px] h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Industries We Serve
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                As a versatile Logo & Brand Identity Design company in Chennai,
                                we work with:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Startups & entrepreneurs",
                                    "Corporate businesses",
                                    "E-commerce brands",
                                    "Real estate companies",
                                    "IT & service-based industries",
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
                        Partner with the Best Logo & Brand Identity Design Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If you’re looking a creative and dependable Logo & Brand Identity
                        Design company in Chennai, Syscorp is ideal branding partner. We
                        create designs that not just visually appealing but strategically
                        powerful.
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
