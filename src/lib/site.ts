export const siteConfig = {
  brand: "Yimza Consult",
  legalName: "Yimza IT Consultancy Services Ltd",
  tagline: "IT Consultancy, Training & Academic Support",
  url: "https://www.yimzaconsult.com.ng",
  email: "info@yimzaconsult.com",
  phone: "+234 701 102 1667",
  phoneRaw: "2347011021667",
  whatsappUrl: "https://wa.me/2347011021667",
  locations: ["Gusau", "Abuja", "Online"] as const,
  addressLine: "Gusau & Abuja, Nigeria",
  hours: "Mon – Fri, 9AM – 6PM WAT",
  socials: {
    facebook: "https://web.facebook.com/profile.php?id=61579317059845",
    twitter: "https://x.com/Yimzaconsult",
    instagram: "https://www.instagram.com/yimza_consultltd/",
  },
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/training", label: "Training" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { label: "Training & Workshops", href: "/services#taw" },
    { label: "Academic Support", href: "/services#as" },
    { label: "Research & Development", href: "/services#rad" },
    { label: "General IT Consultancy", href: "/services#gitc" },
  ],
  products: [
    { label: "YimzaCare (HMS)", href: "/products#yimzacare" },
    { label: "YimzaEdu (SMS)", href: "/products#yimzaedu" },
  ],
  trainingPrograms: [
    "Software Development",
    "Artificial Intelligence",
    "Data Analytics",
    "Cybersecurity",
    "Cloud Computing",
    "UI/UX Design",
    "Product Management",
    "Digital Marketing",
    "Research Methodology",
    "ICT for Educators",
    "Computer Appreciation",
    "Corporate Digital Transformation",
  ],
} as const;

export type PageCtaVariant =
  | "home"
  | "about"
  | "services"
  | "products"
  | "training"
  | "contact"
  | "default";

export const pageCtas: Record<
  PageCtaVariant,
  {
    title: string;
    text: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  }
> = {
  home: {
    title: "Ready to choose your path?",
    text: "Whether you want to train, advise your organisation, or deploy software — tell us where to start.",
    primary: { label: "Talk to us", href: "/contact" },
    secondary: { label: "Browse training", href: "/training" },
  },
  about: {
    title: "Work with a team that shows up",
    text: "Share your goals. We will respond with a clear next step within one business day.",
    primary: { label: "Start a conversation", href: "/contact" },
  },
  services: {
    title: "Need a scoped proposal?",
    text: "Tell us which service fits — training, R&D, academic support, or IT consultancy.",
    primary: { label: "Request a proposal", href: "/contact?intent=services" },
  },
  products: {
    title: "See YimzaCare or YimzaEdu in action",
    text: "Book a live walkthrough tailored to your hospital or school workflows.",
    primary: { label: "Schedule a demo", href: "/contact?intent=demo" },
    secondary: { label: "Talk to an architect", href: "/contact?intent=architect" },
  },
  training: {
    title: "Ready to build digital skills?",
    text: "Register for a programme. Fees and intake dates are confirmed after a short intro call.",
    primary: { label: "Register now", href: "/training#registration-form" },
    secondary: {
      label: "Corporate training",
      href: "/contact?intent=corporate-training",
    },
  },
  contact: {
    title: "Prefer WhatsApp?",
    text: "Message us directly — many clients start there.",
    primary: { label: "Chat on WhatsApp", href: "https://wa.me/2347011021667" },
  },
  default: {
    title: "How can we help?",
    text: "Reach out and we will point you to the right path.",
    primary: { label: "Contact us", href: "/contact" },
  },
};

export const audiencePaths = [
  {
    id: "learners",
    title: "Learners",
    desc: "Build job-ready digital skills with practical training.",
    href: "/training",
    cta: "Browse programmes",
  },
  {
    id: "organisations",
    title: "Organisations",
    desc: "Upskill teams and modernise IT with clear roadmaps.",
    href: "/services#gitc",
    cta: "Explore consultancy",
  },
  {
    id: "schools",
    title: "Schools",
    desc: "Run admissions, grades, and fees with YimzaEdu.",
    href: "/products#yimzaedu",
    cta: "View YimzaEdu",
  },
  {
    id: "hospitals",
    title: "Hospitals",
    desc: "Digitise clinical and admin workflows with YimzaCare.",
    href: "/products#yimzacare",
    cta: "View YimzaCare",
  },
] as const;
