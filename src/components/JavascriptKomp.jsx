import React from "react";

function JavascriptKomp({ toggleHover, isHoverJs }) {
  return (
    <div
      onMouseEnter={() => toggleHover("js")}
      onMouseLeave={() => toggleHover("js")}
      className={`shadow-2xl border-[1px] border-black md:w-[186px] md:h-[186px] w-[150px] h-[150px] radius-[4px] flex justify-center items-center rounded-[4px] flex-col gap-5 ${
        isHoverJs
          ? "bg-black duration-500 transition-all"
          : "bg-white duration-500 transition-all"
      } `}
    >
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-[56px] md:h-[56px] w-[40px] h-[40px]  transition-all duration-[800ms]"
      >
        <path
          d="M0 56V0H56V56H0Z"
          fill={`${isHoverJs ? "white" : "black"}`}
          className="duration-[800ms] transition-all"
        />
        <path
          d="M36.6147 41.9176C37.6912 43.666 38.861 45.3414 41.339 45.3414C43.4203 45.3414 44.5123 44.3069 44.5123 42.8758C44.5123 41.1631 43.383 40.5549 41.0932 39.5578L39.8378 39.0227C36.215 37.4858 33.8054 35.56 33.8054 31.4923C33.8054 27.7434 36.6754 24.8905 41.1601 24.8905C44.3536 24.8905 46.6481 25.9965 48.3032 28.8929L44.3925 31.3927C43.5323 29.8558 42.6021 29.2507 41.1601 29.2507C39.6885 29.2507 38.7567 30.1794 38.7567 31.3927C38.7567 32.8922 39.6901 33.4989 41.8445 34.4276L43.0998 34.9627C47.3698 36.7811 49.7778 38.6385 49.7778 42.8136C49.7778 47.3122 46.225 49.7778 41.4556 49.7778C36.7905 49.7778 34.1414 47.4367 32.6667 44.5387L36.6147 41.9176ZM18.5921 42.0451C19.3792 43.4545 20.5754 44.5387 22.2958 44.5387C23.9416 44.5387 24.889 43.8885 24.889 41.3607V24.8889H30.0736V42.1571C30.0736 47.3947 27.0356 49.7778 22.5992 49.7778C18.5905 49.7778 15.6972 47.0618 14.5181 44.5387L18.5921 42.0451Z"
          fill={`${isHoverJs ? "black" : "white"}`}
          className="duration-[800ms] transition-all"
        />
      </svg>

      <h1
        className={`font-bold ${
          isHoverJs
            ? "text-white transition-all duration-[800ms]"
            : "text-black transition-all duration-[800ms]"
        }`}
      >
        Javasript
      </h1>
    </div>
  );
}

export default JavascriptKomp;
