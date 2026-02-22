import StoriesCarousel from "./StoriesCarousel";

const stories = [
  {
    quote:
      "Cercli's customer support is excellent, providing quick responses. Their team has been incredibly responsive, ensuring that any issues are addressed promptly. This level of customer care has made a significant difference in our experience.",
    name: "Said El Imadi",
    role: "Human Resources Manager",
    company: "Supy",
  },
  {
    quote:
      "Cercli helped us unify payroll and HR workflows across regions. We cut manual follow-ups, improved compliance visibility, and empowered managers with real-time insights.",
    name: "Mariam Al-Khaled",
    role: "People Operations Lead",
    company: "Nexa",
  },
  {
    quote:
      "The onboarding experience was smooth, and our teams felt supported at every step. Cercli delivered faster payroll cycles with clear reporting and local expertise.",
    name: "Hassan Rahman",
    role: "Finance Director",
    company: "Lattice",
  },
];

export default function StoriesSection() {
  return <StoriesCarousel items={stories} />;
}
