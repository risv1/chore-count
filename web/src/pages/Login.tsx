import { useEffect } from "react";
import { auth, provider } from "../lib/config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { useSession } from "../SessionContext";
import Navbar from "../components/nav/Navbar";

const Login = () => {
  const { session, updateSession } = useSession();
  const navigate = useNavigate();

  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      updateSession(data.user.email!);
      localStorage.setItem("email", data.user.email!);
    });
  };

  useEffect(() => {
    updateSession(localStorage.getItem("email")!);
  }, []);

  return (
    <>
      {session ? (
        navigate("/profile")
      ) : (
        <>
          <Navbar />
          <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex justify-center mt-10 rounded-2xl bg-indigo-700 border-4 border-sky-600 shadow-2xl shadow-sky-500 w-[50%] h-80">
              <div className="flex flex-col justify-start items-center">
                <h1 className="mt-10 text-white text-4xl font-bold">Login</h1>
                <div
                  onClick={handleSignIn}
                  className="mt-20  cursor-pointer bg-sky-600 p-5 w-[150%] flex justify-center rounded-3xl"
                >
                  <h3 className="text-white font-bold text-xl">
                    Sign in with Google!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
