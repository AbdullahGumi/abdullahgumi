import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

import SubHeader from "./SubHeader";

import Blob from "./Blob";
import { FrameThree, TwitterSvg, GithubSvg, LinkedinSvg } from "../assets/svg";
import Button from "./Button";
import { toast } from "react-hot-toast";

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

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email("Must be a valid email").required(),
    message: yup.string().required(),
  })
  .required();

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const form = useRef();
  const [buttonLoading, setButtonLoading] = useState(false);
  const currentDate = new Date();

  const suffixes = ["th", "st", "nd", "rd"];

  function getDateSuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    const suffixIndex = day % 10;
    return suffixes[suffixIndex] || "th";
  }

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

  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const formattedDate = `${day}${getDateSuffix(day)} ${
    monthNames[month]
  }, ${year}`;

  const onSubmit = (data, e) => {
    setButtonLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rb9h9gh",
        "template_oictpre",
        form.current,
        "3d4Ur9poxXE-v4sqg"
      )
      .then(
        () => {
          setButtonLoading(false);
          toast.success("Email sent");
        },
        (error) => {
          setButtonLoading(false);
          toast.error(error.text);
        }
      );
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full my-10">
        <SubHeader title="Summoning of a hero" leftText={"Vol.1 Ch.4"} />
      </div>
      <h1 className="sm:text-9xl text-7xl mb-10 -rotate-3" id="contactId">
        Contact
      </h1>

      <Blob position={"top-[10%] left-[30%] rotate-0"} />
      <span
        style={{ fontFamily: "Alegreya SC" }}
        className="text-center max-w-md text-xl mb-10"
      >
        According to reports, Abdulalah Gumi is consistently visiting the post
        office to check for any messages addressed to him.
      </span>
      <div className="md:w-[70%] w-full relative flex flex-col">
        <FrameThree />
        <Blob position={"bottom-[-10%] right-[50%] rotate-90 -z-30"} />

        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="absolute sm:inset-x-16 inset-x-8 md:inset-y-[65px] sm:inset-y-10 inset-y-10 flex flex-col items-center justify-between overflow-auto"
        >
          <span
            className="w-full lg:text-4xl md:text-2xl sm:text-lg text-sm lowercase"
            style={{ fontFamily: "Homemade Apple" }}
          >
            {formattedDate}
          </span>
          <div className="flex flex-col md:mt-10 w-full">
            <div className="flex flex-col items-center w-full">
              <h1 className="md:text-3xl sm:text-3xl text-base">Name</h1>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Write your name"
                style={{ fontFamily: "Homemade Apple" }}
                className="inputPlacholder bg-transparent focus:outline-none border-b border-b-black rounded-none px-5 sm:py-3 py-2 sm:text-2xl text-base md:mt-10 w-[80%]"
              />
              {errors.name && (
                <span className="text-red-400 mt-1 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col items-center w-full md:mt-10 mt-2">
              <h1 className="md:text-3xl sm:text-3xl text-base">Email</h1>
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="Write your email"
                style={{ fontFamily: "Homemade Apple" }}
                className="inputPlacholder bg-transparent focus:outline-none border-b border-b-black rounded-none px-5 sm:py-3 py-2 sm:text-2xl text-base md:mt-10 w-[80%]"
              />
              {errors.email && (
                <span className="text-red-400 mt-1 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col items-center w-full md:mt-10 mt-2">
              <h1 className="md:text-3xl sm:text-3xl text-base">Message</h1>
              <textarea
                {...register("message", { required: true })}
                placeholder="Write your message"
                style={{ fontFamily: "Homemade Apple" }}
                className="inputPlacholder bg-transparent focus:outline-none border-b border-b-black rounded-none px-5 sm:py-3 py-2 sm:text-2xl text-base md:mt-10 w-[80%]"
              />
              {errors.message && (
                <span className="text-red-400 mt-1 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="mx-auto mt-auto mb-auto w-[180px]">
            <Button
              title={"Dispatch Message"}
              type={"submit"}
              loading={buttonLoading}
            />
          </div>
        </form>
        <a
          href="https://drive.google.com/file/d/1isgVRHgQfFNlR0PMAkYDfZStEFx4FIFO/view"
          target="_blank"
          className="sm:text-xs text-[10px] -rotate-12 ml-auto border-[2px] border-black text-center p-2 font-bold sm:mt-3 mt-5"
        >
          Download Resume
        </a>
      </div>

      <div className="flex items-center justify-between sm:w-[50%] w-full my-10">
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
