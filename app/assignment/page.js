import React from 'react'
import { Notebook, NotebookPen, LucideTimer } from 'lucide-react'
import AsDetail from '../Components/studentDashboard/assignDetails/AsDetail'
import AssignmentsTable from '../Components/studentDashboard/AssignmentTable/AsignmentTable'

const page = () => {
  return (
    <>
    <div className='flex justify-between items-center'>
      <AsDetail num="16" head="Assined" width="32%" height="25%" icon={<Notebook/>}/>
      <AsDetail num="12" head="Submitted" width="32%" height="25%" icon={<NotebookPen/>}/>
      <AsDetail num="4" head="Pending" width="32%" height="25%" icon={<LucideTimer/>}/>
    </div>
    <div className='m-8'>
      <AssignmentsTable/>
    </div>
    </>
  )
}

export default page
