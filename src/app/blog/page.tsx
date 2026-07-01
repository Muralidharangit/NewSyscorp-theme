"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import HeaderBanner from "@/components/ui/HeaderBanner";
import { fetchStrapi } from "@/lib/strapi";

const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function BlogPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [categories, setCategories] = useState<string[]>(["All"]);
    const [activeCat, setActiveCat] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const postsRes = await fetchStrapi("blog-posts", {
                    populate: "*",
                    "sort[0]": "date:desc",
                });

                const postsData = postsRes?.data || [];
                setPosts(postsData);

                const catsRes = await fetchStrapi("blog-categories");
                const catNames =
                    catsRes?.data?.map((cat: any) => cat.name || cat.attributes?.name) ||
                    [];

                setCategories(["All", ...catNames]);
            } catch (error) {
                console.error("Error loading blog:", error);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            if (activeCat === "All") return true;

            const item = post.attributes || post;
            const cats = item.blog_categories?.data || item.blog_categories || [];

            return Array.isArray(cats)
                ? cats.some((cat: any) => {
                    const name = cat.name || cat.attributes?.name;
                    return name === activeCat;
                })
                : false;
        });
    }, [posts, activeCat]);

    return (
        <main className="bg-white min-h-screen">
            <HeaderBanner
                title={
                    <>
                        Explore our <span className="text-[#38bdf8] font-serif italic font-normal">insights, stories, and ideas</span> on modern software engineering.
                    </>
                }
                description="Stay updated with Syscorp's technical insights, coding best practices, UI/UX trends, and articles from our experienced software development team."
            />

            {/* Blog Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Categories */}
                    <div data-animate="fade-up" className="border-b border-gray-100 mb-12">
                        <div className="flex justify-center gap-8 overflow-x-auto">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCat(cat)}
                                    className={`pb-4 text-sm font-bold ${activeCat === cat
                                        ? "text-blue-700"
                                        : "text-gray-800 hover:text-blue-600"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Loading */}
                    {loading ? (
                        <div className="text-center py-20">
                            <p>Loading posts...</p>
                        </div>
                    ) : (
                        <div data-animate="stagger-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map((post) => {
                                    const item = post.attributes || post;
                                    const { title, slug, date } = item;

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

                                    console.log(`[BlogPage] Post: ${title}, URL: ${imageUrl}`, { img_structure: img });

                                    /* ---------- CATEGORY FIX ---------- */
                                    const cats =
                                        item.blog_categories?.data ||
                                        item.blog_categories ||
                                        [];

                                    const firstCat =
                                        cats[0]?.attributes || cats[0] || null;

                                    const categoryName =
                                        firstCat?.name || "Uncategorized";

                                    return (
                                        <article key={post.id} className="group flex flex-col">
                                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 mb-6 rounded-lg">
                                                <Image
                                                    src={imageUrl}
                                                    alt={title || "Blog Post"}
                                                    width={800}
                                                    height={500}
                                                    className="object-cover w-full h-full rounded-lg"
                                                />
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase text-gray-500 mb-2">
                                                    {categoryName} /{" "}
                                                    {date
                                                        ? new Date(date).toLocaleDateString()
                                                        : "N/A"}
                                                </p>

                                                <h2 className="font-bold mb-4 hover:text-blue-700">
                                                    <Link href={`/blog/${slug}`}>{title}</Link>
                                                </h2>

                                                <Link
                                                    href={`/blog/${slug}`}
                                                    className="text-sm font-bold underline"
                                                >
                                                    Read more
                                                </Link>
                                            </div>
                                        </article>
                                    );
                                })
                            ) : (
                                <p className="text-center col-span-full">
                                    No posts found.
                                </p>
                            )}
                        </div>
                    )}

                    {/* Pagination (Static Demo) */}
                    {!loading && filteredPosts.length > 0 && (
                        <nav data-animate="fade-up" className="mt-20 flex justify-center gap-4">
                            <button className="p-2 border rounded">
                                <ChevronLeft size={16} />
                            </button>
                            <span className="px-3 py-2 bg-blue-700 text-white rounded">
                                1
                            </span>
                            <button className="p-2 border rounded">
                                <ChevronRight size={16} />
                            </button>
                        </nav>
                    )}
                </div>
            </section>
        </main>
    );
}