// components/BlogSection.tsx
"use client";
import React from "react";
import { InfoCard } from "./ui/Infocard";

const blogPosts = [
  {
    date: "15 December, 2025",
    admin: "admin",
    comments: "05",
    title: "We Focus On The Solutions Not On The Problems",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
  },
  {
    date: "20 December, 2025",
    admin: "admin",
    comments: "05",
    title: "How To Create Viral Content That Drives Sales",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    date: "25 December, 2025",
    admin: "admin",
    comments: "05",
    title: "How AI Is Changing The Future Of Online Shopping",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BlogSection() {
  return (
    <section className="relative bg-white overflow-hidden py-32 px-6 md:px-12 lg:px-24">
      {/* Top stripe */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A5CDD]/20 to-transparent" />

      {/* BG glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle at bottom right, rgba(26,92,221,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1A5CDD]/20 bg-[#1A5CDD]/6 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#1A5CDD] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD]" />
              Blog &amp; Events
            </span>
            <h2
              className="font-extrabold text-gray-900 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Read our latest consulting
              <br />
              <span className="text-[#1A5CDD]">news &amp; blogs</span>
            </h2>
          </div>

          <a
            href="/blog"
            className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all duration-300 hover:shadow-xl active:scale-95"
            style={{
              background: "linear-gradient(135deg, #1A5CDD 0%, #0D3FA6 100%)",
              boxShadow: "0 8px 30px rgba(26,92,221,0.22)",
            }}
          >
            All Posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogPosts.map((post, i) => (
            <InfoCard
              key={i}
              image={post.image}
              badge={post.date}
              title={post.title}
              admin={post.admin}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
