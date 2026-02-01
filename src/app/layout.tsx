import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Aurora from "@/components/Aurora";

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
            <div className="min-h-screen relative overflow-x-hidden">
              <Aurora
                colorStops={["#0F172A", "#0D9488", "#10B981"]}
                blend={0.7}
                amplitude={1.2}
                speed={0.8}
              />
              <div className="relative z-10 flex flex-col min-h-screen">
                {children}
              </div>
            </div>
        </Providers>
      </body>
    </html>
  );
}
