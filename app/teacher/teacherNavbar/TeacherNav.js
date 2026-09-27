'use client';

import { Search, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TeacherNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Students', href: '/studentenroled' },
    { name: 'Attendance', href: '/studentattendance' },
    { name: 'Assignments', href: '/studentassignments' },
    { name: 'Quizzes', href: '/studentquizes' },
  ];

  return (
    <header className="w-full text-white font-sans">
      {/* Top Main Section */}
      <div className="bg-[#0a0f24] px-4 py-5 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Title & Mobile Menu Toggle */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Modern Web Application Development
            </h1>
            
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation"
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Integrated Search Bar */}
          <div className="w-full md:w-auto">
            <div className="relative w-full md:w-80 lg:w-96">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-blue-100 pointer-events-none" />
              <input
                type="text"
                placeholder="Search By Email, RollNum or Name"
                className="w-full pl-9 pr-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-100/70 text-sm focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/20 transition-all"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#0a0f24] border-t border-white/20 rounded-b-2xl shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Desktop Links */}
          <nav className="hidden md:flex gap-3 py-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 ${
                    isActive
                      ? 'bg-white/20 text-white shadow-sm font-semibold'
                      : 'text-blue-100 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <nav className="md:hidden py-3 flex flex-col gap-1 border-t border-white/10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white font-semibold'
                        : 'text-blue-100 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          )}

        </div>
      </div>
    </header>
  );
};

export default TeacherNav;