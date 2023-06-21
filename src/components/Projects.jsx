import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import SubHeader from "./SubHeader";

import Project from "./Project";

import AZAImage from "../assets/images/aza.png";
import Assets360Image from "../assets/images/assets360.png";
import EtijarImage from "../assets/images/etijar.png";
import Gee2Image from "../assets/images/gee2.png";
import SmartboxImage from "../assets/images/smartbox.png";

const items = [
  <Project
    title={"AZA"}
    details={
      "A fintech mobile application which enables users to perform P2P transactions, invest their money, and securely store funds in a vault for future needs"
    }
    image={AZAImage}
    site={"https://www.azanaija.com/"}
    showCode={false}
    showSite
  />,
  <Project
    title={"Gee2"}
    details={
      "A transportation mobile app that enables passengers to request rides while providing drivers with the ability to receive payments. It is mainly used In Enugu State of Nigeria."
    }
    image={Gee2Image}
    site={"https://gee2rides.com/"}
    showCode={false}
    showSite
  />,
  <Project
    title={"Etijar"}
    details={"A fintech mobile application for keeping track of loans"}
    image={EtijarImage}
    site={"https://www.etijar.com/"}
    showCode={false}
    showSite
  />,
  <Project
    showCode={false}
    showSite
    title={"assets 360"}
    details={
      "This is a project I have completed for a client. The 360 Image Stitcher is a powerful app that allows users to create immersive 360-degree images using their mobile device's camera and motion sensors."
    }
    image={Assets360Image}
    site={"https://getassets360.onrender.com/"}
  />,
  <Project
    showCode
    showSite
    title={"Smart box"}
    details={
      "React app that uses AI to detect faces and apparels in an image  Technologies used: React, Redux, Redux-thunk, Material UI, Clarifai"
    }
    image={SmartboxImage}
    code={"https://github.com/AbdullahGumi/smart-box"}
    site={"https://abdullahgumi.github.io/smart-box/"}
  />,
];

const ChevronIcon = () => {
  return (
    <svg width="45" height="23" viewBox="0 0 45 23" fill="none">
      <path
        d="M1.80228 0.500001H1.8023H33.0344C33.4859 0.499717 33.9351 0.576145 34.3433 0.726663C34.7508 0.876899 35.1164 1.10068 35.3966 1.39098L43.9532 10.232C43.9534 10.2322 43.9535 10.2323 43.9537 10.2325L43.9538 10.2327L1.80228 0.500001ZM1.80228 0.500001C1.59677 0.500009 1.38893 0.538124 1.19933 0.616367C1.01095 0.694102 0.832058 0.815344 0.700158 0.985115C0.565457 1.15849 0.485594 1.37716 0.502228 1.6143C0.518736 1.84964 0.626609 2.05303 0.775481 2.20687C0.775482 2.20687 0.775483 2.20688 0.775484 2.20688L9.76955 11.5012L1.80228 0.500001ZM41.8604 11.5001L33.3426 2.69908L33.3422 2.69868C33.3299 2.68589 33.2985 2.66118 33.2401 2.63966C33.1826 2.61846 33.1115 2.60521 33.0347 2.60526L33.0344 2.60526H4.4809L11.8624 10.2332C11.8625 10.2333 11.8626 10.2334 11.8627 10.2335C12.202 10.583 12.4092 11.0232 12.4092 11.5013C12.4092 11.9791 12.2021 12.4192 11.8629 12.7686L41.8604 11.5001ZM41.8604 11.5001L33.3426 20.3011L33.3422 20.3015C33.3299 20.3142 33.2985 20.3389 33.2402 20.3604C33.1827 20.3816 33.1117 20.3948 33.0349 20.3947H33.0344H4.4813M41.8604 11.5001L4.4813 20.3947M4.4813 20.3947L11.8623 12.7692L4.4813 20.3947Z"
        fill="black"
        stroke="black"
      />
    </svg>
  );
};

function Projects() {
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      <div className="w-full my-10">
        <SubHeader title="Chronicles of a legacy" leftText={"Vol.1 CH.3"} />
      </div>
      <h1 className="sm:text-9xl text-7xl mb-40 -rotate-3" id="projectsId">
        Projects
      </h1>
      <AliceCarousel
        renderNextButton={(e) => (
          <div className="cursor-pointer mt-5 w-fit mr-auto">
            <ChevronIcon />
          </div>
        )}
        renderPrevButton={() => (
          <div className="cursor-pointer mt-5 w-fit ml-auto rotate-180">
            <ChevronIcon />
          </div>
        )}
        disableDotsControls
        items={items}
        autoHeight
        autoWidth
        autoPlay
        infinite
        animationDuration={800}
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        }}
      />
    </div>
  );
}

export default Projects;
