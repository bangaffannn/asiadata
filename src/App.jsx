import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/Header.jsx";
import Banner from "./pages/Banner";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black h-screen">
        <Header />
        <Routes>
          <Route exact path="/" element={<Banner />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
