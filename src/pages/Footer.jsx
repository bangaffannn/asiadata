// Footer.js

import React from "react";
import { Link } from "react-scroll";
import {
  FaInstagram,
  FaFacebook,
  FaXing,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-8 mt-20">
      <div className="container mx-auto border-t-2 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {/* About Us */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-2">
              About Us
            </h3>
            <p>
              Best dental treatment with best service, only for you!
            </p>
          </div>

          {/* Contact Us */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-2">
              Contact Us
            </h3>
            <p>Email: contoh@contoh.com</p>
            <p>Phone: +62 819 5895 4949</p>
          </div>

          {/* Links */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul>
              <FooterLink to="banner" label="Home" />
              <FooterLink to="banner" label="Tentang kami" />
              <FooterLink to="layanan" label="Layanan" />
              <FooterLink to="faq" label="FAQ" />
            </ul>
          </div>

          {/* Subscribe Us */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-2">
              Subscribe Us
            </h3>
            <ul className="flex space-x-4">
              <FooterSocialIcon icon={<FaInstagram />} />
              <FooterSocialIcon icon={<FaFacebook />} />
              <FooterSocialIcon icon={<FaXing />} />
              <FooterSocialIcon icon={<FaLinkedin />} />
              <FooterSocialIcon icon={<FaWhatsapp />} />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer Link Component
const FooterLink = ({ to, label }) => (
  <li
    activeClass="active"
    smooth={true}
    spy={true}
    className="cursor-pointer hover:text-green-600 transition duration-300 ease-in-out"
  >
    <Link to={to}>{label}</Link>
  </li>
);

// Footer Social Icon Component
const FooterSocialIcon = ({ icon }) => (
  <li>
    <a
      href="#"
      className="hover:text-secondary transition-all duration-300 ease-in-out"
    >
      {icon}
    </a>
  </li>
);

export default Footer;
