import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Yimza IT Consultancy Services",
  description:
    "Get in touch with Yimza Consult. Reach out for IT consultancy, training, academic support, or R&D inquiries. We respond within 24 business hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
