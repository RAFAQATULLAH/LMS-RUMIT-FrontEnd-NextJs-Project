'use client';

import { useState } from 'react';
import { Eye, FileText, ToggleRight, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export default function StudentQuizzesTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const quizzes = [
    {
      id: 1,
      title: 'Javascript (Quiz-4)',
      courses: [
        'Modern Web Application Development',
        'Web and Mobile App Development',
      ],
      date: 'Jun 24, 2026',
      expiry: 'Jun 24, 2026',
      status: 'ACTIVE',
    },
    {
      id: 2,
      title: 'Javascript (Quiz-3)',
      courses: [
        'Modern Web Application Development',
        'Web and Mobile App Development',
      ],
      date: 'Jun 3, 2026',
      expiry: 'Jun 3, 2026',
      status: 'ACTIVE',
    },
    {
      id: 3,
      title: 'Javascript (Quiz-2)',
      courses: [
        'Modern Web Application Development',
        'Web and Mobile App Development',
      ],
      date: 'May 18, 2026',
      expiry: 'May 18, 2026',
      status: 'ACTIVE',
    },
    {
      id: 4,
      title: 'Javascript (Quiz-1)',
      courses: [
        'Modern Web Application Development',
        'Web and Mobile App Development',
        'JavaScript Crash Course',
        'Full Stack Foundations for Teens',
      ],
      date: 'Apr 17, 2026',
      expiry: 'Apr 17, 2026',
      status: 'ACTIVE',
    },
    {
      id: 5,
      title: 'CSS Quiz',
      courses: [
        'Modern Web Application Development',
        'Web & Mobile Application Development (Female)',
        'Web and Mobile App Development',
        'Techno Kids Course',
        'Front End Development',
        'Backend Development',
      ],
      date: 'Mar 27, 2026',
      expiry: 'Mar 27, 2026',
      status: 'ACTIVE',
    },
    {
      id: 6,
      title: 'HTML Quiz',
      courses: [
        'Modern Web Application Development',
        'Web & Mobile Application Development (Female)',
        'Web and Mobile App Development',
        'Techno Kids Course',
        'Front End Development',
        'Backend Development',
        'Mobile App Development (React Native)',
      ],
      date: 'Jan 7, 2026',
      expiry: 'Jan 7, 2026',
      status: 'ACTIVE',
    },
    {
      id: 7,
      title: 'HTML Quiz',
      courses: [
        'Modern Web Application Development',
        'Web & Mobile Application Development (Female)',
        'Web and Mobile App Development',
        'Techno Kids Course',
        'Front End Development',
        'Backend Development',
        'Mobile App Development (React Native)',
      ],
      date: 'Jan 5, 2026',
      expiry: 'Jan 5, 2026',
      status: 'ACTIVE',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto font-sans text-white space-y-4">
      
      {/* ========================================== */}
      {/* 1. MOBILE CARD VIEW (No slider/scroll)    */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="p-4 rounded-xl border border-gray-600 bg-gray-700 space-y-3 shadow-md"
          >
            {/* Header: Title & Status Badge */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-white">{quiz.title}</h3>
              <span className="px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 border border-emerald-500/50 rounded-lg bg-emerald-500/10 tracking-wide shrink-0">
                {quiz.status}
              </span>
            </div>

            {/* Assigned Courses List */}
            <div className="text-xs text-gray-300">
              <span className="font-medium text-gray-400 block mb-1">Assigned Courses:</span>
              <p className="leading-relaxed bg-gray-800/60 p-2 rounded-lg border border-gray-600/50">
                {quiz.courses.join(', ')}
              </p>
            </div>

            {/* Dates Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              <div className="bg-gray-800/40 p-2 rounded-lg border border-gray-600/40">
                <span className="text-gray-400 text-[10px] block">Created Date</span>
                <span className="text-gray-200 font-medium">{quiz.date}</span>
              </div>
              <div className="bg-gray-800/40 p-2 rounded-lg border border-gray-600/40">
                <span className="text-gray-400 text-[10px] block">Expiry Date</span>
                <span className="text-gray-200 font-medium">{quiz.expiry}</span>
              </div>
            </div>

            {/* Actions Toolbar */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-600/80">
              <span className="text-xs text-gray-400">Actions</span>
              <div className="flex items-center gap-1.5">
                <button
                  title="Toggle Status"
                  className="p-1.5 rounded-lg text-emerald-400 hover:text-emerald-300 hover:bg-gray-800 transition-colors border border-gray-600"
                >
                  <ToggleRight className="w-5 h-5" />
                </button>
                <button
                  title="View Quiz Results / Responses"
                  className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors border border-gray-600"
                >
                  <FileText className="w-4 h-4" />
                </button>
                <button
                  title="View Quiz Details"
                  className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors border border-gray-600"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================== */}
      {/* 2. DESKTOP TABLE VIEW (Medium screens up) */}
      {/* ========================================== */}
      <div className="hidden md:block bg-gray-700 border border-gray-600 rounded-2xl overflow-hidden shadow-lg">
        <table className="w-full text-left text-sm text-gray-200 border-collapse">
          <thead>
            <tr className="text-gray-300 border-b border-gray-600 text-sm bg-gray-800/50">
              <th className="py-4 px-6 font-medium w-1/5">Quiz</th>
              <th className="py-4 px-6 font-medium w-2/5">Course(s)</th>
              <th className="py-4 px-6 font-medium w-32">Date</th>
              <th className="py-4 px-6 font-medium w-32">Expiry</th>
              <th className="py-4 px-6 font-medium w-28">Status</th>
              <th className="py-4 px-6 font-medium text-center w-28">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-600">
            {quizzes.map((quiz) => (
              <tr key={quiz.id} className="hover:bg-gray-600/50 transition-colors duration-150">
                {/* Quiz Title */}
                <td className="py-4 px-6 font-medium text-white whitespace-nowrap align-top">
                  {quiz.title}
                </td>

                {/* Course(s) List */}
                <td className="py-4 px-6 text-xs text-gray-300 leading-relaxed align-top">
                  {quiz.courses.join(', ')}
                </td>

                {/* Date */}
                <td className="py-4 px-6 text-xs text-gray-300 whitespace-nowrap align-top">
                  {quiz.date}
                </td>

                {/* Expiry */}
                <td className="py-4 px-6 text-xs text-gray-300 whitespace-nowrap align-top">
                  {quiz.expiry}
                </td>

                {/* Status Badge */}
                <td className="py-4 px-6 whitespace-nowrap align-top">
                  <span className="px-2.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/50 rounded-lg bg-emerald-500/10 tracking-wide">
                    {quiz.status}
                  </span>
                </td>

                {/* Action Buttons */}
                <td className="py-4 px-6 whitespace-nowrap text-center align-top">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      title="Toggle Status"
                      className="p-1 rounded text-emerald-400 hover:text-emerald-300 hover:bg-gray-600 transition-colors"
                    >
                      <ToggleRight className="w-5 h-5" />
                    </button>
                    <button
                      title="View Quiz Results / Responses"
                      className="p-1 rounded text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                    <button
                      title="View Quiz Details"
                      className="p-1 rounded text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
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
          Showing <span className="font-semibold text-white">1-7</span> of{' '}
          <span className="font-semibold text-white">7</span> records
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-600 hover:bg-gray-600 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <button
            className="w-8 h-8 rounded-lg text-xs font-medium bg-blue-600 border border-blue-500 text-white"
          >
            1
          </button>

          <button
            disabled
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 opacity-50 cursor-not-allowed"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}