"use client";

import TechCard from "@/components/tech";

const TECHS = [
  {
    title: "HTML Layouts",
  },
  {
    title: "HTML Semantics",
  },
  {
    title: "HTML Validator",
  },
  {
    title: "CSS",
  },
  {
    title: "SASS",
  },
  {
    title: "Responsiveness",
  },
  {
    title: "CSS Grid",
  },
  {
    title: "Bootstrap",
  },
  {
    title: "Tailwind",
  },
  {
    title: "JavaScript",
  },
  {
    title: "Typescipt",
  },
  {
    title: "Gulp",
  },
  {
    title: "npm, yarn",
  },
  {
    title: "React",
  },
  {
    title: "Git",
  },
  {
    title: "Gitlab",
  },
  {
    title: "Github",
  },
  {
    title: "Lighthouse",
  },
];

export function Techs() {
  return (
    <ul className="container mx-auto flex items-center flex-wrap justify-center mt-24">
      {TECHS.map((props, idx) => (
        <TechCard key={idx} {...props} />
      ))}
    </ul>
  );
}

export default Techs;
