"use client";

import React, { useState } from "react";
import { Menu, Bell, User } from "lucide-react";
import Sidebar from "@/app/Components/sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0a0f24] text-white relative overflow-x-hidden font-sans">
      
      {/* Mobile Backdrop Overlay (Closes sidebar on tap) */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-200"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Navigation */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 w-full">
        
        {/* Top Navbar Header (Always visible, sticky on mobile) */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 md:px-6">
          
          {/* Left: Hamburger Toggle for Mobile */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 md:hidden transition-colors border border-gray-700"
            >
              <Menu className="w-5 h-5" />
            </button>

            <span className="text-sm font-semibold tracking-wide text-gray-200 md:text-base">
              Dashboard
            </span>
          </div>

          {/* Right: Quick User Actions / Profile */}
          <div className="flex items-center gap-3">
            <button
              title="Notifications"
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <Bell className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 pl-2 border-l border-gray-800">
              <div className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-300 font-semibold text-xs">
                <User className="w-4 h-4" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content Container */}
        <main className="flex-1 p-3 sm:p-6 overflow-y-auto w-full">
          {children}
        </main>
      </div>

    </div>
  );
}