import { supabase } from "../lib/supabase";

const Login = () => {
  const handleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        console.error("Error signing in with Google:", error.message);
      } else {
        console.log("Successfully signed in with Google");
      }
    } catch (error) {
      console.error("Error handling sign-in:", error);
    }
  };

  return (
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
  );
};

export default Login;
