"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/course.png",
    title: "Online courses website",
    desc: "Explore expert-led courses and connect with passionate instructors to unlock your full learning potential.",
    url: "http://course.teymuraliyev.info/",
    github: "https://github.com/timaaliyev/course/",
  },
  {
    img: "/image/evklid.png",
    title: "Euclid Landing Page",
    desc: "Main page for the website related to projects solutions with about, services, contact forms and other sections.",
    url: "http://evklid.teymuraliyev.info/",
    github: "https://github.com/timaaliyev/evklid/",
  },
  {
    img: "/image/lagoona.png",
    title: "Lagoona Landing Page",
    desc: "Main page for the website related to hotel reservation with about, offers, contact forms and other sections.",
    url: "http://lagoona.teymuraliyev.info/",
    github: "https://github.com/timaaliyev/lagoona/",
  },
  {
    img: "/image/lionic.png",
    title: "Lionic Landing Page",
    desc: "Landing for the website related to legal solutions with about, offers, contact forms and other sections.",
    url: "http://lionic.teymuraliyev.info/",
    github: "https://github.com/timaaliyev/lionic/",
  },
  {
    img: "/image/radio.png",
    title: "Radio Home Page",
    desc: "Radio Wave, where the pulse of music, captivating talk shows, and endless entertainment keep you inspired 24/7.",
    url: "http://radio.teymuraliyev.info/",
    github: "https://github.com/timaaliyev/radio/",
  },
  {
    img: "/image/aura.png",
    title: "Aura Landing Page",
    desc: "Landing Page for website with implementation of crypto stickers",
    url: "http://auction.teymuraliyev.info/",
    github: "https://github.com/timaaliyev/auction/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="pt-40 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whatever idea you have that needs to come to life or a just a website
          that requires a facelift, I&apos;m here to turn your digital dreams
          into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
