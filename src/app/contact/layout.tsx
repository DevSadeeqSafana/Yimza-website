import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Yimza Consult via WhatsApp, phone, or email for IT consultancy, training, demos, and academic support. Gusau & Abuja.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
