import React from "react";
import { FrameTwo } from "../assets/svg";
import Button from "./Button";

const Project = ({
  title,
  image,
  details,
  site,
  code,
  showSite,
  showCode,
  techStack,
}) => {
  return (
    <div className="flex flex-col sm:w-[400px] w-[90%] items-center ">
      <span className="uppercase mb-5">{title}</span>
      <div className="w-full relative overflow-hidden">
        <FrameTwo />
        <img
          className="absolute inset-0 w-[70%] h-[70%] my-auto mx-auto -z-10 rounded-xl object-cover border-[2px] border-[#383635]"
          src={image}
        />
      </div>
      <div className="w-full p-6 sm:h-[300px] h-[400px] flex flex-col ">
        <div className="flex flex-col w-fit mb-5">
          <span className="uppercase ">Details</span>
          <div className="w-full border-black border-b-[2px] " />
          <div className="w-full border-black border-b-[.5px] mt-0.5" />
        </div>
        {/* content */}
        <span style={{ fontFamily: "Alegreya SC" }}>{details}</span>
        <hr className="my-[5px]" />
        <span
          style={{
            fontFamily: "Alegreya SC",
          }}
          className="text-sm lowercase font-semibold"
        >
          Tech used: {techStack}
        </span>
        <div className="flex sm:flex-row flex-col mx-auto sm:gap-x-5 mt-auto ">
          {showSite && (
            <a target="_blank" className="outline-none" href={site}>
              {/* This is a custom button and it is used everywhere on the site instead of replicating the same css, that is why it is a child of <a> tag */}
              <Button title={"visit site"} />
            </a>
          )}
          {showCode && (
            <a target="_blank" className="outline-none" href={code}>
              {/* This is a custom button and it is used everywhere on the site instead of replicating the same css, that is why it is a child of <a> tag */}
              <Button title={"Inspect code"} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
