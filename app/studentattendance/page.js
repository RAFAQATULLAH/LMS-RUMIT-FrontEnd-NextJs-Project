import React from 'react'

const page = () => {
  const studentsAttendance = [
    { id: 1, name: 'Muhammad Ahmed', rollNo: 'WMA-2026-001', attendance : "Marked"},
    { id: 2, name: 'Sara Fatima', rollNo: 'WMA-2026-002',attendance: "Marked" },
    { id: 3, name: 'Ali Raza', rollNo: 'WMA-2026-003',attendance: "Not Marked" },
    { id: 4, name: 'Ayesha Khan', rollNo: 'WMA-2026-004',attendance : "Not Marked" },
    { id: 5, name: 'Usman Ghani', rollNo: 'WMA-2026-005',attendance : "Marked" },
    { id: 6, name: 'Zainab Bibi', rollNo: 'WMA-2026-006',attendance : "Not Marked" },
    { id: 7, name: 'Hamza Sheikh', rollNo: 'WMA-2026-007',attendance : "Marked" },
    { id: 8, name: 'Bilal Hussain', rollNo: 'WMA-2026-008',attendance : "Marked" },
    { id: 9, name: 'Hira Tariq', rollNo: 'WMA-2026-009', attendance : "Not Marked" },
    { id: 10, name: 'Omer Farooq', rollNo: 'WMA-2026-010', attendance : "Marked" }
  ];
  return (
    <div className='flex justify-center items-center'>
      <div className='h-dvh w-full max-w-7xl font-sans text-white bg-[#0a0f24]'>
      <div className='flex justify-center items-end flex-col'>
        <div className='flex items-center flex-col mb-11'>
            <h2 className='bg-gray-600 w-fit m-0 p-2 rounded-sm'>Select a Date</h2>
        <select name="dateSelection" className='bg-gray-600 w-fit m-0 p-0.5 rounded-sm'>
            <option value="9/25/2025">9/25/2025</option>
            <option value="9/25/2025">8/25/2025</option>
            <option value="9/25/2025">7/25/2025</option>
            <option value="9/25/2025">6/25/2025</option>
        </select>
        </div>
        <div className="bg-gray-700 border border-gray-600 rounded-2xl overflow-hidden shadow-lg w-full max-w-7xl">
          <table className='w-full max-w-7xl text-left text-sm text-gray-200 border-collapse'>
       <thead >
        <tr className='text-gray-300 border-b border-gray-600 text-xs sm:text-sm'>
          <td className="py-4 px-6 font-medium">S.No</td>
          <td className="py-4 px-6 font-medium">Student Name</td>
          <td className="py-4 px-6 font-medium">Roll No</td>
          <td className="py-4 px-6 font-medium text-center">Attendance</td>
        </tr>
       </thead>
       <tbody className="divide-y divide-gray-600">
        {
          studentsAttendance.map(
            (student)=>(
            <tr key={student.id} className="hover:bg-gray-600/50 transition-colors duration-150">
              <td className="py-3.5 px-6 font-medium text-white whitespace-nowrap">{student.id}</td>
              <td className="py-3.5 px-6 text-gray-300 whitespace-nowrap">{student.name}</td>
              <td className="py-3.5 px-6 text-gray-300 font-mono text-xs whitespace-nowrap">{student.rollNo}</td>
              <td className='py-3.5 px-6 whitespace-nowrap'>
                <span className={`px-3 py-1 text-xs font-semibold border border-cyan-500/40 rounded-lg bg-cyan-500/10 tracking-wide ${student.attendance==="Marked"? "text-green-300" : "text-red-500 "}`}>{student.attendance}</span>
                </td>
            </tr>
            )
          )
        }
       </tbody>
      </table>
        </div>
      
      </div>
    </div>
    </div>
  )
}

export default page
