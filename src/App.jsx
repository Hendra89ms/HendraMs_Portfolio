import React from "react";
import Navbar from "./components/Navbar";
import RoutesPage from "./routes/RoutesPage";
import SectionSkill from "./pages/SectionSkill";
import SectionProjects from "./pages/SectionProjects";
import SectionContact from "./pages/SectionContact";
import Footer from "./pages/Footer";
// import Coba from "./coba/Coba";

function App() {
  return (
    <div className="">
      {/* <Coba/> */}
      <Navbar />
      <RoutesPage />
      <SectionSkill/>
      <SectionProjects/>
      <SectionContact/>
      <Footer/>
    </div>
  );
}

export default App;
