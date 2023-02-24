import React from "react";

import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/main_utils/Header";
import Footer from "./components/main_utils/Footer";
import MentorsPage from "./Pages/MentorsPage";
import ResourcesPage from "./Pages/ResourcesPage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import OpportunitiesPage from "./Pages/OpportunitiesPage";

function LandingPage() {
  console.log()
  return (
    <div className={`${((window.location.pathname == "/resources" || window.location.pathname == "/mentors") && "bg-white text-purple") || "bg-navy text-white"} h-full bg-contain bg-no-repeat`} >
      <Header />
      <div className="relative" style={{ zIndex: 1 }}>
        <Router>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutPage />} path="/discover" />
            <Route element={<OpportunitiesPage/>} path="/opportunities" />
            <Route element={<MentorsPage />} path="/mentors" />
            <Route element={<ResourcesPage />} path="/resources" />
          </Routes>
        </Router>
      </div>

      <Footer  />
    </div>
  );
}

export default LandingPage;
