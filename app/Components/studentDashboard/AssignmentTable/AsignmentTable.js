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

  const renderStatusBadge = (status) => {
    switch (status) {
      case 'APPROVED':
        return (
          <span className="px-2.5 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/40 rounded-lg bg-emerald-500/10 tracking-wide">
            APPROVED
          </span>
        );
      case 'SUBMITTED':
        return (
          <span className="px-2.5 py-1 text-[11px] font-semibold text-blue-400 border border-blue-500/40 rounded-lg bg-blue-500/10 tracking-wide">
            SUBMITTED
          </span>
        );
      case 'LATE SUBMITTED':
        return (
          <span className="px-2.5 py-1 text-[11px] font-semibold text-amber-400 border border-amber-500/40 rounded-lg bg-amber-500/10 tracking-wide">
            LATE SUBMITTED
          </span>
        );
      case 'NOT SUBMITTED':
      default:
        return (
          <span className="px-2.5 py-1 text-[11px] font-semibold text-gray-400 border border-gray-600/50 rounded-lg bg-gray-800/50 tracking-wide">
            NOT SUBMITTED
          </span>
        );
    }
  };

  const renderActionButtons = (item) => {
    if (item.submissionsClosed) {
      return (
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <span className="text-xs italic text-rose-400 font-medium">
            Closed
          </span>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-3 text-gray-400">
        <button title="View Assignment" className="hover:text-purple-400 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>

        <button title="Upload Submission" className="hover:text-purple-400 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        </button>

        <button title="Edit Submission" className="hover:text-purple-400 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className="w-full font-sans text-white">

      {/* ========================================== */}
      {/* 1. MOBILE CARD VIEW (No slider/scroll)    */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {assignments.map((item, index) => (
          <div
            key={item.id}
            className={`p-4 rounded-xl border border-gray-800 bg-[#111936] space-y-3 shadow-md ${
              item.isHackathon ? 'border-purple-500/40 bg-purple-950/20' : ''
            }`}
          >
            {/* Card Header: Number + Title + Hackathon Badge */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2.5">
                <span className="text-xs font-bold text-gray-400 bg-gray-800/80 px-2 py-0.5 rounded">
                  #{index + 1}
                </span>
                <h3 className={`text-sm font-semibold leading-snug ${item.isHackathon ? 'text-purple-300' : 'text-white'}`}>
                  {item.title}
                </h3>
              </div>
              {item.isHackathon && (
                <span className="text-[9px] font-bold px-2 py-0.5 text-purple-300 border border-purple-500/40 rounded uppercase bg-purple-500/20 tracking-wider shrink-0">
                  HACKATHON
                </span>
              )}
            </div>

            {/* Card Details: Topics & Due Date */}
            <div className="flex items-center justify-between text-xs pt-1 border-t border-gray-800/60">
              <div className="text-gray-400">
                Topics:{' '}
                {item.topics === 'No topics' ? (
                  <span className="text-gray-500">{item.topics}</span>
                ) : (
                  <span className="text-purple-300 font-medium">{item.topics}</span>
                )}
              </div>
              <div className="text-gray-400">
                Due: <span className="text-gray-200 font-medium">{item.dueDate}</span>
              </div>
            </div>

            {/* Card Footer: Status Badge + Action Buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-800/80">
              <div>{renderStatusBadge(item.status)}</div>
              <div>{renderActionButtons(item)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================== */}
      {/* 2. DESKTOP TABLE VIEW (Medium screens up) */}
      {/* ========================================== */}
      <div className="hidden md:block bg-[#111936] border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-sm text-gray-300 border-collapse">
          <thead>
            <tr className="text-gray-400 border-b border-gray-800 bg-gray-900/40">
              <th className="py-4 px-6 font-semibold w-16">S.No</th>
              <th className="py-4 px-6 font-semibold">Assignment</th>
              <th className="py-4 px-6 font-semibold">Topics</th>
              <th className="py-4 px-6 font-semibold">Due Date</th>
              <th className="py-4 px-6 font-semibold">Status</th>
              <th className="py-4 px-6 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/80">
            {assignments.map((item, index) => (
              <tr
                key={item.id}
                className={`transition-colors duration-150 ${
                  item.isHackathon
                    ? 'bg-purple-950/20 hover:bg-purple-900/30'
                    : 'hover:bg-gray-800/40'
                }`}
              >
                <td className="py-3.5 px-6 font-medium text-gray-400">
                  {index + 1}
                </td>
                <td className="py-3.5 px-6 font-medium">
                  <div className="flex items-center gap-2">
                    <span className={item.isHackathon ? 'text-purple-300 font-semibold' : 'text-white'}>
                      {item.title}
                    </span>
                    {item.isHackathon && (
                      <span className="text-[10px] font-bold px-2 py-0.5 text-purple-300 border border-purple-500/40 rounded uppercase bg-purple-500/20 tracking-wider">
                        HACKATHON
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3.5 px-6">
                  {item.topics === 'No topics' ? (
                    <span className="text-gray-500 text-xs">{item.topics}</span>
                  ) : (
                    <span className="px-2.5 py-1 text-xs font-medium text-purple-300 bg-purple-600/20 rounded-full border border-purple-500/30">
                      {item.topics}
                    </span>
                  )}
                </td>
                <td className={`py-3.5 px-6 ${item.isHackathon ? 'text-purple-300' : 'text-gray-300'}`}>
                  {item.dueDate}
                </td>
                <td className="py-3.5 px-6">
                  {renderStatusBadge(item.status)}
                </td>
                <td className="py-3.5 px-6">
                  {renderActionButtons(item)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}