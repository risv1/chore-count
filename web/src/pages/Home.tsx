import { Outlet } from "react-router";
import DaysGrid from "../components/home/DaysGrid";
import PageNav from "../components/home/PageNav";

const Home = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="mt-20 w-full flex justify-center gap-3 p-3">
        <div className="w-2/5 flex rounded-xl bg-indigo-500">
          <div className="w-full">
            <Outlet />
          </div>
        </div>
        <div className="w-3/5 flex rounded-xl bg-indigo-500">
          <div className="w-1/3 flex items-center rounded-2xl justify-center">
            <PageNav />
          </div>
          <div className="w-2/3 rounded-2xl flex ml-auto items-center justify-center">
            <div className="bg-indigo-700 p-16 mr-5 rounded-2xl">
              <DaysGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
