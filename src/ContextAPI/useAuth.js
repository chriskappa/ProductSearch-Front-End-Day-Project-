import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);
// const history = useNavigate();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  //   Fake Get User Function to User Context API
  const getUser = () => {
    setTimeout(() => {
      setLoading(false);
      return {
        name: "ContextAPIUser",
        email: "testEmail@yahoo.com",
        registeredAt: "2022/08/02",
      };
    }, 1000);
  };
  useEffect(() => {
    const user = getUser();
    setUser(user);
  }, []);

  const values = {
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
