"use client";

import CertificateItem from "@/components/certificate-item";
import {
    ChartBarIcon,
    CodeBracketIcon,
    CursorArrowRaysIcon,
    PaintBrushIcon,
    PuzzlePieceIcon
} from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

const DESIGN_CERTIFICATE_ITEMS = [
  {
    icon: <PaintBrushIcon className="h-8"/>, 
    src: "/image/Udemy_Graphic.jpg",
    title: "Udemy Graphic Design",
    children: "Udemy - Digital Design Masterclass For Graphic Designers",
    url: "https://www.udemy.com/course/digital-design-masterclass-for-graphic-designers",
  },
  {
    icon: <div>XD</div>,
    src: "/image/Udemy_UX.jpg",
    title: "Udemy UI/UX",
    children:
      "Udemy - User Experience Design Essentials - Adobe XD UI/UX Design",
    url: "https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd",
  },
];

const DEVELOPMENT_CERTIFICATE_ITEMS = [
  {
    icon: <CodeBracketIcon className="h-8" />,
    src: "/image/Skillbox_html.jpg",
    title: "Skillbox - HTML, CSS",
    children:
      "Skillbox - Learn HTML, CSS base level. Part of Webdev profession.",
    url: "https://skillbox.ru/course/profession-webdev/",
  },
  {
    icon: <CodeBracketIcon className="h-8" />,
    src: "/image/Skillbox_html_plus.jpg",
    title: "Skillbox - HTML, CSS (advanced)",
    children:
      "Skillbox - Learn HTML, CSS advanced level. Part of Webdev profession.",
    url: "https://skillbox.ru/course/profession-webdev/",
  },
  {
    icon: <div>JS</div>,
    src: "/image/Skillbox_js.jpg",
    title: "Skillbox - JS",
    children: "Skillbox - Learn JS base level. Part of Webdev profession.",
    url: "https://skillbox.ru/course/profession-webdev/",
  },
  {
    icon: <div>TS</div>,
    src: "/image/Skillbox_ts.jpg",
    title: "Skillbox - TS",
    children: "Skillbox - Learn TS base level. Part of Webdev profession.",
    url: "https://skillbox.ru/course/profession-webdev/",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="px-8 pt-60">
      <div className="container mx-auto grid w-full grid-cols-1 gap-16 lg:grid-cols-3">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Certificates
          </Typography>
          <Typography className="mb-4 mt-3 lg:w-10/12 font-normal !text-gray-500">
            With a decade of design expertise, I always tried to stay at the
            forefront of design by earning several Udemy certificates and
            learning from other sources. Then, I transitioned into web
            development and am still on my way in this profession. At the
            moment, I have earned three certificates from a comprehensive web
            development program, and I feel that this is just the beginning.
          </Typography>
        </div>
        <div className="col-span-2 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          <Typography variant="h4" className="mb-4 mt-3 w-9/12 font-normal">
            Development
          </Typography>
          {DEVELOPMENT_CERTIFICATE_ITEMS.map((props, idx) => (
            <CertificateItem key={idx} {...props} />
          ))}
          <Typography variant="h4" className="mb-4 mt-3 w-9/12 font-normal">
            Design
          </Typography>
          {DESIGN_CERTIFICATE_ITEMS.map((props, idx) => (
            <CertificateItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
