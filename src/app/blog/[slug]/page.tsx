"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { fetchStrapi } from "@/lib/strapi";
import { use } from "react";

interface BlogPostDetail {
    id: number;
    attributes: {
        title: string;
        slug: string;
        date: string;
        content: any[]; // Strapi Blocks
        image: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
        blog_categories: {
            data: Array<{
                attributes: {
                    name: string;
                };
            }>;
        };
    };
}

export default function BlogDetails({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
    const params = use(paramsPromise);
    const [post, setPost] = useState<any | null>(null);
    const [recentPosts, setRecentPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                // Fetch current post
                const postResponse = await fetchStrapi("blog-posts", {
                    "filters[slug][$eq]": params.slug,
                    populate: "*",
                });
                if (postResponse.data && postResponse.data.length > 0) {
                    setPost(postResponse.data[0]);
                }

                // Fetch recent posts
                const recentResponse = await fetchStrapi("blog-posts", {
                    "sort[0]": "date:desc",
                    "pagination[limit]": 4,
                    populate: "*",
                });
                if (recentResponse.data) {
                    setRecentPosts(recentResponse.data);
                }
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [params.slug]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading post...</div>;
    }

    if (!post) {
        return <div className="min-h-screen flex items-center justify-center">Post not found.</div>;
    }

    const item = post.attributes || post; // Normalize Strapi 4/5
    const { title, date, content, image, blog_categories } = item;
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

    /* ---------- IMAGE FIX ---------- */
    let imageUrl = "https://via.placeholder.com/1200x600?text=No+Image";
    const img = item.image;

    if (img) {
        // Strapi 5 format (flattened)
        if (img.url) {
            imageUrl = img.url.startsWith("http") ? img.url : `${STRAPI_URL}${img.url}`;
        }
        // Strapi 4 format (nested .data.attributes)
        else if (img.data?.attributes?.url) {
            const url = img.data.attributes.url;
            imageUrl = url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
        }
        // Handle potential array
        else if (Array.isArray(img) && img[0]?.url) {
            imageUrl = img[0].url.startsWith("http") ? img[0].url : `${STRAPI_URL}${img[0].url}`;
        }
    }

    console.log(`[BlogDetails] Post: ${title}, URL: ${imageUrl}`, { img_structure: img });

    const cats = blog_categories?.data || blog_categories || [];
    const firstCat = cats[0]?.attributes || cats[0];
    const categoryName = firstCat?.name || "Uncategorized";

    return (
        <main className="bg-white min-h-screen">
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        {title}
                    </h1>
                    <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-[2rem] border border-white/20">
                        <Breadcrumbs />
                    </div>
                </div>
            </section>

            <section className="relative mt-16 pb-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <article className="w-full lg:w-2/3">
                            <div className="relative h-[300px] md:h-[500px] w-full rounded-[10px] overflow-hidden mb-8 bg-gray-200">
                                <Image src={imageUrl} alt={title} fill className="object-cover" priority />
                            </div>

                            <div className="flex flex-wrap items-center gap-6 mb-8 border-b border-gray-100 pb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <i className="fas fa-user text-sm"></i>
                                    </div>
                                    <span className="font-bold text-gray-900">By Admin</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <i className="far fa-calendar-alt"></i>
                                    <span>{new Date(date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase">
                                        {categoryName}
                                    </span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700">
                                {/* Simple renderer for Strapi Blocks */}
                                {content && Array.isArray(content) ? content.map((block: any, index: number) => {
                                    if (block.type === 'paragraph') {
                                        return <p key={index} className="mb-4">{block.children?.map((c: any) => c.text).join('')}</p>;
                                    }
                                    if (block.type === 'heading') {
                                        const HeadingTag = `h${block.level || 2}` as any;
                                        return <HeadingTag key={index} className="text-2xl font-bold mt-8 mb-4">{block.children?.map((c: any) => c.text).join('')}</HeadingTag>;
                                    }
                                    return null;
                                }) : <p>No content available.</p>}
                            </div>

                            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-6">
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium text-gray-600">
                                        #{categoryName}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-bold text-gray-900">Share:</span>
                                    {/* Social links placeholder */}
                                </div>
                            </div>
                        </article>

                        <aside className="w-full lg:w-1/3 space-y-8">

                            {/* Recent Articles */}
                            <div className="bg-gray-50 p-8 rounded-[10px] border border-gray-100">
                                <h4 className="text-xl font-bold text-gray-900 mb-6">Recent Articles</h4>
                                <div className="space-y-6">
                                    {recentPosts.length > 0 ? recentPosts.map((recentPost) => {
                                        const rItem = recentPost.attributes || recentPost;
                                        const rImg = rItem.image;
                                        let rImageUrl = "https://via.placeholder.com/200?text=No+Image";

                                        if (rImg) {
                                            if (rImg.url) rImageUrl = rImg.url.startsWith("http") ? rImg.url : `${STRAPI_URL}${rImg.url}`;
                                            else if (rImg.data?.attributes?.url) {
                                                const url = rImg.data.attributes.url;
                                                rImageUrl = url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
                                            }
                                        }

                                        return (
                                            <Link href={`/blog/${rItem.slug}`} key={recentPost.id} className="flex items-center group">
                                                <div className="w-20 h-20 rounded-2xl bg-gray-200 overflow-hidden shrink-0 mr-4">
                                                    <Image
                                                        src={rImageUrl}
                                                        alt={rItem.title}
                                                        width={80}
                                                        height={80}
                                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                                        {rItem.title}
                                                    </h5>
                                                    <p className="text-xs text-gray-600 mt-1">
                                                        {new Date(rItem.date).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </p>
                                                </div>
                                            </Link>
                                        );
                                    }) : (
                                        <p className="text-gray-500 text-sm">No recent articles found.</p>
                                    )}
                                </div>
                            </div>

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
