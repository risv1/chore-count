import { useEffect } from "react";
import { useSession } from "./SessionContext";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import { auth } from "./lib/config";

const App = () => {
  const { session, updateUser } = useSession();

  useEffect(() => {
   const checkUser = async() => { 
    if (session) {
      auth.onAuthStateChanged((currentUser) => {
        updateUser(currentUser || undefined);
      });
    }
  }
  checkUser()
  }, [session]);


  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
