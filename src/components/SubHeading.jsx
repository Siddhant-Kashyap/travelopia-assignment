const SubHeading = ({ isMenuOpen }) => {
    return (
      <div className={`bg-white m-3 ${isMenuOpen ? "block" : "flex justify-between items-center"}`}>
        <div>DESTINATIONS</div>
        <div>TRAVEL THEMES</div>
        <div>TRIP SEARCH</div>
        <div>SPECIAL OFFERS</div>
        <div>BLOG</div>
        <div>SUSTAINABLE TRAVEL</div>
        <div>ABOUT US</div>
      </div>
    );
  };
  
  export default SubHeading;
  
