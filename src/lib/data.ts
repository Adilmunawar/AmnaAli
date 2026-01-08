import { PlaceHolderImages } from "@/lib/placeholder-images";

const findImage = (id: string) => {
  const img = PlaceHolderImages.find((p) => p.id === id);
  if (!img) {
    // Fallback for safety, though it should always be found
    return {
      id: "fallback",
      description: "Fallback image",
      imageUrl: "https://picsum.photos/seed/fallback/600/400",
      imageHint: "placeholder",
    };
  }
  return img;
};

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const about = {
  name: "Amna Ali",
  title: "Digital Marketer & Graphic Designer",
  bio: "A creative and results-driven professional with a passion for building brands and driving growth. With a unique blend of skills in digital marketing and graphic design, I bring a holistic approach to every project, ensuring that every detail is aligned with the overall strategy. From crafting compelling social media campaigns to designing beautiful and intuitive user interfaces, my goal is to create meaningful experiences that resonate with audiences and deliver tangible results.",
  image: findImage("amna-ali-profile"),
};

export const skills = [
  {
    category: "Digital Marketing",
    items: [
      { name: "SEO & SEM", level: 90 },
      { name: "Social Media Marketing", level: 95 },
      { name: "Content Strategy", level: 85 },
      { name: "Email Marketing", level: 80 },
      { name: "PPC Campaigns", level: 88 },
    ],
  },
  {
    category: "Graphic Design",
    items: [
      { name: "Adobe Creative Suite", level: 95 },
      { name: "UI/UX Design", level: 90 },
      { name: "Branding & Identity", level: 92 },
      { name: "Typography", level: 85 },
      { name: "Illustration", level: 75 },
    ],
  },
];

export const projects = [
  {
    id: "ecommerce-seo",
    name: "E-commerce SEO Strategy",
    type: "Digital Marketing",
    image: findImage("project-ecommerce-seo"),
    details:
      "Developed and executed a comprehensive SEO strategy for an online fashion retailer. This involved keyword research, on-page optimization, link building, and technical SEO audits. The project resulted in a 150% increase in organic traffic and a 60% uplift in online sales within six months.",
    tags: ["SEO", "E-commerce", "Content Strategy"],
  },
  {
    id: "social-media-campaign",
    name: "Beauty Brand Social Media Launch",
    type: "Digital Marketing",
    image: findImage("project-social-media"),
    details:
      "Led a multi-platform social media campaign to launch a new line of vegan beauty products. Created engaging content, managed influencer collaborations, and ran targeted ad campaigns on Instagram and TikTok. The campaign generated over 5 million impressions and achieved a 15% engagement rate.",
    tags: ["Social Media", "Influencer Marketing", "Ad Campaigns"],
  },
  {
    id: "brand-identity-design",
    name: "Brand Identity for Tech Startup",
    type: "Graphic Design",
    image: findImage("project-brand-identity"),
    details:
      "Crafted a complete brand identity for a new SaaS startup. This included logo design, color palette selection, typography guidelines, and marketing collateral. The final design system provided a strong, modern, and cohesive foundation for the company's launch.",
    tags: ["Branding", "Logo Design", "UI/UX"],
  },
  {
    id: "website-redesign",
    name: "Non-Profit Website Redesign",
    type: "Graphic Design",
    image: findImage("project-website-redesign"),
    details:
      "Redesigned the website for a local non-profit organization to improve user experience and increase donations. The project involved user research, wireframing, prototyping, and UI design. The new site saw a 200% increase in online donations and a 50% reduction in bounce rate.",
    tags: ["UI/UX", "Web Design", "Figma"],
  },
  {
    id: "content-marketing-strategy",
    name: "B2B Content Marketing",
    type: "Digital Marketing",
    image: findImage("project-content-marketing"),
    details:
      "Created a content marketing strategy for a B2B software company. This included creating blog posts, whitepapers, and case studies to attract and nurture leads. The strategy contributed to a 40% increase in qualified leads over a year.",
    tags: ["Content Marketing", "B2B", "Lead Generation"],
  },
  {
    id: "logo-design-startup",
    name: "Logo for a Coffee Shop",
    type: "Graphic Design",
    image: findImage("project-logo-design"),
    details:
      "Designed a logo and brand mark for a new artisanal coffee shop. The design process involved concept sketching, vector illustration, and creating variations for different applications like signage, cups, and digital menus. The final logo captured the shop's cozy and modern aesthetic.",
    tags: ["Logo Design", "Branding", "Illustration"],
  },
];

export type Project = (typeof projects)[0];

export const testimonials = [
  {
    quote:
      "Amna's creativity and strategic thinking are a powerful combination. She transformed our online presence and delivered results that exceeded our expectations.",
    name: "John Doe",
    title: "CEO, Fashion Retailer",
  },
  {
    quote:
      "Working with Amna was a fantastic experience. Her design sense is impeccable, and she was able to bring our brand's vision to life beautifully.",
    name: "Jane Smith",
    title: "Founder, SaaS Startup",
  },
  {
    quote:
      "The social media campaign Amna ran for us was a massive success. Her content was engaging, and she has a deep understanding of what resonates with audiences.",
    name: "Emily White",
    title: "Marketing Director, Beauty Brand",
  },
  {
    quote:
      "I was so impressed with Amna's professionalism and attention to detail. She took the time to understand our needs and delivered a website that we are incredibly proud of.",
    name: "Michael Brown",
    title: "Executive Director, Non-Profit",
  },
];
