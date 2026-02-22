import Link from "next/link";

const solutions = [
  {
    title: "Revenue leaders",
    description:
      "Scenario plan pricing moves, forecast renewals, and keep every team aligned.",
  },
  {
    title: "Finance",
    description:
      "Automate compliance, revenue recognition, and multi-entity billing in one view.",
  },
  {
    title: "Product",
    description:
      "Turn usage into revenue without data silos or delayed handoffs.",
  },
  {
    title: "Customer success",
    description:
      "Surface expansion signals, mitigate churn, and run renewals with confidence.",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0f6f61]">
            Solutions
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
            Built for every revenue team.
          </h2>
          <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
            Cercil gives every stakeholder the same revenue narrative, from
            product usage to renewal readiness.
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-full border border-[#e2d8c8] bg-white/70 px-6 py-3 text-sm font-semibold text-[#1f1a14] transition-colors hover:border-[#0f6f61] hover:text-[#0f6f61]"
            href="/use-cases"
          >
            See all use cases
          </Link>
        </div>
        <div className="grid gap-5">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-[1.25rem] border border-[#e2d8c8] bg-[#f1ebdf] p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
            >
              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <p className="mt-2 text-[#5c5851]">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
