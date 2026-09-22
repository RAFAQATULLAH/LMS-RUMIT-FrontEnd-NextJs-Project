'use client';

export default function QuizzesTable() {
  const quizzes = [
    {
      id: 1,
      title: 'Javascript (Quiz-4)',
      module: 'Modern Front-End Development',
      questions: 40,
      attempts: '1 / 3',
      attemptsColor: 'text-gray-200',
      percentage: '55%',
      status: 'FAILED',
      note: '—',
      action: 'Completed',
      actionDisabled: true,
    },
    {
      id: 2,
      title: 'Javascript (Quiz-2)',
      module: 'Modern Front-End Development',
      questions: 40,
      attempts: '1 / 3',
      attemptsColor: 'text-gray-200',
      percentage: '75%',
      status: 'PASSED',
      note: '—',
      action: 'Completed',
      actionDisabled: true,
    },
    {
      id: 3,
      title: 'Javascript (Quiz-1)',
      module: 'Modern Front-End Development',
      questions: 40,
      attempts: '2 / 3',
      attemptsColor: 'text-red-400 font-semibold',
      percentage: '85%',
      status: 'PASSED',
      note: '—',
      action: 'Completed',
      actionDisabled: true,
    },
    {
      id: 4,
      title: 'CSS Quiz',
      module: 'Front-End Development',
      questions: 40,
      attempts: '1 / 3',
      attemptsColor: 'text-gray-200',
      percentage: '55%',
      status: 'FAILED',
      note: '—',
      action: 'Completed',
      actionDisabled: true,
    },
    {
      id: 5,
      title: 'HTML Quiz',
      module: 'Web Designing',
      questions: 40,
      attempts: '3 / 3',
      attemptsColor: 'text-red-400 font-semibold',
      percentage: '0%',
      status: 'PENDING',
      note: 'No attempts remaining',
      action: 'Start',
      actionDisabled: false,
    },
  ];

  // Helper function to render status badges
  const renderStatusBadge = (status) => {
    switch (status) {
      case 'PASSED':
        return (
          <span className="px-2.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/50 rounded-lg bg-emerald-500/10 tracking-wide">
            PASSED
          </span>
        );
      case 'FAILED':
        return (
          <span className="px-2.5 py-1 text-xs font-semibold text-red-400 border border-red-500/50 rounded-lg bg-red-500/10 tracking-wide">
            FAILED
          </span>
        );
      case 'PENDING':
      default:
        return (
          <span className="px-2.5 py-1 text-xs font-semibold text-amber-400 border border-amber-500/50 rounded-lg bg-amber-500/10 tracking-wide">
            PENDING
          </span>
        );
    }
  };

  return (
    <div className="w-full max-w-7xl font-sans text-white">
      {/* Main Table Container */}
      <div className="bg-gray-700 border border-gray-600 rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-200 border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="text-gray-300 border-b border-gray-600 text-xs sm:text-sm">
                <th className="py-4 px-6 font-medium">Title</th>
                <th className="py-4 px-6 font-medium">Module</th>
                <th className="py-4 px-6 font-medium">Questions</th>
                <th className="py-4 px-6 font-medium">Attempts</th>
                <th className="py-4 px-6 font-medium">Percentage</th>
                <th className="py-4 px-6 font-medium">Status</th>
                <th className="py-4 px-6 font-medium">Note</th>
                <th className="py-4 px-6 font-medium">Action</th>
              </tr>
            </thead>

            {/* Table Rows */}
            <tbody className="divide-y divide-gray-600">
              {quizzes.map((item) => (
                <tr key={item.id} className="hover:bg-gray-600/50 transition-colors duration-150">
                  {/* Title */}
                  <td className="py-4 px-6 font-medium text-white whitespace-nowrap">
                    {item.title}
                  </td>

                  {/* Module */}
                  <td className="py-4 px-6 text-gray-200 whitespace-nowrap">
                    {item.module}
                  </td>

                  {/* Questions Pill */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="px-3 py-1 text-xs font-semibold text-gray-200 bg-gray-800 border border-gray-600 rounded-lg">
                      {item.questions}
                    </span>
                  </td>

                  {/* Attempts Pill */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-semibold bg-gray-800 border border-gray-600 rounded-lg ${item.attemptsColor}`}>
                      {item.attempts}
                    </span>
                  </td>

                  {/* Percentage */}
                  <td className="py-4 px-6 font-medium text-white whitespace-nowrap">
                    {item.percentage}
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    {renderStatusBadge(item.status)}
                  </td>

                  {/* Note */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    {item.note === 'No attempts remaining' ? (
                      <span className="text-xs text-red-400 font-medium">
                        {item.note}
                      </span>
                    ) : (
                      <span className="text-gray-400">{item.note}</span>
                    )}
                  </td>

                  {/* Action Button */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    <button
                      disabled={item.actionDisabled}
                      className={`px-4 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                        item.actionDisabled
                          ? 'bg-gray-800/60 text-gray-400 border-gray-600 cursor-not-allowed'
                          : 'bg-gray-800 hover:bg-gray-600 text-white border-gray-600 cursor-pointer active:scale-95'
                      }`}
                    >
                      {item.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center text-xs text-gray-300 mt-6">
        Contact your instructor if you have any issues accessing your quizzes.
      </p>
    </div>
  );
}