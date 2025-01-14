import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { FC } from "react"

const figtree = Figtree({
    subsets: ["latin"],
})

const description =
    "hey everyone, welcome to my website! Crush Plays"

export const metadata: Metadata = {
    title: {
        template: "%s | Developer Rahul",
        default: "Developer Rahul",
    },
    description,
    openGraph: {
        type: "website",
        title: "Developer Rahul",
        siteName: "Developer Rahul",
        url: "https://www.Developerrahul.com",
        description,
        images: [
            {
                url: "/og.jpg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Developer Rahul",
        description,
        images: [
            {
                url: "/og.jpg",
            },
        ],
    },
}

type RootLayoutProps = {
    children: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className={cn("bg-zinc-50 antialiased", figtree.className)}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout
