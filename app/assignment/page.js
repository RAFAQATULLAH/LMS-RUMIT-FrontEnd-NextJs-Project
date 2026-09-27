"use client";

import React from "react";
import { Notebook, NotebookPen, LucideTimer } from "lucide-react";
import AsDetail from "../Components/studentDashboard/assignDetails/AsDetail";
import AssignmentsTable from "../Components/studentDashboard/AssignmentTable/AsignmentTable";

const Page = () => {
  return (
    <div className="space-y-6 w-full">
      {/* 3 Detail Cards Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <AsDetail
          num="16"
          head="Assigned"
          icon={<Notebook className="w-6 h-6 text-purple-400" />}
        />
        <AsDetail
          num="12"
          head="Submitted"
          icon={<NotebookPen className="w-6 h-6 text-emerald-400" />}
        />
        <AsDetail
          num="4"
          head="Pending"
          icon={<LucideTimer className="w-6 h-6 text-amber-400" />}
        />
      </div>

      {/* Assignments Data Table */}
      <div className="w-full">
        <AssignmentsTable />
      </div>
    </div>
  );
};

export default Page;