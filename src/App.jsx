import React from "react";

import Header from "./pages/Header.jsx";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <main className="bg-black">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Services />
      {/* <Work /> */}
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;
