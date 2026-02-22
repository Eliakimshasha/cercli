import Link from "next/link";

export default function CtaSection() {
  return (
    <section id="cta" className="py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f6f61_0%,#0b5a50_55%,#f2aa67_140%)] p-10 text-white after:absolute after:-bottom-[40%] after:-right-[10%] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_70%)] after:content-['']">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/80">
            Pilot
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white">
            Launch a Cercil pilot in 30 days.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-white/80 max-w-[42rem]">
            Start with one product line, validate pricing, and expand when the
            workflows are proven.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b5a50] transition-colors hover:bg-white/85"
              href="/pricing"
            >
              Start the pilot
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
              href="/company"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
