"use client"

import React from 'react'
import { CalendarIcon, CheckCircle, CircleX } from 'lucide-react' 
import AsDetail from '../Components/studentDashboard/assignDetails/AsDetail'
import AttendanceOverview from '../Components/studentDashboard/AttendanceOverview/AttendanceOverview'
import AttendanceTable from '../Components/studentDashboard/AttendanceTable/AttendanceTable'

const Page = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      
      {/* 4 Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <AsDetail 
          num="114" 
          head="Total Classes" 
          icon={<CalendarIcon className="w-6 h-6 text-blue-400" />} 
        />
        <AsDetail 
          num="70" 
          head="Present" 
          icon={<CheckCircle className="w-6 h-6 text-emerald-400" />} 
        />
        <AsDetail 
          num="0" 
          head="Leaves" 
          icon={<CircleX className="w-6 h-6 text-amber-400" />} 
        />
        <AsDetail 
          num="44" 
          head="Absent" 
          icon={<CircleX className="w-6 h-6 text-rose-400" />} 
        />
      </div>

      {/* Attendance Overview */}
      <AttendanceOverview percentage={61} />

      {/* Attendance / Assignments Table */}
      <AttendanceTable />

    </div>
  )
}

export default Page