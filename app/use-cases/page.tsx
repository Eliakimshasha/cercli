import Link from "next/link";

const cases = [
  {
    title: "Hybrid subscription + usage",
    description:
      "Blend base subscriptions with metered usage without manual calculations.",
    outcome: "Automated invoicing for every tier.",
  },
  {
    title: "Enterprise renewals",
    description:
      "Keep renewals on track with real-time health scores and stakeholder alerts.",
    outcome: "18-day average renewal cycle.",
  },
  {
    title: "Product-led expansion",
    description:
      "Surface expansion signals from product telemetry and feed CRM workflows.",
    outcome: "+12% net retention lift.",
  },
  {
    title: "Multi-entity finance",
    description:
      "Consolidate billing across regions, currencies, and entities.",
    outcome: "Single ledger across global teams.",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0f6f61]">
            Use cases
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
            Every revenue motion covered.
          </h1>
          <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
            From usage-based pricing to enterprise renewals, Cercil keeps every
            workflow connected.
          </p>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6 grid gap-6 md:grid-cols-2">
          {cases.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.25rem] border border-[#e2d8c8] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-[#5c5851]">{item.description}</p>
              <p className="mt-4 font-semibold text-[#0f6f61]">
                {item.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f6f61_0%,#0b5a50_55%,#f2aa67_140%)] p-10 text-white after:absolute after:-bottom-[40%] after:-right-[10%] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_70%)] after:content-['']">
            <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white">
              Want a tailored walkthrough?
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-white/80 max-w-[42rem]">
              We will map your revenue workflows and identify quick wins.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b5a50] transition-colors hover:bg-white/85"
                href="/company"
              >
                Schedule a call
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
                href="/resources"
              >
                Explore resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
