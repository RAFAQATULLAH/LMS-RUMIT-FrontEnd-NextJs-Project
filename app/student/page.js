import React from 'react'
import { LucideTimer, GraduationCap } from 'lucide-react'
import AsDetail from '../Components/studentDashboard/assignDetails/AsDetail'
import Shedule from '../Components/studentDashboard/shedule/Shedule'
import CourseDetails from '../Components/studentDashboard/courseDetails/CourseDetails'
import FeeSection from '../Components/studentDashboard/FeeSection/FeeSection'

const Page = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      
      {/* Top Section: Stat Cards + Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
        
        {/* Stat Cards Container */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <AsDetail 
            num="70/114" 
            head="Attendance" 
            icon={<LucideTimer className="w-7 h-7 text-blue-400" />} 
          />
          <AsDetail 
            num="7/13" 
            head="Assignment" 
            icon={<GraduationCap className="w-7 h-7 text-blue-400" />} 
          />
        </div>

        {/* Schedule Component */}
        <div className="lg:col-span-1">
          <Shedule />
        </div>

      </div>

      {/* Course Details Section */}
      <CourseDetails />

      {/* Fee Section */}
      <FeeSection />

    </div>
  )
}

export default Page