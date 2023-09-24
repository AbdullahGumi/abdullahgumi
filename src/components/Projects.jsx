import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import SubHeader from "./SubHeader";

import Project from "./Project";

import AZAImage from "../assets/images/aza.png";
import Assets360Image from "../assets/images/assets360.png";
import EtijarImage from "../assets/images/etijar.png";
import Gee2Image from "../assets/images/gee2.png";
import SmartboxImage from "../assets/images/smartbox.png";
import {
  MintplexImage,
  ApertureImage,
  GymImage,
  CovidImage,
} from "../assets/images";

const items = [
  {
    name: "AZA",
    details:
      "A fintech mobile application which enables users to perform P2P transactions, invest their money, and securely store funds in a vault for future needs",
    image: AZAImage,
    site: "https://www.azanaija.com/",
    showCode: false,
    showSite: true,
    techStack:
      "React Native, Redux, Typescript, reanimated, expo-notifications, expo-linking sentry and Jest",
  },
  // {
  //   name: "assets 360",
  //   details:
  //     "This is a sample of a project that I have completed for a client. The 360 Image Stitcher is a powerful app that allows users to create immersive 360-degree images using their mobile device's camera and motion sensors.",
  //   image: Assets360Image,
  //   site: "https://getassets360.onrender.com/",
  //   showCode: false,
  //   showSite: true,
  //   techStack: "React, tailwindcss, express, open-cv and python",
  // },
  {
    name: "Mintplex",
    details:
      "Mintplex is a platform designed to empower NFT creators with an innovative approach to minting and managing their digital assets.",
    image: MintplexImage,
    site: "https://mintplex.xyz/",
    showCode: false,
    showSite: true,
    techStack: "React & tailwindcss ",
  },
  {
    name: "Aperture",
    details: "A Cross-chain Investment Solution",
    image: ApertureImage,
    site: "https://aperture-ecru.vercel.app/",
    showCode: false,
    showSite: true,
    techStack: "React & MUI",
  },
  {
    name: "Covid Tracker",
    details: "A react app to visualize covid stats",
    image: CovidImage,
    site: "https://covid-tracker-gilt-seven.vercel.app/",
    showCode: false,
    showSite: true,
    techStack: "React & MUI",
  },
  {
    name: "Evolve Fitness",
    details: "A sample site designed for a client",
    image: GymImage,
    site: "https://material-fitness.vercel.app/",
    showCode: false,
    showSite: true,
    techStack: "React & MUI",
  },
  {
    name: "Gee2",
    details:
      "A transportation mobile app that enables passengers to request rides while providing drivers with the ability to receive payments. It is mainly used In Enugu State of Nigeria.",
    image: Gee2Image,
    site: "https://gee2rides.com/",
    showCode: false,
    showSite: true,
    techStack:
      "React Native, Redux, Typescript, reanimated + moti, Google maps and Jest",
  },
  {
    name: "Etijar",
    details: "A fintech mobile application for keeping track of loans",
    image: EtijarImage,
    site: "https://www.etijar.com/",
    showCode: false,
    showSite: true,
    techStack: "React Native, Redux, Typescript, reanimated and Jest",
  },

  {
    name: "Smart box",
    details: "React app that uses AI to detect faces and apparels in an image.",
    image: SmartboxImage,
    code: "https://github.com/AbdullahGumi/smart-box",
    site: "https://abdullahgumi.github.io/smart-box/",
    showCode: true,
    showSite: true,
    techStack: "React, Redux, Redux-thunk, MUI and clarifai",
  },
];

function Projects() {
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      <div className="w-full my-10">
        <SubHeader title="Chronicles of a legacy" leftText={"Vol.1 Ch.3"} />
      </div>
      <h1 className="sm:text-9xl text-7xl mb-20 -rotate-3" id="projectsId">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center sm:gap-12 gap-0">
        {items.map((item, i) => (
          <Project
            key={i}
            title={item.name}
            details={item.details}
            image={item.image}
            site={item.site}
            code={item.code}
            showCode={item.showCode}
            showSite={item.showSite}
            techStack={item.techStack}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
