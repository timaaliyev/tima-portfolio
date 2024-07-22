import {
  Bars3Icon,
  CheckBadgeIcon,
  CommandLineIcon,
  LightBulbIcon,
  RectangleStackIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Collapse,
  IconButton,
  Navbar as MTNavbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import Image from "next/image";

const NAV_MENU = [
  {
    name: "Projects",
    icon: RectangleStackIcon,
    href: "#projects",
    target: "_self",
  },
  {
    name: "Certificates",
    icon: CheckBadgeIcon,
    href: "#certificates",
    target: "_self",
  },
  {
    name: "Skills",
    icon: LightBulbIcon,
    href: "#skills",
    target: "_self",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
}

function NavItem({ children, href, target }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={target || "_blank"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Image
          src="/image/logo_ta.svg"
          alt="logo"
          width={100}
          height={40}
          className="w-[75px] lg:w-[100px]"
        />
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href, target }) => (
            <NavItem key={name} href={href} target={target}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-end gap-2 lg:flex lg:flex-col">
          <a href="mailto:timaaliyev39@gmail.com" target="_blank">
            <Typography color="orange" className="text-base">
              timaaliyev39@gmail.com
            </Typography>
          </a>
          <a href="mailto:+994556692039" target="_blank">
            <Typography color="orange" className="text-base">
              +994556692039
            </Typography>
          </a>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href, target }) => (
              <NavItem key={name} href={href} target={target}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex flex-col gap-2">
            <a href="mailto:timaaliyev39@gmail.com" target="_blank">
              <Typography color="orange" className="text-base">
                timaaliyev39@gmail.com
              </Typography>
            </a>
            <a href="mailto:+994556692039" target="_blank">
              <Typography color="orange" className="text-base">
                +994556692039
              </Typography>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
