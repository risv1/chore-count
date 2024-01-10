import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router";
import { Session } from "@supabase/supabase-js"; 

const Description = () => {
    
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);

  const getUser = async () => {
    const { data: userSession, error } = await supabase.auth.getSession();
    if (error) {
      console.log("User not logged in");
    } else {
      setSession(userSession.session || null);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleRoute = (route: string) => {
    navigate(route);
  };

  return (
    <div className="w-full h-full flex">
      <div className="p-10 flex justify-center items-center flex-col gap-10">
        <p className="text-white text-3xl font-bold">
          Effortlessly manage your daily tasks with our user-friendly task
          manager. Stay organized, set priorities, and boost productivity with a
          straightforward approach to task tracking.
        </p>
        {!session ? (
          <div
            onClick={() => handleRoute("/login")}
            className="text-base shadow-md shadow-sky-400 border-2 border-sky-400 flex justify-center items-center rounded-xl font-bold w-36 h-16 bg-sky-500 text-white cursor-pointer"
          >
            Click to sign in
          </div>
        ) : (
          <div
            onClick={() => handleRoute("/chores")}
            className="text-base shadow-md shadow-sky-400 border-2 border-sky-400 flex justify-center items-center rounded-xl font-bold w-36 h-16 bg-sky-500 text-white cursor-pointer"
          >
            View Chores
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;