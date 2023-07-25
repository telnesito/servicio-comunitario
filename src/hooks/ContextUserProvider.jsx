import React from "react";
import { createContext, useState } from "react";

const UserContext = createContext();
const ContextUserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export { ContextUserProvider, UserContext };
