"use client";

import {
  DocumentIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export function ContactForm() {
  return (
    <section id="contacts" className="px-8 py-24 pb-4">
      <Card className="container mx-auto py-10" shadow={false}>
        <CardBody>
          <div className="px-4 lg:px-12 pb-8 lg:pb-12 w-full">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 font-joti text-center"
            >
              Contact Me
            </Typography>
            <Typography variant="lead" className="!text-gray-500 text-center">
              Feel free to reach out and let&apos;s start our journey.
            </Typography>
          </div>

          <div className="w-full col-span-2 rounded-lg h-full py-8 flex flex-wrap gap-4">
            <div className="flex my-2 gap-5 items-center flex-col flex-1">
              <a href="tel:+994556692039" target="_blank">
                <div className="flex h-[64px] w-[64px] items-center justify-center bg-[#6A7AB5] rounded-full">
                  <PhoneIcon className="h-8 w-8 text-white" />
                </div>
              </a>

              <Typography
                variant="small"
                className="mb-2"
                as="a"
                href="tel:+994556692039"
                target="_blank"
              >
                +994 55 669 20 39
              </Typography>
            </div>
            <div className="flex my-2 gap-5 items-center flex-col flex-1">
              <a href="mailto:timaaliyev39@gmail.com" target="_blank">
                <div className="flex h-[64px] w-[64px] justify-center items-center bg-[#6A7AB5] rounded-full">
                  <EnvelopeIcon className="h-8 w-8 text-white" />
                </div>
              </a>

              <Typography
                variant="small"
                className="mb-2"
                as="a"
                href="mailto:timaaliyev39@gmail.com"
                target="_blank"
              >
                timaaliyev39@gmail.com
              </Typography>
            </div>
            <div className="flex my-2 gap-5 items-center flex-col flex-1">
              <div className="flex h-[64px] w-[64px] items-center justify-center bg-[#6A7AB5] rounded-full">
                <MapPinIcon className="h-8 w-8 text-white" />
              </div>

              <Typography variant="small" className="mb-2">
                Baku, Azerbaijan
              </Typography>
            </div>
            <div className="flex my-2 gap-5 items-center flex-col flex-1">
              <Link
                href="/cv.pdf"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-[64px] w-[64px] items-center justify-center bg-[#6A7AB5] rounded-full">
                  <Typography variant="h6" className="text-white text-xl">
                    CV
                  </Typography>
                </div>
              </Link>
              <Link
                href="/cv.pdf"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="small" className="mb-2">
                  Resume
                </Typography>
              </Link>
            </div>
          </div>
          <div className="px-4 lg:px-12 pb-8 lg:pb-8 w-full pt-12">
            <Typography variant="lead" className="!text-gray-500 text-center">
              Or find me and follow on socials
            </Typography>
          </div>
          <div className="w-full col-span-2 rounded-lg h-full py-8 flex items-center justify-center gap-10">
            <div className="flex my-2 gap-5 items-center flex-col">
              <a href="https://github.com/timaaliyev" target="_blank">
                <div className="flex h-[48px] w-[48px] items-center justify-center bg-orange-500 rounded-full">
                  <Image
                    src="/image/github.svg"
                    alt="github"
                    width={32}
                    height={32}
                  />
                </div>
              </a>
            </div>
            <div className="flex my-2 gap-5 items-center flex-col">
              <a
                href="https://www.linkedin.com/in/teymuraliyev39/"
                target="_blank"
              >
                <div className="flex h-[48px] w-[48px] items-center justify-center bg-orange-500 rounded-full">
                  <Image
                    src="/image/linkedin.svg"
                    alt="linkedin"
                    width={32}
                    height={32}
                  />
                </div>
              </a>
            </div>
            <div className="flex my-2 gap-5 items-center flex-col">
              <a href="https://www.behance.net/teymuraliyev39" target="_blank">
                <div className="flex h-[48px] w-[48px] items-center justify-center bg-orange-500 rounded-full">
                  <Image
                    src="/image/behance.svg"
                    alt="behance"
                    width={32}
                    height={32}
                  />
                </div>
              </a>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default ContactForm;
