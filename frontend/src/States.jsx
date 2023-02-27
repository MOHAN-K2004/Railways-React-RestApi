import React, { useContext, createContext, useState } from "react";
const Context = createContext();
export const States = ({ children }) => {
  const [editTrain, setEditTrain] = useState();
  return (
    <Context.Provider value={{ editTrain, setEditTrain }}>
      {children}
    </Context.Provider>
  );
};

export const useStates = () => useContext(Context);
