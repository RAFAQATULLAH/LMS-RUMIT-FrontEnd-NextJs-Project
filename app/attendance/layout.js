"use client";

import React, { useState } from "react";
import Sidebar from "../Components/sidebar/Sidebar"; // Adjust this import path if needed
import { Menu, Bell } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col md:flex-row font-sans">
      
      {/* 1. Your Existing Sidebar Component */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* 2. Main Right Container */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Navigation Header Bar */}
        <header className="h-16 px-4 sm:px-6 bg-[#111936] border-b border-gray-800 flex items-center justify-between sticky top-0 z-30">
          
          {/* Left: Mobile Hamburger Button + Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 md:hidden focus:outline-none transition-colors"
              aria-label="Open Sidebar"
            >
              <Menu size={20} />
            </button>
            
            <h1 className="text-base sm:text-lg font-semibold text-white truncate">
              Student Portal
            </h1>
          </div>

          {/* Right: Notifications & User Avatar */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg bg-gray-800/80 text-gray-300 hover:text-white transition-colors relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full" />
            </button>

            <div className="flex items-center gap-2 pl-2 border-l border-gray-800">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs text-white shadow-md">
                ST
              </div>
              <span className="hidden sm:inline text-xs font-semibold text-gray-200">
                Student Name
              </span>
            </div>
          </div>

        </header>

        {/* Page Content Wrapper */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>

      </div>
    </div>
  );
}