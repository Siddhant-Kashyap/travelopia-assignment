import React, { useState } from "react";

const SubHeading = ({ isMenuOpen }) => {
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [isTravelThemeOpen, setIsTravelThemeOpen] = useState(false);

  const toggleDestinationDropdown = () => {
    setIsDestinationOpen(!isDestinationOpen);
    setIsTravelThemeOpen(false); // Close travel theme dropdown
  };

  const toggleTravelThemeDropdown = () => {
    setIsTravelThemeOpen(!isTravelThemeOpen);
    setIsDestinationOpen(false); // Close destination dropdown
  };

  return (
    <div
      className={`bg-white text-gray-600 font-semibold m-3 ${
        isMenuOpen ? "block" : "flex justify-between items-center"
      }`}
    >
      <div
        className="relative"
        onMouseEnter={toggleDestinationDropdown}
        onMouseLeave={toggleDestinationDropdown}
      >
        DESTINATIONS 
        {isDestinationOpen && (
          <div className="absolute top-full left-0 w-36  h-56 bg-white border border-gray-300 rounded-b-md z-10">
            {/* Your destination items here */}
            <ul>
              <li>Japan</li>
              <li>Italy</li>
              <li>Australia</li>
              <li>Canada</li>
              <li>Brazil</li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="relative"
        onMouseEnter={toggleTravelThemeDropdown}
        onMouseLeave={toggleTravelThemeDropdown}
      >
        TRAVEL THEMES
        {isTravelThemeOpen && (
          <div className="absolute top-full left-0 w-36  h-56 bg-white border border-gray-300 rounded-b-md z-10">
            {/* Your travel theme items here */}
            <ul>
              <li>Beaches</li>
              <li>Mountains</li>
              <li>Adventure</li>
            </ul>
          </div>
        )}
      </div>
      <div>TRIP SEARCH</div>
      <div>SPECIAL OFFERS</div>
      <div>BLOG</div>
      <div>SUSTAINABLE TRAVEL</div>
      <div>ABOUT US</div>
    </div>
  );
};

export default SubHeading;
