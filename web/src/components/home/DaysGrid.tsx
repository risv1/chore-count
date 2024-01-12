import { Link } from "react-router-dom";
import { useSession } from "../../SessionContext";

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

  const { user } = useSession();

  console.log(user)

  return (
    <div className="w-full h-full">
      {user == undefined ? (
        <div className="flex justify-center items-center flex-col gap-10">
          <div className="text-3xl text-white font-bold">
            Sign Up to View Chores...
          </div>
          <Link to="/login" className="w-2/3 text-2xl text-white flex justify-center items-center rounded-2xl shadow-md border-2 border-sky-400 shadow-sky-400 h-12 font-bold bg-sky-500">Login</Link>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <h1 className="font-bold text-white text-4xl">See Chores</h1>
          <div className="gap-7 grid grid-cols-3">
            {days.map((day) => (
              <Link
                to={`/chores/${day.day.toLowerCase()}`}
                key={day.id}
                className="w-32 cursor-pointer text-white rounded-xl border-4 border-sky-300 shadow-lg shadow-blue-400 font-bold flex justify-center items-center h-16 bg-sky-500"
              >
                {day.day}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DaysGrid;
