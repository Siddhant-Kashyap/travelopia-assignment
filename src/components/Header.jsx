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
          <span className="text-black font-roboto hidden lg:inline">1 888 263 2574</span>
          <button className="bg-[#F26A47] text-white px-4 py-2 rounded hidden lg:inline">
            Start Planning
          </button>
          <div className="hidden lg:block"><button  onClick={() => window.location.href = 'https://travelopia-admin.vercel.app/'} className="bg-[#201b63] text-white px-4 py-2 rounded hidden lg:inline">
             Admin Login
          </button></div>
          <button
            className="text-black lg:hidden"
            onClick={toggleMenu}
          >
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
        <div className="lg:hidden bg-white shadow-md p-4">
          <div className="flex flex-col space-y-4">
          <a href="tel:1-888-263-2574" className="text-black font-roboto">1 888 263 2574</a>

            <button className="bg-[#F26A47] text-white px-4 py-2 rounded">
              Start Planning
            </button>
            
       
          </div>
        </div>
      )}

      <div className={`lg:block ${isMenuOpen ? "block" : "hidden"}`}>
        <SubHeading isMenuOpen ={isMenuOpen} />
      </div>
    </div>
  );
};

export default Header;
