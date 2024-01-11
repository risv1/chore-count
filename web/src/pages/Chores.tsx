import { useEffect, useState } from "react";
import Chore from "../components/chores/Chore";
import { Outlet, useNavigate } from "react-router";

type ChoreType = {
  id: number;
  name: string;
  date: string;
};

const Chores = () => {
  const [chores, setChores] = useState<ChoreType[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const tasks = [
      { id: 1, name: "Hello", date: "09-01-2024" },
      { id: 2, name: "Hello There", date: "10-01-2024" },
      { id: 2, name: "Hello There", date: "10-01-2024" },
      { id: 2, name: "Hello There", date: "10-01-2024" },
    ];

    setChores(tasks);
  }, []);

  const handleNewChore = () => {
    navigate("/chores/new-chore");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="p-8 w-96 flex flex-col gap-3">
          <h1 className="text-white text-3xl font-bold mb-3">Chores:</h1>
          <div className="flex flex-col gap-3 overflow-y-scroll max-h-72">
            {chores.map((chore) => (
              <div>
                <Chore key={chore.id} name={chore.name} date={chore.date} />
              </div>
            ))}
          </div>
          <Outlet />
        </div>
      </div>
      <div className="mt-auto bg-indigo-700 w-full h-20 rounded-xl flex justify-center items-center">
        <button
          className="bg-green-500 p-2 w-32 h-14 rounded-xl text-white font-bold text-xl"
          onClick={handleNewChore}
        >
          New Chore
        </button>
      </div>
    </div>
  );
};

export default Chores;
