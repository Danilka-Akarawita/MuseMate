import React from "react";
import { useState } from "react";




export default function Booking() {
  

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    studio: "",
    date: "",
    timeslot:""
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 

  const inputStyle="p-2 my-4 border border-grey-500 p-2 rounded-lg"
 
    return (
      <div className="flex justify-center items-center p-8 flex flex-col justify-around bg-gray-300 p-4 rounded-lg">
        <div className="form p-4 ">
          
          <input
            type="text"
            placeholder="Name"
            className={inputStyle}
            name="name"
            value={formData.username}
            onChange={handleFormChange}
          />
          <input
            type="text"
            placeholder="mobile number"
            className={inputStyle}
            name="mobile"
            value={formData.mobile}
            onChange={handleFormChange}
          />
          
          <input
            type="text"
            placeholder="Studio"
            className={inputStyle}
            name="studio"
            
          />
          <input 
          type="date" 
          className={inputStyle}
          name="date"
          value={formData.date}
          onChange={handleFormChange}
           />
          <div className="flex flex-row  items-center ">
            {/* <h2 className="text-red-600">{error}</h2> */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded-lg"  >
              Proceed
            </button>
            
          </div>
        </div>
      </div>
    );
  }

