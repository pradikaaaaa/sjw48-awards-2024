import type { Metadata } from "next";
import Header from "@/components/Header"
import "./globals.css"
  
export const metadata: Metadata = {
    title: "SJW48 Awards",
    description: "Fanbase of the Year",
  };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressContentEditableWarning lang="en">
            <head />

            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
