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
        disableButtonsControls
        disableDotsControls
        items={items}
        autoHeight
        autoWidth
        autoPlay
        infinite
        animationDuration={3000}
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
