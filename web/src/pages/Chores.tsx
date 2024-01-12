import { useEffect, useState } from "react";
import Chore from "../components/chores/Chore";
import { Outlet, useNavigate } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/config";
import { useSession } from "../SessionContext";

type ChoreType = {
  id: string;
  name: string;
  date: string;
};

const Chores = () => {
  const [chores, setChores] = useState<ChoreType[]>([]);
  const navigate = useNavigate();
  const { user } = useSession();
  
  const handleNewChore = () => {
    navigate("/chores/new-chore");
  };

  const getPosts = async () => {

    if (!user || !user.uid) {
      console.log("User not found");
      return;
    }
  
    const q = query(collection(db, "chores"), where("user_id", "==", user.uid));
    const querySnapshot = await getDocs(q);
  
    const newChores: ChoreType[] = [];
  
    querySnapshot.forEach((doc) => {
      newChores.push({
        id: doc.id,
        name: doc.data().name,
        date: doc.data().day,
      });
    });
  
    setChores(newChores);
  };
  

  useEffect(()=>{
    getPosts()
  }, [])
  

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
