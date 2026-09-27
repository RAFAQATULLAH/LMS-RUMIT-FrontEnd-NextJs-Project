'use client';

export default function AttendanceOverview({ percentage = 61 }) {
  const isWarning = percentage < 75;

  return (
    <div className="w-full font-sans text-white">
      <div className="bg-gray-700 border border-gray-600 rounded-2xl p-5 sm:p-6 shadow-lg">
        
        {/* Card Title */}
        <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
          Attendance Overview
        </h2>

        {/* Message & Percentage Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-200">
            {isWarning
              ? 'Your attendance is below 75%. Please improve.'
              : 'Your attendance is in good standing.'}
          </p>
          <span className="text-xl sm:text-2xl font-bold text-orange-500">
            {percentage}%
          </span>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-orange-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>

      </div>
    </div>
  );
}