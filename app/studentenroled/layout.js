"use client";


import TeacherNav from "../teacher/teacherNavbar/TeacherNav";


export default function TeacherLayout({ children }) {


  return (
    <div className="bg-[#0051ae]">
        <TeacherNav/>
        <main>
          {children}
        </main>
      </div>
    
  );
}