import type {Metadata} from "next";
import {ThemeProvider} from "next-themes";
import {Geist, Geist_Mono, Inter, Space_Grotesk} from "next/font/google";
import {Toaster} from "@/components/ui/sonner"
import "./globals.css";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";
import React from "react";

const inter = Inter({
    variable: "--font-inter",
    weight: "variable",
    subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    weight: "variable",
    subsets: ["latin"]
})

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DevFlow",
    description: "A community-driven paltform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    icons: {
        icon: '/images/site-logo.svg'
    }
};

const RootLayout = async ({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>)  => {
    const session = await auth()
    return (
        <html lang="en"
              suppressHydrationWarning>
        <head>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
            />
        </head>
        <SessionProvider session={session}>
            <body
                className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
            >
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
            <Toaster position="top-center"/>
            </body>
        </SessionProvider>
        </html>
    );
}

export default RootLayout