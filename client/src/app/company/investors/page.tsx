import CompanyHero from "@/components/Company/CompanyHero";
import InvestorSection from "@/components/Company/InvestorSection";

export default function InvestorsPage() {
  return (
    <main className="pt-24 md:pt-28 bg-slate-50 min-h-screen">
      <CompanyHero
        title="Investors"
        subtitle="Performance, governance and sustainable growth for long-term value."
      />
      <InvestorSection
        stats={[
          { label: "YoY Revenue Growth", value: "27%", note: "FY24 audited" },
          { label: "Projects Delivered", value: "120+" },
          { label: "On-time Delivery", value: "96%" },
          { label: "Client Retention", value: "92%" },
        ]}
        bullets={[
          "Strong order book in road safety & markings",
          "Asset-light execution with reliable margins",
          "Robust compliance & transparent reporting",
          "Experienced leadership & technical team",
        ]}
      />
    </main>
  );
}
