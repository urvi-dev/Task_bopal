import React, { createContext, useContext, useState } from "react";

// Create a context to hold user data
const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe", // Example user name
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
