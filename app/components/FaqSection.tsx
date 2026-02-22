"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: FaqItem[];
};

export default function FaqSection({ items }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faqs" className="bg-white py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <div className="text-center mb-11">
          <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
            Global HR System: Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto grid max-w-[820px] gap-5">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-[1.5rem] border bg-white px-6 py-5 transition-shado ${
                  isOpen
                    ? "border-[#e2e2e2] shado-[0_18px_40px_-30px_rgba(20,20,20,0.25)]"
                    : "border-[#efefef] shado-[0_12px_30px_-26px_rgba(20,20,20,0.18)]"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 bg-transparent p-0 text-left text-[1.05rem] font-semibold text-[#222222]"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-[#6d6d6d] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#222222]" : ""
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {isOpen ? (
                  <div
                    id={`faq-panel-${index}`}
                    className="mt-4 text-[#4f4f4f] leading-[1.7]"
                  >
                    <p>{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
