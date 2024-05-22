import { useState } from "react";
import axios from 'axios';

const QueryModal = ({ isOpen, onClose, formData }) => {
  const [isSpecialRequest, setIsSpecialRequest] = useState(false);
  const [specialRequestText, setSpecialRequestText] = useState("");
  const [additionalData, setAdditionalData] = useState({
    fullname: "",
    email: "",
    phone: "",
    days: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOptionChange = (e) => {
    setIsSpecialRequest(e.target.value === "Yes");
  };


  const handleTextChange = (e) => {
    setSpecialRequestText(e.target.value);
  };
  const handleSubmit = async () => {
    try {
        const fullData = { ...formData, ...additionalData };
        const response = await axios.post('https://travelopia-backend-4lw5.onrender.com/api/trips', fullData);
        console.log(response.data); 
        onClose();
      } catch (error) {
        console.error('Error:', error); // Log any errors
      }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="text-center">
              <h2 className="text-xl text-black  font-bold">Almost There !</h2>
              <h4 className="text-lg text-black font-roboto">
                We need a bit more info to create your itinerary:
              </h4>
            </div>

            <button onClick={onClose} className="text-gray-500">
              &times;
            </button>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="fullname"
              value={additionalData.fullname}
              onChange={handleChange}
              placeholder="Full Name *"
              className="w-full p-2 border rounded-md mb-2 text-black "
            />
            <input
              type="text"
              name="email"
              value={additionalData.email}
              onChange={handleChange}
              placeholder="Email *"
              className="w-full p-2 border rounded-md mb-2 text-black "
            />
            <input
              type="tel"
              name="phone"
              value={additionalData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full p-2 border rounded-md mb-2 text-black "
            />
            <div className="flex">
              <input
                type="number"
                name="days"
                value={additionalData.days}
                onChange={handleChange}
                placeholder="Number of days"
                className="w-full p-2 border rounded-md mb-2 text-black "
              />
              <input
                type="number"
                placeholder="Budget Per Person"
                name="budget"
                value={additionalData.budget}
                onChange={handleChange}
                className="w-full p-2 border rounded-md mb-2 text-black "
              />
            </div>
            <select
              className="p-2 w-full rounded-md bg-white text-black"
              name="surety"
            >
              <option value="" selected>
                What Stage of planning are you in?
              </option>

              <option value="surety1">Still Dreaming</option>
              <option value="surety2">
                Definitely travelling, need destination experties
              </option>
              <option value="surety3">I want to book a Trip</option>
            </select>
            <div className="text-black w-full flex justify-around border-black ">
              Any notes or special requests?
              <label>
                <input
                  type="radio"
                  value="Yes"
                  checked={isSpecialRequest}
                  onChange={handleOptionChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="No"
                  checked={!isSpecialRequest}
                  onChange={handleOptionChange}
                />
                No
              </label>
            </div>
            {isSpecialRequest && (
              <div>
                <label>
                  Special Request:
                  <textarea
                    type="text"
                    value={specialRequestText}
                    onChange={handleTextChange}
                    style={{ border: "1px solid black" }}
                    className="text-black w-full"
                  />
                </label>
              </div>
            )}
          </div>
          <button
            className="bg-[#F26A47] text-white px-4 py-2 rounded-md w-full"
            onClick={handleSubmit}
          >
            GET MY QUOTE
          </button>
        </div>
      </div>
    )
  );
};

export default QueryModal;
