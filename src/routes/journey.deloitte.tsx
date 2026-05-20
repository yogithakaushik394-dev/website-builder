import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";


export const Route = createFileRoute("/journey/deloitte")({
  head: () => ({
    meta: [
      { title: "Deloitte — Yogitha Kaushik" },
      { name: "description", content: "Five years at Deloitte: ERP implementation, SAP security architecture, and LGBTQIA+ inclusion." },
    ],
  }),
  component: Page,
});

const roles = [
  {
    title: "Solution Delivery Advisor",
    dates: "2023 — 2024",
    body: "Led end-to-end SAP S/4HANA upgrade and Fiori implementation for a $4B technology client across multiple geographies. Designed Master Data Management and security architecture from scratch, coordinated cross-functional workstreams including finance, supply chain, and IT operations, and maintained executive alignment through go-live, delivering 20% productivity improvement. Served as primary client liaison for senior stakeholder team. Led weekly implementation governance reviews, maintained delivery dashboards tracking KPIs and risks, and ensured on-time go-live and seamless transition to ongoing support operations.",
  },
  {
    title: "Solution Delivery Associate",
    dates: "2021 — 2023",
    body: "Designed SAP Master Data Management and Production Planning solutions for a $2B chemical manufacturing client. Managed issue resolution and progress tracking across execution teams, coordinated with finance and supply chain stakeholders, and improved daily operations and productivity by 12%. Managed post-go-live stabilization on-site. Provided daily status updates to C-suite, resolved system incidents and control gaps, maintained delivery dashboards tracking KPIs and risks, trained incoming support team on maintenance protocols and best practices, and ensured seamless transition to ongoing support operations.",
  },
  {
    title: "Solution Delivery Analyst",
    dates: "2019 — 2021",
    body: "Collaborated with Deloitte South Africa serving the top 3 mining sector clients. Led GRC platform automation project that improved 30-member team productivity by 20% and reduced compliance review cycle time by 40%. Conducted IT governance reviews including IT General Controls assessments, segregation of duties evaluations, and risk assessments across multi-jurisdictional client environments. Identified and remediated control gaps, designed compensating controls, and ensured Sarbanes-Oxley and IT risk compliance.",
  },
];

const gayJob = [
  "Managed end-to-end vendor selection and onboarding of LGBTQIA+ inclusion training for Deloitte managers. Increased manager participation in DEI training by 30% and established ongoing executive coaching cadence.",
  "Designed and ran Reverse Mentoring program coaching 30+ Deloitte partners, principals, and MDs on LGBTQIA+ inclusion. Directly increased senior leadership participation in DEI initiatives by 25%.",
  "Designed and executed firm-wide Pride inclusion event Ikigai. Managed vendor engagement, talent recruitment, and logistics to deliver record attendance of 1,000+ and measurably increased allyship across the firm by 25%.",
  "Completed Deloitte's DFX certification to facilitate inclusion workshops firm-wide.",
];

function Page() {
  return (
    <article>
      <PageHeader eyebrow="Chapter 03" title="Deloitte" />

      <section className="px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="eyebrow mb-2">My day job</div>
          <h2 className="serif text-3xl md:text-5xl">ERP implementation.</h2>
        </div>
        <div className="space-y-px bg-rule border border-rule">
          {roles.map((r) => (
            <div key={r.title} className="bg-paper p-6 md:p-10 grid md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="aspect-[4/3] overflow-hidden grain mb-4">
                  <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="eyebrow">{r.dates}</div>
                <h3 className="serif text-2xl mt-2">{r.title}</h3>
              </div>
              <p className="text-foreground/85 leading-relaxed text-justify hyphens-auto">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-6xl mx-auto mt-24 pt-16 border-t border-rule">
        <div className="mb-10">
          <div className="eyebrow mb-2">My other job</div>
          <h2 className="serif text-3xl md:text-5xl">
            My <span className="rainbow-text italic">gay</span> job: LGBTQIA+ Inclusion Council member.
          </h2>
        </div>
        <ul className="space-y-6 max-w-3xl">
          {gayJob.map((line, i) => (
            <li key={i} className="flex gap-5 text-foreground/85 leading-relaxed text-justify hyphens-auto">
              <span className="serif text-accent text-2xl leading-none mt-1">0{i + 1}</span>
              <p>{line}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
