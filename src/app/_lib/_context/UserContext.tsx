"use client";
import { SetStateAction, createContext, useContext, useState } from "react";
import { User } from "../_types/types";

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
  });
  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
