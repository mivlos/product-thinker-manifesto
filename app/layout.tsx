import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Product Thinker Manifesto | Oli Mival",
  description:
    "I don't manage products. I think about them. A manifesto for a new kind of product leader who orchestrates human creativity and AI execution. By Oli Mival, VP Product Strategy at Picsart.",
  openGraph: {
    title: "The Product Thinker Manifesto",
    description:
      "I don't manage products. I think about them. By Oli Mival — VP Product Strategy, Innovation & Experience at Picsart.",
    type: "website",
    locale: "en_US",
    siteName: "Product Thinker Manifesto",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Product Thinker Manifesto | Oli Mival",
    description:
      "I don't manage products. I think about them. AI handles the rest.",
  },
  keywords: [
    "product thinker",
    "agentic PDLC",
    "AI product management",
    "Picsart",
    "Oli Mival",
    "product strategy",
    "AI orchestration",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0a] text-[#f5f0e8] antialiased">
        {children}
      </body>
    </html>
  );
}
