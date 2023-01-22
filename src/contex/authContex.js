import React, { useContext, useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginContexProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cpfNumber, setCpfNumber] = useState("");
  const [sessionToken, setSesionToken] = useState("");
  const [pin, setPin] = useState("");

  const handleCpf = (value) => {
    setCpfNumber(value);
  };

  const handleUserName = (value) => {
    setName(value);
  };
  

  const handlePin = (value) => {
    setPin(value);
  };
  const handleSessionToken = (value) => {
    setSesionToken(value);
  };

 
  return (
    <LoginContext.Provider
      value={{
        handleCpf,
        cpfNumber,
        handleSessionToken,
        sessionToken
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
