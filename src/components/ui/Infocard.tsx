// components/ui/Infocard.tsx
import React from "react";

interface InfoCardProps {
    image: string;
    badge: string;
    title: string;
    admin: string;
    comments: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ image, badge, title, admin, comments }) => {
    return (
        <article className="group bg-white rounded-[10px] overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-50 h-full flex flex-col">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-[#1554DA] text-white text-sm font-bold px-6 py-3 rounded-bl-2xl">
                    {badge}
                </div>
            </div>

            {/* Content Area */}
            <div className="p-4 sm:p-6 md:p-6 space-y-5 flex flex-col flex-grow bg-[#F4F8FF]">
                <div className="flex items-center justify-between gap-6 text-sm text-gray-600 font-medium">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#258FEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                        By {admin}
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#258FEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                        </svg>
                        Comments ({comments})
                    </div>
                </div>

                <h3
                    className="card-heading font-bold text-[#0D1C16] leading-snug group-hover:text-[#1A5CDD] transition-colors cursor-pointer"
                    tabIndex={0}
                >
                    {title}
                </h3>

                <div className="mx-auto pt-4">
                    <button className="bg-gradient-to-r from-[#3FB5FD] to-[#0B6EDA] hover:bg-[#1A5CDD] text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all active:scale-95">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    );
};
