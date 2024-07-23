import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

const LINKS = [
  {
    name: "Projects",
    href: "#projects",
    target: "_self",
  },
  {
    name: "Certificates",
    href: "#certificates",
    target: "_self",
  },
  {
    name: "Skills",
    href: "#skills",
    target: "_self",
  },
  {
    name: "Contacts",
    href: "#contacts",
    target: "_self",
  },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Teymur Aliyev
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link.name}>
                <Typography
                  as="a"
                  href={link.href}
                  target={link.target}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
