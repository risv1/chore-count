import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSession } from "../../SessionContext";
import MenuItem from "./MenuItem";

const Navbar = () => {
  const navigate = useNavigate();
  const { session } = useSession();

  const handleRoute = (route: string) => {
    navigate(route);
  };

  const handleLogout = async () => {
    localStorage.clear();
    navigate("/login");
  };

  const routes = [
    { route: "/", name: "Home" },
    { route: "/chores", name: "Chores" },
  ];

  return (
    <nav className="fixed h-20 w-screen flex flex-row items-center bg-indigo-700">
      <Link to={"/"} className="text-white font-bold text-2xl p-5 md:p-10">
        Chore<span className="text-sky-400">Count</span>
      </Link>
      <div className="flex flex-row p-5 sm:p-10 gap-1 sm:gap-2">
        {routes.map((route) => (
          <MenuItem onHandleRoute={()=>handleRoute(route.route)} route={route.route} name={route.name} />
        ))}
      </div>
      {!session ? (
        <button
          className="ml-auto mr-10 p-2 rounded-2xl text-white text-base font-bold bg-green-500"
          onClick={() => handleRoute("/login")}
        >
          Sign in
        </button>
      ) : (
        <button
          className="ml-auto mr-10 p-2 rounded-2xl text-white text-base font-bold bg-red-500"
          onClick={handleLogout}
        >
          Sign out
        </button>
      )}
    </nav>
  );
};

export default Navbar;
