import React from "react";
import SubHeader from "./SubHeader";

import { FrameOne } from "../assets/svg";
import PenImage from "../assets/images/pen.png";
import Blob from "./Blob";

function About() {
  return (
    <div className="relative w-full">
      <div className="w-full my-10 ">
        <SubHeader
          title="THE PORTFOLIO OF ABDULLAH GUMI"
          leftText={"Vol.1 Ch.1"}
        />
      </div>
      <div className="w-full relative -rotate-[0.2deg]">
        <FrameOne />
        <div
          className="absolute sm:inset-x-16 inset-x-8 inset-y-5 flex flex-col items-center overflow-auto"
          id="aboutId"
        >
          <img src={PenImage} className="w-[15%] h-auto" />
          <span
            className="text-center lg:text-4xl md:text-2xl sm:text-lg text-sm font-extrabold mt-auto mb-auto md:leading-normal leading-[1]"
            style={{
              fontFamily: "Alegreya SC",
            }}
          >
            Zealous developer specializing in React and React Native, equipped
            with resolute determination and considerable expertise. This
            individual displays an unwavering commitment to their craft,
            tirelessly striving to deliver the highest possible value while
            diligently acquiring industry knowledge. Proficient in both frontend
            and backend development, skillfully utilizing technologies such as
            React, Node, and TypeScript.
          </span>
        </div>
      </div>
      <Blob position={"top-0 rotate-0"} />
      <Blob position={"top-[75%] left-[60%] rotate-90"} />
    </div>
  );
}

export default About;
