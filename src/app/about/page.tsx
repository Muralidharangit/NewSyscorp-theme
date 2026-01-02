import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialSlider from "@/components/TestimonialSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { Link } from "lucide-react";
import Image from "next/image";

const Aboutus = () => {
    return (
        <>
            {/* Dynamic Header Banner */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Us</h1>

                    <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-[2rem] border border-white/20">
                        <Breadcrumbs />
                    </div>
                </div>
            </section>

            <AboutSection />

            
          <section className="bg-[#E9F7EF] py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="container mx-auto">
        
        {/* Top Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#0D3B31]">✦</span>
              <span className="text-sm font-semibold text-[#0D3B31] tracking-wider uppercase">Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0D3B31] leading-tight">
              Empowering businesses with <span className="text-[#86EFAC]">tailored solutions</span>
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="text-[#0D3B31]/70 text-lg leading-relaxed">
              We believe every business is unique, and so are its challenges. Our approach focuses on understanding your specific needs and delivering personalized solutions that drive growth, streamline operations, and maximize efficiency. With a commitment to innovation and collaboration, we empower businesses to achieve their full potential and adapt to an ever-changing market landscape.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Mission & Vision Cards */}
          <div className="space-y-12">
            {/* Our Mission */}
            <div className="group">
              <div className="mb-6 relative inline-block">
                <div className="absolute -top-1 -right-2 w-8 h-8 bg-[#86EFAC] rounded-full opacity-50 -z-10 group-hover:scale-110 transition-transform"></div>
                <i className="fas fa-server text-3xl text-[#0D3B31]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#0D3B31] mb-4">Our Mission</h3>
              <p className="text-[#0D3B31]/70 leading-relaxed max-w-md">
                Our mission is to establish ourselves as one of the top global brands by enhancing technology to deliver world-class business solutions.
              </p>
              <div className="h-px w-full bg-[#0D3B31]/10 mt-12"></div>
            </div>

            {/* Our Vision */}
            <div className="group">
              <div className="mb-6 relative inline-block">
                <div className="absolute -top-1 -right-2 w-8 h-8 bg-[#86EFAC] rounded-full opacity-50 -z-10 group-hover:scale-110 transition-transform"></div>
                <i className="fas fa-gem text-3xl text-[#0D3B31]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#0D3B31] mb-4">Our Vision</h3>
              <p className="text-[#0D3B31]/70 leading-relaxed max-w-md">
                Our mission is to empower businesses by enhancing their online presence and connecting them to a global audience.
              </p>
            </div>
          </div>

          {/* Right Column: Featured Image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden shadow-2xl">
            <Image
              src="/images/about/approach-main.jpg" 
              alt="Team analyzing data on screens"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-20">
          <p className="text-[#0D3B31] font-medium">
            Let's Work Together To Turn Your Goals Into Reality.{" "}
            <Link href="/contact" className="underline font-bold hover:text-[#0D3B31]/70 transition-colors">
              Contact Us Today
            </Link>
          </p>
        </div>
      </div>
    </section>

            <AchievementsSection />

            <TestimonialSlider />
        </>
    );
};

export default Aboutus;
