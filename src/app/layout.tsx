import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata = {
    title: "My Website",
    description: "Best Website Development Company",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
            </head>

            <body className="antialiased">
                <Header />

                <main id="main-content">{children}</main>

                <Footer />
            </body>
        </html>
    );
}
