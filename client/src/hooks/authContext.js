import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext();


export const AuthContexProvider = ({ children }) => {
 
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try{


   
    const res = await axios.post('http://localhost:3500/auth/login', inputs);
    setCurrentUser(res.data);
    localStorage.setItem("user", JSON.stringify(currentUser));
    
    }catch(err){
      console.log(err);
    }
  };

  const logout = async (inputs) => {
    await axios.post("http://localhost:3500/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    
    localStorage.setItem("user", JSON.stringify(currentUser));
  
    
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};