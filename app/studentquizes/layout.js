"use client";


import TeacherNav from "../teacher/teacherNavbar/TeacherNav";


export default function StudentQuizesLayout({ children }) {


  return (
    <div className="bg-[#0a0f24]">
        <TeacherNav/>
        <main>
          {children}
        </main>
      </div>
    
  );
}