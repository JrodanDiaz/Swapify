"use client";
import { SetStateAction, createContext, useContext, useState } from "react";

const UserContext = createContext<authorizedUser | undefined>(undefined);
const UserDispatchContext = createContext<
  React.Dispatch<SetStateAction<authorizedUser>> | undefined
>(undefined);

type authorizedUser = {
  token: string;
  username: string;
};

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
  const [user, setUser] = useState<authorizedUser>({
    token: "xyz-123",
    username: "Jordan.0114",
  });
  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
