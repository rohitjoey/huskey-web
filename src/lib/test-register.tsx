"use client"

import { User } from "lucide-react";
import { useState } from "react";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [dob, setDob] = useState("");
  
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
          <form className="mt-4 space-y-4">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" />
              <input type="text" placeholder="Full Name" className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
  
            {/* Email */}
            <div className="relative">
              {/* <FaEnvelope className="absolute left-3 top-3 text-gray-400" /> */}
              <input type="email" placeholder="Email Address" className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
  
            {/* Password */}
            <div className="relative">
              {/* <FaLock className="absolute left-3 top-3 text-gray-400" /> */}
              <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
              </span>
            </div>
  
            {/* Gender */}
            <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
  
            {/* Nationality */}
            <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select Nationality</option>
              <option value="nepalese">Nepalese</option>
              <option value="indian">Indian</option>
              <option value="american">American</option>
            </select>
  
            {/* Date of Birth */}
            <div className="relative">
              {/* <FaCalendar className="absolute left-3 top-3 text-gray-400" /> */}
              <input 
                type="date" 
                value={dob} 
                onChange={(e) => setDob(e.target.value)} 
                className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
            </div>
  
            {/* Submit Button */}
            <button className="w-full p-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:opacity-90">
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    );
  }
  

  