"use client";

import React, { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { fetchStrapi } from "@/lib/strapi";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const response = await fetchStrapi("contact-forms", {
                data: formData
            }, {
                method: 'POST'
            });

            if (response.data) {
                setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
                setFormData({
                    fullName: "",
                    email: "",
                    phoneNumber: "",
                    message: ""
                });
            } else {
                throw new Error("Failed to submit form");
            }
        } catch (error: any) {
            console.error("Submission error:", error);
            const errorMessage = error.message || "Something went wrong. Please try again later.";
            setStatus({ type: 'error', message: `Error: ${errorMessage}` });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {status && (
                <div className={`p-4 rounded-lg mb-4 ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {status.message}
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
