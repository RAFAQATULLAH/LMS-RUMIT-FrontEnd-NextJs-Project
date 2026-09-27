import React from 'react';
import QuizzesTable from '../Components/studentDashboard/QuizTable/QuizzesTable';

const Page = () => {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white tracking-wide">
          Quizzes & Assessments
        </h2>
      </div>
      <QuizzesTable />
    </div>
  );
};

export default Page;