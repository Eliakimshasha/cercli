import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-[#fbf6ef] min-h-screen pt-[9.5rem]">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <div className="grid gap-10 lg:gap-12">
          <div className="grid gap-6 text-center justify-items-center">
            <h1 className="text-[clamp(2.6rem,5vw,4.2rem)] font-bold leading-[1.05] text-[#2b2b2b]">
              Unified platform for people,
              <br />
              payroll, and finance teams.
            </h1>
            <p className="text-[1.05rem] text-[#3f3f3f] max-w-[640px]">
              The AI-powered solution to hire, manage and pay your entire
              workforce.
            </p>
            <Link
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#cfe7b3] px-10 py-3 text-[#2d2d2d] font-semibold shado-[0_12px_24px_-18px_rgba(0,0,0,0.3)]"
              href="/pricing"
            >
              Get Started
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/images/heroImage.avif"
              alt="Cercli platform preview"
              width={1400}
              height={760}
              priority
              className="h-auto w-full max-w-[1200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
