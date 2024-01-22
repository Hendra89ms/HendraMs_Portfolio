import React from "react";

function CssKomp({ toggleHover, isHoverCs }) {
  return (
    <div
      onMouseEnter={() => toggleHover("cs")}
      onMouseLeave={() => toggleHover("cs")}
      className={`shadow-2xl ${
        isHoverCs
          ? "bg-black duration-500 transition-all"
          : "bg-white duration-500 transition-all"
      } border-[1px] border-black md:w-[186px] md:h-[186px] w-[150px] h-[150px] radius-[4px] flex justify-center items-center rounded-[4px] flex-col gap-5`}
    >
      <svg
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-[50px] md:h-[50px] w-[45px] h-[45px] duration-700 transition-all"
      >
        <path
          d="M3.125 0L7.10938 45L25 50L42.8844 45.0031L46.875 0H3.125Z"
          fill={`${isHoverCs ? "white" : "black"}`}
          className="duration-700 transition-all"
        />
        <path
          d="M38.3563 14.7156L37.8531 20.3687L36.3344 37.3156L25 40.45L24.9906 40.4531L13.6625 37.3156L12.8719 28.4531H18.4219L18.8344 33.05L24.9938 34.7125L24.9969 34.7094L31.1656 33.0469L32.0063 25.3875L12.6063 25.4406L12.0563 20.2031L32.4719 19.9625L32.8844 14.3562L11.5094 14.4156L11.15 9.2H25H38.85L38.3563 14.7156Z"
          fill={`${isHoverCs ? "black" : "white"}`}
          className="duration-700 transition-all"
        />
      </svg>

      <h1
        className={`${
          isHoverCs
            ? "text-white duration-700 transition-all"
            : "text-black duration-700 transition-all"
        } font-bold`}
      >
        Css
      </h1>
    </div>
  );
}

export default CssKomp;
