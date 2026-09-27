"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [active, setActive] = useState("student");
  const router = useRouter();
  const [email, setEmail] = useState("abc");
  const [password, setPassword] = useState("123");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "abc" && password === "123") {
      router.push(`/${active}`);
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-6 gap-6 bg-gray-50">
      
      {/* Logo */}
      <div className="relative w-44 h-16 sm:w-52 sm:h-20">
        <Image
          src="/Logo.png"
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Role Selection Tabs */}
      <div className="w-full max-w-md bg-gray-200 rounded-xl p-1.5 flex gap-1 shadow-inner">
        <button
          type="button"
          onClick={() => setActive("studentenroled")}
          className={`flex-1 py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all text-center ${
            active === "studentenroled"
              ? "bg-white shadow text-[#0465d4] font-semibold"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Teacher
        </button>
        <button
          type="button"
          onClick={() => setActive("student")}
          className={`flex-1 py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all text-center ${
            active === "student"
              ? "bg-white shadow text-[#0465d4] font-semibold"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Student
        </button>
        <button
          type="button"
          onClick={() => setActive("admin")}
          className={`flex-1 py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all text-center ${
            active === "admin"
              ? "bg-white shadow text-[#0465d4] font-semibold"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Admin
        </button>
      </div>

      {/* Login Form Box */}
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-gray-100 border-2 border-[#0465d4] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-md"
      >
        <div className="text-sm text-gray-700">
          <h3 className="font-bold text-base text-gray-900 mb-1">To Login</h3>
          <p className="text-xs sm:text-sm leading-relaxed">
            Kindly provide the Email and password used during course registration.
          </p>
        </div>

        {/* Email Field */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
          <label htmlFor="userEmail" className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Email :
          </label>
          <input
            type="text"
            id="userEmail"
            name="userEmail"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-60 border-2 border-[#0465d4] rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0465d4]/40"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
          <label htmlFor="userPass" className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Password :
          </label>
          <input
            type="password"
            id="userPass"
            name="userPass"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full sm:w-60 border-2 border-[#0465d4] rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0465d4]/40"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 self-center bg-white border border-gray-200 shadow text-[#0465d4] font-semibold rounded-lg px-8 py-2 text-sm hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
        >
          Login
        </button>
      </form>

    </div>
  );
};

export default Login;