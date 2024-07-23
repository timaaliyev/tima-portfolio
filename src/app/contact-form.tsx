"use client";

import {
  CodeBracketIcon,
  DocumentIcon,
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon
} from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  Typography
} from "@material-tailwind/react";
import Link from "next/link";

export function ContactForm() {
  return (
    <section id="contacts" className="px-8 py-24 pb-12">
      <Card
        shadow={true}
        className="container mx-auto border border-gray/50 py-10 lg:py-20"
      >
        <CardBody className="grid grid-cols-2 lg:grid-cols-3 md:gap-2 w-full">
          <div className="px-4 lg:px-12 pb-16 lg:pb-0 col-span-2 lg:col-span-1">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 font-joti text-center lg:text-left"
            >
              Contact Me
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500 text-center lg:text-left"
            >
              Feel free to reach out and let&apos;s start our journey.
            </Typography>
          </div>
          <div className="w-full col-span-2 rounded-lg h-full py-8 p-5 md:p-12 bg-[#6A7AB5]">
            <div className="flex gap-5">
              <PhoneIcon className="h-6 w-6 text-white" />
              <Typography
                variant="h6"
                color="white"
                className="mb-2"
                as="a"
                href="tel:+994556692039"
                target="_blank"
              >
                +994 55 669 20 39
              </Typography>
            </div>
            <div className="flex my-2 gap-5">
              <EnvelopeIcon className="h-6 w-6 text-white" />
              <Typography
                variant="h6"
                color="white"
                className="mb-2"
                as="a"
                href="mailto:timaaliyev39@gmail.com"
                target="_blank"
              >
                timaaliyev39@gmail.com
              </Typography>
            </div>
            <div className="flex my-2 gap-5">
              <MapPinIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2">
                Baku, Azerbaijan
              </Typography>
            </div>
            <div className="flex my-2 gap-5">
              <CodeBracketIcon className="h-6 w-6 text-white" />
              <Typography
                variant="h6"
                color="white"
                className="mb-2"
                as="a"
                href="https://github.com/timaaliyev"
                target="_blank"
              >
                https://github.com/timaaliyev
              </Typography>
            </div>
            <div className="flex my-2 gap-5">
              <LinkIcon className="h-6 w-6 text-white" />
              <Typography
                variant="h6"
                color="white"
                className="mb-2"
                as="a"
                href="https://www.linkedin.com/in/teymuraliyev39/"
                target="_blank"
              >
                https://www.linkedin.com/in/teymuraliyev39/
              </Typography>
            </div>
            <div className="flex my-2 gap-5">
              <LinkIcon className="h-6 w-6 text-white" />
              <Typography
                variant="h6"
                color="white"
                className="mb-2"
                as="a"
                href="https://www.behance.net/teymuraliyev39"
                target="_blank"
              >
                https://www.behance.net/teymuraliyev39
              </Typography>
            </div>
            <div className="flex my-2 gap-5">
              <DocumentIcon className="h-6 w-6 text-white" />
              <Link
                href="/cv.pdf"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="h6" color="white" className="mb-2">
                  Download Resume
                </Typography>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default ContactForm;
