import { Typography } from "@material-tailwind/react";

interface TechCardProps {
  title: string;
}

export function TechCard({ title }: TechCardProps) {
  return (
    <div className="bg-[#cbcee5] rounded px-4 py-2 mb-4 inline-block items-center mr-4 hover:opacity-75">
      <Typography className="text-sm">{title}</Typography>
    </div>
  );
}

export default TechCard;
