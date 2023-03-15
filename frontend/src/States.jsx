import React, { useContext, createContext, useState } from "react";
const Context = createContext();
export const States = ({ children }) => {
  const [editTrain, setEditTrain] = useState();
  const [editPassenger, setEditPassenger] = useState();
  const [editPass, setEditPass] = useState();
  
  return (
    <Context.Provider
      value={{ editTrain, setEditTrain, editPassenger, setEditPassenger,editPass, setEditPass }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStates = () => useContext(Context);
