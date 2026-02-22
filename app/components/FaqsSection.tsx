import FaqSection from "./FaqSection";

const faqs = [
  {
    question: "Who can use Cercli? Is it only for MENA-based companies?",
    answer:
      "Cercli supports global teams hiring in and beyond MENA. You can manage local employees, contractors, and cross-border payroll from one platform.",
  },
  {
    question: "What makes Cercli different from other payroll and HR platforms?",
    answer:
      "Cercli is built for MENA compliance first, with localized payroll, HR, and benefits in a single system. It consolidates onboarding, payroll, and workforce management into a fast, guided workflow with responsive local support.",
  },
  {
    question:
      "Does Cercli support WPS, DEWS, GOSI, and other MENA-specific compliance requirements?",
    answer:
      "Yes. Cercli provides built-in coverage for MENA compliance programs, statutory reporting, and regulatory updates so payroll stays audit-ready.",
  },
  {
    question: "Can Cercli handle both local employees and international contractors?",
    answer:
      "Absolutely. Cercli centralizes payroll for local employees while supporting contractor payments and documentation in the same workspace.",
  },
  {
    question: "How long does onboarding and implementation take?",
    answer:
      "Most teams go live in a few weeks. We migrate your payroll data, validate compliance, and configure approvals with a dedicated launch team.",
  },
];

export default function FaqsSection() {
  return <FaqSection items={faqs} />;
}
