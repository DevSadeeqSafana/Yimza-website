import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products — YimzaCare & YimzaEdu",
  description:
    "White-label hospital and school management systems from Yimza Consult. Book a live demo of YimzaCare HMS or YimzaEdu SMS.",
  openGraph: {
    title: `Products | ${siteConfig.brand}`,
    description:
      "YimzaCare for hospitals and YimzaEdu for schools — adaptable management platforms.",
    url: `${siteConfig.url}/products`,
    images: [{ url: "/YimzaCare.jpeg", alt: "YimzaCare" }],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
