import Image from "next/image";

export default function NoFragmentationsSection() {
  return (
    <section id="no-fragmentations" className="bg-[#fbf6ef] py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="text-center text-[clamp(2rem,3.8vw,3rem)] font-bold text-[#2c2c2c]">
          One Solution, No Fragmentation
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[24px] border border-[#eadfce] bg-[#fbf6ef] p-5 text-center">
            <div className="overflow-hidden rounded-[20px] bg-[#f3eadc]">
              <Image
                src="/assets/images/image12.webp"
                alt="Fragmented workflow before Cercli"
                width={900}
                height={720}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 font-semibold text-[#3b3b3b]">Before</p>
          </article>
          <article className="rounded-[24px] border border-[#eadfce] bg-[#fbf6ef] p-5 text-center">
            <div className="overflow-hidden rounded-[20px] bg-[#f3eadc]">
              <Image
                src="/assets/images/image13.webp"
                alt="Unified workflow after Cercli"
                width={900}
                height={720}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 font-semibold text-[#3b3b3b]">After</p>
          </article>
        </div>
      </div>
    </section>
  );
}
