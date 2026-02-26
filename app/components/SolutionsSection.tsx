"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Multi-Country, Multi-Entity Compliance",
    description:
      "Stay compliant across borders with HRIS and payroll workflows tailored to local labor laws, leave policies, and regulations, ensuring seamless operations across offices and entities.",
    image: "/assets/images/image5.webp",
  },
  {
    title: "Localized Payroll, Simplified",
    description:
      "Automate payroll cycles, approvals, and statutory reporting with built-in local requirements, reducing manual tasks while improving accuracy and visibility.",
    image: "/assets/images/image6.webp",
  },
  {
    title: "Fast, Compliant Onboarding",
    description:
      "Launch new hires quickly with guided onboarding, document collection, and compliance checks, all in one streamlined flow.",
    image: "/assets/images/image7.webp",
  },
  {
    title: "Actionable People Insights",
    description:
      "Centralize people data and reporting to help teams make better workforce decisions with confidence and clarity.",
    image: "/assets/images/image8.webp",
  },
];

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(
        ".solution-panel",
        sectionRef.current || undefined,
      );

      // Card 0 sits in place at the bottom of the stack.
      // Cards 1..n start fully below the container, waiting to slide up on top.
      panels.forEach((panel, i) => {
        gsap.set(panel, {
          y: i === 0 ? 0 : "100%",
          scale: 1,
          zIndex: i + 1, // higher index = on top when fully slid up
          transformOrigin: "center top",
          willChange: "transform",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${panels.length * 100}vh`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Each scroll step: slide panel i up from below,
      // and gently push all panels below it back (scale + slight y offset)
      panels.forEach((panel, i) => {
        if (i === 0) return;

        const position = i - 1; // stagger each step on the timeline

        // Incoming card slides up from below
        tl.to(
          panel,
          { y: 0, ease: "none", duration: 1 },
          position,
        );

        // All cards already in place scale back slightly to show depth
        for (let j = 0; j < i; j++) {
          const depth = i - j; // how many cards below the top
          tl.to(
            panels[j],
            {
              scale: 1 - depth * 0.04,
              y: -(depth * 10), // peek above by a few px
              ease: "none",
              duration: 1,
            },
            position,
          );
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="bg-white py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="mx-auto max-w-3xl text-center text-[2.4rem] max-[900px]:text-[1.7rem] max-[900px]:mb-10 font-bold leading-[1.05] text-[#2c2c2c]">
          Solving People Management Challenges for MENA
        </h2>

        {/*
          overflow-hidden clips cards coming up from below.
          Cards are position:absolute and stacked via z-index.
          The container height defines the "window" you see.
        */}
        <div
          className="relative mt-14 overflow-hidden rounded-[32px]"
          style={{ minHeight: "clamp(480px, 55vh, 620px)" }}
        >
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="solution-panel absolute inset-0 grid items-center gap-8 rounded-[32px] bg-white max-[900px]:flex max-[900px]:flex-col-reverse lg:grid-cols-[1.05fr_1fr]"
            >
              <div className="px-2 sm:px-6 lg:px-8">
                <h3 className="text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold text-[#2c2c2c]">
                  {solution.title}
                </h3>
                <p className="mt-4 text-[1rem] leading-[1.7] text-[#4a4a4a]">
                  {solution.description}
                </p>
              </div>
              <div className="rounded-[28px] sm:p-8">
                <div className="overflow-hidden rounded-[22px] bg-white/70">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={900}
                    height={560}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}