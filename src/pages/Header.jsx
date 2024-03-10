import React from "react";
import { useState } from "react";

import { Link } from "react-scroll";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assets/logoupdate3.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="p-10 text-white bg-black">
      <nav className="container mx-auto">
        <button
          className="md:hidden z-40 text-2xl w-full flex justify-end md:justify-center items-center"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <AiOutlineClose /> : <RiMenu3Fill />}
        </button>
        <div className="flex justify-between items-center w-full">
          <Link to="about">
            <img
              className="hidden md:block h-12 w-auto cursor-pointer"
              src={logo}
              alt="logo asiadata"
            />
          </Link>
          <div>
            <ul
              className={`${
                isMenuOpen
                  ? "fixed md:hidden mx-4 my-6 top-15 gap-y-2 left-0 right-0 bg-opacity-80 flex flex-col"
                  : "hidden md:block md:flex md:justify-center md:items-center space-x-4"
              }`}
            >
              <li className="cursor-pointer px-4 py-1 rounded-full text-white hover:bg-tertiary transition-all duration-300 ease-in-out">
                <Link to="home" onClick={handleMenuClick}>
                  Home
                </Link>
              </li>
              <li className="cursor-pointer px-4 py-1 rounded-full text-white hover:bg-tertiary transition-all duration-300 ease-in-out">
                <Link to="about" onClick={handleMenuClick}>
                  About
                </Link>
              </li>
              <li className="cursor-pointer px-4 py-1 rounded-full text-white hover:bg-tertiary transition-all duration-300 ease-in-out">
                <Link to="portfolio" onClick={handleMenuClick}>
                  Portfolio
                </Link>
              </li>
              <li className="cursor-pointer px-4 py-1 rounded-full text-white hover:bg-tertiary transition-all duration-300 ease-in-out">
                <Link to="services" onClick={handleMenuClick}>
                  Services
                </Link>
              </li>
              <li className="cursor-pointer px-4 py-1 rounded-full text-white hover:bg-tertiary transition-all duration-300 ease-in-out">
                <Link to="work" onClick={handleMenuClick}>
                  Work
                </Link>
              </li>
              <li className="cursor-pointer px-4 py-1 rounded-full text-white hover:bg-tertiary transition-all duration-300 ease-in-out">
                <Link to="faq" onClick={handleMenuClick}>
                  FAQ
                </Link>
              </li>
              {/* <li className="px-4 py-1 rounded-full text-white hover:bg-primary transition-all duration-300 ease-in-out">
            <Link to="/contact">Contact</Link>
          </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
