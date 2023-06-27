import React from "react";

function Button({ title, onClick, type, loading }) {
  return (
    <button
      disabled={loading}
      type={type}
      onClick={onClick}
      className="w-[180px] flex flex-col relative my-5 items-center justify-center  outline-none"
    >
      <span className={`absolute ${loading ? "text-gray-400" : "text-black"}`}>
        {title}
      </span>
      <div
        className={`w-full ${
          loading ? "border-gray-400" : "border-black"
        } border-b-[1px] `}
      />
      <div
        className={`w-full ${
          loading ? "border-gray-400" : "border-black"
        } border-b-[1px] mt-10`}
      />
      <div
        className={`h-[60px] w-1 ${
          loading ? "border-gray-400" : "border-black"
        } border-l-[1px] absolute right-[3%] bottom-[-18%]`}
      />
      <div
        className={`h-[60px] w-1 ${
          loading ? "border-gray-400" : "border-black"
        } border-l-[1px] absolute right-[94%] bottom-[-18%]`}
      />
    </button>
  );
}

export default Button;
