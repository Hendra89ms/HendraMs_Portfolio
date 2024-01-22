import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
// import Coba from "../coba/Coba";

function RoutesPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/coba" element={<Coba/>} /> */}
      </Routes>
    </div>
  );
}

export default RoutesPage;
