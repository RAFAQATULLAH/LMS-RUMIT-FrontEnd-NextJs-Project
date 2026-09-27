export default function Shedule() {
  const activeDays = ['Mon', 'Wed', 'Fri'];

  const weekDays = [
    { day: 'Sun', date: '20' },
    { day: 'Mon', date: '21' },
    { day: 'Tue', date: '22' },
    { day: 'Wed', date: '23' },
    { day: 'Thu', date: '24' },
    { day: 'Fri', date: '25' },
    { day: 'Sat', date: '26' },
  ];

  return (
    <div className="bg-[#1e1e1e] w-full p-5 sm:p-6 rounded-2xl font-sans text-white border border-gray-800 h-full flex flex-col justify-between">
      
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="22" 
          height="22" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-blue-400"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <h2 className="text-lg sm:text-xl font-bold tracking-wide">Class Schedule</h2>
      </div>

      {/* Days Row */}
      <div className="flex justify-between items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0">
        {weekDays.map((item) => {
          const isActive = activeDays.includes(item.day);
          
          return (
            <div
              key={item.day}
              className={`flex flex-col items-center justify-center min-w-[42px] sm:min-w-[50px] h-14 sm:h-16 rounded-xl transition-all ${
                isActive 
                  ? 'bg-[#0465d4] text-white border-transparent font-bold shadow-md' 
                  : 'bg-transparent text-gray-300 border border-gray-700'
              }`}
            >
              <span className="text-xs sm:text-sm font-medium">{item.day}</span>
              <span className="text-xs sm:text-base font-semibold">{item.date}</span>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}