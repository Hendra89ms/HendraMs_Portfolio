import React, { useState } from "react";
import JavascriptKomp from "../components/JavascriptKomp";
import NodeJsKomp from "../components/NodeJsKomp";
import ReactJsKomp from "../components/ReactJsKomp";
import TailwindKomp from "../components/TailwindKomp";
import GitKomp from "../components/GitKomp";
import MongoKomp from "../components/MongoKomp";
import ExpressKomp from "../components/ExpressKomp";
import HtmlKomp from "../components/HtmlKomp";
import CssKomp from "../components/CssKomp";

function SectionSkill() {
  const [isHoverJs, setIsHoverJs] = useState(false);
  const [isHoverNj, setIsHoverNj] = useState(false);
  const [isHoverRj, setIsHoverRj] = useState(false);
  const [isHoverTl, setIsHoverTl] = useState(false);
  const [isHoverGt, setIsHoverGt] = useState(false);
  const [isHoverMd, setIsHoverMd] = useState(false);
  const [isHoverEs, setIsHoverEs] = useState(false);
  const [isHoverHt, setIsHoverHt] = useState(false);
  const [isHoverCs, setIsHoverCs] = useState(false);

  const toggleHover = (name) => {
    if (name === "js") {
      return setIsHoverJs(!isHoverJs);
    }
    if (name === "nj") {
      return setIsHoverNj(!isHoverNj);
    }
    if (name === "rj") {
      return setIsHoverRj(!isHoverRj);
    }

    if (name === "tl") {
      return setIsHoverTl(!isHoverTl);
    }
    if (name === "gt") {
      return setIsHoverGt(!isHoverGt);
    }
    if (name === "md") {
      return setIsHoverMd(!isHoverMd);
    }
    if (name === "es") {
      return setIsHoverEs(!isHoverEs);
    }
    if (name === "ht") {
      return setIsHoverHt(!isHoverHt);
    }
    if (name === "cs") {
      return setIsHoverCs(!isHoverCs);
    }
  };

  return (
    <section className="w-screen" id="skills">
      <div className="md:w-[1100px] w-screen mx-auto md:pt-[100px] pt-24 pb-10">
        <div className="w-full flex justify-center items-center gap-1">
          <p className="text-2xl  ">My</p>
          <h1 className="text-2xl font-bold">Skills</h1>
        </div>

        <div className="flex flex-wrap md:gap-8 gap-5 justify-center items-center mt-8">
          <JavascriptKomp isHoverJs={isHoverJs} toggleHover={toggleHover} />

          <NodeJsKomp isHoverNj={isHoverNj} toggleHover={toggleHover} />

          <ReactJsKomp isHoverRj={isHoverRj} toggleHover={toggleHover} />

          <TailwindKomp isHoverTl={isHoverTl} toggleHover={toggleHover} />

          <GitKomp isHoverGt={isHoverGt} toggleHover={toggleHover} />

          <MongoKomp isHoverMd={isHoverMd} toggleHover={toggleHover} />

          <ExpressKomp isHoverEs={isHoverEs} toggleHover={toggleHover} />

          <HtmlKomp isHoverHt={isHoverHt} toggleHover={toggleHover} />

          <CssKomp isHoverCs={isHoverCs} toggleHover={toggleHover} />
        </div>
      </div>
    </section>
  );
}

export default SectionSkill;
