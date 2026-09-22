'use client';

import { useState } from 'react';

export default function AttendanceTable() {
  const [selectedMonth, setSelectedMonth] = useState('Sep 2026');

  const attendanceData = [
    { classNo: 1, date: 'Wed, Sep 2, 2026', status: 'PRESENT' },
    { classNo: 2, date: 'Fri, Sep 4, 2026', status: 'PRESENT' },
    { classNo: 3, date: 'Mon, Sep 7, 2026', status: 'PRESENT' },
    { classNo: 4, date: 'Wed, Sep 9, 2026', status: 'PRESENT' },
    { classNo: 5, date: 'Fri, Sep 11, 2026', status: 'PRESENT' },
    { classNo: 6, date: 'Mon, Sep 14, 2026', status: 'PRESENT' },
    { classNo: 7, date: 'Wed, Sep 16, 2026', status: 'PRESENT' },
    { classNo: 8, date: 'Fri, Sep 18, 2026', status: 'PRESENT' },
    { classNo: 9, date: 'Mon, Sep 21, 2026', status: 'PRESENT' },
  ];

  return (
    <div className="w-full font-sans text-white">
      {/* Top Filter Header */}
      <div className="flex justify-end mb-3">
        <div className="relative">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="appearance-none bg-gray-800 border border-gray-600 text-white text-xs sm:text-sm font-medium py-2 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer"
          >
            <option value="Sep 2026">Sep 2026</option>
            <option value="Aug 2026">Aug 2026</option>
            <option value="Jul 2026">Jul 2026</option>
          </select>
          
          {/* Dropdown Chevron Icon */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Attendance Table */}
      <div className="bg-gray-700 border border-gray-600 rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-200 border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="text-gray-300 border-b border-gray-600 text-xs sm:text-sm">
                <th className="py-4 px-6 font-medium w-1/4">Class</th>
                <th className="py-4 px-6 font-medium w-1/2">Date</th>
                <th className="py-4 px-6 font-medium w-1/4">Status</th>
              </tr>
            </thead>

            {/* Table Rows */}
            <tbody className="divide-y divide-gray-600">
              {attendanceData.map((row) => (
                <tr key={row.classNo} className="hover:bg-gray-600/50 transition-colors duration-150">
                  {/* Class Number */}
                  <td className="py-3.5 px-6 text-white font-medium">
                    {row.classNo}
                  </td>

                  {/* Date */}
                  <td className="py-3.5 px-6 text-gray-200 whitespace-nowrap">
                    {row.date}
                  </td>

                  {/* Status Badge */}
                  <td className="py-3.5 px-6 whitespace-nowrap">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/50 rounded-lg bg-emerald-500/10 tracking-wide">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}