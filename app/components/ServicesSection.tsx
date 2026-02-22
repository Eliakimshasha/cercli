const services = [
  {
    title: "Usage Capture",
    description: "Normalize product events from any pipeline in minutes.",
    tag: "Event streams",
  },
  {
    title: "Billing Studio",
    description: "Model subscriptions, usage tiers, credits, and ramps.",
    tag: "Pricing logic",
  },
  {
    title: "Renewal Desk",
    description: "Coordinate renewals with health scoring and alerts.",
    tag: "Customer success",
  },
  {
    title: "Revenue Intelligence",
    description: "Forecast with a single view across CRM and product data.",
    tag: "Analytics",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0f6f61]">
          Services
        </p>
        <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
          Every revenue task, in one flow.
        </h2>
        <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
          Capture usage, design pricing, and run renewals without switching
          between disconnected tools.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.25rem] border border-[#e2d8c8] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
            >
              <span className="inline-flex items-center justify-center rounded-full bg-[rgba(15,111,97,0.12)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.02em] text-[#0f6f61]">
                {service.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-[#5c5851]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
