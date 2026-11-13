import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Professional Training",
  description:
    "Register for Yimza Consult training in software, AI, data, cybersecurity, and more. Gusau, Abuja, and online. Fees confirmed after a short intro call.",
  openGraph: {
    title: `Professional Training | ${siteConfig.brand}`,
    description:
      "Practical digital skills programmes with a Yimza Professional Training Certificate on completion.",
    url: `${siteConfig.url}/training`,
    images: [{ url: "/training_hero.png", alt: "Yimza training" }],
  },
};

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
