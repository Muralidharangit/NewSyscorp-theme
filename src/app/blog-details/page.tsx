"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";

export default function BlogDetails({params}: {params: {slug: string}}) {
    // You can later fetch the blog content based on params.slug
    return (
        <main className="bg-white min-h-screen">
            {/* Header / Hero */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        How to optimize your website for 2026 Core Web Vitals
                    </h1>
                    <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-[2rem] border border-white/20">
                        <Breadcrumbs />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative mt-16 pb-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Article */}
                        <article className="w-full lg:w-2/3">
                            {/* Featured Image */}
                            <div className="relative h-[300px] md:h-[500px] w-full rounded-[10px] overflow-hidden mb-8 bg-gray-200">
                                {/* Replace with real image */}
                                {/* <Image src="/images/blog/featured.webp" alt="Blog Featured" fill className="object-cover" /> */}
                            </div>

                            {/* Author & Date */}
                            <div className="flex flex-wrap items-center gap-6 mb-8 border-b border-gray-100 pb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <i className="fas fa-user text-sm"></i>
                                    </div>
                                    <span className="font-bold text-gray-900">By Admin</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <i className="far fa-calendar-alt"></i>
                                    <span>Dec 29, 2025</span>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <p className="text-xl font-medium text-gray-900 leading-relaxed mb-6">
                                    The digital landscape is shifting. As we approach 2026, Core Web Vitals remain the
                                    gold standard for measuring user experience and SEO performance.
                                </p>

                                <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                                    The Impact of Interaction to Next Paint (INP)
                                </h2>
                                <p className="mb-6">
                                    Understanding how users interact with your site is more than just click tracking.
                                    It's about how the browser responds to those interactions. INP has officially
                                    replaced FID as a key metric.
                                </p>

                                <blockquote className="bg-blue-50 border-l-4 border-blue-600 p-8 my-10 rounded-r-2xl italic text-gray-700 text-lg">
                                    "Website speed is not a luxury; it is a fundamental requirement for business growth
                                    in the modern era."
                                </blockquote>

                                <p>
                                    In the following sections, we will explore advanced caching strategies, edge
                                    computing, and how Next.js 15+ can automate much of this optimization for you.
                                </p>
                            </div>

                            {/* Tags & Share */}
                            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-6">
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium text-gray-600">
                                        #Technology
                                    </span>
                                    <span className="px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium text-gray-600">
                                        #SEO
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-bold text-gray-900">Share:</span>
                                    <Link
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="w-full lg:w-1/3 space-y-8">
                            {/* Recent Posts */}
                            <div className="bg-gray-50 p-8 rounded-[10px] border border-gray-100">
                                <h4 className="text-xl font-bold text-gray-900 mb-6">Recent Articles</h4>
                                <div className="space-y-6">
                                    {[1, 2, 3].map((i) => (
                                        <Link href="#" key={i} className="flex items-center group">
                                            <div className="w-20 h-20 rounded-2xl bg-gray-200 overflow-hidden shrink-0 mr-4">
                                                {/* <Image src={`https://picsum.photos/seed/${i + 10}/200`} alt="Thumb" width={80} height={80} className="object-cover" /> */}
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                                    Mastering UI Design for 2026...
                                                </h5>
                                                <p className="text-xs text-gray-600 mt-1">Dec 20, 2025</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-[#011146] p-8 rounded-[10px] text-white text-center relative overflow-hidden">
                                <h4 className="text-xl font-bold mb-4">Start Your Project</h4>
                                <p className="text-blue-200 text-sm mb-6">
                                    Ready to scale your business with modern technology?
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
