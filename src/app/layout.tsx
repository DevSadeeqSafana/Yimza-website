import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yimza Consult | IT Consultancy, Training & Academic Support",
  description:
    "Yimza IT Consultancy Services empowers individuals, institutions, and organizations with expert IT solutions, training workshops, academic support, and innovative R&D across Africa.",
  keywords:
    "IT consultancy Nigeria, tech training, academic support, data analytics, cybersecurity training, AI solutions, digital transformation",
  openGraph: {
    title: "Yimza Consult | IT Consultancy, Training & Academic Support",
    description:
      "Empowering growth through innovative IT solutions, expert training, and academic support.",
    url: "https://yimzaconsult.com.ng",
    siteName: "Yimza Consult",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
