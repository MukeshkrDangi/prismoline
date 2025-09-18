import TeamSpotlight, { TeamMember } from "@/components/Company/TeamGrid";
import CompanyHero from "@/components/Company/CompanyHero";
import DirectorsMessage from "@/components/Company/DirectorsMessage";

const team: TeamMember[] = [
  {
    name: "Rishav sh",
    role: "Founder & CEO",
    photo: "/images/who1.jpg",
    bio: "Mukesh leads our vision and strategy, ensuring we deliver excellence on every project. With over 20 years of industry experience, he is a true innovator.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "A. Sharma",
    role: "Head of Operations",
    photo: "/images/who2.jpg",
    bio: "A. Sharma is the backbone of our operations, ensuring all processes run smoothly and efficiently. Her attention to detail is unmatched.",
    linkedin: "#",
  },
  {
    name: "R. Verma",
    role: "Project Director",
    photo: "/images/who3.jpg",
    bio: "R. Verma oversees all projects from start to finish, ensuring they are completed on time and exceed client expectations.",
    linkedin: "#",
  },
  {
    name: "S. Iyer",
    role: "Finance Lead",
    photo: "/images/who4.jpg",
    bio: "S. Iyer manages our financial health with expertise and precision, driving sustainable growth and strategic investment.",
    linkedin: "#",
  },
  {
    name: "K. Singh",
    role: "QA/QC Manager",
    photo: "/images/who5.jpg",
    bio: "K. Singh ensures our quality standards are second to none. His rigorous testing and quality control processes guarantee top-tier results.",
    linkedin: "#",
  },
  {
    name: "P. Gupta",
    role: "Design & R&D",
    photo: "/images/who6.jpg",
    bio: "P. Gupta is our creative force, leading design and research to pioneer innovative solutions that shape the future of our industry.",
    linkedin: "#",
  },
];

export default function TeamPage() {
  return (
    <main className="pt-24 md:pt-28 bg-slate-50 min-h-screen">
      <CompanyHero
        title="Our Leadership & Team"
        subtitle="A multidisciplinary team driving safety-first, on-time delivery."
      />
      <DirectorsMessage />   {/* ⬅️ Directors’ Message moved here */}
      <TeamSpotlight members={team} />
    </main>
  );
}