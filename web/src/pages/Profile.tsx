import { useNavigate } from "react-router";
import { useSession } from "../SessionContext";
import Navbar from "../components/nav/Navbar";

const Profile = () => {
  const { session, user } = useSession();
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {!session ? (
        navigate("/login")
      ) : (
        <>
          <Navbar />
          <div className="w-screen h-screen flex justify-center items-center">
            <div className="mt-16 flex justify-center rounded-2xl bg-indigo-700 border-4 border-sky-600 shadow-2xl shadow-sky-500 w-[50%]">
              <div className="w-full h-full flex flex-col justify-start items-center p-5 gap-4">
                <h1 className="mt-10 text-white text-4xl font-bold">Profile</h1>
                <div className="bg-indigo-500 p-5 h-3/4 w-full rounded-2xl shadow-lg shadow-sky-500 ">
                  {user ? (
                    <div className="flex justify-center flex-row">
                      <div className="flex justify-center mr-auto flex-col">
                        <div className="flex justify-start  flex-col text-white h-full text-2xl font-bold">
                          <h1 className="mb-8">
                            Name:{" "}
                            <span className="ml-5 text-green-400">
                              {user.displayName}
                            </span>
                          </h1>
                          <h1 className="mb-8">
                            Email:{" "}
                            <span className="ml-5 text-green-400">
                              {user.email}
                            </span>
                          </h1>
                        </div>
                        <div className="flex justify-center flex-row gap-2">
                          <button
                            className="bg-red-500 mt-auto w-1/2 h-12 text-white text-2xl shadow-md font-bold hover:shadow-red-400 hover:bg-red-700 rounded-xl duration-150 ease-in"
                            onClick={handleLogout}
                          >
                            Sign Out
                          </button>
                        </div>
                      </div>
                      <div className="ml-auto">
                        {user && (
                          <img
                            src={user.photoURL!}
                            alt="Loading..."
                            style={{ borderRadius: "50%" }}
                            className="shadow-lg shadow-sky-400"
                          />
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className="font-bold text-white text-5xl">Loading...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
