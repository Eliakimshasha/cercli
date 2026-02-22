import Link from "next/link";

const plans = [
  {
    name: "Launch",
    price: "$1,200",
    description: "Perfect for teams validating a new pricing model.",
    features: [
      "Up to 3 products",
      "Usage event ingestion",
      "Basic invoicing",
      "Email support",
    ],
  },
  {
    name: "Scale",
    price: "$3,800",
    description: "For growing revenue teams that need automation.",
    features: [
      "Unlimited products",
      "Hybrid billing engine",
      "Renewal workflows",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced governance, compliance, and global entities.",
    features: [
      "Multi-entity billing",
      "Rev-rec automation",
      "Dedicated success team",
      "Custom SLAs",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0f6f61]">
            Pricing
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
            Pricing that scales with usage.
          </h1>
          <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
            Transparent plans for every stage, with usage-based flexibility
            built in.
          </p>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[1.25rem] border bg-white p-6 ${
                plan.featured
                  ? "border-[rgba(15,111,97,0.5)] shado-[0_30px_70px_-40px_rgba(15,111,97,0.65)]"
                  : "border-[#e2d8c8] shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.featured ? (
                  <span className="inline-flex items-center rounded-full bg-[rgba(15,111,97,0.12)] px-2.5 py-1 text-[0.75rem] font-semibold text-[#0f6f61]">
                    Most popular
                  </span>
                ) : null}
              </div>
              <p className="mt-4 font-[var(--font-display)] text-[2.4rem] font-semibold">
                {plan.price}
              </p>
              <p className="text-[#5c5851]">{plan.description}</p>
              <ul className="mt-4 grid gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="relative pl-5 text-[#5c5851] before:absolute before:left-0 before:top-[0.55rem] before:h-[2px] before:w-2.5 before:bg-[#0f6f61]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-[#0f6f61] px-6 py-3 text-sm font-semibold text-white shado-[0_30px_60px_-40px_rgba(24,18,10,0.5)] transition-all duration-200 hover:-translate-y-px hover:bg-[#0b5a50]"
                  href="/company"
                >
                  Talk to sales
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f6f61_0%,#0b5a50_55%,#f2aa67_140%)] p-10 text-white after:absolute after:-bottom-[40%] after:-right-[10%] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_70%)] after:content-['']">
            <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white">
              Need a custom plan?
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-white/80 max-w-[42rem]">
              We will tailor pricing based on usage volume and billing
              complexity.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b5a50] transition-colors hover:bg-white/85"
                href="/company"
              >
                Request pricing
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
                href="/resources"
              >
                Download benchmarks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
