import { useEffect, useState } from "react";
import Chore from "../../components/chores/Chore";
import { Outlet, useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../lib/config";
import { useSession } from "../../SessionContext";

export type ChoreType = {
  id: string;
  name: string;
  date: string;
};

const DayChores = () => {
  const [chores, setChores] = useState<ChoreType[]>([]);
  const { user } = useSession();
  const { day } = useParams();

  const getPosts = async (day: string | undefined) => {
    if (!user || !user.uid) {
      console.log("User not found");
      return;
    }

    let q = query(collection(db, "chores"), where("user_id", "==", user.uid));

    if (day) {
      q = query(q, where("day", "==", day));
    }

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

  useEffect(() => {
    getPosts(day);
  }, [day]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="p-8 w-96 flex flex-col gap-3">
          <div className="flex flex-col gap-3 overflow-y-scroll max-h-72">
            {chores.length === 0 ? (
              <div className="text-2xl text-white font-bold flex justify-center items-center">Loading...</div>
            ) : (
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
    </div>
  );
};

export default DayChores;
