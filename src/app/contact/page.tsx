"use client";
import dynamic from "next/dynamic";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactForm from "./ContactForm";
import { MapPin, Mail, Phone } from "lucide-react";

// Lazy-load the map to improve mobile TBT
const ContactMap = dynamic(() => import("./ContactMap"), { ssr: false });

export default function ContactUs() {
    return (
        <main>
            {/* Banner Section */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Contact Us
                    </h1>

                    <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-[2rem] border border-white/20 text-white">
                        <Breadcrumbs />
                    </div>
                </div>
            </section>

            {/* Main Section */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6 lg:px-16 flex flex-wrap -mx-4">
                    {/* Left Side: Contact Info */}
                    <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="inline-flex w-fit items-center rounded-full bg-[#1A5CDD] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white ring-4 ring-[#1A5CDD]/10">
                                ✦ Contact Us
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3B31] mb-8 leading-[1.1]">
                            Get in touch <span className="text-[#1a5cdd]">with us</span>
                        </h2>

                        <p className="text-[#0D3B31]/70 text-lg mb-12 max-w-md">
                            We’re here to help your business grow. Contact us today and let’s
                            take your business to the next level.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Chennai */}
                            <InfoCard
                                icon={<MapPin className="w-8 h-8 text-[#1a5cdd] relative z-10" />}
                                title="Chennai Address"
                                details={
                                    <>
                                        No.151, Raahat Plaza, <br />
                                        Arcot Road, Ottagapalayam <br />
                                        Vadapalani, Chennai – 600026, <br />
                                        Tamil Nadu, India
                                    </>
                                }
                            />

                            {/* Puducherry */}
                            <InfoCard
                                icon={<MapPin className="w-8 h-8 text-[#1a5cdd] relative z-10" />}
                                title="Puducherry Office"
                                details={
                                    <>
                                        No.37, Kamaraj Salai, <br />
                                        Thattanchavady, <br />
                                        Puducherry – 605009, India
                                    </>
                                }
                            />

                            {/* Email */}
                            <InfoCard
                                icon={<Mail className="w-8 h-8 text-[#1a5cdd] relative z-10" />}
                                title="Email"
                                details={
                                    <>
                                        <a
                                            href="mailto:syscorptechno@gmail.com"
                                            className="hover:text-[#1a5cdd]"
                                        >
                                            syscorptechno@gmail.com
                                        </a>
                                        <br />
                                        <a href="mailto:hr@itsk.in" className="hover:text-[#1a5cdd]">
                                            hr@itsk.in
                                        </a>
                                        <br />
                                        <a href="mailto:sales@itsk.in" className="hover:text-[#1a5cdd]">
                                            sales@itsk.in
                                        </a>
                                    </>
                                }
                            />

                            {/* Phone */}
                            <InfoCard
                                icon={<Phone className="w-8 h-8 text-[#1a5cdd] relative z-10" />}
                                title="Call Us"
                                details={
                                    <a href="tel:+919344430402" className="hover:text-[#1a5cdd]">
                                        +91 93444 30402
                                    </a>
                                }
                            />
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="w-full lg:w-1/2 px-4">
                        <p className="text-[#0D3B31]/70 text-lg mb-8 max-w-md">
                            Fill our enquiry form with your details and requirements.
                        </p>

                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Map Section (Lazy-loaded) */}
            <ContactMap />
        </main>
    );
}

// Reusable InfoCard Component
function InfoCard({
    icon,
    title,
    details,
}: {
    icon: React.ReactNode;
    title: string;
    details: React.ReactNode;
}) {
    return (
        <div className="space-y-4">
            <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#1a5cdd63] rounded-full opacity-60"></div>
                {icon}
            </div>
            <div>
                <p className="text-xl font-bold text-[#1a5cdd] mb-2">{title}</p>
                <p className="leading-relaxed text-gray-700">{details}</p>
            </div>
        </div>
    );
}
