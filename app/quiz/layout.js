"use client";

import React, { useState } from "react";
import Sidebar from "@/app/Components/sidebar/Sidebar";
import { Menu, Bell } from "lucide-react";

export default function QuizLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0a0f24] text-white font-sans">
      {/* Existing Sidebar */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Mobile Header with Hamburger Toggle (hides on medium+ screens) */}
        <header className="md:hidden flex items-center justify-between p-4 bg-[#111936] border-b border-gray-800 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 focus:outline-none transition-colors"
              aria-label="Open Sidebar"
            >
              <Menu size={20} />
            </button>
            <span className="font-semibold text-sm tracking-wide text-white">
              Quizzes & Tests
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white transition-colors relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}