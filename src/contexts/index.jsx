import React, { useState, useContext, createContext } from "react";

const UsernameContent = createContext();

export const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState();

  return (
    <UsernameContent.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContent.Provider>
  );
};

export const useUsername = () => useContext(UsernameContent);
