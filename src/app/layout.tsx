import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Amna Ali - Creative Visionary",
    description: "Amna Ali, Founder of ARS Ltd. - Expert Graphic Designer, Digital Marketing Strategist & SEO Specialist. Creating innovative digital experiences that transform brands.",
    authors: [{ name: "Amna Ali - ARS Ltd." }],
    keywords: "Graphic Design, Digital Marketing, SEO Expert, Brand Identity, ARS Ltd, Amna Ali, Creative Director",
    openGraph: {
        title: "Amna Ali - Creative Visionary | ARS Ltd. Founder",
        description: "Expert Graphic Designer, Digital Marketing Strategist & SEO Specialist. Creating innovative digital experiences that transform brands.",
        type: "website",
        images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
    },
    twitter: {
        card: "summary_large_image",
        site: "@lovable_dev",
        images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}
