import "./globals.css";
import React from "react";
import Navigation from "@/components/Navigation";
import type {Metadata} from "next";

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
        {children}
        <Navigation/>
        </body>
        </html>
    );
}
