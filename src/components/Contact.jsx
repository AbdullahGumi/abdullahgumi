import React, { useState } from "react";
import SubHeader from "./SubHeader";

import Blob from "./Blob";
import { FrameThree, TwitterSvg, GithubSvg, LinkedinSvg } from "../assets/svg";
import Button from "./Button";

const socials = [
  {
    icon: <TwitterSvg />,
    title: "Twitter",
    url: "https://twitter.com/AbdullahGumi_",
  },
  {
    icon: <GithubSvg />,
    title: "Github",
    url: "https://github.com/abdullahgumi",
  },
  {
    icon: <LinkedinSvg />,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/abdullah-gumi-b0b4b4115/",
  },
];

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Get the current date
  const currentDate = new Date();

  // Define an array of suffixes for the date
  const suffixes = ["th", "st", "nd", "rd"];

  // Function to get the suffix for a given number
  function getDateSuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    const suffixIndex = day % 10;
    return suffixes[suffixIndex] || "th";
  }

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, month, and year
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Format the date with the suffix and month name
  const formattedDate = `${day}${getDateSuffix(day)} ${
    monthNames[month]
  }, ${year}`;

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full my-10">
        <SubHeader title="Summoning of a hero" leftText={"Vol.1 CH.4"} />
      </div>
      <h1 className="sm:text-9xl text-7xl mb-20 -rotate-3" id="contactId">
        Contact
      </h1>

      <Blob position={"top-[10%] left-[30%] rotate-0"} />
      <span
        style={{ fontFamily: "Alegreya SC" }}
        className="text-center max-w-md text-xl mb-5"
      >
        According to reports, Abdulalah Gumi is consistently visiting the post
        office to check for any messages addressed to him.
      </span>
      <div className="lg:w-[85%] w-full relative flex flex-col">
        <FrameThree />
        <Blob position={"bottom-[-10%] right-[50%] rotate-90 -z-30"} />

        <div className="absolute sm:inset-x-16 inset-x-8 sm:inset-y-28 inset-y-10 flex flex-col items-center overflow-auto">
          <span
            className="w-full lg:text-4xl md:text-2xl sm:text-lg text-sm lowercase"
            style={{ fontFamily: "Homemade Apple" }}
          >
            {formattedDate}
          </span>
          <div className="flex flex-col md:mt-36 w-full">
            <div className="flex flex-col items-center w-full">
              <h1 className="md:text-5xl sm:text-3xl text-base">Name</h1>
              <input
                type="text"
                value={name}
                onChange={(t) => setName(t.target.value)}
                placeholder="Write your name"
                style={{ fontFamily: "Homemade Apple" }}
                className="inputPlacholder bg-transparent focus:outline-none border-b border-b-black rounded-none px-5 sm:py-3 py-2 sm:text-2xl text-base md:mt-10 w-[80%]"
              />
            </div>
            <div className="flex flex-col items-center w-full md:mt-16 mt-2">
              <h1 className="md:text-5xl sm:text-3xl text-base">Email</h1>
              <input
                type="text"
                value={email}
                onChange={(t) => setEmail(t.target.value)}
                placeholder="Write your email"
                style={{ fontFamily: "Homemade Apple" }}
                className="inputPlacholder bg-transparent focus:outline-none border-b border-b-black rounded-none px-5 sm:py-3 py-2 sm:text-2xl text-base md:mt-10 w-[80%]"
              />
            </div>
            <div className="flex flex-col items-center w-full md:mt-16 mt-2">
              <h1 className="md:text-5xl sm:text-3xl text-base">Message</h1>
              <textarea
                value={message}
                onChange={(t) => setMessage(t.target.value)}
                placeholder="Write your message"
                style={{ fontFamily: "Homemade Apple" }}
                className="inputPlacholder bg-transparent focus:outline-none border-b border-b-black rounded-none px-5 sm:py-3 py-2 sm:text-2xl text-base md:mt-10 w-[80%]"
              />
            </div>
          </div>
          <div className="mx-auto mt-20 w-[180px]">
            <Button title={"Dispatch Message"} />
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1isgVRHgQfFNlR0PMAkYDfZStEFx4FIFO/view"
          target="_blank"
          className="sm:text-xs text-[10px] -rotate-12 ml-auto border-[2px] border-black text-center p-2 font-bold"
        >
          Download Resume
        </a>
      </div>

      <div className="flex items-center justify-between sm:w-[50%] w-full my-20">
        {socials.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            className="flex flex-col items-center gap-3-5"
          >
            <div className="h-auto sm:w-full w-[70%]">{item.icon}</div>
            <span>{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
