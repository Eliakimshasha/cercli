import Image from "next/image";
import Link from "next/link";

const resources = [
  {
    image: "/assets/images/image18.avif",
    date: "Oct 21, 2025",
    title:
      "Cercli Raises $12M Series A for AI-Native Workforce Platform, Marking Picus Capital's First MENA Investment",
    description:
      "Picus Capital's first Middle East & North Africa investment signals major VC confidence in MENA tech ecosystem.",
  },
  {
    image: "/assets/images/image19.avif",
    date: "Aug 18, 2025",
    title: "Cercli Grows Rapidly as it Replaces Legacy ERP Systems",
    description:
      "Cercli is the MENA HR platform replacing legacy ERP systems. With 22% monthly growth, 48-country payroll, and AI-powered HR, it helps Middle East companies scale globally.",
  },
  {
    image: "/assets/images/image20.avif",
    date: "Jun 30, 2025",
    title: "What's New at Cercli: Product Updates for June 2025",
    description:
      "Cercli's June 2025 updates: automate compliant offboarding, manage and track assets, sync time off with your calendar, and generate salary certificates in one HRIS for MENA.",
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="text-center font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
          Resources
        </h2>
        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {resources.map((resource) => (
            <article key={resource.title} className="flex flex-col gap-5">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.4rem] border border-[#efe7dc] bg-[#f6f2ec]">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-3">
                <div className="inline-flex items-center gap-2 text-[0.95rem] text-[#4a4a4a]">
                  <span className="h-2 w-2 rounded-full bg-[#3d3d3d]" aria-hidden="true" />
                  <span>{resource.date}</span>
                </div>
                <h3 className="text-[1.2rem] font-bold leading-[1.35]">
                  {resource.title}
                </h3>
                <p className="text-[#575757] leading-[1.65]">
                  {resource.description}
                </p>
                <Link className="font-semibold text-[#2d2d2d]" href="/resources">
                  Read More &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
