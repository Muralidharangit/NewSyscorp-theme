import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutSection() {
    return (
        <section aria-labelledby="about-heading" className="relative overflow-hidden py-16 px-6 md:px-12 lg:px-24">
            {/* ================= BACKGROUND IMAGE (Decorative) ================= */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <Image
                    src="/images/tech.webp"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    quality={70}
                    className="object-cover"
                />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
                {/* ================= LEFT COLUMN ================= */}
                <div className="relative flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-md">
                        {/* Main Image (Informative) */}
                        <div className="relative z-10 overflow-hidden rounded-xl">
                            <Image
                                src="/images/home/about-home.webp"
                                alt="Business consultant presenting growth strategies to a client"
                                width={500}
                                height={600}
                                priority
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        {/* Growth Card (Decorative) */}
                        <div
                            className="absolute -left-6 -top-6 z-20 hidden rounded-xl border border-gray-200 bg-white p-4 shadow-xl sm:block"
                            aria-hidden="true"
                        >
                            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-700">Growth Rate</p>
                            <div className="mt-2 flex h-10 items-end gap-1.5">
                                <span className="h-1/2 w-2 rounded-full bg-[#1A5CDD]/30" />
                                <span className="h-3/4 w-2 rounded-full bg-[#1A5CDD]/50" />
                                <span className="h-full w-2 rounded-full bg-[#1A5CDD]" />
                                <span className="h-2/3 w-2 rounded-full bg-[#1A5CDD]/70" />
                            </div>
                        </div>

                        {/* Experience Card */}
                        <div className="absolute -bottom-8 -right-4 z-20 w-72 rounded-2xl bg-[#1A5CDD] p-6 text-white">
                            <p className="text-3xl font-extrabold">10+</p>
                            <p className="mb-4 text-sm text-white">Years of Winning Experience</p>

                            <div className="flex items-center gap-4 border-t border-white/30 pt-3">
                                {/* Decorative avatars */}
                                <div className="flex -space-x-3" aria-hidden="true">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="h-9 w-9 overflow-hidden rounded-full border-2 border-[#1A5CDD] bg-gray-300"
                                        >
                                            <Image src="/images/user.avif" alt="" width={36} height={36} />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs font-medium text-white">5 million+ customers worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT COLUMN ================= */}
                <div className="flex flex-col space-y-7">
                    {/* Section Label */}
                    {/* <span className="inline-flex w-fit items-center rounded-full bg-[#1A5CDD] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                        About Us
                    </span> */}
                    <span className="inline-flex w-fit items-center rounded-full bg-[#1A5CDD] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white ring-4 ring-[#1A5CDD]/10">
                        About Us
                    </span>
                    {/* Section Heading */}
                    <h2 id="about-heading" className="heading font-black leading-[1.1] text-gray-900">
                        Ensure The Success Of Your Business Venture
                    </h2>

                    <p className="max-w-xl text-lg leading-relaxed text-gray-700">
                        Business consulting is a dynamic field that helps organizations succeed through informed
                        strategy, planning, and execution.
                    </p>

                    {/* Features */}
                    <div className="space-y-8 pt-2">
                        {/* Feature 1 */}
                        <div className="flex gap-5">
                            <div
                                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-md"
                                aria-hidden="true"
                            >
                                {/* <svg
                                    className="h-7 w-7 text-[#1A5CDD]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg> */}
                                <img src="images/icons/1.svg" alt="" className="h-7 w-7 text-[#1A5CDD]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Simplifying Complexity</h3>
                                <p className="mt-1 text-sm leading-snug text-gray-700">
                                    We transform complex business data into clear, actionable insights.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-5">
                            <div
                                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-md"
                                aria-hidden="true"
                            >
                                {/* <svg
                                    className="h-7 w-7 text-[#1A5CDD]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                </svg> */}
                                <img src="images/icons/2.svg" alt="" className="h-7 w-7 text-[#1A5CDD]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Empowering Growth</h3>
                                <p className="mt-1 text-sm leading-snug text-gray-700">
                                    Our strategies are designed to scale your business safely and sustainably.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                        <Button href="#" aria-label="Get started with our services">
                            Get Started
                            <svg
                                className="ml-2 h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path d="M8 4l8 8-8 8" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
