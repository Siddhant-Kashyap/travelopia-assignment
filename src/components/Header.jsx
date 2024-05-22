import React, { useState } from "react";
import complogo from "../assets/complogo.png";
import SubHeading from "./SubHeading";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-white border-b-2 p-2 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={complogo} width={170} height={70} alt="logo" />
          <span className="ml-4 text-xs text-black font-roboto">
            Private tailor-made journeys of a lifetime
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <span className="text-black font-roboto hidden md:inline">
            1 888 263 2574
          </span>
          <button className="bg-[#F26A47] text-white px-4 py-2 rounded hidden md:inline">
            Start Planning
          </button>
          <div className="hidden md:block">Flags drop down</div>
          <button className="text-black md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <div className="flex flex-col space-y-4">
            <a href="tel:1-888-263-2574" className="text-black font-roboto">
              1 888 263 2574
            </a>

            <button className="bg-[#F26A47] text-white px-4 py-2 rounded">
              Start Planning
            </button>
            <div className="flex items-center cursor-pointer">
              <span className="mr-2">Flags</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <ul className="py-1">
                <li className="text-gray-800 hover:bg-gray-100 py-1 px-3 cursor-pointer">
                  US
                </li>
                <li className="text-gray-800 hover:bg-gray-100 py-1 px-3 cursor-pointer">
                  Germany
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className={`md:block ${isMenuOpen ? "block" : "hidden"}`}>
        <SubHeading isMenuOpen={isMenuOpen} />
      </div>
    </div>
  );
};

export default Header;
