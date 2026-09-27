"use client"
import React from 'react'

const AsDetail = ({ num, head, icon }) => {
  return (
    <div className="w-full h-full flex items-center justify-between bg-gray-700 text-white p-5 rounded-2xl border-t-4 border-l-4 border-t-[#0465d4] border-l-[#0051ae] border-b-0 border-r-0 shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-bold">{num}</h2>
        <p className="text-sm text-gray-300 font-medium">{head}</p>
      </div>
      <div className="p-3 bg-gray-800/60 rounded-xl border border-gray-600/50">
        {icon}
      </div>
    </div>
  )
}

export default AsDetail