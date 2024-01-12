import { useEffect, useState } from "react";
import Chore from "../components/chores/Chore";
import { Outlet, useLocation, useNavigate } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/config";
import { useSession } from "../SessionContext";
import { ChoreType } from "../components/chores/DayChores";

const Chores = () => {
  const [chores, setChores] = useState<ChoreType[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { session, user } = useSession();
  const location = useLocation();

  const handleNewChore = () => {
    navigate("/chores/new-chore");
  };

  const getPosts = async () => {
    if (!user || !user.uid) {
      console.log("User not found");
      return;
    }

    let q = query(collection(db, "chores"), where("user_id", "==", user.uid));

    try {
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
    } catch (error) {
      console.error("Error fetching chores:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!session) {
      navigate("/login");
    } else {
      getPosts();
    }
  }, [session]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="p-8 w-96 flex flex-col gap-3">
          <h1 className="text-white text-3xl font-bold mb-3">Chores:</h1>
          <div className="flex flex-col gap-3 overflow-y-scroll max-h-72">
            {loading ? (
              <div className="text-white text-xl">Loading...</div>
            ) : (
              location.pathname === "/chores" &&
              chores.map((chore) => (
                <div key={chore.id}>
                  <Chore name={chore.name} date={chore.date} />
                </div>
              ))
            )}
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
