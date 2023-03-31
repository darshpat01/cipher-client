import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  name: "",
  email: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(!!initialToken ? initialToken : null);

  const initialName = localStorage.getItem("userName");

  const [name, setName] = useState(!!initialName ? initialName : null);

  const initialEmail = localStorage.getItem("userEmail");

  const [email, setEmail] = useState(!!initialEmail ? initialEmail : null);

  const userIsLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
    setName(localStorage.getItem("userName"));
    setEmail(localStorage.getItem("userEmail"));
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
  };

  const contextValue = {
    token: token,
    name: name,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
