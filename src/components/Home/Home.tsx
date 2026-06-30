"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Client Components
import HeroSlider from "@/components/HeroSlider";
import TestimonialSlider from "@/components/TestimonialSection";

// Server Components
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ServicesSection from "@/components/ServicesSection";
import CommunitySection from "@/components/CommunitySection";
import ServiceCompany from "@/components/ServiceCompany";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const container = containerRef.current;
        if (!container) return;

        const ctx = gsap.context(() => {
            const ease = "power2.out";
            const startTrigger = "top 88%";

            // ── 2 ─ About Section (Fade Up) ──
            gsap.fromTo(
                ".gsap-about-sec",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-about-sec",
                        start: startTrigger,
                        toggleActions: "play none none none",
                    },
                }
            );

            // ── 3 ─ Services Section (Stagger Cards + Fade Up Header) ──
            gsap.fromTo(
                ".gsap-services-header-box",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-services-sec",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
            gsap.fromTo(
                ".gsap-service-card-item",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-services-sec",
                        start: "top 78%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // ── 4 ─ Achievements Section (Scale In) ──
            gsap.fromTo(
                ".gsap-achievements-sec",
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.95,
                    ease: "back.out(1.3)",
                    scrollTrigger: {
                        trigger: ".gsap-achievements-sec",
                        start: startTrigger,
                        toggleActions: "play none none none",
                    },
                }
            );

            // ── 5 ─ Service Company Section (Split Entrance) ──
            gsap.fromTo(
                ".gsap-company-left-col",
                { x: -60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-company-sec",
                        start: startTrigger,
                        toggleActions: "play none none none",
                    },
                }
            );
            gsap.fromTo(
                ".gsap-company-right-col",
                { x: 60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-company-sec",
                        start: startTrigger,
                        toggleActions: "play none none none",
                    },
                }
            );

            // ── 6 ─ Community Section (Blur In) ──
            gsap.fromTo(
                ".gsap-community-sec",
                { filter: "blur(12px)", y: 40, opacity: 0 },
                {
                    filter: "blur(0px)",
                    y: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-community-sec",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // ── 7 ─ Testimonials Section (Slide Left/Right depending on preference, here Slide Left from Right edge) ──
            gsap.fromTo(
                ".gsap-testimonials-sec",
                { x: 70, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-testimonials-sec",
                        start: startTrigger,
                        toggleActions: "play none none none",
                    },
                }
            );

            // ── 8 ─ Pricing Section (Scale In + Cards Stagger) ──
            gsap.fromTo(
                ".gsap-pricing-header-box",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-pricing-sec",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
            gsap.fromTo(
                ".gsap-pricing-card-item",
                { y: 50, scale: 0.92, opacity: 0 },
                {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: ".gsap-pricing-sec",
                        start: "top 78%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // ── 9 ─ FAQ Section (Fade Up) ──
            gsap.fromTo(
                ".gsap-faq-sec",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-faq-sec",
                        start: startTrigger,
                        toggleActions: "play none none none",
                    },
                }
            );

            // ── 10 ─ Blog Section (Blur In) ──
            gsap.fromTo(
                ".gsap-blog-sec",
                { filter: "blur(10px)", y: 40, opacity: 0 },
                {
                    filter: "blur(0px)",
                    y: 0,
                    opacity: 1,
                    duration: 1.0,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-blog-sec",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-white font-sans dark:bg-black overflow-hidden">

            {/* 1 ─ Hero banner (self-animated on mount) */}
            <HeroSlider />

            {/* 2 ─ About */}
            <div className="gsap-about-sec opacity-0">
                <AboutSection />
            </div>

            {/* 3 ─ Services */}
            <div className="gsap-services-sec">
                <ServicesSection />
            </div>

          
          {/* ewff */}
            {/* 5 ─ Service Company */}
            <div className="gsap-company-sec">
                <ServiceCompany />
            </div>

            {/* 6 ─ Community */}
            <div className="gsap-community-sec opacity-0">
                <CommunitySection />
            </div>

            {/* 7 ─ Testimonials */}
            <div className="gsap-testimonials-sec opacity-0">
                <TestimonialSlider />
            </div>

            {/* 8 ─ Pricing */}
            <div className="gsap-pricing-sec">
                <PricingSection />
            </div>

            {/* 9 ─ FAQ */}
            <div className="gsap-faq-sec opacity-0">
                <FAQSection />
            </div>

            {/* 10 ─ Blog */}
            <div className="gsap-blog-sec opacity-0">
                <BlogSection />
            </div>

        </div>
    );
}
