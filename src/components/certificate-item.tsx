import { Accordion, AccordionBody, AccordionHeader, Button, Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CertificateItemProps {
  src: string;
  title: string;
  children: React.ReactNode;
  url: string;
  icon: React.ReactNode;
}

export function CertificateItem({
  src,
  title,
  children,
  icon,
  url,
}: CertificateItemProps) {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <Accordion open={open} icon={<Chevron open={open} />}>
      <AccordionHeader onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-4">
          <Card
            color="gray"
            className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
          >
            {icon}
          </Card>
          <Typography className="w-full font-normal !text-gray-500">
            {children}
          </Typography>
        </div>
      </AccordionHeader>
      <AccordionBody>
        <div className="flex py-8">
          <Image
            className="h-150 w-150"
            src={src}
            alt={title}
            width={350}
            height={350}
            quality={100}
            style={{
              objectFit: "contain",
            }}
          />
          <div className="ml-8">
            <Typography className="ml-5 mb-4">{children}</Typography>
            <Link href={url} target="_blank">
              <Button variant="text">View course</Button>
            </Link>
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
}

export default CertificateItem;


function Chevron({ open }: {open: boolean}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open  ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}