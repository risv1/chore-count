const DaysGrid = () => {

  const days = [
    { id: "1", day: "Monday" },
    { id: "2", day: "Tuesday" },
    { id: "3", day: "Wednesday" },
    { id: "4", day: "Thursday" },
    { id: "5", day: "Friday" },
    { id: "6", day: "Saturday" },
    { id: "7", day: "Sunday" },
  ];

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="font-bold text-white text-4xl">See Chores</h1>
      <div className="gap-7 grid grid-cols-3">
        {days.map((day) => (
          <div
            key={day.id}
            className="w-32 cursor-pointer text-white rounded-xl border-4 border-sky-300 shadow-lg shadow-blue-400 font-bold flex justify-center items-center h-16 bg-sky-500"
          >
            {day.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaysGrid;