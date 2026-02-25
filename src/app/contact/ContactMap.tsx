"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ContactMap() {
    const [showMap, setShowMap] = useState(false);
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShowMap(true);
                    observer.disconnect();
                }
            },
            { threshold: 0 } // loads map slightly earlier
        );

        if (mapRef.current) observer.observe(mapRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={mapRef} className="w-full h-[450px] bg-gray-100">
            {showMap ? (
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.455807650604!2d79.80274197373379!3d11.942911588285844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536179f6a96021%3A0x6928eb4736d20045!2sSyscorp%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1767345645119!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    title="Syscorp Technology Pvt Ltd Location Map"
                    allowFullScreen
                    loading="lazy"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-500 font-medium text-lg">Loading Map...</p>
                </div>
            )}
        </section>
    );
}
