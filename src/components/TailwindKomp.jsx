import React from "react";

function TailwindKomp({ isHoverTl, toggleHover }) {
  return (
    <div
      onMouseEnter={() => toggleHover("tl")}
      onMouseLeave={() => toggleHover("tl")}
      className={`shadow-2xl ${
        isHoverTl
          ? "bg-black transition-all duration-500 "
          : "bg-white transition-all duration-500 "
      } border-[1px] border-black md:w-[186px] md:h-[186px] w-[150px] h-[150px] radius-[4px] flex justify-center items-center rounded-[4px] flex-col gap-5`}
    >
      <svg
        // width="93"
        // height="56"
        viewBox="0 0 93 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-[56px] md:h-[56px] w-[50px] h-[50px] duration-700 transition-all "
      >
        <g clipPath="url(#clip0_196_521)">
          <mask
            id="mask0_196_521"
            // style="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="93"
            height="55"
          >
            <path d="M0.974121 0H92.6105V54.9818H0.974121V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_196_521)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.7923 0C34.5741 0 26.9378 6.10909 23.8832 18.3273C28.465 12.2182 33.8105 9.92727 39.9196 11.4545C43.4052 12.3251 45.8963 14.8553 48.6539 17.6536C53.1458 22.2133 58.3453 27.4909 69.7014 27.4909C81.9196 27.4909 89.5559 21.3818 92.6105 9.16364C88.0287 15.2727 82.6832 17.5636 76.5741 16.0364C73.0885 15.1658 70.5974 12.6356 67.8398 9.83733C63.3479 5.27758 58.1484 0 46.7923 0ZM23.8832 27.4909C11.665 27.4909 4.02867 33.6 0.974121 45.8182C5.55594 39.7091 10.9014 37.4182 17.0105 38.9455C20.4961 39.8177 22.9872 42.3462 25.7448 45.1445C30.2367 49.7042 35.4362 54.9818 46.7923 54.9818C59.0105 54.9818 66.6468 48.8727 69.7014 36.6545C65.1196 42.7636 59.7741 45.0545 53.665 43.5273C50.1795 42.6567 47.6883 40.1265 44.9307 37.3282C40.4388 32.7685 35.2393 27.4909 23.8832 27.4909Z"
              fill={`${isHoverTl ? "white" : "black"}`}
              className="duration-700 transition-all"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_196_521">
            <rect
              width="91.6364"
              height="56"
              fill="black"
              transform="translate(0.974121)"
            />
          </clipPath>
        </defs>
      </svg>

      <h1
        className={`${
          isHoverTl
            ? "text-white duration-700 transition-all"
            : "text-black duration-700 transition-all"
        } font-bold`}
      >
        Tailwind Css
      </h1>
    </div>
  );
}

export default TailwindKomp;
