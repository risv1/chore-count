import { Outlet } from "react-router";
import DaysGrid from "../components/home/DaysGrid";
import PageNav from "../components/home/PageNav";

const Home = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="mt-20 w-full flex justify-center gap-3 p-3">
        <div className="w-2/5 flex rounded-xl bg-indigo-500">
          <Outlet />
        </div>
        <div className="w-3/5 flex rounded-xl bg-indigo-500">
          <div className="w-1/3 flex items-center rounded-2xl justify-center">
            <PageNav />
          </div>
          <div className="w-2/3 rounded-2xl bg-indigo-700 flex ml-auto items-center justify-center">
            <DaysGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;