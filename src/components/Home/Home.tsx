"use client"; // Make this file a Client Component if it uses any hooks
// Optional: you can make only HeroSlider/TestimonialSlider client components insteads

import React from "react";

// Client Components
import HeroSlider from "@/components/HeroSlider";
import TestimonialSlider from "@/components/TestimonialSection";

// Server Components
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ServicesSection from "@/components/ServicesSection";
import CommunitySection from "@/components/CommunitySection";
import ServiceCompany from "@/components/ServiceCompany";
import FAQSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";
export const metadata = {
    title: "Best Software Company in Chennai | Syscorp",
    description:
        "Choose the best software company in Chennai – Syscorp delivers custom software development, web solutions, and digital transformation services for businesses of all sizes.",
};
export default function Home() {
    return (
        <div className="bg-white font-sans dark:bg-black">
            {/* Hero Slider (Client) */}
            <HeroSlider />

            {/* About Section (Server) */}
            <AboutSection />

            {/* Achievements Section */}
            <AchievementsSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Community Section */}
            <CommunitySection />

            {/* Testimonial Slider (Client) */}
            <TestimonialSlider />

            {/* Service Company Section */}
            <ServiceCompany />

            {/* FAQ Section */}
            <FAQSection />

            {/* Blog Section */}
            <BlogSection />
        </div>
    );
}
