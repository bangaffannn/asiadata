import React from "react";
import Img1 from "../assets/purple-cover.png";

const Home = () => {
  return (
    <section id="home" className="bg-black pt-20 mb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left mx-4 sm:mx-0">
            <h1 className="text-white font-bold text-3xl md:text-5xl">
              <span className="text-accent">UNLIMITED NUMBER</span> OF CUSTOMERS
              IN FRONT OF <span className="text-accent">YOUR BUSINESS.</span>
            </h1>
            <p className="text-white mt-4">
              Our services help your cold, warm and hot customers{" "}
              <span className="font-bold">discover you,</span>{" "}
              <br className="md:hidden" />
              <span className="font-bold">bringing targeted traffic</span> to
              your business profile.
            </p>
            <a
              className="block mx-auto mt-6 px-4 py-3 max-w-full bg-white text-center text-primary font-bold rounded-md hover:bg-accent hover:text-white transition-all duration-300 ease-in-out"
              href="https://wa.me/6289608725725?text=Halo,%20saya%20tertarik%20untuk%20menggunakan%20layanan%20Wise%20Technology!"
            >
              Book a call with us today!
            </a>
          </div>
          <div className="relative">
            {/* BOX BACKGROUND */}
            {/* <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary shadow-xl rounded-full"></div> */}
            <img
              className="w-full h-auto md:w-120 md:h-auto z-10"
              src={Img1}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
