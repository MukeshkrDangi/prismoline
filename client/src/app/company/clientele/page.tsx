// File: /Users/apple/Desktop/Prismoline Web/prismoline/client/src/app/company/clientele/page.tsx
import CompanyHero from "@/components/Company/CompanyHero"; // Assuming @/components alias points to src/components
import ClienteleGrid, { ClientItem } from "@/components/Company/ClienteleGrid"; // Assuming @/components alias

const clients: ClientItem[] = [
  {
    name: "MORTH",
    logo: "/images/icons/cn2.svg", // Ensure these paths match your /public/images directory
    url: "https://morth.nic.in/",
    description: "We partnered with the MORTH to develop a secure content delivery network for their global audience, ensuring high-speed access to news and media.",
    caseStudy: "#"
  },
  {
    name: "The New York Times",
    logo: "/images/icons/cn3.png",
    url: "https://www.nytimes.com",
    description: "Our team provided strategic consulting and technical implementation to optimize their digital subscription platform, improving user retention and experience.",
    caseStudy: "#" // Add a case study link if available
  },
  {
    name: "Aston Martin",
    logo: "/images/icons/cn1.png",
    url: "https://www.astonmartin.com",
    description: "We created a bespoke e-commerce solution for their exclusive merchandise, integrating a seamless and luxurious shopping experience.",
  },
  {
    name: "Tesco",
    logo: "/images/icons/cn4.png",
    url: "https://www.tesco.com",
    description: "A collaborative project to enhance their mobile app's loyalty program features, resulting in a significant increase in user engagement.",
    caseStudy: "#"
  },
  {
    name: "Mercedes-Benz",
    logo: "/images/icons/cn5.webp",
    url: "https://www.mercedes-benz.com",
    description: "Developed a real-time data analytics dashboard for their manufacturing process, enabling faster decision-making and operational efficiency.",
  },
  {
    name: "Google",
    logo: "/images/icons/cn6.png",
    url: "https://www.google.com",
    description: "We helped Google distribute their new app called Allo / Duo. Developed a modern, user-friendly interface to engage new users.",
    caseStudy: "#"
  },
  {
    name: "Instagram",
    logo: "/images/icons/Asset 1.png",
    url: "https://www.instagram.com",
    description: "Our contribution helped optimize their image processing algorithms to support new filter technologies and improve performance.",
  },
  // Placeholder clients using your existing image paths from public/images/
  { name: "Smart Solutions", logo: "/images/whatwedo/smart.jpg", description: "Providing smart solutions for various business challenges." },
  { name: "Innovative Tech", logo: "/images/whatwedo/smart1.jpg", description: "Leading the way in technological innovation." },
  { name: "Digital Dynamics", logo: "/images/whatwedo/smart2.jpg", description: "Driving digital transformation for enterprises." },
  { name: "Global Partners", logo: "/images/who1.jpg", description: "A trusted partner in global ventures." },
  { name: "Future Systems", logo: "/images/who2.jpg", description: "Building systems for tomorrow's world." },
  { name: "Core Enterprises", logo: "/images/who3.jpg", description: "Providing essential services across industries." },
];

export default function ClientelePage() {
  return (
    <main className="pt-24 md:pt-28 bg-slate-50 min-h-screen">
      <CompanyHero
        title="Our Valued Clientele"
        subtitle="We partner with industry leaders to deliver impactful solutions."
      />
      <ClienteleGrid items={clients} />
    </main>
  );
}