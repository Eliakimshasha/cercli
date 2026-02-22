import Image from "next/image";
import Link from "next/link";

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-[#fbf6ef] py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="text-center font-semibold  text-[2.4rem] max-[900px]:text-[2rem] leading-[1.05] tracking-[-0.02em]">
          Integrates with your favourite tools
        </h2>
        <div className="mt-10 flex justify-center">
          <Image
            src="/assets/images/image14.webp"
            alt="Integrations map"
            width={1280}
            height={680}
            className="h-auto w-full max-w-[1100px] rounded-[1.8rem] shado-[0_30px_60px_-50px_rgba(20,20,20,0.35)]"
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-[#d9c3a0] px-8 py-3 text-sm font-semibold text-[#2b2b2b] shado-[0_10px_20px_-14px_rgba(0,0,0,0.3)]"
            href="/resources"
          >
            How Cercli works
          </Link>
        </div>
      </div>
    </section>
  );
}
