import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brand}`,
  },
  description:
    "Yimza Consult empowers individuals, institutions, and organisations with IT consultancy, training workshops, academic support, and management software across Nigeria.",
  keywords: [
    "IT consultancy Nigeria",
    "tech training Gusau",
    "academic support",
    "YimzaCare",
    "YimzaEdu",
    "digital transformation Abuja",
  ],
  openGraph: {
    title: `${siteConfig.brand} | ${siteConfig.tagline}`,
    description:
      "Practical IT consultancy, expert training, and management systems for schools and hospitals.",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    type: "website",
    images: [{ url: "/logo.jpeg", width: 512, height: 512, alt: siteConfig.brand }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} | ${siteConfig.tagline}`,
    description:
      "Practical IT consultancy, expert training, and management systems for schools and hospitals.",
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
