import "./globals.css";
import React from "react";
import type {Metadata} from "next";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
    title: {
        template: "%s | Next Movies",
        default: "Loading...",
    },
    description: "Next Movies is the best site for movies and series",
};
export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <Navigation/>
        {children}
        </body>
        </html>
    );
}
