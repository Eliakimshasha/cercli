import Image from "next/image";
import Link from "next/link";

export default function SwitchSection() {
  return (
    <section id="switch" className="bg-[#fbf6ef] py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[clamp(2rem,3.6vw,3rem)] max-[900px]:text-[1.8rem] leading-[1.8rem] font-bold text-[#2c2c2c]">
            Switch to Cercli in a Few Hours
          </h2>
          <p className="mt-3 text-[16px] max-w-lg mx-auto text-[#3f3f3f]">
            Your success is our priority: fast, committed, and fully tailored
            migration from any provider.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[22px] border border-[#e6d8c3] bg-white overflow-hidden pb-4  shado-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="rounded-[16px] bg-[#e9f7ec]">
              <Image
                src="/assets/images/image15.webp"
                alt="Customised implementation"
                width={520}
                height={360}
                className="h-auto w-full"
              />
            </div>
            <h3 className="mt-0 text-xl font-bold text-[#2c2c2c] mx-7">
              Customised Implementation
            </h3>
            <p className="mt-2 text-sm text-[#3f3f3f] mx-7">
              A tailored plan designed to ensure smooth integration, so you can
              start seeing results right away.
            </p>
          </article>

          <article className="rounded-[22px] border border-[#e6d8c3] bg-white overflow-hidden pb-4   shado-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="rounded-[16px] bg-[#e9f7ec]">
              <Image
                src="/assets/images/image16.webp"
                alt="Hassle-free data migration"
                width={520}
                height={360}
                className="h-auto w-full"
              />
            </div>
            <h3 className="mt-0 text-xl font-bold text-[#2c2c2c] mx-7">
              Hassle-Free Data Migration
            </h3>
            <p className="mt-2 text-sm text-[#3f3f3f] mx-7">
              Our dedicated team takes care of the complexities of data
              migration, end to end.
            </p>
          </article>

          <article className="rounded-[22px] border border-[#e6d8c3] bg-white overflow-hidden pb-4   shado-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="rounded-[16px] bg-[#e9f7ec]">
              <Image
                src="/assets/images/image17.webp"
                alt="White-glove onboarding"
                width={520}
                height={360}
                className="h-auto w-full"
              />
            </div>
            <h3 className="mt-0 text-xl font-bold text-[#2c2c2c] mx-7">
              White-Glove Onboarding
            </h3>
            <p className="mt-2 text-sm text-[#3f3f3f] mx-7">
              From day one, receive personalised, hands-on support with a
              dedicated point of contact at every step for a stress-free
              transition.
            </p>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-[#cfe9ea] px-6 py-2 text-sm font-semibold text-[#2c2c2c] shado"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}
