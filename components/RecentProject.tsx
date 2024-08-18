"use client";

import React from "react";
import { projects } from "@/data";
import { AnimatedPinDemo } from "./ui/Pin";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProject = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Previous Year's <span className="text-purple">Best Offers</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, company }) => (
          <div
            key={id}
            className=" h-[25rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-96 w-[80vw] "
          >
            <PinContainer title={title}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>

                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm ">
                {des}{" "}
              </p>

              <div className="flex items-center jusify-between mt-7 mb-3">
                {/* <div className="flex items-center ">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center "
                      style={{ transform: `translateX(-${5 * index +2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div> */}

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple ">
                    {company}
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
