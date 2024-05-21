import complogo from "../assets/complogo.png"
import SubHeading from "./SubHeading";
const Header = () => {
  return (
    <div>
      <div>
      <header className= " bg-white border-b-2  p-2 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center ">
          <img src={complogo} width={170} height={70} alt="logo" />
        
          <span className="ml-4 text-xs text-black font-roboto">Private tailor-made journeys of a lifetime</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <span className="text-black font-roboto">1 888 263 2574</span>
          <button className="bg-[#F26A47] text-white px-4 py-2 rounded">
            Start Planning
          </button>
          <div> Flags drop down</div>
        
        </div>
      </header>
    </div>
      <div >
        <SubHeading/>
       
      </div>
    </div>
  );
};

export default Header;
