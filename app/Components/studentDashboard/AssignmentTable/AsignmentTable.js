'use client';

export default function AssignmentsTable() {
  const assignments = [
    {
      id: 1,
      title: 'Admin panel (E commerce Dashboard)',
      isHackathon: false,
      topics: '7 Topics',
      dueDate: 'September 10, 2026',
      status: 'LATE SUBMITTED',
      submissionsClosed: false,
    },
    {
      id: 2,
      title: 'QUICKSERVE WMA (Batch-20)',
      isHackathon: true,
      topics: 'No topics',
      dueDate: 'August 30, 2026',
      status: 'NOT SUBMITTED',
      submissionsClosed: true,
    },
    {
      id: 3,
      title: 'E-Commerce Website (React js)',
      isHackathon: false,
      topics: '4 Topics',
      dueDate: 'August 17, 2026',
      status: 'APPROVED',
      submissionsClosed: false,
    },
    {
      id: 4,
      title: 'Furniture E-Commerce Website',
      isHackathon: false,
      topics: '5 Topics',
      dueDate: 'August 10, 2026',
      status: 'SUBMITTED',
      submissionsClosed: false,
    },
    {
      id: 5,
      title: 'MaintainIQ (Batch-20)',
      isHackathon: true,
      topics: 'No topics',
      dueDate: 'July 12, 2026',
      status: 'NOT SUBMITTED',
      submissionsClosed: true,
    },
    {
      id: 6,
      title: 'JavaScript Assignment – 25 Questions',
      isHackathon: false,
      topics: '8 Topics',
      dueDate: 'July 10, 2026',
      status: 'NOT SUBMITTED',
      submissionsClosed: false,
    },
    {
      id: 7,
      title: 'Budgetting App',
      isHackathon: false,
      topics: '12 Topics',
      dueDate: 'June 1, 2026',
      status: 'APPROVED',
      submissionsClosed: false,
    },
    {
      id: 8,
      title: 'Full Stack LMS Dashboard',
      isHackathon: false,
      topics: '10 Topics',
      dueDate: 'May 20, 2026',
      status: 'APPROVED',
      submissionsClosed: false,
    },
    {
      id: 9,
      title: 'DEVATHON 2026 (Batch-20)',
      isHackathon: true,
      topics: 'No topics',
      dueDate: 'May 05, 2026',
      status: 'NOT SUBMITTED',
      submissionsClosed: true,
    },
    {
      id: 10,
      title: 'Weather App with OpenWeather API',
      isHackathon: false,
      topics: '3 Topics',
      dueDate: 'April 28, 2026',
      status: 'APPROVED',
      submissionsClosed: false,
    },
    {
      id: 11,
      title: 'Redux Toolkit Shopping Cart',
      isHackathon: false,
      topics: '6 Topics',
      dueDate: 'April 15, 2026',
      status: 'LATE SUBMITTED',
      submissionsClosed: false,
    },
    {
      id: 12,
      title: 'Blog Web App (Next.js & Firebase)',
      isHackathon: false,
      topics: '9 Topics',
      dueDate: 'March 30, 2026',
      status: 'APPROVED',
      submissionsClosed: false,
    },
    {
      id: 13,
      title: 'Todo List App with LocalStorage',
      isHackathon: false,
      topics: '2 Topics',
      dueDate: 'March 12, 2026',
      status: 'APPROVED',
      submissionsClosed: false,
    },
    {
      id: 14,
      title: 'HTML5 & CSS3 Responsive Portfolio',
      isHackathon: false,
      topics: '5 Topics',
      dueDate: 'February 25, 2026',
      status: 'APPROVED',
      submissionsClosed: false,
    },
  ];

  // Helper function to render status badges
  const renderStatusBadge = (status) => {
    switch (status) {
      case 'APPROVED':
        return (
          <span className="px-2.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/50 rounded-lg bg-emerald-500/10 tracking-wide">
            APPROVED
          </span>
        );
      case 'SUBMITTED':
        return (
          <span className="px-2.5 py-1 text-xs font-semibold text-blue-400 border border-blue-500/50 rounded-lg bg-blue-500/10 tracking-wide">
            SUBMITTED
          </span>
        );
      case 'LATE SUBMITTED':
        return (
          <span className="px-2.5 py-1 text-xs font-semibold text-amber-400 border border-amber-500/50 rounded-lg bg-amber-500/10 tracking-wide">
            LATE SUBMITTED
          </span>
        );
      case 'NOT SUBMITTED':
      default:
        return (
          <span className="px-2.5 py-1 text-xs font-semibold text-gray-400 border border-gray-500/50 rounded-lg bg-gray-500/10 tracking-wide">
            NOT SUBMITTED
          </span>
        );
    }
  };

  return (
    <div className="w-full font-sans text-white">
      {/* Main Table Container */}
      <div className="bg-gray-700 border border-gray-600 rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-200 border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="text-gray-300 border-b border-gray-600 text-xs sm:text-sm">
                <th className="py-4 px-6 font-medium w-16">S.No</th>
                <th className="py-4 px-6 font-medium">Assignment</th>
                <th className="py-4 px-6 font-medium">Topics</th>
                <th className="py-4 px-6 font-medium">Due Date</th>
                <th className="py-4 px-6 font-medium">Status</th>
                <th className="py-4 px-6 font-medium">Action</th>
              </tr>
            </thead>

            {/* Table Rows */}
            <tbody className="divide-y divide-gray-600">
              {assignments.map((item, index) => (
                <tr
                  key={item.id}
                  className={`transition-colors duration-150 ${
                    item.isHackathon
                      ? 'bg-purple-950/40 hover:bg-purple-900/50'
                      : 'hover:bg-gray-600/50'
                  }`}
                >
                  {/* S.No */}
                  <td className="py-4 px-6 font-medium text-gray-300 whitespace-nowrap">
                    {index + 1}
                  </td>

                  {/* Assignment Title & Hackathon Badge */}
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className={item.isHackathon ? 'text-purple-300 font-semibold' : 'text-white'}>
                        {item.title}
                      </span>
                      {item.isHackathon && (
                        <span className="text-[10px] font-bold px-2 py-0.5 text-purple-300 border border-purple-400/50 rounded uppercase bg-purple-500/20 tracking-wider">
                          HACKATHON
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Topics Badge */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    {item.topics === 'No topics' ? (
                      <span className="text-gray-400 text-xs">{item.topics}</span>
                    ) : (
                      <span className="px-2.5 py-1 text-xs font-medium text-blue-300 bg-blue-600/30 rounded-full border border-blue-500/30">
                        {item.topics}
                      </span>
                    )}
                  </td>

                  {/* Due Date */}
                  <td className={`py-4 px-6 whitespace-nowrap ${item.isHackathon ? 'text-purple-300' : 'text-gray-200'}`}>
                    {item.dueDate}
                  </td>

                  {/* Status */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    {renderStatusBadge(item.status)}
                  </td>

                  {/* Action Column */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    {item.submissionsClosed ? (
                      <div className="flex items-center gap-3">
                        <button className="text-gray-400 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <span className="text-xs italic text-red-400 font-medium">
                          Submissions closed
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 text-gray-300">
                        <button title="View Assignment" className="hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>

                        <button title="Upload Submission" className="hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                        </button>

                        <button title="Edit Submission" className="hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}