'use client';

import { useState } from 'react';
import { Eye, FileText, ToggleRight, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <div className="w-full max-w-7xl font-sans text-white">
      {/* Main Table Container */}
      <div className="bg-gray-700 border border-gray-600 rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-200 border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="text-gray-300 border-b border-gray-600 text-xs sm:text-sm">
                <th className="py-4 px-6 font-medium w-1/5">Quiz</th>
                <th className="py-4 px-6 font-medium w-2/5">Course(s)</th>
                <th className="py-4 px-6 font-medium w-32">Date</th>
                <th className="py-4 px-6 font-medium w-32">Expiry</th>
                <th className="py-4 px-6 font-medium w-28">Status</th>
                <th className="py-4 px-6 font-medium text-center w-28">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
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

        {/* Table Footer / Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-gray-600 text-xs sm:text-sm text-gray-300">
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
    </div>
  );
}