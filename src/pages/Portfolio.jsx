import React from "react";

import img1 from "../assets/logo/GUT.png";
import img2 from "../assets/logo/BNPB.png";
import img3 from "../assets/logo/Kemendes.png";
import img4 from "../assets/logo/Kemenkes.png";
import img5 from "../assets/logo/DD.png";
import img6 from "../assets/logo/drgirmalogo.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="section mt-5">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h1 className="text-3xl font-bold mb-10 text-center text-white">
            Our Project Portfolio
          </h1>
          {/* IMAGE */}
          <ul className="flex flex-col md:flex-row justify-center items-center gap-y-10 md:gap-y-0 gap-x-5 md:gap-x-10 lg:gap-x-20">
            <li>
              <img
                className="w-auto h-24 text-md filter grayscale transition duration-300 hover:filter-none"
                src={img1}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-auto h-24 text-md filter grayscale transition duration-300 hover:filter-none"
                src={img3}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-auto h-24 text-md filter grayscale transition duration-300 hover:filter-none"
                src={img4}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-auto h-24 text-md filter grayscale transition duration-300 hover:filter-none"
                src={img2}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-auto h-24 text-md filter grayscale transition duration-300 hover:filter-none"
                src={img5}
                alt=""
              />
            </li>
            <li>
              <img
                className="w-auto h-24 text-md filter grayscale transition duration-300 hover:filter-none"
                src={img6}
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
