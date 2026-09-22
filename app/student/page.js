import React from 'react'
import { LucideTimer ,GraduationCap } from 'lucide-react'
import AsDetail from '../Components/studentDashboard/assignDetails/AsDetail'
import Shedule from '../Components/studentDashboard/shedule/Shedule'
import CourseDetails from '../Components/studentDashboard/courseDetails/CourseDetails'
import FeeSection from '../Components/studentDashboard/FeeSection/FeeSection'

const page = () => {
  return (
   <>
   <div className='flex justify-between w-full'>
    <AsDetail num="70/114" head="Attendance" width="30%" height="25%" icon={<LucideTimer/>}/>
   <AsDetail num="7/13" head="Assignment" width="30%" height="25%" icon={<GraduationCap/>}/>
   <div className=''>
    <Shedule/>
   </div>
   </div>
   <div className='m-4'>
    <CourseDetails/>
   </div>
   <div>
    <FeeSection/>
   </div>
   </>
  )
}

export default page
