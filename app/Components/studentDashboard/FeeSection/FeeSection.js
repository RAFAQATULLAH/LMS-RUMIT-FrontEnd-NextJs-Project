'use client';

import { useState } from 'react';

export default function FeeSection() {
  const [showHistory, setShowHistory] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  // Fee data array (latest month first)
  const feeData = [
    {
      id: '202609771651',
      month: 'Sep 2026',
      amount: 'Rs: 1000 /-',
      type: 'Monthly',
      dueDate: '11-Sep-2026',
      status: 'PAID',
    },
    {
      id: '202608771650',
      month: 'Aug 2026',
      amount: 'Rs: 1000 /-',
      type: 'Monthly',
      dueDate: '11-Aug-2026',
      status: 'PAID',
    },
    {
      id: '202607771649',
      month: 'Jul 2026',
      amount: 'Rs: 1000 /-',
      type: 'Monthly',
      dueDate: '11-Jul-2026',
      status: 'PAID',
    },
    {
      id: '202606771648',
      month: 'Jun 2026',
      amount: 'Rs: 1000 /-',
      type: 'Monthly',
      dueDate: '11-Jun-2026',
      status: 'PAID',
    },
  ];

  // Copy Voucher ID to clipboard
  const handleCopy = (voucherId) => {
    navigator.clipboard.writeText(voucherId);
    setCopiedId(voucherId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Display either just the current month or all months
  const visibleFees = showHistory ? feeData : feeData.slice(0, 1);

  return (
    <div className="w-full max-w-5xl font-sans text-white">
      {/* Section Header with Arrow Toggle */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-white">Fee</h2>
        
        {/* Toggle Previous Months Button */}
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="flex items-center gap-2 text-xs font-medium text-gray-200 hover:text-white transition-colors bg-gray-800 hover:bg-gray-600 px-3 py-1.5 rounded-lg border border-gray-600"
        >
          <span>{showHistory ? 'Hide History' : 'View Previous Months'}</span>
          <svg
            className={`w-4 h-4 transform transition-transform duration-300 ${
              showHistory ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Main Table Container with bg-gray-700 */}
      <div className="bg-gray-700 border border-gray-600 rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-200 border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="text-gray-300 border-b border-gray-600 text-xs sm:text-sm">
                <th className="py-4 px-6 font-medium">Month</th>
                <th className="py-4 px-6 font-medium">Amount</th>
                <th className="py-4 px-6 font-medium">Type</th>
                <th className="py-4 px-6 font-medium">Due date</th>
                <th className="py-4 px-6 font-medium">Voucher ID</th>
                <th className="py-4 px-6 font-medium text-right sm:text-left">Status</th>
              </tr>
            </thead>

            {/* Table Rows */}
            <tbody className="divide-y divide-gray-600">
              {visibleFees.map((fee) => (
                <tr key={fee.id} className="hover:bg-gray-600/50 transition-colors duration-150">
                  {/* Month */}
                  <td className="py-4 px-6 text-white font-medium whitespace-nowrap">
                    {fee.month}
                  </td>

                  {/* Amount */}
                  <td className="py-4 px-6 text-white font-medium whitespace-nowrap">
                    {fee.amount}
                  </td>

                  {/* Type */}
                  <td className="py-4 px-6 text-gray-200 whitespace-nowrap">
                    {fee.type}
                  </td>

                  {/* Due Date */}
                  <td className="py-4 px-6 text-gray-200 whitespace-nowrap">
                    {fee.dueDate}
                  </td>

                  {/* Voucher ID with Copy Button */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-gray-200">{fee.id}</span>
                      <button
                        onClick={() => handleCopy(fee.id)}
                        title="Copy Voucher ID"
                        className="p-1.5 rounded-lg bg-gray-800 border border-gray-600 hover:bg-gray-600 text-gray-200 hover:text-white transition-all active:scale-95"
                      >
                        {copiedId === fee.id ? (
                          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-6 text-right sm:text-left whitespace-nowrap">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/50 rounded-lg bg-emerald-500/10 tracking-wide">
                      {fee.status}
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