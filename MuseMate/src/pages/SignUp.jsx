import React from "react";
import { useState } from "react";
import { signupAuth,googleSignIn } from "../../firebase/Authentication";



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
  const handleSignUp = () => {
    signupAuth(
      formData.email,
      formData.password,
      formData.mobile
    );
  };
  

  const handleGoogleSignIn = () => {
    googleSignIn();
  };
  const inputStyle="p-2 my-4 border border-grey-500 p-2 rounded-lg"
 
    return (
      <div className="flex justify-center items-center p-8 flex flex-col justify-around bg-gray-300 p-4 rounded-lg">
        <div className="form p-4 ">
          
          <input
            type="text"
            placeholder="username"
            className={inputStyle}
            name="username"
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
            placeholder="email"
            className={inputStyle}
            name="email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <input
            type="text"
            placeholder="password"
            className={inputStyle}
            name="password"
            value={formData.password}
            onChange={handleFormChange}
          />
          <div className="flex flex-row  items-center ">
            {/* <h2 className="text-red-600">{error}</h2> */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded-lg" onClick={handleSignUp} >
              Sign Up
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-2 rounded-lg" onClick={handleGoogleSignIn} >
              Google
            </button>
          </div>
        </div>
      </div>
    );
  }

