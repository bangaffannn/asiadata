import React from "react";

import Iseng from './pages/Iseng.jsx';
import WhatsappButton from "./pages/WhatsappButton.jsx";

import Header from "./pages/Header.jsx";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Blog from './pages/Blog.jsx'
import Services from "./pages/Services";
import Promotion from "./pages/Promotion.jsx";
import FAQ from "./pages/FAQ";
import SecondBanner from './pages/SecondBanner.jsx'
import Footer from "./pages/Footer";

const App = () => {
  return (
    <main className="bg-black">
      <Header />
      <Home />
      {/* <Iseng /> */}
      <About />
      <Portfolio />
      <Blog />
      <Services />
      {/* <Work /> */}
      {/* <Promotion /> */}
      <FAQ />
      {/* <SecondBanner /> */}
      <Footer />
      <WhatsappButton />
    </main>
  );
};

export default App;