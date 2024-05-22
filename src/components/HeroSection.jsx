import { useState } from "react";
import hero from "../assets/hero.jpg";
import trustPilot from "../assets/TrustPilot.jpg";
import QueryModal from "./QueryModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQueryModalOpen, setIsQueryModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    destination: "",
    interest: "",
    traveler: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsQueryModalOpen(true);
    setFormData(formData) 
   
    //open query modal
    console.log(formData)
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeQueryModal = () => {
    setIsQueryModalOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className="relative h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute top-4 right-4 p-2 rounded-md shadow-md">
          <img src={trustPilot} alt="Trustpilot" className="w-15 h-12" />
        </div>
        <div className="flex flex-col  items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
          <div className="mt-auto p-3">
            <h1 className="text-4xl font-roboto md:text-6xl ">
              Crafting memorable vacations for 20 years
            </h1>
            <p className="mt-4 font-roboto text-lg md:text-2xl">
              Let Our Experts Plan Your Private, Tailor-Made and Secure Tour in
              70+ Inspiring Destinations.
            </p>
            <div className="hidden lg:flex mt-8 space-x-4 justify-center">
              <select
                className="p-2 rounded-md bg-white text-black"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Where do you want to go?
                </option>
                <option value="destination1">Destination 1</option>
                <option value="destination2">Destination 2</option>
                <option value="destination3">Destination 3</option>
              </select>
              <select
                className="p-2 rounded-md bg-white text-black"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Your Interests?
                </option>
                <option value="interest1">Interest 1</option>
                <option value="interest2">Interest 2</option>
                <option value="interest3">Interest 3</option>
              </select>
              <select
                className="p-2 rounded-md bg-white text-black"
                name="traveler"
                value={formData.traveler}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  No. of travelers
                </option>
                <option value="1">1 travelers</option>
                <option value="2">2 travelers</option>
                <option value="3">3 travelers</option>
                <option value="4">4 travelers</option>
                <option value="5">5+ travelers</option>
              </select>
              <select
                className="p-2 rounded-md bg-white text-black"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Budget Per Person
                </option>
                <option value="budget1">$1000 - $2000</option>
                <option value="budget2">$2000 - $3000</option>
                <option value="budget3">$3000 - $4000</option>
                <option value="budget4">$4000 - $5000</option>
                <option value="budget5">$5000+</option>
              </select>
              <button className="bg-[#F26A47] text-white px-4 py-2 rounded-md" onClick={handleSubmit}>
                CREATE MY TRIP NOW
              </button>
              <QueryModal isOpen={isQueryModalOpen} onClose={closeQueryModal} formData={formData}/>
            </div>

            <button
              className="lg:hidden bg-[#F26A47] text-white px-4 py-2 rounded-md mt-4"
              onClick={openModal}
            >
              CREATE MY TRIP NOW
            </button>
          </div>
        </div>

        {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          We need a bit more info to create your itinerary:
        </h2>
        <button onClick={closeModal} className="text-gray-500">
          &times;
        </button>
      </div>
      <div className="mb-4">
        <select
          className="w-full p-2 border rounded-md mb-2 bg-white text-black"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Where do you want to go?
          </option>
          <option value="destination1">Destination 1</option>
          <option value="destination2">Destination 2</option>
          <option value="destination3">Destination 3</option>
        </select>
        <select
          className="w-full p-2 border rounded-md mb-2 bg-white text-black"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Your Interests?
          </option>
          <option value="interest1">Interest 1</option>
          <option value="interest2">Interest 2</option>
          <option value="interest3">Interest 3</option>
        </select>
        <select
          className="w-full p-2 border rounded-md mb-2 bg-white text-black"
          name="traveler"
          value={formData.traveler}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            No. of travelers
          </option>
          <option value="1">1 traveler</option>
          <option value="2">2 travelers</option>
          <option value="3">3 travelers</option>
          <option value="4">4 travelers</option>
          <option value="5+">5+ travelers</option>
        </select>
        <select
          className="w-full p-2 border rounded-md mb-2 bg-white text-black"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Budget Per Person
          </option>
          <option value="budget1">$1000 - $2000</option>
          <option value="budget2">$2000 - $3000</option>
          <option value="budget3">$3000 - $4000</option>
          <option value="budget4">$4000 - $5000</option>
          <option value="budget5">$5000+</option>
        </select>
      </div>
      <button className="bg-[#F26A47] text-white px-4 py-2 rounded-md w-full" onClick={handleSubmit}>
        GET STARTED
      </button>
      <QueryModal isOpen={isQueryModalOpen} onClose={closeQueryModal} formData={formData}/>
    </div>
  </div>
)}

      </div>
    </>
  );
};

export default HeroSection;
