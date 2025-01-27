"use client";


import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { useState } from "react";
const MyForm = ({style}) => {
  const [phone, setPhone] = useState()
  console.log(phone)

  const [fname, setFname] = useState()
  const [email, setEmail] =  useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'fname') {
      setFname(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Construct the data object from individual state var
  
    // console.log("Form Data:", formData);
    
    // const JSONdata = JSON.stringify(formData);
  
    // Specify your API endpoint
    const endpoint = '/api/sendEmail';
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        Name: fname,
        Email: email,
        Phone: phone,
      },
    };
  
    try {
      // Send the form data to our endpoint url
      const response = await fetch(endpoint, options);
  
      // Ensure the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Get the response data from server as JSON
      const result = await response.json();
      console.log("Response from the server:", result);
      // Handle the response data as needed
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };


  return (
    <form className="myForm z-10" onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 grid-cols-1 lg:grid-cols-2">
        {/* Name Field */}
        <div className="col">
          <input
            type="text"
            name="name"
            className={`name_Inquire ${style == "white" ? 'bg-white/80 text-black' : "bg-black/80 text-white" } border-b-2 border-gray-300 text-sm focus:ring-blue-500 focus:border-gray-700 block w-full p-2.5 placeholder-gray-200 `}
            placeholder="Full Name"
            value={fname}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="col">
          <input
            type="email"
            name="email"
            className={`${style == "white" ? 'bg-white/80 text-black' : "bg-black/80 text-white" } email_Inquire border-b-2 border-gray-300 text-sm focus:ring-blue-500 focus:border-gray-700 block w-full p-2.5 placeholder-gray-200`}
            placeholder="Email Address"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Field */}
        <div className={`${style === "white" ? 'bg-white/80 text-black' : 'bg-black/80 text-white'} lg:col-span-2 `}>
        <PhoneInput
          placeholder="Enter phone number"
          defaultCountry="AE"
          international
        countryCallingCodeEditable={false}
          numberInputProps={{
            className: `${style === "white" ? 'bg-white/80 text-black' : 'bg-black/80 text-white'} email_Inquire border-b-2 border-gray-300 text-sm focus:ring-blue-500 focus:border-gray-700 block w-full p-2.5 placeholder-gray-200`
          }}
          value={phone}
          onChange={setPhone}/>

        </div>
  </div>

  {/* Submit Button */}
  <button type="submit" className="submitButton group w-full rounded-full bgMain font-bold text-lg text-white relative overflow-hidden px-5 py-3 bg-[#E35F26]">
    Submit
    <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-full"></div>
  </button>
</form>
);
};

export default MyForm;
