import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSession } from "../../SessionContext";

const PageNav = () => {
  const navigate = useNavigate();

  const handleRoute = (route: string) => {
    navigate(route);
  };

  const { session } = useSession();

  return (
    <div className="w-full h-full rounded-xl flex">
      <nav className="flex flex-col gap-7 w-full rounded-xl justify-center items-center">
        <h1 className="text-white text-3xl font-bold">Go to...</h1>
        <div
          onClick={() => handleRoute("/")}
          className="bg-sky-500 h-24 w-1/2 text-white font-bold flex justify-center items-center cursor-pointer text-2xl rounded-2xl shadow-lg shadow-sky-400 border-4 border-sky-400"
        >
          Home
        </div>
        <div
          onClick={() => handleRoute("/chores")}
          className="bg-sky-500 h-24 w-1/2 text-white font-bold flex justify-center items-center cursor-pointer text-2xl rounded-2xl shadow-lg shadow-sky-400 border-4 border-sky-400"
        >
          All Chores
        </div>
        {!session ? (
          <div
            onClick={() => handleRoute("/login")}
            className="bg-sky-500 h-24 w-1/2 text-white font-bold flex justify-center items-center cursor-pointer text-2xl rounded-2xl shadow-lg shadow-sky-400 border-4 border-sky-400"
          >
            Login
          </div>
        ) : (
          <div
            onClick={() => handleRoute("/profile")}
            className="bg-sky-500 h-24 w-1/2 text-white font-bold flex justify-center items-center cursor-pointer text-2xl rounded-2xl shadow-lg shadow-sky-400 border-4 border-sky-400"
          >
            Profile
          </div>
        )}
      </nav>
    </div>
  );
};

export default PageNav;
