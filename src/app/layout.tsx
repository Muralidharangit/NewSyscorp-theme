import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "My Website",
    description: "Best Website Development Company",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                <Header />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
