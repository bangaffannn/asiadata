import React, { useState } from "react";
import { FaPodcast } from "react-icons/fa";

export default function Header() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Menu 1
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Menu 2
                </a>
                <div
                  className="relative group"
                  onMouseEnter={() => setIsSubMenuOpen(true)}
                  onMouseLeave={() => setIsSubMenuOpen(false)}
                >
                  <button
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center"
                    onClick={toggleSubMenu}
                  >
                    Dropdown
                    <FaPodcast className="w-5 h-5 ml-1" />
                  </button>
                  {isSubMenuOpen && (
                    <div className="absolute bg-gray-700 text-white mt-2 rounded-md shadow-lg">
                      <a href="#" className="block px-4 py-2 text-sm">
                        Submenu Item 1
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm">
                        Submenu Item 2
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
