"use client";
import { SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { User } from "../_types/types";
import getUserFromCookie from "@/app/_actions/getUserFromCookieAction";

const UserContext = createContext<User | undefined>(undefined);
const UserDispatchContext = createContext<
  React.Dispatch<SetStateAction<User>> | undefined
>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const useUserDispatchContext = () => {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useUserDispatchContext must be used within a UserProvider"
    );
  }
  return context;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({
    id: "-1",
    email: "",
    username: "",
    location: "",
    password: "",
    pfp: ""
  });

    useEffect(() => {
      const getUser = async () => {
        console.log(`useEffect user before: ${user?.id}`);
        
        const userResponse = await getUserFromCookie();
        if(!userResponse.user) return;
        setUser(userResponse.user)
        console.log(`useEffect user after: ${userResponse.user.id}`);
      }

      if(user && user.id === "-1") {
        getUser();
      }
    }, [user])

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
