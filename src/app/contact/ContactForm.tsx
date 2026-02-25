"use client";

import React, { useState } from "react";
import { Loader2, Send } from "lucide-react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-5 py-4 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50/50"
                        required
                    />
                </div>

                <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="example@mail.com"
                        className="w-full px-5 py-4 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50/50"
                        required
                    />
                </div>
            </div>

            <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Contact Number
                </label>
                <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-5 py-4 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50/50"
                    required
                />
            </div>

            <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Your Message
                </label>
                <textarea
                    placeholder="Tell us about your requirements..."
                    className="w-full px-5 py-4 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50/50 resize-none min-h-[200px]"
                    required
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-gradient-to-r from-[#3FB5FD] to-[#0B6EDA] text-white px-12 py-4 font-bold transition-all flex items-center justify-center shadow-lg shadow-blue-200 active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin mr-3" />
                        <span>Processing...</span>
                    </>
                ) : (
                    <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 ml-3 opacity-80" />
                    </>
                )}
            </button>
        </form>
    );
}
