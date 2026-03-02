"use client";
import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";

const services = [
    {
        title: "Custom Software Development",
        desc: "We build scalable, secure, and high-performance software to your unique business requirements.",
        image: "/images/card/card-bg.png",
        img: "/images/icons/6.svg",
    },
    {
        title: "Web Application Development",
        desc: "Modern, responsive, SEO-friendly websites & enhance user experience & boost conversions.",
        image: "/images/card/card-bg.png",
        img: "/images/icons/7.svg",
    },
    {
        title: "E-Commerce Development",
        desc: "Powerful online store solutions with secure payment integration and user experience.",
        image: "/images/card/card-bg.png",
        img: "/images/icons/8.svg",
    },
];
const services_1 = [
    {
        title: "Software Maintenance & Support",
        desc: "Ongoing monitoring, updates, and technical support to ensure peak performance and security.",
        image: "/images/card/card-bg.png",
        img: "/images/icons/9.svg",
    },
    {
        title: "Search Engine Optimization",
        desc: "Data-driven SEO strategies to improve Google rankings, increase organic traffic, and boost online visibility.",
        image: "/images/card/card-bg.png",
        img: "/images/icons/10.svg",
    },
    {
        title: "Digital Marketing Services",
        desc: "Performance-based including Google Ads, social media marketing and lead generation campaigns.",
        image: "/images/card/card-bg.png",
        img: "/images/icons/11.svg",
    },
];

export default function ServicesSection() {
    return (
        <section aria-labelledby="services-heading" className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4 text-center md:text-left">
                        <span className="inline-block rounded-full bg-[#1A5CDD] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white ring-4 ring-[#1A5CDD]/10">
                            Our Services
                        </span>
                        <h2 id="services-heading" className="heading-1 font-extrabold text-gray-900 leading-[1.2]">
                            we provide end-to-end technology solutions
                        </h2>
                    </div>

                    <Button href="/services" aria-label="View more services">
                        More Services
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M8 4l8 8-8 8" />
                        </svg>
                    </Button>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#F4F8FF] rounded-xl p-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group rounded-3xl p-10 text-center overflow-hidden min-h-[400px] flex flex-col justify-center"
                        >
                            {/* Decorative Background */}
                            <div
                                className="absolute inset-0 z-0 opacity-30"
                                style={{
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                aria-hidden="true"
                            />

                            {/* Icon */}
                            <div className="relative z-20 mx-auto w-20 h-20 bg-gradient-to-b from-[#38ABF9] to-[#1C85E5] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
                                {/* {service.icon} */}
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-20 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                <p className="text-gray-800 text-sm leading-relaxed">{service.desc}</p>

                                {/* <button
                                    className="mt-4 bg-white text-gray-900 font-bold py-2.5 px-8 rounded-full shadow-sm border border-gray-100 text-sm transition-colors duration-300 hover:bg-[#0b6eda] hover:text-white cursor-pointer"
                                    aria-label={`Learn more about ${service.title}`}
                                >
                                    Learn More
                                </button> */}
                                <Link
                                    href="/services"
                                    className="mt-4 inline-block bg-white text-gray-900 font-bold py-2.5 px-8 rounded-full shadow-sm border border-gray-100 text-sm transition-colors duration-300 hover:bg-[#0b6eda] hover:text-white"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#F4F8FF] rounded-xl p-6 mt-10">
                    {services_1.map((service, index) => (
                        <div
                            key={index}
                            className="relative group rounded-3xl p-10 text-center overflow-hidden min-h-[400px] flex flex-col justify-center"
                        >
                            {/* Decorative Background */}
                            <div
                                className="absolute inset-0 z-0 opacity-30"
                                style={{
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                aria-hidden="true"
                            />

                            {/* Icon */}
                            <div className="relative z-20 mx-auto w-20 h-20 bg-gradient-to-br from-[#3FB5FD] to-[#1A5CDD] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
                                {/* {service.icon} */}
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-20 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                <p className="text-gray-800 text-sm leading-relaxed">{service.desc}</p>

                                {/* <button
                                    className="mt-4 bg-white text-gray-900 font-bold py-2.5 px-8 rounded-full shadow-sm border border-gray-100 text-sm transition-colors duration-300 hover:bg-[#0b6eda] hover:text-white cursor-pointer"
                                    aria-label={`Learn more about ${service.title}`}
                                >
                                    Learn More
                                </button> */}
                                <Link
                                    href="/services"
                                    className="mt-4 inline-block bg-white text-gray-900 font-bold py-2.5 px-8 rounded-full shadow-sm border border-gray-100 text-sm transition-colors duration-300 hover:bg-[#0b6eda] hover:text-white"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
