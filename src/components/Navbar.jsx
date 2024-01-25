import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ResponsiveNav from "./ResponsiveNav";
import jsPDF from "jspdf";
// import HendraCv from '../assets/'

function Navbar() {
  const [setMenu, setHandleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => {
    setHandleMenu(!setMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 70) {
        setScrolled(true); // Jika discroll lebih dari 100px, set warna background navbar menjadi hitam
      } else {
        setScrolled(false); // Jika discroll kurang dari 100px, set warna background navbar menjadi default
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const downloadFileAtURL = (url) => {
    // URL FOR DOWNLOAD FILE
    const pdfFIle = "https://i.ibb.co/YN1PVbG/My-Porfolio-1.png";

    const doc = new jsPDF("portrait", "px", "a4", false);
    doc.addImage(pdfFIle, "PNG", 0, 0, 417, 653);
    doc.save("resume.pdf");
  };

  return (
    <div
      id="#"
      className={` w-screen h-[70px] md:px-0 px-2 fixed left-0 top-0 z-50 border-b-[1px] flex justify-center ${
        scrolled
          ? "bg-black transition-all duration-700"
          : "bg-transparent transition-all duration-700"
      }}`}
    >
      <div className="md:w-[1100px] w-full mx-auto flex justify-between items-center ">
        {/* PERSONAL */}
        <div className="flex items-center gap-3">
          <svg
            viewBox="0 0 24 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-[24px] md:h-[36px] w-[20px] h-[32px]"
          >
            <path
              d="M23.5294 12.2118C23.5294 16.8819 20.7623 20.9082 16.7793 22.7351C18.4612 21.3496 19.5322 19.248 19.5322 16.896C19.5322 12.7642 16.2259 9.40423 12.112 9.32046C12.0574 9.3167 12.0075 9.3167 11.9529 9.3167C11.8983 9.3167 11.8485 9.3167 11.7939 9.32046C10.2673 9.40328 9.05882 10.6663 9.05882 12.2108V26.6814C9.05882 31.4748 5.16988 35.3638 0.376465 35.3638V12.2118C0.376465 5.81928 5.56047 0.635284 11.9529 0.635284C18.3454 0.635284 23.5294 5.81928 23.5294 12.2118Z"
              fill={scrolled ? "white" : "black"}
            />
            <path
              d="M13.9992 14.2582C15.1294 13.128 15.1294 11.2956 13.9992 10.1654C12.8689 9.03515 11.0365 9.03515 9.90629 10.1654C8.77608 11.2956 8.77608 13.128 9.90629 14.2582C11.0365 15.3884 12.8689 15.3884 13.9992 14.2582Z"
              fill={scrolled ? "white" : "black"}
            />
          </svg>

          <h1
            className={`text-xl font-bold ${
              scrolled ? " text-white" : "text-black"
            }`}
          >
            Personal
          </h1>
        </div>

        {/* ICON X  */}
        <div
          onClick={handleMenu}
          className={` ${setMenu ? " duration-300 animate-pulse" : "flex"}`}
        >
          <div
            className={`md:hidden ${
              setMenu ? "hidden duration-300 animate-pulse" : "flex"
            }`}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 10V8.33333H15.5V10H0.5ZM0.5 5.83333V4.16667H15.5V5.83333H0.5ZM0.5 1.66667V0H15.5V1.66667H0.5Z"
                fill={scrolled ? "white" : "black"}
              />
            </svg>
          </div>
        </div>

        <div
          className={`md:flex gap-2 hidden w-full justify-center items-center  ${
            scrolled ? "text-white" : "text-black"
          }`}
        >
          <Link
            spy={true}
            smooth={true}
            to="/"
            className={`hover:shadow-md  duration-300 px-3  cursor-pointer ${
              scrolled ? "hover:shadow-white" : "hover:shadow-black"
            }`}
          >
            Home
          </Link>

          <Link
            spy={true}
            smooth={true}
            to="skills"
            className={`hover:shadow-md  duration-300 px-3  cursor-pointer ${
              scrolled ? "hover:shadow-white" : "hover:shadow-black"
            }`}
          >
            Skills
          </Link>

          <Link
            spy={true}
            smooth={true}
            to="projects"
            className={`hover:shadow-md  duration-300 px-3  cursor-pointer ${
              scrolled ? "hover:shadow-white" : "hover:shadow-black"
            }`}
          >
            Projects
          </Link>

          <Link
            spy={true}
            smooth={true}
            duration={700}
            to="contact"
            className={`hover:shadow-md  duration-300 px-3  cursor-pointer ${
              scrolled ? "hover:shadow-white" : "hover:shadow-black"
            }`}
          >
            Contact
          </Link>
        </div>

        <button
          onClick={downloadFileAtURL}
          className={`md:flex gap-3  text-sm justify-center items-center h-[40px] px-2 rounded-[4px] hidden hover:cursor-pointer ${
            scrolled ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <h1>Resume</h1>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
              stroke={`${scrolled ? "black" : "white"}`}
              strokeWidth={2}
            />
          </svg>
        </button>

        <div
          onClick={handleMenu}
          className={`md:hidden ${
            setMenu ? "flex" : "hidden duration-300 animate-pulse"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              fill={scrolled ? "white" : "black"}
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {setMenu && (
        <ResponsiveNav handleMenu={handleMenu} downloadCV={downloadFileAtURL} />
      )}
    </div>
  );
}

export default Navbar;
