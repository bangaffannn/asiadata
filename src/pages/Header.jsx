import React from "react";
import { useState } from "react";

import { Link } from "react-scroll";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assets/wisewhitelogo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="p-10 text-white">
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
              className="hidden md:block h-36 w-auto cursor-pointer"
              src={logo}
              alt="logo asiadata"
            />
          </Link>
          <div>
            <ul
              className={`${
                isMenuOpen
                  ? "fixed md:hidden mx-4 my-6 top-15 gap-y-2 left-0 right-0 bg-black bg-opacity-90 flex flex-col"
                  : "hidden md:block md:flex md:justify-center md:items-center space-x-4"
              }`}
            >
              <Link className="cursor-pointer px-4 py-1 rounded-full text-white hover:bg-tertiary transition-all duration-300 ease-in-out" to="home" onClick={handleMenuClick}>
                <Link to="home" onClick={handleMenuClick}>
                  Home
                </Link>
              </Link>
              <Link className="cursor-pointer px-4 py-1 rounded-full text-white hover:bg-tertiary transition-all duration-300 ease-in-out" to="about" onClick={handleMenuClick}>
                <Link to="about" onClick={handleMenuClick}>
                  About
                </Link>
              </Link>
              <Link className="cursor-pointer px-4 py-1 rounded-full text-white hover:bg-tertiary transition-all duration-300 ease-in-out" to="portfolio" onClick={handleMenuClick}>
                <Link to="portfolio" onClick={handleMenuClick}>
                  Portfolio
                </Link>
              </Link>
              <Link className="cursor-pointer px-4 py-1 rounded-full text-white hover:bg-tertiary transition-all duration-300 ease-in-out" to="blog" onClick={handleMenuClick}>
                <Link to="blog" onClick={handleMenuClick}>
                  Blog
                </Link>
              </Link>
              <Link className="cursor-pointer px-4 py-1 rounded-full text-white hover:bg-tertiary transition-all duration-300 ease-in-out" to="services" onClick={handleMenuClick}>
                <Link to="services" onClick={handleMenuClick}>
                  Services
                </Link>
              </Link>
              <Link className="cursor-pointer px-4 py-1 rounded-full text-white hover:bg-tertiary transition-all duration-300 ease-in-out" to="faq" onClick={handleMenuClick}>
                <Link to="faq" onClick={handleMenuClick}>
                  FAQ
                </Link>
              </Link>
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
