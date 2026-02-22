import Image from "next/image";

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-[#fbf6ef] py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="text-center text-[clamp(2rem,3.8vw,3rem)] font-bold text-[#2c2c2c]">
          Why Cercli?
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-6">
            <article className="rounded-[22px] bg-[#d7c2a2] pb-5 pt-1 px-1">
              <div className="overflow-hidden rounded-[18px] bg-white">
                <Image
                  src="/assets/images/image9.webp"
                  alt="Customer support experience"
                  width={900}
                  height={520}
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-5 mx-3">
                <h3 className="text-xl font-bold text-[#2c2c2c]">
                  Intuitively Designed for You
                </h3>
                <p className="mt-2 text-sm text-[#3d3d3d]">
                  Built around customer feedback to create an experience that
                  truly works for you.
                </p>
              </div>
            </article>

            <article className="rounded-[22px] bg-[#d9efc5] p-6">
              <h3 className="text-xl font-bold text-[#2c2c2c]">
                Unmatched Customer Care
              </h3>
              <p className="mt-2 text-sm text-[#3d3d3d]">
                Six real-time customer support channels, including direct access
                to our payroll and engineering, with 24/7 support available
                through WhatsApp and Slack.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="/assets/images/slack.svg"
                  alt="Slack"
                  width={52}
                  height={52}
                  className=" w-auto h-12  rounded-2xl"
                />
              </div>
            </article>
          </div>

          <div className="grid gap-6">
            <article className="rounded-[22px] bg-[#f7c67b] p-6">
              <h3 className="text-xl font-bold text-[#2c2c2c]">
                Enterprise-level security
              </h3>
              <p className="mt-2 text-sm text-[#3d3d3d]">
                Protecting your data and ensuring security with our certified,
                monitored, and rigorously tested enterprise-grade platform.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {[
                  { src: "/assets/images/circle1.webp", alt: "GDPR" },
                  { src: "/assets/images/circle2.webp", alt: "ISO" },
                  { src: "/assets/images/circle3.webp", alt: "SOC" },
                ].map((badge) => (
                  <span
                    key={badge.alt}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70"
                  >
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={44}
                      height={44}
                    />
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[22px] bg-[#d7f3f5] pb-5 pt-1 px-1">
              <div className="overflow-hidden rounded-[18px] bg-white">
                <Image
                  src="/assets/images/image10.webp"
                  alt="MENA compliance"
                  width={900}
                  height={520}
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-5 mx-3">
                <h3 className="text-xl font-bold text-[#2c2c2c]">
                  Expertise in MENA Compliance
                </h3>
                <p className="mt-2 text-sm text-[#3d3d3d]">
                  From DEWS and GOSI to country-specific labor laws and pension
                  contributions, our platform ensures compliance by default to
                  align with local regulations.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
