import React from "react";
import { Icon } from "@iconify/react";
import gmailIcon from "@iconify/icons-mdi/gmail";
// import baselineWhatsapp from "@iconify/icons-ic/baseline-whatsapp";

function SectionContact() {
  const handleWhatsapp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      return alert("Please complete the data !");
    }

    window.location.href = `https://api.whatsapp.com/send?phone=+6283857768930&text=nama%20%3A%20${name}%0Aemail%20%3A%20${email}%0Apesan%20%3A%20${message}`;

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";
  };

  return (
    <div className="w-screen md:pt-[90px] pt-5 pb-10" id="contact">
      <div className="md:w-[1100px] mx-auto w-screen px-5 md:px-0 flex justify-center items-center flex-col">
        <h1 className="font-bold md:text-2xl text-xl text-center">CONTACT</h1>
        <form
          onSubmit={handleWhatsapp}
          autoComplete="off"
          className="mt-5 w-full md:w-[600px] md:px-8 md:p-5  md:shadow-lg shadow-none flex flex-col gap-4 rounded-md duration-300 "
        >
          <p className="text-lg font-bold  ">Hello...👋 contact me now</p>

          <div className="relative ">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <Icon
                icon="icon-park-outline:edit-name"
                className=" text-sm md:text-lg text-zinc-500"
              />
            </div>

            <input
              type="text"
              id="name"
              placeholder="Name"
              className="border-[1px] outline-black border-slate-400 py-4 pl-9  rounded-md text-sm sm:text-lg w-full placeholder:text-zinc-500 placeholder:text-[16px] "
            />
          </div>

          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3   pointer-events-none">
              <Icon
                className="text-sm md:text-lg text-zinc-500"
                icon={gmailIcon}
                fontStyle={"normal"}
              />
            </div>

            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border-[1px] outline-black border-slate-400 py-4 pl-9 rounded-md text-sm sm:text-lg w-full placeholder:text-zinc-500 placeholder:text-[16px]"
            />
          </div>

          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 pt-5 pl-3  pointer-events-none">
              <Icon
                icon="ic:outline-message"
                className=" text-sm sm:text-lg text-zinc-500"
              />
            </div>

            <textarea
              id="message"
              placeholder="Message"
              className="w-full h-[200px] border-[1px] outline-black border-slate-400 py-4 pl-9 placeholder:text-zinc-500 placeholder:text-[16px] rounded-md resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-[110px] sm:w-[150px] bg-black h-[40px] rounded-xl duration-300 flex justify-center items-center gap-1"
          >
            <Icon icon="ic:baseline-whatsapp" color="white" />
            <p className="text-white sm:text-[16px] text-[12px]">WhatsApp</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SectionContact;
