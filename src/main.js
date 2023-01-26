import React from "react";

import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/main_utils/Header";
import Footer from "./components/main_utils/Footer";
import BackDrop from "./images/ombre-bg.svg"
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import OpportunitiesPage from "./Pages/OpportunitiesPage";

function LandingPage() {
  console.log()
  return (
    <div className="h-full bg-contain bg-no-repeat" style={{backgroundImage: `url(${window.location.pathname === "/opportunities" ? "": BackDrop})`}}>
      <Header />
      <div className="relative" style={{ zIndex: 1 }}>
        <Router>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutPage />} path="/discover" />
            <Route element={<OpportunitiesPage />} path="/opportunities" />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
