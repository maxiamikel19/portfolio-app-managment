import { createContext, useContext, useState } from "react";

const AppContext = createContext({ setUser: () => {} });

export const AppContextProvider = ({ children }) => {
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.getItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };
  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
