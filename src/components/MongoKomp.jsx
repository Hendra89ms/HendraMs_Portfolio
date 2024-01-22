import React from "react";

function MongoKomp({ toggleHover, isHoverMd }) {
  return (
    <div
      onMouseEnter={() => toggleHover("md")}
      onMouseLeave={() => toggleHover("md")}
      className={`shadow-2xl ${
        isHoverMd
          ? "bg-black duration-500 transition-all"
          : "bg-white duration-500 transition-all"
      } border-[1px] border-black md:w-[186px] md:h-[186px] w-[150px] h-[150px] radius-[4px] flex justify-center items-center rounded-[4px] flex-col gap-5`}
    >
      <svg
        viewBox="0 0 27 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-[56px] md:h-[56px] w-[45px] h-[45px] duration-700 transition-all"
      >
        <g clipPath="url(#clip0_196_519)">
          <path
            d="M18.4584 6.24159C16.0977 3.45303 14.0648 0.62089 13.6495 0.0326784C13.6058 -0.0108928 13.5402 -0.0108928 13.4965 0.0326784C13.0812 0.62089 11.0483 3.45303 8.68764 6.24159C-11.5751 31.9704 11.879 49.3336 11.879 49.3336L12.0757 49.4643C12.2506 52.144 12.6877 56 12.6877 56H13.5621H14.4364C14.4364 56 14.8736 52.1657 15.0485 49.4643L15.2451 49.3119C15.267 49.3119 38.721 31.9704 18.4584 6.24159ZM13.5621 48.9414C13.5621 48.9414 12.5129 48.0482 12.2287 47.5907V47.5473L13.4965 19.5308C13.4965 19.4437 13.6277 19.4437 13.6277 19.5308L14.8954 47.5473V47.5907C14.6113 48.0482 13.5621 48.9414 13.5621 48.9414Z"
            fill={`${isHoverMd ? "white" : "black"}`}
            className="duration-700 transition-all"
          />
        </g>
        <defs>
          <clipPath id="clip0_196_519">
            <rect
              width="26.0465"
              height="56"
              fill="white"
              transform="translate(0.440918)"
            />
          </clipPath>
        </defs>
      </svg>

      <h1
        className={`${
          isHoverMd
            ? "text-white duration-700 transition-all "
            : "duration-700 transition-all text-black"
        } font-bold`}
      >
        MongoDB
      </h1>
    </div>
  );
}

export default MongoKomp;
