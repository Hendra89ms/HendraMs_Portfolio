import React from "react";

function Footer() {
  return (
    <div className="w-screen bg-black text-white md:px-0 px-3">
      <div className="md:w-[1100px] md:mx-auto w-full h-[70px] flex items-center">
        <div className="w-full flex justify-between items-center ">
          <div className="">
            <svg
              width="24"
              height="36"
              className="md:w-[24px] md:h-[36px] w-[20px] h-[30px]"
              viewBox="0 0 24 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5294 12.2118C23.5294 16.8819 20.7623 20.9082 16.7793 22.7351C18.4612 21.3496 19.5322 19.248 19.5322 16.896C19.5322 12.7642 16.2259 9.40423 12.112 9.32046C12.0574 9.3167 12.0075 9.3167 11.9529 9.3167C11.8983 9.3167 11.8485 9.3167 11.7939 9.32046C10.2673 9.40328 9.05882 10.6663 9.05882 12.2108V26.6814C9.05882 31.4748 5.16988 35.3638 0.376465 35.3638V12.2118C0.376465 5.81928 5.56047 0.635284 11.9529 0.635284C18.3454 0.635284 23.5294 5.81928 23.5294 12.2118Z"
                fill="white"
              />
              <path
                d="M13.9992 14.2582C15.1294 13.128 15.1294 11.2956 13.9992 10.1654C12.8689 9.03515 11.0365 9.03515 9.90629 10.1654C8.77608 11.2956 8.77608 13.128 9.90629 14.2582C11.0365 15.3884 12.8689 15.3884 13.9992 14.2582Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col text-[12px] md:text-[14px] ">
            <h1>
              Built With <span className="text-red-500">❤</span> and 💻 in 2024
            </h1>
            <p>Inspired design from figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
