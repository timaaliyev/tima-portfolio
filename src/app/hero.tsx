"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";

function Hero() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  useEffect(() => {
    setHovered(true);
  }, []);

  return (
    <header className="bg-[#6A7AB5] p-28 overflow-hidden relative">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 lg:text-7xl !leading-tight text-3xl font-joti font-normal"
          >
            Teymur Aliyev
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 md:pr-16 xl:pr-28 font-roboto"
          >
            With a decade of experience as a graphic designer, I transitioned
            into frontend development after two years of dedicated learning. Now
            I am open to frontend developer roles where I can leverage my
            expertise in HTML, CSS, and JavaScript (React) to create impactful
            digital experiences.
          </Typography>
          {/* <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                require offer
              </Button>
            </div> */}
          <a href="mailto:timaaliyev39@gmail.com">
            <Button
              color="white"
              className="w-full px-4 md:w-[12rem] mt-4 font-roboto"
            >
              Write me now
            </Button>
          </a>

          {/* </div> */}
        </div>
        <div className="flex items-center justify-center min-w-[80%] pt-4">
          <div
            className={`relative h-[16rem] w-[16rem] lg:h-[24rem] lg:w-[24rem] flex items-end justify-center p-2 lg:p-4 rounded shadow-md bg-[#cbcee5] hero-block ${
              hovered ? "opened" : ""
            }`}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            <Typography
              variant="lead"
              className="font-joti text-center mt-[150px] text-base lg:text-lg"
            >
              Open to work
            </Typography>
            <div className="bg-white h-[16rem] w-[16rem] lg:h-[24rem] lg:w-[24rem] p-2 lg:p-4 rounded flex items-center absolute left-[5%] top-[-5%] shadow-md hero-block-2">
              <Typography
                variant="lead"
                className="font-roboto text-center text-base lg:text-lg"
              >
                Frontend Developer
              </Typography>
            </div>
            <Image
              width={1024}
              height={1024}
              alt="team work"
              src="/image/Tima.jpg"
              className="h-[16rem] w-[16rem] lg:h-[24rem] lg:w-[24rem] rounded object-cover absolute left-[10%] top-[-10%] shadow-md hero-image"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
