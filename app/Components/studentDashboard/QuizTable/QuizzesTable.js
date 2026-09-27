'use client';

import React from 'react';
import { Play, Eye, Clock, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export default function QuizzesTable() {
  const quizzes = [
    {
      id: 1,
      title: 'HTML5 & CSS3 Fundamentals',
      course: 'Web Development',
      questions: 20,
      totalMarks: 100,
      passingMarks: 60,
      score: '88/100',
      status: 'PASSED',
      date: 'September 15, 2026',
    },
    {
      id: 2,
      title: 'JavaScript ES6+ & Logic Building',
      course: 'Web Development',
      questions: 25,
      totalMarks: 100,
      passingMarks: 70,
      score: '42/100',
      status: 'FAILED',
      date: 'September 20, 2026',
    },
    {
      id: 3,
      title: 'React State & Custom Hooks',
      course: 'Frontend Mastery',
      questions: 15,
      totalMarks: 50,
      passingMarks: 30,
      score: '—',
      status: 'PENDING',
      date: 'October 05, 2026',
    },
    {
      id: 4,
      title: 'Next.js App Router & Server Components',
      course: 'Full Stack Dev',
      questions: 30,
      totalMarks: 100,
      passingMarks: 70,
      score: '—',
      status: 'MISSED',
      date: 'September 01, 2026',
    },
    {
      id: 5,
      title: 'Tailwind CSS & Responsive Layouts',
      course: 'Web Development',
      questions: 15,
      totalMarks: 50,
      passingMarks: 30,
      score: '46/50',
      status: 'PASSED',
      date: 'August 18, 2026',
    },
  ];

  const renderStatusBadge = (status) => {
    switch (status) {
      case 'PASSED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/40 rounded-lg bg-emerald-500/10 tracking-wide">
            <CheckCircle2 size={13} />
            PASSED
          </span>
        );
      case 'FAILED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-rose-400 border border-rose-500/40 rounded-lg bg-rose-500/10 tracking-wide">
            <XCircle size={13} />
            FAILED
          </span>
        );
      case 'PENDING':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-amber-400 border border-amber-500/40 rounded-lg bg-amber-500/10 tracking-wide">
            <Clock size={13} />
            PENDING
          </span>
        );
      case 'MISSED':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-gray-400 border border-gray-600/50 rounded-lg bg-gray-800/50 tracking-wide">
            <AlertCircle size={13} />
            MISSED
          </span>
        );
    }
  };

  const renderAction = (item) => {
    if (item.status === 'PENDING') {
      return (
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium rounded-lg shadow-md transition-colors">
          <Play size={13} fill="currentColor" />
          Start Quiz
        </button>
      );
    }

    if (item.status === 'PASSED' || item.status === 'FAILED') {
      return (
        <button
          title="View Result"
          className="flex items-center gap-1 text-xs font-medium text-purple-300 hover:text-purple-200 transition-colors"
        >
          <Eye size={15} />
          <span>Result</span>
        </button>
      );
    }

    return <span className="text-xs italic text-gray-500">Expired</span>;
  };

  return (
    <div className="w-full font-sans text-white">
      {/* ========================================== */}
      {/* 1. MOBILE CARD VIEW (No horizontal slider) */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {quizzes.map((item, index) => (
          <div
            key={item.id}
            className="p-4 rounded-xl border border-gray-800 bg-[#111936] space-y-3 shadow-md"
          >
            {/* Card Header: Quiz Title & Status Badge */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2">
                <span className="text-xs font-bold text-gray-400 bg-gray-800/80 px-2 py-0.5 rounded">
                  #{index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-400">{item.course}</p>
                </div>
              </div>
            </div>

            {/* Quiz Info Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-gray-800/60">
              <div className="text-gray-400">
                Questions:{' '}
                <span className="text-gray-200 font-medium">{item.questions}</span>
              </div>
              <div className="text-gray-400">
                Score:{' '}
                <span
                  className={`font-semibold ${
                    item.status === 'PASSED'
                      ? 'text-emerald-400'
                      : item.status === 'FAILED'
                      ? 'text-rose-400'
                      : 'text-gray-300'
                  }`}
                >
                  {item.score}
                </span>
              </div>
              <div className="text-gray-400 col-span-2">
                Date: <span className="text-gray-200 font-medium">{item.date}</span>
              </div>
            </div>

            {/* Card Footer: Status & Action Button */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-800/80">
              <div>{renderStatusBadge(item.status)}</div>
              <div>{renderAction(item)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================== */}
      {/* 2. DESKTOP TABLE VIEW (Medium screens up) */}
      {/* ========================================== */}
      <div className="hidden md:block bg-[#111936] border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-sm text-gray-300 border-collapse">
          <thead>
            <tr className="text-gray-400 border-b border-gray-800 bg-gray-900/40">
              <th className="py-4 px-6 font-semibold w-16">S.No</th>
              <th className="py-4 px-6 font-semibold">Quiz Title</th>
              <th className="py-4 px-6 font-semibold">Course</th>
              <th className="py-4 px-6 font-semibold">Questions</th>
              <th className="py-4 px-6 font-semibold">Score</th>
              <th className="py-4 px-6 font-semibold">Status</th>
              <th className="py-4 px-6 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/80">
            {quizzes.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-gray-800/40 transition-colors duration-150"
              >
                <td className="py-3.5 px-6 font-medium text-gray-400">
                  {index + 1}
                </td>
                <td className="py-3.5 px-6 font-semibold text-white">
                  {item.title}
                </td>
                <td className="py-3.5 px-6 text-gray-400 text-xs">
                  {item.course}
                </td>
                <td className="py-3.5 px-6 text-gray-300">
                  {item.questions} Qs
                </td>
                <td
                  className={`py-3.5 px-6 font-semibold ${
                    item.status === 'PASSED'
                      ? 'text-emerald-400'
                      : item.status === 'FAILED'
                      ? 'text-rose-400'
                      : 'text-gray-400'
                  }`}
                >
                  {item.score}
                </td>
                <td className="py-3.5 px-6">{renderStatusBadge(item.status)}</td>
                <td className="py-3.5 px-6 text-right">{renderAction(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}