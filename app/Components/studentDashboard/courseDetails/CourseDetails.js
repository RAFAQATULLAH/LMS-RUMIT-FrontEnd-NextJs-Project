'use client';

import { useState } from 'react';

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState('quizzes');

  return (
    <div className="w-full max-w-7xl mx-auto text-white font-sans">
      {/* Section Header */}
      <h2 className="text-lg font-semibold mb-3 text-gray-200">Active Course</h2>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* LEFT CARD: Active Course Details */}
        <div className="lg:col-span-2 bg-gray-700 border border-gray-600 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
          
          <div>
            {/* Title & Badge Header */}
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Modern Web Application Development
              </h1>
              <span className="text-xs font-semibold px-3 py-1 text-blue-300 border border-blue-400/50 rounded-lg tracking-wider uppercase bg-blue-500/20">
                Enrolled
              </span>
            </div>

            {/* Class Timings / Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-gray-800 text-gray-200 text-xs sm:text-sm px-3 py-1.5 rounded-lg border border-gray-600">
                Mon 01:00 PM – 03:00 PM
              </span>
              <span className="bg-gray-800 text-gray-200 text-xs sm:text-sm px-3 py-1.5 rounded-lg border border-gray-600">
                Wed 01:00 PM – 03:00 PM
              </span>
              <span className="bg-gray-800 text-gray-200 text-xs sm:text-sm px-3 py-1.5 rounded-lg border border-gray-600">
                Fri 01:00 PM – 03:00 PM
              </span>
            </div>
          </div>

          <div>
            {/* Progress Bar Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-sm mb-2 text-gray-200">
                <span>Progress</span>
                <span className="font-semibold text-white">74% Completed</span>
              </div>
              <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-[#22c55e] h-full rounded-full transition-all duration-500" 
                  style={{ width: '74%' }} 
                />
              </div>
            </div>

            {/* Course Meta Info */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-gray-200 pt-3 border-t border-gray-600">
              
              {/* Batch */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-bold">#</span>
                <span>Batch: <strong className="text-white font-medium">20</strong></span>
              </div>

              {/* Roll */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457-.39-2.823-1.07-4" />
                </svg>
                <span>Roll: <strong className="text-white font-medium">771651</strong></span>
              </div>

              {/* Campus */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Campus: <strong className="text-white font-medium">Zaitoon Ashraf IT Park</strong></span>
              </div>

              {/* City */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>City: <strong className="text-white font-medium">Karachi</strong></span>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT CARD: Assignments & Quizzes */}
        <div className="bg-gray-700 border border-gray-600 rounded-2xl p-5 flex flex-col h-full shadow-lg">
          
          {/* Tabs Container */}
          <div className="bg-gray-800 p-1 rounded-xl flex mb-4 border border-gray-600">
            <button
              onClick={() => setActiveTab('assignments')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                activeTab === 'assignments'
                  ? 'bg-gray-600 text-white shadow'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Assignments
            </button>
            <button
              onClick={() => setActiveTab('quizzes')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                activeTab === 'quizzes'
                  ? 'bg-gray-600 text-white shadow'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Quizzes
            </button>
          </div>

          {/* Content Box */}
          <div className="flex-1">
            {activeTab === 'quizzes' ? (
              <div className="bg-gray-800 border border-gray-600 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-base font-bold text-white">HTML Quiz</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 text-amber-400 border border-amber-400/50 rounded uppercase tracking-wider bg-amber-500/10">
                    Pending
                  </span>
                </div>
                <div className="text-xs text-gray-300 space-y-1">
                  <p>Questions: 40 | Duration: 40 mins</p>
                  <p>Attempts: 0/3</p>
                </div>
              </div>
            ) : (
              <div className="bg-gray-800 border border-gray-600 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-base font-bold text-white">CSS Layout Assignment</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 text-amber-400 border border-amber-400/50 rounded uppercase tracking-wider bg-amber-500/10">
                    Pending
                  </span>
                </div>
                <div className="text-xs text-gray-300 space-y-1">
                  <p>Due Date: Next Monday</p>
                  <p>Max Marks: 100</p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}