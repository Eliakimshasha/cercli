import Link from "next/link";

export default function EmpowerSection() {
  return (
    <section id="empower" className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 900 700"
          aria-hidden="true"
          className="absolute -left-[2%] max-[900px]:-left-[22%] -top-[20%] h-[140%] w-[60%]"
        >
          <path
            d="M40,60 C140,220 240,220 340,360 C420,470 420,560 360,660"
            fill="none"
            stroke="#3f5b4b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20,520 C200,430 320,440 480,520"
            fill="none"
            stroke="#3f5b4b"
            strokeWidth="2"
            strokeLinecap="round"
          />
        
        </svg>
        <svg
          viewBox="0 0 900 700"
          aria-hidden="true"
          className="absolute max-[900px]:-right-[18%] -right-[2%] -top-[10%] h-[120%] w-[55%]"
        >
          <path
            d="M520,80 C700,130 720,220 620,280 C520,340 520,430 620,500"
            fill="none"
            stroke="#3f5b4b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M520,300 C700,300 780,300 880,300"
            fill="none"
            stroke="#3f5b4b"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-bold text-[#2c2c2c] leading-tight">
          Empower your team
          <br />
          with Cercli
        </h2>
        <p className="mt-4 text-sm text-[#3f3f3f]">
          Discover how Cercli can streamline your HR, payroll, and compliance
          processes.
          <br />
          Start your journey with us today.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-[#3f5b4b] px-6 py-2 text-sm font-semibold text-white shado"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}
