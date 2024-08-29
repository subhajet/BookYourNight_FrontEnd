import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const initialValue = {
  isAuthModalOpen: false,
  username: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
  accessToken:"",
  name:"",
  SelectedTab: "Login",
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const [
    {
      isAuthModalOpen,
      username,
      email,
      password,
      number,
      accessToken,
      name,
      SelectedTab,
      confirmPassword,
    },
    authDispatch,
  ] = useReducer(authReducer, initialValue);
  return (
    <AuthContext.Provider
      value={{
        isAuthModalOpen,
        username,
        email,
        password,
        number,
        accessToken,
        name, 
        SelectedTab,
        confirmPassword,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
