import React from "react";

function ReactJsKomp({ toggleHover, isHoverRj }) {
  return (
    <div
      onMouseEnter={() => toggleHover("rj")}
      onMouseLeave={() => toggleHover("rj")}
      className={`shadow-2xl border-[1px] border-black md:w-[186px] md:h-[186px] w-[150px] h-[150px] radius-[4px] flex justify-center items-center rounded-[4px] flex-col gap-5 ${
        isHoverRj
          ? "bg-black duration-500 transition-all"
          : "bg-white duration-500 transition-all"
      }`}
    >
      <svg
        viewBox="0 0 62 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-[56px] md:h-[56px] w-[45px] h-[45px] duration-700 transition-all"
      >
        <g clipPath="url(#clip0_196_513)">
          <path
            d="M31.2933 33.9258C34.5066 33.9258 37.1115 31.2727 37.1115 27.9999C37.1115 24.7271 34.5066 22.074 31.2933 22.074C28.08 22.074 25.4751 24.7271 25.4751 27.9999C25.4751 31.2727 28.08 33.9258 31.2933 33.9258Z"
            fill={`${isHoverRj ? "white" : "black"}`}
            className="duration-700 transition-all"
          />
          <path
            d="M31.2933 41.3334C47.3598 41.3334 60.3842 35.3639 60.3842 28.0001C60.3842 20.6363 47.3598 14.6667 31.2933 14.6667C15.2268 14.6667 2.20239 20.6363 2.20239 28.0001C2.20239 35.3639 15.2268 41.3334 31.2933 41.3334Z"
            stroke={`${isHoverRj ? "white" : "black"}`}
            className="duration-700 transition-all"
            strokeWidth="3"
          />
          <path
            d="M19.9563 34.6667C27.9895 48.8383 39.5775 57.3419 45.8388 53.66C52.1001 49.9781 50.6637 35.505 42.6304 21.3334C34.5972 7.16172 23.0092 -1.34189 16.7479 2.34001C10.4866 6.02191 11.9231 20.4951 19.9563 34.6667Z"
            stroke={`${isHoverRj ? "white" : "black"}`}
            className="duration-700 transition-all"
            strokeWidth="3"
          />
          <path
            d="M19.9562 21.3333C11.923 35.5049 10.4865 49.978 16.7478 53.6599C23.0091 57.3418 34.5971 48.8382 42.6303 34.6666C50.6636 20.495 52.1 6.02182 45.8387 2.33992C39.5774 -1.34197 27.9894 7.16164 19.9562 21.3333Z"
            stroke={`${isHoverRj ? "white" : "black"}`}
            className="duration-700 transition-all"
            strokeWidth="3"
          />
        </g>
        <defs>
          <clipPath id="clip0_196_513">
            <rect
              width="61.0909"
              height="56"
              fill="white"
              transform="translate(0.747803)"
            />
          </clipPath>
        </defs>
      </svg>

      <h1
        className={`${
          isHoverRj
            ? "text-white transition-all duration-700"
            : "text-black transition-all duration-700"
        } font-bold`}
      >
        React Js
      </h1>
    </div>
  );
}

export default ReactJsKomp;
