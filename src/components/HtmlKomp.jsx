import React from "react";

function HtmlKomp({ toggleHover, isHoverHt }) {
  return (
    <div
      onMouseEnter={() => toggleHover("ht")}
      onMouseLeave={() => toggleHover("ht")}
      className={`shadow-2xl ${
        isHoverHt
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
        <g clipPath="url(#clip0_2_7)">
          <path
            d="M3.14825 1.6552L6.39334 43.1704C6.44206 43.7938 6.86404 44.3254 7.46015 44.5144L24.5359 49.9282C24.8379 50.024 25.1621 50.024 25.4641 49.9282L42.5399 44.5144C43.136 44.3254 43.5579 43.7938 43.6067 43.1704L46.8518 1.6552C46.9216 0.762645 46.2161 0 45.3209 0H4.67918C3.78398 0 3.07857 0.762645 3.14825 1.6552ZM38.5299 14.536H17.381L18.0192 20.4217H38.0699L36.7583 37.2009L25.0001 40.9288L13.2418 37.2009L12.5566 28.4347H18.7282V32.7347L25.165 34.4622L31.5633 32.7347L32.0597 25.8818H12.357L11.0489 9.14656H38.9511L38.5299 14.536Z"
            fill={`${isHoverHt ? "white" : "black"}`}
            className="duration-700 transition-all"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_7">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <h1
        className={`${
          isHoverHt
            ? "text-white duration-700 transition-all"
            : "text-black duration-700 transition-all"
        } font-bold`}
      >
        Html 5
      </h1>
    </div>
  );
}

export default HtmlKomp;
