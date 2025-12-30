import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialSlider from "@/components/TestimonialSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
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
            <section className="py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
                <div className="mx-auto px-4 space-y-20 lg:space-y-32">
                    {/* OUR VISION - Image Left, Text Right */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="relative w-full max-w-lg aspect-square lg:aspect-video">
                                <Image
                                    src="/images/about/vision.webp"
                                    alt="Illustration representing Syscorp's vision to become a top global brand"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 uppercase tracking-wider">
                                Our Vision
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At Syscorp, our vision is to establish ourselves as one of the top global brands by
                                enhancing technology to deliver world-class business solutions. We are committed to
                                creating opportunities for everyone associated with us to achieve their highest
                                potential.
                            </p>
                        </div>
                    </div>

                    {/* OUR MISSION - Image Right, Text Left */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 uppercase tracking-wider">
                                Our Mission
                            </h3>
                            <h4 className="text-xl font-semibold text-[#0F2453]">
                                Best Website Development company in Chennai
                            </h4>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our mission is to empower businesses by enhancing their online presence and connecting
                                them to a global audience. We aim to help small, medium, and large enterprises succeed
                                by ensuring their businesses thrive on the internet, enabling them to compete on a
                                global scale.
                            </p>

                            <Button href="#">
                                Get Started Now
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M8 4l8 8-8 8" />
                                </svg>
                            </Button>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-lg aspect-square lg:aspect-video">
                                <Image
                                    src="/images/about/mission.webp"
                                    alt="Illustration representing Syscorp's mission to empower businesses online"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AchievementsSection />

            <TestimonialSlider />
        </>
    );
};

export default Aboutus;
