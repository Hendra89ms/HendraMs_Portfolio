import React, { useState } from "react";
import Image1 from "../assets/column.png";
import Typewriter from "typewriter-effect";
import Banner from "../assets/Banner.png";
import { Link } from "react-router-dom";
import "./homePage.css";

function HomePage() {
  const [isHoveredLk, setIsHoveredLk] = useState(false);
  const [isHoverIg, setIsHoverIg] = useState(false);
  const [isHoverWa, setIsHoverWa] = useState(false);
  const [isHoverDc, setIsHoverDc] = useState(false);

  const toggleHover = (name) => {
    if (name === "Ig") {
      return setIsHoverIg(!isHoverIg);
    }
    if (name === "Lk") {
      return setIsHoveredLk(!isHoveredLk);
    }
    if (name === "wa") {
      return setIsHoverWa(!isHoverWa);
    }

    if (name === "Dc") {
      return setIsHoverDc(!isHoverDc);
    }
  };

  return (
    <section
      className="w-screen pt-[85px] md:pb-14 md:w-[1100px] mx-auto  flex flex-col"
      id="/"
    >
      <div className="md:flex md:flex-row-reverse flex flex-col relative  md:px-0 w-full ">
        <div className="md:w-[700px] w-full flex justify-center md:justify-normal items-center ">
          <img
            src={Image1}
            alt="Image1"
            className=" md:hidden bg-cover w-[300px] h-[300px] mt-4 "
          />

          <img
            src={Banner}
            alt="banner"
            className=" hidden md:flex start-0 bg-cover md:w-[750px] md:h-[400px] md:absolute md:transform md:translate-x-[85%] -translate-y-1/6 animated-div"
          />
        </div>

        <div className="w-screen  pt-[30px] md:w-[900px] md:pt-[80px] px-2 md:px-0 md:ml-8 ml-0">
          <h1 className=" md:text-2xl text-xl">
            Hello I'am <span className="font-bold">Hendra manase sitorus</span>{" "}
          </h1>
          <h1 className=" font-bold md:text-2xl text-xl">
            <Typewriter
              options={{
                strings: ["FullStack Developer", "FrontEnd Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="md:text-2xl text-xl">Base In Indonesia.</p>

          <p className="pt-[30px] md:text-lg text-[16px]">
            I am a
            <span className="font-semibold">
              {" "}
              FullStack Developer or Frontend Developer
            </span>{" "}
            who has experience and expertise in building quality and scalable
            web applications. I understand technology and programming languages
            such as HTML, CSS, JavaScript, React Js, Node.js and Tailwind Css. I
            am able to manage projects from start to finish, involve the team
            and work well in teamwork.
          </p>

          <div className="flex gap-4 pt-[30px]">
            <Link
              to={"https://www.linkedin.com/feed/"}
              className={`shadow-2xl w-[48px] h-[48px] md:w-[56px] md:h-[56px]  border-[2px] border-black rounded-[4px] flex justify-center items-center cursor-pointer ${
                isHoveredLk
                  ? "bg-black transition-all duration-500 "
                  : "hover:bg-black transition-all duration-500 "
              }`}
              onMouseEnter={() => toggleHover("Lk")}
              onMouseLeave={() => toggleHover("Lk")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="duration-700 transition-all"
              >
                <path
                  d="M17.5 3.60294V16.3971C17.5 16.6896 17.3838 16.9701 17.177 17.177C16.9701 17.3838 16.6896 17.5 16.3971 17.5H3.60294C3.31042 17.5 3.02989 17.3838 2.82304 17.177C2.6162 16.9701 2.5 16.6896 2.5 16.3971V3.60294C2.5 3.31042 2.6162 3.02989 2.82304 2.82304C3.02989 2.6162 3.31042 2.5 3.60294 2.5H16.3971C16.6896 2.5 16.9701 2.6162 17.177 2.82304C17.3838 3.02989 17.5 3.31042 17.5 3.60294ZM6.91176 8.23529H4.70588V15.2941H6.91176V8.23529ZM7.11029 5.80882C7.11146 5.64197 7.07974 5.47651 7.01696 5.32191C6.95418 5.16731 6.86156 5.02659 6.7444 4.90779C6.62723 4.78898 6.48781 4.69442 6.3341 4.6295C6.18038 4.56458 6.01539 4.53057 5.84853 4.52941H5.80882C5.4695 4.52941 5.14408 4.66421 4.90414 4.90414C4.66421 5.14408 4.52941 5.4695 4.52941 5.80882C4.52941 6.14814 4.66421 6.47357 4.90414 6.7135C5.14408 6.95344 5.4695 7.08824 5.80882 7.08824C5.97569 7.09234 6.14173 7.06353 6.29746 7.00344C6.45319 6.94335 6.59555 6.85317 6.71642 6.73804C6.83728 6.62291 6.93427 6.4851 7.00186 6.33247C7.06944 6.17985 7.10629 6.0154 7.11029 5.84853V5.80882ZM15.2941 11.0059C15.2941 8.88382 13.9441 8.05882 12.6029 8.05882C12.1638 8.03684 11.7266 8.13037 11.3349 8.33009C10.9432 8.52981 10.6107 8.82874 10.3706 9.19706H10.3088V8.23529H8.23529V15.2941H10.4412V11.5397C10.4093 11.1552 10.5304 10.7736 10.7782 10.4779C11.026 10.1822 11.3805 9.99616 11.7647 9.96029H11.8485C12.55 9.96029 13.0706 10.4015 13.0706 11.5132V15.2941H15.2765L15.2941 11.0059Z"
                  fill={isHoveredLk ? "white" : "black"}
                  className="duration-700 transition-all"
                />
              </svg>
            </Link>

            <Link
              to={"https://www.instagram.com/hendra_manase_sitorus/"}
              className={`shadow-2xl  w-[48px] h-[48px] md:w-[56px] md:h-[56px] border-[2px] border-black flex justify-center items-center cursor-pointer rounded-md ${
                isHoverIg
                  ? "bg-black transition-colors duration-500 "
                  : "bg-white transition-colors duration-500 "
              }`}
              onMouseEnter={() => toggleHover("Ig")}
              onMouseLeave={() => toggleHover("Ig")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
                className="duration-700 transition-all"
              >
                <path
                  d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"
                  fill={`${isHoverIg ? "white" : "black"}`}
                  className="duration-700 transition-all"
                />
              </svg>
            </Link>

            <Link
              to={"https://wa.me/083857768930"}
              className={`shadow-2xl  w-[48px] h-[48px] md:w-[56px] md:h-[56px] border-[2px] border-black rounded-[4px] flex justify-center items-center cursor-pointer ${
                isHoverWa
                  ? "bg-black transition-colors duration-500 "
                  : "bg-white transition-colors duration-500 "
              }`}
              onMouseEnter={() => toggleHover("wa")}
              onMouseLeave={() => toggleHover("wa")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
                className="duration-700 transition-all"
              >
                <path
                  d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"
                  fill={`${isHoverWa ? "white" : "black"}`}
                  className="duration-700 transition-all"
                />
              </svg>
            </Link>

            <Link
              to={"https://discordapp.com/users/1198572506655752295"}
              className={`shadow-2xl  w-[48px] h-[48px] md:w-[56px] md:h-[56px] border-[2px] border-black rounded-[4px] flex justify-center items-center cursor-pointer ${
                isHoverDc
                  ? "bg-black transition-colors duration-500 "
                  : "hover:bg-black transition-colors duration-500 "
              }`}
              onMouseEnter={() => toggleHover("Dc")}
              onMouseLeave={() => toggleHover("Dc")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="duration-700 transition-all"
              >
                <path
                  d="M8.23997 8.39001C7.66997 8.39001 7.21997 8.89001 7.21997 9.50001C7.21997 10.11 7.67997 10.61 8.23997 10.61C8.80997 10.61 9.25997 10.11 9.25997 9.50001C9.26997 8.89001 8.80997 8.39001 8.23997 8.39001ZM11.89 8.39001C11.32 8.39001 10.87 8.89001 10.87 9.50001C10.87 10.11 11.33 10.61 11.89 10.61C12.46 10.61 12.91 10.11 12.91 9.50001C12.91 8.89001 12.46 8.39001 11.89 8.39001Z"
                  fill={`${isHoverDc ? "white" : "black"}`}
                  className="duration-700 transition-all"
                />
                <path
                  d="M16.75 0H3.35005C2.22005 0 1.30005 0.92 1.30005 2.06V15.58C1.30005 16.72 2.22005 17.64 3.35005 17.64H14.69L14.16 15.79L15.44 16.98L16.65 18.1L18.8 20V2.06C18.8 0.92 17.88 0 16.75 0ZM12.89 13.06C12.89 13.06 12.53 12.63 12.23 12.25C13.54 11.88 14.04 11.06 14.04 11.06C13.63 11.33 13.24 11.52 12.89 11.65C12.39 11.86 11.91 12 11.44 12.08C10.48 12.26 9.60005 12.21 8.85005 12.07C8.28005 11.96 7.79005 11.8 7.38005 11.64C7.15005 11.55 6.90005 11.44 6.65005 11.3C6.62005 11.28 6.59005 11.27 6.56005 11.25C6.54005 11.24 6.53005 11.23 6.52005 11.22C6.34005 11.12 6.24005 11.05 6.24005 11.05C6.24005 11.05 6.72005 11.85 7.99005 12.23C7.69005 12.61 7.32005 13.06 7.32005 13.06C5.11005 12.99 4.27005 11.54 4.27005 11.54C4.27005 8.32 5.71005 5.71 5.71005 5.71C7.15005 4.63 8.52005 4.66 8.52005 4.66L8.62005 4.78C6.82005 5.3 5.99005 6.09 5.99005 6.09C5.99005 6.09 6.21005 5.97 6.58005 5.8C7.65005 5.33 8.50005 5.2 8.85005 5.17C8.91005 5.16 8.96005 5.15 9.02005 5.15C9.63005 5.07 10.32 5.05 11.04 5.13C11.99 5.24 13.01 5.52 14.05 6.09C14.05 6.09 13.26 5.34 11.5601 4.82L11.7 4.66C11.7 4.66 13.07 4.63 14.51 5.71C14.51 5.71 15.95 8.32 15.95 11.54C15.95 11.54 15.1 12.99 12.89 13.06Z"
                  fill={`${isHoverDc ? "white" : "black"}`}
                  className="duration-700 transition-all"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
