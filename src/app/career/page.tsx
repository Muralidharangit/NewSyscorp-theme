import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
    Code,
    PenTool,
    Megaphone,
    MapPin,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const CareerOpenings = () => {
    return (
        <>
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="heading-1 font-extrabold text-white mb-4">WE ARE HIRING!</h1>
                    <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-[2rem] border border-white/20">
                        <Breadcrumbs />
                    </div>
                </div>
            </section>

            <section className="bg-[#F8F9FA] py-20 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1: Creative Medium */}
                        <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-[#1a5cdd]/10 flex items-center justify-center text-[#1a5cdd]">
                                        <Code className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a5cdd] block mb-1">
                                            Engineering
                                        </span>
                                        <div className="flex items-center text-gray-600 text-[11px] font-medium">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            <span>Remote / New York</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-gray-600 text-[10px] font-semibold">2 days ago</span>
                            </div>

                            <h3 className="text-[18px] font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#1a5cdd] transition-colors">
                                Frontend Developer
                            </h3>
                            <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                                We are hiring Way-finding, Orientation and Navigation Systems designer to build modern
                                interfaces.
                            </p>

                            <button className="w-50 mx-auto bg-[#1a5cdd]/5 text-[#1a5cdd] font-bold py-3 rounded-full hover:bg-[#1a5cdd] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                Apply Now
                                <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>

                        {/* Card 2: Spread-it */}
                        <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-[#1a5cdd]/10 flex items-center justify-center text-[#1a5cdd]">
                                        <PenTool className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a5cdd] block mb-1">
                                            Creative
                                        </span>
                                        <div className="flex items-center text-gray-600 text-[11px] font-medium">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            <span>On-site / London</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-gray-600 text-[10px] font-semibold">4 days ago</span>
                            </div>

                            <h3 className="text-[18px] font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#1a5cdd] transition-colors">
                                UI/UX Designer
                            </h3>
                            <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                                UI/UX Design for APP/Dashboard/Content Management System projects.
                            </p>

                            <button className="w-50 mx-auto bg-[#1a5cdd]/5 text-[#1a5cdd] font-bold py-3 rounded-full hover:bg-[#1a5cdd] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                Apply Now
                                <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>

                        {/* Card 3: Shuriken Rush */}
                        <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-[#1a5cdd]/10 flex items-center justify-center text-[#1a5cdd]">
                                        <Megaphone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a5cdd] block mb-1">
                                            Marketing
                                        </span>
                                        <div className="flex items-center text-gray-600 text-[11px] font-medium">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            <span>Hybrid / Dubai</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-gray-600 text-[10px] font-semibold">1 week ago</span>
                            </div>

                            <h3 className="text-[18px] font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#1a5cdd] transition-colors">
                                UI/UX Designer
                            </h3>
                            <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                                A startup creative agency is looking for a talented UI/UX Designer to join our team.
                            </p>

                            <button className="w-50 mx-auto bg-[#1a5cdd]/5 text-[#1a5cdd] font-bold py-3 rounded-full hover:bg-[#1a5cdd] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                Apply Now
                                <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 flex justify-center items-center gap-2">
                        <button
                            aria-label="Previous Page"
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-[#1a5cdd] hover:text-white transition-all duration-300"
                        >
                            <ChevronLeft className="w-3 h-3" />
                        </button>

                        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1a5cdd] text-white font-bold text-sm">
                            1
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-[#1a5cdd] hover:text-[#1a5cdd] font-bold text-sm transition-all duration-300">
                            2
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-[#1a5cdd] hover:text-[#1a5cdd] font-bold text-sm transition-all duration-300">
                            3
                        </button>
                        <span className="px-2 text-gray-600 font-bold">...</span>

                        <button
                            aria-label="Next Page"
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-[#1a5cdd] hover:text-white transition-all duration-300"
                        >
                            <ChevronRight className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CareerOpenings;
