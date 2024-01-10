import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../lib/supabase";
import { Session } from "@supabase/supabase-js";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [session, setSession] = useState<null | Session>(null);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const { data: sessionData, error } = await supabase.auth.getSession();

                if (error) {
                    setSession(null);
                } else {
                    setSession(sessionData?.session || null);
                }
            } catch (error) {
                console.error(error);
                setSession(null);
            }
        };

        checkSession();
    }, []);

    const handleRoute = (route: string) => {
        navigate(route);
    };

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        setSession(null);
        navigate("/login")
    };

    return (
        <nav className="fixed h-20 w-screen flex flex-row items-center bg-indigo-700">
            <Link to={"/home"} className="text-white font-bold text-2xl p-10">Chore<span className="text-sky-400">Count</span></Link>
            {session === null ? (
                <button className="ml-auto mr-10 p-2 rounded-2xl text-white text-base font-bold bg-green-500" onClick={() => handleRoute("/login")}>Sign in</button>
            ) : (
                <button className="ml-auto mr-10 p-2 rounded-2xl text-white text-base font-bold bg-red-500" onClick={handleLogout}>Sign out</button>
            )}
        </nav>
    );
};

export default Navbar;