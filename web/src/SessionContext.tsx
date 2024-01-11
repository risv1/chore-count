import { User } from "firebase/auth";
import React, { createContext, useContext, useState } from "react";

interface SessionContextProps {
  session: string;
  updateSession: React.Dispatch<React.SetStateAction<string>>;
  user: User | undefined;
  updateUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const SessionContext = createContext<SessionContextProps | null>(null);

export const SessionProvider = ({ children }: {children: JSX.Element}) => {
  const [session, setSession] = useState("");

  const [user, setUser] = useState<User | undefined>()

  const updateUser = (newUser: React.SetStateAction<User | undefined>) => {
    setUser(newUser)
  }

  const updateSession = (newSession: React.SetStateAction<string>) => {
    setSession(newSession);
  };

  return (
    <SessionContext.Provider value={{ session, updateSession, user, updateUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("Incorrect usage");
  }
  return context;
};
