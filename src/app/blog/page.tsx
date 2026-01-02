"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { useState } from "react";

// Mock Blog Data
const ALL_POSTS = [
    {
        id: 1,
        title: "20 Questions You Should Always Ask About Security Software Before Buying It.",
        category: "Software",
        date: "August 11, 2020",
        slug: "security-software",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Responsible for a Technology Budget? 12 Top Notch Ways to Spend Your Money.",
        category: "Technology",
        date: "August 01, 2020",
        slug: "tech-budget",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "The Ultimate Guide to Content Marketing Strategies for Growing Startups.",
        category: "Marketing",
        date: "July 25, 2020",
        slug: "marketing-strategies",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fce?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Upcoming Tech Conferences in 2020: What You Need to Know and Attend.",
        category: "Event",
        date: "July 18, 2020",
        slug: "tech-conferences-2020",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "How to Optimize Your Remote Team’s Workflow for Maximum Productivity.",
        category: "Software",
        date: "July 10, 2020",
        slug: "remote-workflow-optimization",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "Understanding the Impact of Artificial Intelligence on Modern Business.",
        category: "Technology",
        date: "July 02, 2020",
        slug: "ai-business-impact",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    }
];

export default function BlogPage() {
    const [activeCat, setActiveCat] = useState("All");
    const categories = ["All", "Software", "Technology", "Marketing", "Event"];

    const filteredPosts = ALL_POSTS.filter((post) => (activeCat === "All" ? true : post.category === activeCat));

    return (
        <main className="bg-white min-h-screen">
            {/* Header Banner - Matches your theme */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Blog</h1>
                    <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-[2rem] border border-white/20">
                        <Breadcrumbs />
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    
                    {/* Category Filter - Image Style Layout */}
                    <div className="border-b border-gray-100 mb-12">
                        <div className="flex justify-center gap-8 overflow-x-auto no-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCat(cat)}
                                    className={`pb-4 text-sm font-bold transition-all relative ${
                                        activeCat === cat
                                            ? "text-blue-700"
                                            : "text-gray-900 hover:text-blue-600"
                                    }`}
                                >
                                    {cat}
                                    {activeCat === cat && (
                                        <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-700 rounded-t-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Grid - 2 Columns as per image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {filteredPosts.map((post) => (
                            <article key={post.id} className="group flex flex-col">
                                {/* Image */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 mb-6">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col">
                                    {/* Meta Row with Blue Dash */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-5 h-[2px] bg-blue-700"></div>
                                        <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider flex gap-1">
                                            <span>{post.category}</span>
                                            <span>/</span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[22px] font-bold text-gray-900 leading-[1.3] mb-4 hover:text-blue-700 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h3>

                                    {/* Read More Link */}
                                    <Link 
                                        href={`/blog/${post.slug}`}
                                        className="text-sm font-bold text-gray-900 hover:text-blue-700 underline underline-offset-4 decoration-2 decoration-gray-200 hover:decoration-blue-700 transition-all w-fit"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Simplified Pagination */}
                    <nav className="mt-20 flex justify-center items-center space-x-4">
                        <button className="text-gray-400 hover:text-blue-700 text-sm font-bold">Prev</button>
                        <div className="flex space-x-2">
                            <span className="w-8 h-8 flex items-center justify-center rounded bg-blue-700 text-white text-sm font-bold">1</span>
                            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-900 hover:bg-gray-100 text-sm font-bold">2</button>
                        </div>
                        <button className="text-gray-900 hover:text-blue-700 text-sm font-bold">Next</button>
                    </nav>
                </div>
            </section>
        </main>
    );
}