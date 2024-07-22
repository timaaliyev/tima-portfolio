import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  LinkIcon
} from "@heroicons/react/24/solid";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  url: string;
  github: string;
}

export function ProjectCard({ img, title, desc, url, github }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-60">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover object-top"
        />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <div className="flex items-center">
          <a href={url} target="_blank">
            <Button color="orange" size="sm" className="mr-4 flex items-center">
              <LinkIcon className="h-5 w-5 mr-2" />
              <span>Demo</span>
            </Button>
          </a>
          <a href={github} target="_blank">
            <Button
              color="orange"
              size="sm"
              className="flex items-center"
              variant="outlined"
            >
              <LinkIcon className="h-5 w-5 mr-2" />
              <span>Code</span>
            </Button>
          </a>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
