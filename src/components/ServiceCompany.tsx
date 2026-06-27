import React from "react";
import Link from "next/link";

export default function ServiceCompany() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#040B1A]">
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative rounded-3xl overflow-hidden flex flex-col md:flex-row items-center"
          style={{ backgroundColor: "#0099FF" }}
        >
          {/* Left Content */}
          <div className="flex-1 p-12 lg:p-20 relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-tight mb-6 tracking-tight">
              From Idea to Innovation.
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
              We Develop Software That Performs, We transform your ideas into high-performing, custom-built digital products that drive real business growth.
            </p>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-[400px] lg:w-[500px] p-12 lg:p-20 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/10 relative">
            {/* Grid Pattern Background */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />
            
            <div className="relative z-10 flex flex-col items-center">
              <Link 
                href="/contact"
                className="bg-white text-[#0099FF] hover:bg-gray-50 transition-colors duration-300 font-bold text-[17px] py-4 px-10 rounded-xl inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started Free 
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
              <p className="text-white/90 text-sm mt-4 font-medium">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
