'use client';

import { useState } from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EnrolledStudentsTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const students = [
    { id: 1, name: 'Muhammad Ahmed', rollNo: 'WMA-2026-001', email: 'ahmed.dev@gmail.com', avatar: 'https://i.pravatar.cc/150?img=11', status: 'ENROLLED' },
    { id: 2, name: 'Sara Fatima', rollNo: 'WMA-2026-002', email: 'sara.fatima@gmail.com', avatar: 'https://i.pravatar.cc/150?img=5', status: 'ENROLLED' },
    { id: 3, name: 'Ali Raza', rollNo: 'WMA-2026-003', email: 'ali.raza99@gmail.com', avatar: 'https://i.pravatar.cc/150?img=12', status: 'ENROLLED' },
    { id: 4, name: 'Ayesha Khan', rollNo: 'WMA-2026-004', email: 'ayesha.k@gmail.com', avatar: 'https://i.pravatar.cc/150?img=9', status: 'ENROLLED' },
    { id: 5, name: 'Usman Ghani', rollNo: 'WMA-2026-005', email: 'usman.ghani@gmail.com', avatar: 'https://i.pravatar.cc/150?img=13', status: 'ENROLLED' },
    { id: 6, name: 'Zainab Bibi', rollNo: 'WMA-2026-006', email: 'zainab.code@gmail.com', avatar: 'https://i.pravatar.cc/150?img=20', status: 'ENROLLED' },
    { id: 7, name: 'Hamza Sheikh', rollNo: 'WMA-2026-007', email: 'hamza.sheikh@gmail.com', avatar: 'https://i.pravatar.cc/150?img=15', status: 'ENROLLED' },
    { id: 8, name: 'Bilal Hussain', rollNo: 'WMA-2026-008', email: 'bilal.hussain@gmail.com', avatar: 'https://i.pravatar.cc/150?img=33', status: 'ENROLLED' },
    { id: 9, name: 'Hira Tariq', rollNo: 'WMA-2026-009', email: 'hira.tariq@gmail.com', avatar: 'https://i.pravatar.cc/150?img=24', status: 'ENROLLED' },
    { id: 10, name: 'Omer Farooq', rollNo: 'WMA-2026-010', email: 'omer.farooq@gmail.com', avatar: 'https://i.pravatar.cc/150?img=60', status: 'ENROLLED' },
  ];

  return (
    <div className="w-full max-w-7xl font-sans text-white space-y-4">
      
      {/* ========================================== */}
      {/* 1. MOBILE CARD VIEW (No slider/scroll)    */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {students.map((student) => (
          <div
            key={student.id}
            className="p-4 rounded-xl border border-gray-600 bg-gray-700 space-y-3 shadow-md"
          >
            {/* Student Header: Avatar, Name & Action Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-500"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-100">{student.name}</h3>
                  <span className="font-mono text-xs text-gray-300">{student.rollNo}</span>
                </div>
              </div>

              <button
                title="View Student Details"
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>

            {/* Email & Status Badge */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-600/80 text-xs">
              <span className="text-gray-300 truncate max-w-[200px]">{student.email}</span>
              <span className="px-2.5 py-1 text-[11px] font-semibold text-cyan-300 border border-cyan-500/40 rounded-lg bg-cyan-500/10 tracking-wide">
                {student.status}
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
          <thead>
            <tr className="text-gray-300 border-b border-gray-600 text-sm">
              <th className="py-4 px-6 font-medium">Name</th>
              <th className="py-4 px-6 font-medium">Roll Number</th>
              <th className="py-4 px-6 font-medium">Email</th>
              <th className="py-4 px-6 font-medium">Status</th>
              <th className="py-4 px-6 font-medium text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-600">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-600/50 transition-colors duration-150">
                <td className="py-3.5 px-6 font-medium text-white whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-9 h-9 rounded-full object-cover border border-gray-500"
                    />
                    <span className="font-semibold text-gray-100">{student.name}</span>
                  </div>
                </td>

                <td className="py-3.5 px-6 text-gray-300 font-mono text-xs whitespace-nowrap">
                  {student.rollNo}
                </td>

                <td className="py-3.5 px-6 text-gray-300 whitespace-nowrap">
                  {student.email}
                </td>

                <td className="py-3.5 px-6 whitespace-nowrap">
                  <span className="px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/40 rounded-lg bg-cyan-500/10 tracking-wide">
                    {student.status}
                  </span>
                </td>

                <td className="py-3.5 px-6 whitespace-nowrap text-center">
                  <button
                    title="View Student Details"
                    className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-[#0a0f24] transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
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
          <span className="font-semibold text-white">201</span> records
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
            <span className="px-1 text-gray-400">...</span>
            <button
              className="w-8 h-8 rounded-lg text-xs font-medium bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-600"
              onClick={() => setCurrentPage(21)}
            >
              21
            </button>
          </div>

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-600 hover:bg-gray-600 text-gray-300 transition-colors"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}