"use client"

import React from 'react'
import { CalendarIcon, CheckCircle, CircleX} from 'lucide-react' 
import AsDetail from '../Components/studentDashboard/assignDetails/AsDetail'
import AttendanceOverview from '../Components/studentDashboard/AttendanceOverview/AttendanceOverview'
import AttendanceTable from '../Components/studentDashboard/AttendanceTable/AttendanceTable'

const page = () => {
  return (
    <>
    <div className='flex justify-between items-center'>
      <AsDetail num="114" head="Total Classes" width="24%" height="fit" icon={<CalendarIcon/>}/>
    <AsDetail num="70" head="Present" width="24%" height="fit" icon={<CheckCircle/>}/>
    <AsDetail num="0" head="Leaves" width="24%" height="fit"  icon={<CircleX/>}/>
    <AsDetail num="44" head="Absent" width="24%" height="fit"  icon={<CircleX/>}/>
    </div>
    <div className='m-7'>
      <AttendanceOverview/>
    </div>
    <div>
      <AttendanceTable/>
    </div>
    </>
  )
}

export default page
