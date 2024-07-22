"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
  ComputerDesktopIcon,
  PuzzlePieceIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: PuzzlePieceIcon,
    title: "Pixel Perfect Layouts",
    children:
      "I always ensure that every detail aligns perfectly with the design. My focus on precision guarantees a seamless and visually appealing user experience.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Responsive Websites",
    children:
      "I create responsive websites using HTML, CSS, and JavaScript, ensuring they look and function perfectly on any device (desktops, tablets, and smartphones) for every user.",
  },
  {
    icon: ComputerDesktopIcon,
    title: "React Applications",
    children:
      "I develop React applications that provide dynamic and seamless user experiences, fast, efficient, and interactive web apps that load quickly and perform smoothly.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-8 pt-32">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I specialize in creating pixel-perfect, user-friendly web applications
          using HTML, CSS, and JavaScript (React). My attention to detail
          ensures seamless functionality and visually appealing designs in every
          project.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
