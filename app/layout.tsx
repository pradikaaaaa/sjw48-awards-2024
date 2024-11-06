import type { Metadata } from "next";
import Header from "@/components/Header"
import "./globals.css"
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "SJW48 Awards 2024",
    description: "Fanbase of the Year",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressContentEditableWarning lang="en">
            <head>
                <link rel="icon" href="/images/favicon.ico" />
            </head>

            <body>
                <Header />
                {children}
                <Footer/>
                <ScrollToTop />
            </body>
        </html>
    )
}
