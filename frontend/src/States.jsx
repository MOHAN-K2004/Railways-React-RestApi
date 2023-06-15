import React, { useContext, createContext, useState } from "react";
const Context = createContext();
export const States = ({ children }) => {
  const [editTrain, setEditTrain] = useState();
  const [editPassenger, setEditPassenger] = useState();
  const [editPass, setEditPass] = useState();
  const [price, setPrice] = useState(0);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  console.log(user);
  return (
    <Context.Provider
      value={{
        editTrain,
        setEditTrain,
        user,
        setUser,
        editPassenger,
        setEditPassenger,
        editPass,
        setEditPass,
        price,
        setPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStates = () => useContext(Context);
