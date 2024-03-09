import React from "react";
import Img1 from "../assets/orange-screen.png";

const Home = () => {
  return (
    <section className="bg-site bg-cover pt-20">
      <div className="container mx-auto flex justify-center items-center">
        <div>
          <div className="flex grid grid-cols-2 justify-center items-start gap-y-4 mb-8">
            <div className="flex flex-col h-full justify-center gap-y-5">
              <h1 className="text-white font-bold text-5xl">
                <span className="text-tertiary">UNLIMITED NUMBER</span>{" "}OF CUSTOMERS IN FRONT OF <span className="text-tertiary">YOUR BUSINESS.</span>
              </h1>
              <p className="text-white">
                Our services help your cold, warm and hot customers <span className="font-bold">discover
                you, </span><br />
                <span className="font-bold">bringing targeted traffic</span> to your business profile.
              </p>
              <a
                className="px-4 py-3 max-w-xs flex justify-center items-center rounded-md border border-white text-white hover:border-tertiary hover:text-tertiary hover:scale-110 transition-all duration-150 ease-in-out"
                href=""
              >
                Book a call with us today!
              </a>
            </div>
            <div className="relative flex justify-center items-center">
              {/* BOX BACKGROUND */}
              <div className="absolute top-0 w-80 h-80 bg-opacity-0 border shadow-xl shadow-primary opacity-70 rounded-lg"></div>
              <img className="w-120 h-auto z-10" src={Img1} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
