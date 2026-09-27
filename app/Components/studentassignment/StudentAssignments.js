'use client';

import React, { useState } from 'react';
import { Eye, Pencil, ChevronLeft, ChevronRight, Plus, Calendar, Tag } from 'lucide-react';
import AddCourseForm from '../AddCourseForm/AddCourseForm';

export default function StudentAssignments() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveCourse = (newCourseData) => {
    console.log('Submitted Course:', newCourseData);
    // Add logic here to push to state or send API request
    setIsModalOpen(false);
  };

  const assignments = [
    {
      id: 1,
      title: 'Admin panel (E commerce Dashboard)',
      isHackathon: false,
      description: 'Create the provided UI design in React or Next.js...',
      topics: ['NextJS', 'ReactJS Introduction'],
      extraTopicsCount: 5,
      dueDate: 'Sep 10, 2026',
    },
    {
      id: 2,
      title: 'QUICKSERVE WMA (Batch-20)',
      isHackathon: true,
      description: 'Challenge: Build a modern service-booking web application that...',
      topics: [],
      extraTopicsCount: 0,
      dueDate: 'Aug 30, 2026',
    },
    {
      id: 3,
      title: 'E-Commerce Website (React js)',
      isHackathon: false,
      description: 'React.js frontend Create all required e-commerce...',
      topics: ['ReactJS Introduction', 'Components , Props'],
      extraTopicsCount: 2,
      dueDate: 'Aug 17, 2026',
    },
    {
      id: 4,
      title: 'Furniture E-Commerce Website',
      isHackathon: false,
      description: 'Follow the Figma design. ( https://www.figma.com/design/X...',
      topics: ['JavaScript Book Course', 'Github'],
      extraTopicsCount: 3,
      dueDate: 'Aug 10, 2026',
    },
    {
      id: 5,
      title: 'MaintainIQ (Batch-20)',
      isHackathon: true,
      description: 'MaintainIQ ...',
      topics: [],
      extraTopicsCount: 0,
      dueDate: 'Jul 12, 2026',
    },
    {
      id: 6,
      title: 'JavaScript Assignment – 25 Questions',
      isHackathon: false,
      description: 'Complete all 25 JavaScript questions available at the link...',
      topics: ['JavaScript Introduction', 'JavaScript Chapters'],
      extraTopicsCount: 6,
      dueDate: 'Jul 10, 2026',
    },
    {
      id: 7,
      title: 'Budgetting App',
      isHackathon: false,
      description: 'Develop a fully responsive and functional Budgeting Web...',
      topics: ['JavaScript Chapters', 'JavaScript Chapters'],
      extraTopicsCount: 10,
      dueDate: 'Jun 1, 2026',
    },
    {
      id: 8,
      title: 'Amazon Clone',
      isHackathon: false,
      description: 'Create a fully responsive landing page inspired by the official...',
      topics: ['HTML Text', 'HTML Images'],
      extraTopicsCount: 13,
      dueDate: 'May 24, 2026',
    },
    {
      id: 9,
      title: 'NASA Landing Page',
      isHackathon: false,
      description: 'Create a fully responsive landing page inspired by the official NASA...',
      topics: ['Media queries', 'HTML Text'],
      extraTopicsCount: 7,
      dueDate: 'May 1, 2026',
    },
    {
      id: 10,
      title: 'Helplytics AI – Community App',
      isHackathon: true,
      description: 'SMIT GRAND CODING NIGHT - April 2026...',
      topics: [],
      extraTopicsCount: 0,
      dueDate: 'Apr 19, 2026',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto font-sans text-white space-y-5 p-2 sm:p-4">
      
      {/* Header & Primary Action Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gray-700 border border-gray-600 p-4 sm:p-5 rounded-2xl shadow-md">
        <div>
          <h1 className="text-xl font-bold text-white tracking-wide">Course Assignments</h1>
          <p className="text-xs text-gray-300 mt-1">
            Manage, publish, and evaluate student assignments and hackathons
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-4 py-2.5 rounded-xl transition-colors shadow-md active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Assignment</span>
        </button>
      </div>

      {/* Modal Component */}
      <AddCourseForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitCourse={handleSaveCourse}
      />

      {/* ========================================== */}
      {/* 1. MOBILE CARD VIEW (No horizontal scroll) */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {assignments.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-xl border space-y-3 shadow-md transition-all ${
              item.isHackathon
                ? 'bg-purple-950/40 border-purple-500/40'
                : 'bg-gray-700 border-gray-600'
            }`}
          >
            {/* Header: Title & Hackathon Tag */}
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1">
                <h2
                  className={`text-sm font-semibold ${
                    item.isHackathon ? 'text-purple-300' : 'text-white'
                  }`}
                >
                  {item.title}
                </h2>
                {item.isHackathon && (
                  <span className="inline-block text-[10px] font-bold px-2 py-0.5 text-purple-300 border border-purple-400/50 rounded uppercase bg-purple-500/20 tracking-wider">
                    HACKATHON
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  title="View Assignment"
                  className={`p-1.5 rounded-lg transition-colors ${
                    item.isHackathon
                      ? 'text-purple-300 hover:bg-purple-900/50'
                      : 'text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  title="Edit Submission"
                  className={`p-1.5 rounded-lg transition-colors ${
                    item.isHackathon
                      ? 'text-purple-300 hover:bg-purple-900/50'
                      : 'text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-300 line-clamp-2">{item.description}</p>

            {/* Topics */}
            <div>
              {item.topics.length === 0 ? (
                <span className="text-gray-400 text-xs italic">No topics assigned</span>
              ) : (
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-[10px] font-medium text-blue-300 bg-blue-600/30 rounded border border-blue-500/30"
                    >
                      {topic}
                    </span>
                  ))}
                  {item.extraTopicsCount > 0 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-medium text-gray-300 bg-gray-800 rounded border border-gray-600">
                      +{item.extraTopicsCount}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Due Date Footer */}
            <div className="pt-2 border-t border-gray-600/80 flex items-center justify-between text-xs">
              <span className="text-gray-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gray-400" /> Due Date:
              </span>
              <span
                className={`font-medium ${
                  item.isHackathon ? 'text-purple-300' : 'text-gray-200'
                }`}
              >
                {item.dueDate}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================== */}
      {/* 2. DESKTOP TABLE VIEW (Medium screens up) */}
      {/* ========================================== */}
      <div className="hidden md:block bg-gray-700 border border-gray-600 rounded-2xl overflow-hidden shadow-lg">
        <table className="w-full text-left text-sm text-gray-200 border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="text-gray-300 border-b border-gray-600 text-sm bg-gray-800/50">
              <th className="py-4 px-6 font-medium w-1/4">Title</th>
              <th className="py-4 px-6 font-medium w-1/3">Description</th>
              <th className="py-4 px-6 font-medium">Topics</th>
              <th className="py-4 px-6 font-medium whitespace-nowrap">Due Date</th>
              <th className="py-4 px-6 font-medium text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-600">
            {assignments.map((item) => (
              <tr
                key={item.id}
                className={`transition-colors duration-150 ${
                  item.isHackathon
                    ? 'bg-purple-950/40 hover:bg-purple-900/50'
                    : 'hover:bg-gray-600/50'
                }`}
              >
                {/* Title Column */}
                <td className="py-4 px-6 font-medium max-w-[220px]">
                  <div className="flex flex-col items-start gap-1">
                    <span
                      className={`truncate max-w-full ${
                        item.isHackathon ? 'text-purple-300 font-semibold' : 'text-white'
                      }`}
                      title={item.title}
                    >
                      {item.title}
                    </span>
                    {item.isHackathon && (
                      <span className="text-[10px] font-bold px-2 py-0.5 text-purple-300 border border-purple-400/50 rounded uppercase bg-purple-500/20 tracking-wider">
                        HACKATHON
                      </span>
                    )}
                  </div>
                </td>

                {/* Description Column */}
                <td className="py-4 px-6 text-gray-300 max-w-[300px]">
                  <p className="truncate text-xs sm:text-sm" title={item.description}>
                    {item.description}
                  </p>
                </td>

                {/* Topics Column */}
                <td className="py-4 px-6">
                  {item.topics.length === 0 ? (
                    <span className="text-gray-400 text-xs">No topics</span>
                  ) : (
                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-0.5 text-[11px] font-medium text-blue-300 bg-blue-600/30 rounded-md border border-blue-500/30 whitespace-nowrap"
                        >
                          {topic}
                        </span>
                      ))}
                      {item.extraTopicsCount > 0 && (
                        <span className="px-2 py-0.5 text-[11px] font-medium text-gray-300 bg-gray-800 rounded-md border border-gray-600 whitespace-nowrap">
                          +{item.extraTopicsCount}
                        </span>
                      )}
                    </div>
                  )}
                </td>

                {/* Due Date Column */}
                <td
                  className={`py-4 px-6 whitespace-nowrap text-xs sm:text-sm ${
                    item.isHackathon ? 'text-purple-300 font-medium' : 'text-gray-200'
                  }`}
                >
                  {item.dueDate}
                </td>

                {/* Actions Column */}
                <td className="py-4 px-6 whitespace-nowrap text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      title="View Assignment"
                      className={`p-1.5 rounded-lg transition-colors ${
                        item.isHackathon
                          ? 'text-purple-300 hover:text-purple-100 hover:bg-purple-900/50'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      title="Edit Submission"
                      className={`p-1.5 rounded-lg transition-colors ${
                        item.isHackathon
                          ? 'text-purple-300 hover:text-purple-100 hover:bg-purple-900/50'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <Pencil className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ========================================== */}
      {/* 3. RESPONSIVE PAGINATION FOOTER            */}
      {/* ========================================== */}
      <div className="bg-gray-700 border border-gray-600 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-300 shadow-md">
        <div>
          Showing <span className="font-semibold text-white">1-10</span> of{' '}
          <span className="font-semibold text-white">13</span> records
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-600 hover:bg-gray-600 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <div className="flex items-center gap-1">
            <button
              className={`w-8 h-8 rounded-lg text-xs font-medium border ${
                currentPage === 1
                  ? 'bg-blue-600 border-blue-500 text-white'
                  : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button
              className={`w-8 h-8 rounded-lg text-xs font-medium border ${
                currentPage === 2
                  ? 'bg-blue-600 border-blue-500 text-white'
                  : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
          </div>

          <button
            onClick={() => setCurrentPage(2)}
            disabled={currentPage === 2}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-600 hover:bg-gray-600 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}