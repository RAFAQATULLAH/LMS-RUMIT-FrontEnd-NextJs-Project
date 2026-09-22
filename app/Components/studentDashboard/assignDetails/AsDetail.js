"use client"
import React from 'react'



const AsDetail = ({num , head , icon, width, height}) => {
  return (
    <>
    <div style={{width:width, height:height}} className={`flex items-center justify-between bg-gray-700 text-white p-4 rounded-lg border-3 border-t-[#0465d4] border-l-[#0051ae] border-b-0 border-r-0 transition-all duration-500 ease-in-out hover:translate-y-1 hover:shadow-lg hover:hover:shadow-lg hover:shadow-purple-500/20`}
    >
        <div>
            <h2>{num}</h2>
        <p>{head}</p>
        </div>
        <div>
        {icon}
        </div>
    </div>
    </>
  )
}

export default AsDetail
