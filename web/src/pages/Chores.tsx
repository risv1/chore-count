import { useEffect, useState } from "react";
import Chore from "../components/Chore";
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
    ];

    setChores(tasks);
  }, []);

  const handleNewChore = () => {
    navigate("/chores/new-chore");
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex flex-col">
        <div className="mt-28 p-10 flex gap-3 flex-row">
          {chores.map((chore) => (
            <Chore id={chore.id} name={chore.name} date={chore.date} />
          ))}
          <Outlet />
        </div>
        <button className="bg-green-500 p-2" onClick={handleNewChore}>
          New Chore
        </button>
      </div>
    </div>
  );
};

export default Chores;
