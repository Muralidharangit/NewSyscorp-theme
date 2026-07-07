import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PageAnimationProvider from "@/components/PageAnimationProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
});

export const metadata = {
    title: "Best Software Company in Chennai | Syscorp",
    description:
        "Choose the best software company in Chennai – Syscorp delivers custom software development, web solutions, and digital transformation services for businesses of all sizes.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${plusJakarta.variable} ${inter.variable} font-sans antialiased`}>
                {/* Lenis smooth scroll — low-overhead RAF integration */}
                <SmoothScrollProvider />
                {/* GSAP scroll-trigger animations — runs only on main menu pages */}
                <PageAnimationProvider />
                <Header />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
