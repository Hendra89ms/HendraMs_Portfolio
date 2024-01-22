import React from "react";

import Card from "../components/Card";

import { dataProject } from "../data";

function SectionProjects() {

  return (
    <div className="w-screen bg-black text-white py-5" id="projects">
      <div className="md:w-[1100px] mx-auto w-full px-5 md:px-0 md:pt-12 pt-10">
        <h1 className="font-bold text-2xl text-center py-5">My Projects</h1>

        <div className="w-full flex flex-wrap gap-4 justify-center items-center md:gap-6">
          {dataProject.map((item, index) => {

            return (
              <Card
                key={index}
                CardTitle={item.title}
                image={item.img}
                skill={item.skill}
                LinkVs={item.linkVc}
                LinkGt={item.linkGt}
              />
            );
          })}
   
        </div>
      </div>
    </div>
  );
}

export default SectionProjects;
