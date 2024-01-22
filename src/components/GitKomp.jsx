import React from "react";

function GitKomp({ toggleHover, isHoverGt }) {
  return (
    <div
      onMouseEnter={() => toggleHover("gt")}
      onMouseLeave={() => toggleHover("gt")}
      className={`shadow-2xl ${
        isHoverGt
          ? "bg-black duration-700 transition-all"
          : "bg-white duration-700 transition-all"
      } border-[1px] border-black md:w-[186px] md:h-[186px] w-[150px] h-[150px] radius-[4px] flex justify-center items-center rounded-[4px] flex-col gap-5`}
    >
      <svg
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-[56px] md:h-[56px] w-[40px] h-[40px] "
      >
        <path
          d="M44.2333 20.7833L25.2167 1.76665C24.6333 1.18331 23.8167 0.833313 23 0.833313C22.1833 0.833313 21.3667 1.18331 20.7833 1.76665L16.7 5.84998L21.4833 10.6333C21.95 10.4 22.4167 10.2833 23 10.2833C24.9833 10.2833 26.5 11.8 26.5 13.7833C26.5 14.3666 26.3833 14.8333 26.15 15.3L30.8167 19.9666C31.2833 19.7333 31.75 19.6166 32.3333 19.6166C34.3167 19.6166 35.8333 21.1333 35.8333 23.1166C35.8333 25.1 34.3167 26.6166 32.3333 26.6166C30.35 26.6166 28.8333 25.1 28.8333 23.1166C28.8333 22.5333 28.95 22.0666 29.1833 21.6L24.5167 16.9333C24.4 16.9333 24.2833 17.05 24.1667 17.05V29.1833C25.5667 29.65 26.5 30.9333 26.5 32.45C26.5 34.4333 24.9833 35.95 23 35.95C21.0167 35.95 19.5 34.4333 19.5 32.45C19.5 30.9333 20.4333 29.65 21.8333 29.1833V16.9333C20.4333 16.4666 19.5 15.1833 19.5 13.6666C19.5 13.0833 19.6167 12.6166 19.85 12.15L15.0667 7.36665L1.76668 20.7833C1.18334 21.3666 0.833344 22.1833 0.833344 23C0.833344 23.8166 1.18334 24.6333 1.76668 25.2166L20.7833 44.2333C21.3667 44.8167 22.1833 45.1666 23 45.1666C23.8167 45.1666 24.6333 44.8167 25.2167 44.2333L44.2333 25.2166C44.8167 24.6333 45.1667 23.8166 45.1667 23C45.1667 22.1833 44.8167 21.3666 44.2333 20.7833Z"
          fill={`${isHoverGt ? "white" : "black"}`}
          className="duration-700 transition-all"
        />
      </svg>

      <h1
        className={`${
          isHoverGt
            ? "text-white duration-700 transition-all"
            : "text-black duration-700 transition-all"
        } font-bold`}
      >
        Git
      </h1>
    </div>
  );
}

export default GitKomp;
