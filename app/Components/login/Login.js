"use client"
import Image from "next/image";
import React from 'react'
import { useRouter } from "next/navigation";
import { useState } from "react";


const Login = () => {
  const [active,setActive]=useState("student")
  let router =useRouter()
  const [email, setEmail] = useState("abc");
  const [password, setPassword] = useState("123");
  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    // Basic mock authentication
    if (email === "abc" && password === "123") {
      // You can also route dynamically based on the 'active' role selected
      router.push(`/${active}`); 
    } else {
      alert("Invalid email or password!");
    }
  };
  
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-5">
      <Image
        src={"/Logo.png"}
        alt="Logo"
        width={200}
        height={100}
        className="self-center"
        />
      <div>
        
        <div className="flex  flex-col gap-8">
        <div className="flex justify-between">
        <form 
        onSubmit={handleLogin}
        className="w-96 bg-gray-100 h-auto flex flex-col justify-center items-center gap-5 p-6 border-2 border-[#0465d4] rounded-lg"
      >
        <div className="flex flex-col gap-8 w-full">
          <div className="text-sm w-full">
            <h3 className="font-bold">To Login</h3>
            <p>Kindly provide the Email and password used during Rumit course registration.</p>
          </div>
          
          <div className="flex justify-between items-center w-full">
            <label htmlFor="userEmail">Email :</label>
            <input 
              type="text" 
              id="userEmail"  
              name="userEmail" 
              placeholder="Enter Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on type
              className="border-[#0465d4] w-52 border-2 rounded-lg pl-2 py-1"
            />
          </div>
          
          <div className="flex justify-between items-center w-full">
            <label htmlFor="userPass">Password :</label>
            <input 
              type="password" // Changed to password type to hide characters
              id="userPass"  
              name="userPass" 
              placeholder="Enter Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on type
              className="border-[#0465d4] w-52 border-2 rounded-lg pl-2 py-1" 
            />
          </div>
          
          <button 
            type="submit"
            className="self-center bg-white shadow text-[#0465d4] rounded-lg px-6 py-1 w-auto text-center hover:bg-gray-50 transition-colors"
          >
            Login
          </button>
        </div>
      </form>
        </div>
      </div>
      <div>
      </div>
      </div>
      <div className="flex bg-gray-200 rounded-lg p-1 ">
        <button onClick={()=>{
          setActive("studentenroled")
         
        }}
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
              active === 'studentenroled' ? 'bg-white shadow text-[#0465d4]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >Login as Teacher</button>
        <button onClick={()=>{
          setActive("student")
        }}
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
              active === 'student' ? 'bg-white shadow text-[#0465d4]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >Login as Student</button>
        <button onClick={()=>{
          setActive("admin")
        }}
        className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
              active === 'admin' ? 'bg-white shadow text-[#0465d4]' : 'text-gray-600 hover:text-gray-900'
            }`}
        >Login as Admin</button>
      </div>
    </div>
  )
}

export default Login
