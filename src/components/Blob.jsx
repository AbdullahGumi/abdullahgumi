import React from "react";
import { BlobSvg } from "../assets/svg";

function Blob({ position }) {
  return (
    <div
      className={`sm:w-[200px] sm:h-[200px] w-[150px] h-auto absolute ${position}`}
    >
      <BlobSvg />
    </div>
  );
}

export default Blob;
