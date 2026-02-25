import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
    CheckCircle, LineChart,
    PieChart,
    Search,
    Link,
    Bug
} from "lucide-react";

export const metadata = {
    title: "On-Page SEO Company in Chennai | Syscorp SEO Services",
    description:
        "Syscorp is a trusted On-Page SEO Company in Chennai offering keyword optimization, content improvements, technical fixes, and on-site SEO strategies to boost rankings and traffic.",
};

export default function OnPageSEOPage() {
    return (
        <>
            <section className="bg-[#011146] py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        On-Page SEO
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
                            On-Page SEO Company in Chennai
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Syscorp is a trusted On-Page SEO company in Chennai helping businesses improve website rankings, organic traffic, and user experience. Our On-Page SEO services focus on optimizing every on-site element so engines clearly understand your website and rank higher in search results. As professional On-Page SEO company in Chennai, we ensure website is optimized for both users and Google algorithms.
                        </p>


                        <div className="mt-8 flex gap-4 flex-wrap">
                            <button className="bg-[#00A3FF] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-600 transition">
                                Get Free SEO Audit
                            </button>

                            <button className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-800 hover:bg-gray-100 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/services/on-page-seo.png"
                            alt="On Page SEO Service"
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
                            Why Choose Syscorp as Your On-Page SEO Company in Chennai?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Choosing the right On-Page SEO company in Chennai directly impacts search
                            visibility. At Syscorp, we follow proven, data-driven SEO strategies.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/on-page-seo.png"
                                alt="On Page SEO Service"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Google-friendly On-Page SEO optimization",
                                "Keyword-focused content improvements",
                                "Better crawlability and indexing",
                                "Improved website structure and UX",
                                "Long-term SEO growth",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />

                                    <p className="text-lg text-gray-700 leading-relaxed m-0">
                                        {item}
                                    </p>
                                </div>
                            ))}
                            <p className="mt-4 text-lg text-gray-600 leading-relaxed mt-4">
                                Makes Syscorp reliable On-Page SEO company in Chennai for businesses of all sizes.
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
                            Our On-Page SEO Services Include
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Our On-Page SEO company in Chennai provides complete on-site optimization
                            to improve rankings, traffic, and conversions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Keyword Optimization",
                                points: [
                                    "Primary and secondary keywords",
                                    "Search intent alignment",
                                    "Natural keyword placement",
                                ],
                            },
                            {
                                title: "Title Tags & Meta Descriptions",
                                points: [
                                    "SEO-friendly page titles",
                                    "High-CTR meta descriptions",
                                    "Proper keyword inclusion",
                                ],
                            },
                            {
                                title: "Content Optimization",
                                points: [
                                    "Content quality and relevance",
                                    "Header tags (H1, H2, H3)",
                                    "Internal linking structure",
                                    "Readability and engagement",
                                ],
                            },
                            {
                                title: "Image Optimization",
                                points: [
                                    "Image sizes for speed",
                                    "ALT tags with keywords",
                                    "Media loading performance",
                                ],
                            },
                            {
                                title: "Internal Linking",
                                points: [
                                    "Improve website navigation",
                                    "Distribute page authority",
                                    "Enhance crawl efficiency",
                                ],
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>

                                <ul className="space-y-3">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">

                                            <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />

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

                    {/* TITLE CENTER */}
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Importance of On-Page SEO
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            On-Page SEO is a critical ranking factor. As an experienced{" "}
                            <strong>On-Page SEO company in Chennai</strong>, Syscorp ensures every page is
                            fully optimized for better results.
                        </p>
                    </div>

                    {/* CONTENT + IMAGE */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT SIDE CONTENT */}
                        <div className="">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Why On-Page SEO Is Important:
                            </h3>

                            <ul className="space-y-4">
                                {[
                                    "Higher keyword rankings",
                                    "Increased organic traffic",
                                    "Better user experience",
                                    "Improved conversion rates",
                                    "Strong SEO foundation",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-4"
                                    >
                                        <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />

                                        <span className="text-lg text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="flex justify-center">
                            <div className="">
                                <Image
                                    src="/images/services/keyword.webp"
                                    alt="On-Page SEO Importance"
                                    width={500}
                                    height={400}
                                    className="object-contain rounded-2xl"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* PROCESS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TITLE CENTER */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Our On-Page SEO Process
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            As a professional <strong>On-Page SEO company in Chennai</strong>, we follow clear and effective process.
                        </p>
                    </div>

                    {/* IMAGE + PROCESS */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT SIDE IMAGE */}
                        <div className="flex justify-center">
                            <div className="">
                                <Image
                                    src="/images/services/keyword.webp"
                                    alt="On-Page SEO Process"
                                    width={500}
                                    height={400}
                                    className="object-contain rounded-2xl"
                                />
                            </div>
                        </div>

                        {/* RIGHT SIDE PROCESS */}
                        <div className="">
                            <div className="space-y-5">
                                {[
                                    "Website and page analysis",
                                    "Keyword and intent review",
                                    "On-page issue identification",
                                    "Content and metadata optimization",
                                    "Internal linking improvements",
                                    "Performance tracking and reporting",
                                ].map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4"
                                    >
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

            {/* TOOLS SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Tools We Use for On-Page SEO
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Syscorp uses advanced SEO tools to deliver measurable results as an On-Page SEO company in Chennai.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Google Search Console", icon: <LineChart size={22} strokeWidth={1.5} /> },
                            { name: "Google Analytics (GA4)", icon: <PieChart size={22} strokeWidth={1.5} /> },
                            { name: "SEMrush", icon: <Search size={22} strokeWidth={1.5} /> },
                            { name: "Ahrefs", icon: <Link size={22} strokeWidth={1.5} /> },
                            { name: "Screaming Frog SEO Spider", icon: <Bug size={22} strokeWidth={1.5} /> },
                        ].map((tool, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition flex items-center gap-4"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00A3FF]/10 text-[#00A3FF]">
                                    {tool.icon}
                                </div>

                                <p className="text-lg text-gray-800 font-semibold m-0">
                                    {tool.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO NEEDS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* SECTION HEADING */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Who Needs an On-Page SEO Service?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Our On-Page SEO company in Chennai services are ideal for businesses looking to
                            improve rankings and traffic.
                        </p>
                    </div>

                    {/* LEFT IMAGE + RIGHT CONTENT */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/services/domain-hosting.png"
                                alt="On Page SEO Service"
                                width={500}
                                height={400}
                                className="w-full max-w-md object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">
                            {[
                                "Business websites",
                                "Service-based companies",
                                "E-commerce stores",
                                "Local Chennai businesses",
                                "Websites with low rankings",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />

                                    <p className="text-lg text-gray-700 m-0">{item}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>


            {/* CTA SECTION */}
            <section className="py-20 bg-[#00A3FF] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl  max-w-4xl mx-auto md:text-4xl font-bold mb-6">
                        Get Started with the Best On-Page SEO Company in Chennai
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                        If searching a reliable On-Page SEO company in Chennai, Syscorp delivers proven strategies increase rankings, traffic, and conversions.
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
