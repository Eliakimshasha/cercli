import Link from "next/link";

const collections = [
  {
    title: "Revenue operations guides",
    description: "Deep dives on renewal playbooks and usage pricing strategy.",
  },
  {
    title: "Templates & checklists",
    description: "Ready-to-use frameworks for monthly close and expansion.",
  },
  {
    title: "Benchmarks",
    description:
      "Compare your metrics to peer revenue teams and growth stages.",
  },
];

const highlights = [
  {
    title: "The modern revops blueprint",
    type: "Guide",
    time: "15 min read",
  },
  {
    title: "Usage pricing rollout checklist",
    type: "Checklist",
    time: "Download",
  },
  {
    title: "Renewal health scoring model",
    type: "Template",
    time: "8 min read",
  },
  {
    title: "Q4 revenue forecasting workshop",
    type: "Webinar",
    time: "40 min watch",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0f6f61]">
            Resources
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
            Build your revenue playbook.
          </h1>
          <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
            Practical guides, templates, and benchmarks for modern revenue
            teams.
          </p>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6 grid gap-6 md:grid-cols-3">
          {collections.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.25rem] border border-[#e2d8c8] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-[#5c5851]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="rounded-[1.25rem] border border-[#e2d8c8] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0f6f61]">
              Highlights
            </p>
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 border-b border-[#e2d8c8] py-5 last:border-b-0"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="flex gap-4 text-[0.85rem] text-[#5c5851]">
                  <span>{item.type}</span>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f6f61_0%,#0b5a50_55%,#f2aa67_140%)] p-10 text-white after:absolute after:-bottom-[40%] after:-right-[10%] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_70%)] after:content-['']">
            <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white">
              Need something specific?
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-white/80 max-w-[42rem]">
              Our team can point you to the right framework in minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b5a50] transition-colors hover:bg-white/85"
                href="/company"
              >
                Contact us
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
