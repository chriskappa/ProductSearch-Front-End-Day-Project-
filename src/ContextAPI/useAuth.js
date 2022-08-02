import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// Creating The Context
const AuthContext = createContext();

// useAuthContext to speed up the process of retrieving information from global state
export const useAuthContext = () => useContext(AuthContext);
// const history = useNavigate();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  //   Fake Get User Function to User Context API
  const getUser = () => {
    return {
      name: "ContextAPIUser",
      email: "testEmail@yahoo.com",
      registeredAt: "2022/08/02",
    };
  };
  useEffect(() => {
    setUser(getUser());
  }, []);

  //   Pass object of values to use on child components (Globally)
  const values = {
    user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
