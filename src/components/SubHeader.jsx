import React from "react";

function SubHeader({ title, leftText }) {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full border-black border-b-[.5px]" />
      <div className="w-full border-black border-b-[2px] mt-0.5" />
      <div className="flex items-center">
        <span className="flex items-center justify-center w-[15%] text-center sm:text-base text-xs">
          {leftText}
        </span>
        <span
          className="text-center w-[70%] py-2 border-l border-l-gray-400 border-r border-r-gray-400 "
          style={{ fontFamily: "Alegreya SC", fontWeight: "800" }}
        >
          {title}
        </span>
        <span className="flex items-center justify-center w-[15%] text-center sm:text-base text-xs">
          Date: 1876
        </span>
      </div>
      <div className="w-full border-black border-b-[2px] " />
      <div className="w-full border-black border-b-[.5px] mt-0.5" />
    </div>
  );
}

export default SubHeader;
