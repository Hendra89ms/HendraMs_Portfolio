import React from "react";
import { Link } from "react-scroll";
import LogoResponsive from "../assets/downloadResponsive.png";

function ResponsiveNav({ handleMenu, downloadCV }) {
  return (
    <div className="fixed right-[10px] z-50 top-[55px] bg-black w-[200px] md:hidden block text-white p-5 ">
      <div className="w-full flex items-center flex-col gap-5 text-sm">
        <Link
          to="/"
          spy={true}
          smooth={true}
          onClick={handleMenu}
          duration={700}
        >
          Home
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          onClick={handleMenu}
          duration={700}
        >
          Skills
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          onClick={handleMenu}
          duration={700}
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          onClick={handleMenu}
          duration={700}
        >
          Contact
        </Link>
        <button
          onClick={downloadCV}
          className="flex gap-3 bg-white text-black text-sm justify-center items-center w-full h-[35px] px-2 rounded-[4px] "
        >
          <h1>Resume</h1>
          <img src={LogoResponsive} alt="logo download" />
        </button>
      </div>
    </div>
  );
}

export default ResponsiveNav;
