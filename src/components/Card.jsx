import { Link } from "react-router-dom";

const Card = ({ skill, image, CardTitle, LinkGt, LinkVs }) => {
  return (
    <>
      <div className="flex flex-wrap gap-2 flex-col border-[1px] border-gray-300 justify-center items-center p-3 rounded-md md:w-[300px] w-full shadow-md">
        <img
          src={image}
          alt="eshopApp"
          className="w-[300px] h-[200px] bg-cover"
        />
        <div className="flex items-center gap-2 justify-between w-full">
          <div className="bg-white rounded-full w-[5px] h-[5px]"></div>
          <h1 className="font-bold md:text-xl text-lg">{CardTitle}</h1>
          <div className="bg-white rounded-full w-[5px] h-[5px]"></div>
        </div>

        <div className="w-full flex flex-col gap-2 text-sm justify-center ">
          <div className="flex gap-3 justify-center items-center">
            <div className="bg-black px-1 py-2 rounded-md text-white ">{skill[0]}</div>
            <div className="bg-black px-1 py-2 rounded-md text-white ">{skill[1]}</div>
            {skill[2] && <div className="bg-black px-1 py-2  text-white rounded-md ">{skill[2]}</div>}
          </div>

          <div className="flex justify-around items-center w-full py-2">
            <Link
              to={LinkGt}
              className="flex gap-1 items-center cursor-pointer duration-500 transition-all hover:scale-105 "
            >
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="github"
                fill="white"
              >
                <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
              </svg>
              <h1>Github</h1>
            </Link>

            <Link
              to={LinkVs}
              className="flex gap-1 items-center cursor-pointer px-2 py-1 duration-500 transition-all hover:scale-105"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33333 8H8C5.79086 8 4 9.79086 4 12V12C4 14.2091 5.79086 16 8 16H9.33333M14.6667 8H16C18.2091 8 20 9.79086 20 12V12C20 14.2091 18.2091 16 16 16H14.6667"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 12H16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <h1>Visit</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
