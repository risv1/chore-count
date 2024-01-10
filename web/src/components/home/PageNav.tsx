import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../lib/supabase";

const PageNav = () => {
  const navigate = useNavigate();

  const handleRoute = (route: string) => {
    navigate(route);
  };

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

  return (
    <div className="w-full h-full rounded-xl flex">
      <nav className="flex flex-col gap-7 w-full rounded-xl justify-center items-center">
        <div
          onClick={() => handleRoute("/home")}
          className="bg-sky-500 w-2/3 text-white font-bold flex justify-center items-center cursor-pointer text-3xl h-24 rounded-2xl shadow-lg shadow-sky-400 border-4 border-sky-400"
        >
          Home
        </div>
        <div
          onClick={() => handleRoute("/chores")}
          className="bg-sky-500 w-2/3 text-white font-bold flex justify-center items-center cursor-pointer text-3xl h-24 rounded-2xl shadow-lg shadow-sky-400 border-4 border-sky-400"
        >
          All Chores
        </div>
        {!session ? (
          <div
            onClick={() => handleRoute("/login")}
            className="bg-sky-500 w-2/3 text-white font-bold flex justify-center items-center cursor-pointer text-3xl h-24 rounded-2xl shadow-lg shadow-sky-400 border-4 border-sky-400"
          >
            Login
          </div>
        ) : (
          <div
            onClick={() => handleRoute("/login")}
            className="bg-sky-500 w-2/3 text-white font-bold flex justify-center items-center cursor-pointer text-3xl h-24 rounded-2xl shadow-lg shadow-sky-400 border-4 border-sky-400"
          >
            Profile
          </div>
        )}
      </nav>
    </div>
  );
};

export default PageNav;
