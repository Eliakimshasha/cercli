import Link from "next/link";

const values = [
  {
    title: "Revenue clarity",
    description:
      "Every team should see the same numbers, updated in real time.",
  },
  {
    title: "Customer trust",
    description:
      "Billing experiences must be transparent, accurate, and stress-free.",
  },
  {
    title: "Operational focus",
    description:
      "Automations replace manual work so teams can focus on growth.",
  },
];

const leaders = [
  { name: "Maya Chen", role: "CEO & Co-founder" },
  { name: "Diego Patel", role: "CTO & Co-founder" },
  { name: "Samira Holt", role: "VP Revenue Operations" },
];

export default function CompanyPage() {
  return (
    <>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0f6f61]">
            Company
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
            We build revenue systems teams can trust.
          </h1>
          <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
            Cercil helps modern revenue teams operate with clarity, confidence,
            and speed.
          </p>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[1.25rem] border border-[#e2d8c8] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
            >
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-2 text-[#5c5851]">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="rounded-[1.25rem] border border-[#e2d8c8] bg-[#f1ebdf] p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0f6f61]">
              Leadership
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {leaders.map((leader) => (
                <div
                  key={leader.name}
                  className="rounded-[1.25rem] border border-[#e2d8c8] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
                >
                  <p className="text-lg font-semibold">{leader.name}</p>
                  <p className="text-[#5c5851]">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f6f61_0%,#0b5a50_55%,#f2aa67_140%)] p-10 text-white after:absolute after:-bottom-[40%] after:-right-[10%] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_70%)] after:content-['']">
            <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white">
              Join the Cercil community.
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-white/80 max-w-[42rem]">
              Talk with our team about careers, partnerships, or product
              updates.
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
