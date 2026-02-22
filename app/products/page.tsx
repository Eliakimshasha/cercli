import Link from "next/link";

const modules = [
  {
    title: "Billing engine",
    description:
      "Subscriptions, usage tiers, credits, and proration in one model.",
  },
  {
    title: "Revenue hub",
    description:
      "Unified ledger with rev-rec schedules and approval workflows.",
  },
  {
    title: "Renewal orchestration",
    description: "Account health, expansion signals, and renewal playbooks.",
  },
  {
    title: "Analytics studio",
    description:
      "Real-time dashboards for finance, product, and sales leaders.",
  },
  {
    title: "Data sync",
    description:
      "Bidirectional sync with CRM, ERP, and data warehouse tooling.",
  },
  {
    title: "Compliance layer",
    description: "Audit trails, approvals, and access controls built in.",
  },
];

const outcomes = [
  "Launch pricing updates without engineering bottlenecks.",
  "Automate revenue recognition and close in days, not weeks.",
  "Detect expansion signals before renewals hit your CRM.",
];

export default function ProductsPage() {
  return (
    <>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0f6f61]">
            Products
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
            A modular revenue platform.
          </h1>
          <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
            Build the revenue stack you need today, then expand as your pricing
            and usage mature.
          </p>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-[1.25rem] border border-[#e2d8c8] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
            >
              <h3 className="text-xl font-semibold">{module.title}</h3>
              <p className="mt-2 text-[#5c5851]">{module.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="rounded-[1.25rem] border border-[#e2d8c8] bg-[#f1ebdf] p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)] grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0f6f61]">
                Outcomes
              </p>
              <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
                Designed for revenue velocity.
              </h2>
              <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
                Cercil replaces fragmented tools with a single workflow engine
                that keeps every team aligned.
              </p>
            </div>
            <ul className="grid gap-4">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-[#5c5851]">
                  <span className="mt-1 inline-flex h-[1.1rem] w-[1.1rem] flex-shrink-0 items-center justify-center rounded-full bg-[#0f6f61] text-[0.7rem] text-white">
                    ?
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f6f61_0%,#0b5a50_55%,#f2aa67_140%)] p-10 text-white after:absolute after:-bottom-[40%] after:-right-[10%] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_70%)] after:content-['']">
            <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white">
              Ready to see the platform?
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-white/80 max-w-[42rem]">
              Book a demo to map your revenue workflows into a single system.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b5a50] transition-colors hover:bg-white/85"
                href="/company"
              >
                Book a demo
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
                href="/pricing"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
