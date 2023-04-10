import React from "react";
import { useState } from "react";



export default function SignUp() {
  

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
    return (
      <div className="p-8 flex flex-col justify-around">
        <div className="form p-4">
          
          <input
            type="text"
            placeholder="username"
            className="p-2 my-4"
            name="username"
            value={formData.username}
            onChange={handleFormChange}
          />
          <input
            type="text"
            placeholder="mobile number"
            className="p-2 my-4"
            name="mobile"
            value={formData.mobile}
            onChange={handleFormChange}
          />
          <input
            type="text"
            placeholder="email"
            className="p-2 my-4"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <input
            type="text"
            placeholder="password"
            className="p-2 my-4"
            name="password"
            value={formData.password}
            onChange={handleFormChange}
          />
          <div className="flex flex-col justify-between items-center ">
            {/* <h2 className="text-red-600">{error}</h2> */}
            <button className="m-4" >
              Sign Up
            </button>
            <button
              className="font-bold text-white"
             
            >
              G
            </button>
          </div>
        </div>
      </div>
    );
  }

