'use client';

import React, { useState } from 'react';
import { Calendar, CheckCircle2, XCircle } from 'lucide-react';

export default function StudentAttendanceTable() {
  const [selectedDate, setSelectedDate] = useState('2026-09-25');

  const studentsAttendance = [
    { id: 1, name: 'Muhammad Ahmed', rollNo: 'WMA-2026-001', attendance: 'Marked' },
    { id: 2, name: 'Sara Fatima', rollNo: 'WMA-2026-002', attendance: 'Marked' },
    { id: 3, name: 'Ali Raza', rollNo: 'WMA-2026-003', attendance: 'Not Marked' },
    { id: 4, name: 'Ayesha Khan', rollNo: 'WMA-2026-004', attendance: 'Not Marked' },
    { id: 5, name: 'Usman Ghani', rollNo: 'WMA-2026-005', attendance: 'Marked' },
    { id: 6, name: 'Zainab Bibi', rollNo: 'WMA-2026-006', attendance: 'Not Marked' },
    { id: 7, name: 'Hamza Sheikh', rollNo: 'WMA-2026-007', attendance: 'Marked' },
    { id: 8, name: 'Bilal Hussain', rollNo: 'WMA-2026-008', attendance: 'Marked' },
    { id: 9, name: 'Hira Tariq', rollNo: 'WMA-2026-009', attendance: 'Not Marked' },
    { id: 10, name: 'Omer Farooq', rollNo: 'WMA-2026-010', attendance: 'Marked' },
  ];

  // Render colored status badges
  const renderAttendanceBadge = (status) => {
    if (status === 'Marked') {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/40 rounded-lg bg-emerald-500/10 tracking-wide">
          <CheckCircle2 size={13} />
          Marked
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-rose-400 border border-rose-500/40 rounded-lg bg-rose-500/10 tracking-wide">
        <XCircle size={13} />
        Not Marked
      </span>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto font-sans text-white space-y-5">
      
      {/* Header & Date Selector Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gray-700 border border-gray-600 p-4 rounded-2xl shadow-md">
        <div>
          <h2 className="text-lg font-bold text-white tracking-wide">
            Student Attendance Sheet
          </h2>
          <p className="text-xs text-gray-300">
            Select a date to view or verify daily attendance status
          </p>
        </div>

        {/* Date Selector Dropdown */}
        <div className="flex items-center gap-2 bg-gray-800 border border-gray-600 px-3 py-2 rounded-xl w-full sm:w-auto">
          <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
          <label htmlFor="dateSelection" className="text-xs font-medium text-gray-300 shrink-0">
            Date:
          </label>
          <select
            id="dateSelection"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer w-full"
          >
            <option value="2026-09-25" className="bg-gray-800 text-white">09/25/2026</option>
            <option value="2026-08-25" className="bg-gray-800 text-white">08/25/2026</option>
            <option value="2026-07-25" className="bg-gray-800 text-white">07/25/2026</option>
            <option value="2026-06-25" className="bg-gray-800 text-white">06/25/2026</option>
          </select>
        </div>
      </div>

      {/* ========================================== */}
      {/* 1. MOBILE CARD VIEW (No slider/scroll)    */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 gap-3 md:hidden">
        {studentsAttendance.map((student, index) => (
          <div
            key={student.id}
            className="p-4 rounded-xl border border-gray-600 bg-gray-700 space-y-3 shadow-md"
          >
            {/* Top row: Serial No + Student Name + Status Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-gray-400 bg-gray-800/80 px-2 py-0.5 rounded">
                  #{index + 1}
                </span>
                <h3 className="text-sm font-semibold text-white">
                  {student.name}
                </h3>
              </div>
              {renderAttendanceBadge(student.attendance)}
            </div>

            {/* Bottom row: Roll Number */}
            <div className="flex items-center justify-between text-xs pt-2 border-t border-gray-600/80 text-gray-300">
              <span>Roll Number:</span>
              <span className="font-mono text-gray-200 font-semibold">
                {student.rollNo}
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
            <tr className="text-gray-300 border-b border-gray-600 text-sm bg-gray-800/50">
              <th className="py-4 px-6 font-medium w-16">S.No</th>
              <th className="py-4 px-6 font-medium">Student Name</th>
              <th className="py-4 px-6 font-medium">Roll No</th>
              <th className="py-4 px-6 font-medium text-center">Attendance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {studentsAttendance.map((student, index) => (
              <tr
                key={student.id}
                className="hover:bg-gray-600/50 transition-colors duration-150"
              >
                <td className="py-3.5 px-6 font-medium text-gray-400">
                  {index + 1}
                </td>
                <td className="py-3.5 px-6 font-medium text-white whitespace-nowrap">
                  {student.name}
                </td>
                <td className="py-3.5 px-6 text-gray-300 font-mono text-xs whitespace-nowrap">
                  {student.rollNo}
                </td>
                <td className="py-3.5 px-6 whitespace-nowrap text-center">
                  {renderAttendanceBadge(student.attendance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}