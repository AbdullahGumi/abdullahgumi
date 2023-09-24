import React from "react";
import SubHeader from "./SubHeader";

import MonkeyImage from "../assets/images/monkey.png";
import Blob from "./Blob";

function Skills() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full my-10">
        <SubHeader title="Tales of a legend" leftText={"Vol.1 Ch.2"} />
      </div>
      <h1 className="sm:text-9xl text-8xl mb-10 -rotate-3" id="skillsId">
        Skills
      </h1>
      <ol
        className="w-fit uppercase font-extrabold grid grid-cols-2 place-items-center gap-10 text-lg"
        style={{
          listStyleType: "initial",
          fontFamily: "Alegreya SC",
        }}
      >
        <li>JAVASCRIPT</li>
        <li>TYPESCRIPT</li>
        <li>REACT JS </li>
        <li>REACT NATIVE</li>
        <li>Webflow</li>
        <li>Next JS</li>
        <li>Redux</li>
        <li>Express JS</li>
        <li>MongoDB</li>
        <li>Postgres</li>
        <li>Firebase</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>GRAPHQL</li>
        <li>Jest</li>
        <li>Cypress</li>
      </ol>
      <Blob position={"top-[10%] right-[35%] rotate-0"} />
      <Blob position={"top-[55%] left-[40%] rotate-90"} />
      <img
        src={MonkeyImage}
        className="absolute top-[40%] left-[70%] lg:block hidden "
      />
    </div>
  );
}

export default Skills;
