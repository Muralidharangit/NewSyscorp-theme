import Link from "next/link";

export default function ServiceDetailsPage() {
    const servicesData = [
        {
            category: "Website Development",
            services: [
                { name: "Custom Website Design", href: "/services/custom-website-design" },
                { name: "Responsive UI / UX", href: "/services/responsive-ui-ux" },
                { name: "Corporate Websites", href: "/services/corporate-website" },
                { name: "Business Websites", href: "/services/business-websites" },
                { name: "E-Commerce Solutions", href: "/services/e-commerce" },
                { name: "Web Applications & Dashboards", href: "/services/web-applications-dashboards" },
                { name: "Website Maintenance & Support", href: "/services/website-maintenance-support" },
                { name: "Hosting & Domain Setup", href: "/services/hosting-domain" },
            ],
        },
        {
            category: "SEO Services",
            services: [
                { name: "Website SEO Audit", href: "/services/seo-audit" },
                { name: "Keyword Research & Strategy", href: "/services/keyword-research" },
                { name: "On-Page SEO", href: "/services/on-page-seo" },
                { name: "Off-Page SEO", href: "/services/off-page-seo" },
                { name: "Technical SEO", href: "/services/technical-seo" },
                { name: "Local SEO", href: "/services/local-seo" },
                { name: "Link Building", href: "/services/link-building" },
                { name: "Performance Tracking & Reporting", href: "/services/performance-tracking-reporting" },
            ],
        },
        {
            category: "Digital Marketing",
            services: [
                { name: "Brand-Focused Marketing Strategy", href: "/services/brand-focused-marketing-strategy" },
                { name: "Premium Social Media Management", href: "/services/social-media-management" },
                { name: "High-Impact Performance Ads", href: "/services/performance-ads" },
                { name: "Content & Creative Marketing", href: "/services/content-marketing" },
                { name: "Instagram Ads", href: "/services/instagram-ads" },
                { name: "Facebook Ads", href: "/services/facebook-ads" },
                { name: "SEO & Organic Growth", href: "/services/seo-organic-growth" },
                { name: "Google Ads", href: "/services/google-ads" },
                { name: "YouTube Ads", href: "/services/youtube-ads" },
                { name: "LinkedIn Ads", href: "/services/linkedin-ads" },
                { name: "Twitter (X) Ads", href: "/services/twitter-ads" },
            ],
        },
        {
            category: "Video Marketing",
            services: [
                { name: "YouTube Video Editing", href: "/services/youtube-video-editing" },
                { name: "YouTube Shorts & Reels", href: "/services/youtube-shorts-reels" },
                { name: "Promotional & Ad Video Editing", href: "/services/promotional-ad-video-editing" },
                { name: "Corporate & Brand Video Editing", href: "/services/corporate-brand-video-editing" },
                { name: "Video SEO & Optimization", href: "/services/video-seo-optimization" },
                { name: "YouTube Channel Growth Strategy", href: "/services/youtube-channel-growth-strategy" },
            ],
        },
        {
            category: "Graphic Design",
            services: [
                { name: "Logo & Brand Identity Design", href: "/services/logo-brand-identity-design" },
                { name: "Social Media Creatives", href: "/services/social-media-creatives" },
                { name: "Marketing & Ad Designs", href: "/services/marketing-ad-designs" },
                { name: "Print & Digital Design", href: "/services/print-digital-design" },
            ],
        },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                        Syscorp Services
                    </span>

                    <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Explore Our Professional Services
                    </h1>

                    <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover all our premium digital solutions designed to help businesses in Chennai grow faster,
                        rank higher, and convert better.
                    </p>
                </div>

                {/* Categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesData.map((cat, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Category Header */}
                            <div className="p-8 bg-[#000824] from-gray-900 to-gray-800 text-white relative">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/15 border border-white/20">
                                        <span className="text-xl">🚀</span>
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-bold">{cat.category}</h2>
                                        <p className="text-sm text-gray-300 mt-1">
                                            {cat.services.length} Services Available
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div className="p-8">
                                <ul className="space-y-4">
                                    {cat.services.map((service, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={service.href}
                                                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
                                            >
                                                <div className="flex items-center gap-3">
                                                    {/* <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span> */}
                                                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-gray-900">
                                                        {service.name}
                                                    </span>
                                                </div>

                                                <span className="text-gray-400 group-hover:text-blue-600 transition">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </span>

                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Bottom Accent */}
                            {/* <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
