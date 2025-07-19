import React, { useState, useEffect, createContext } from "react";
import {
  User,
  MessageSquare,
  LogOut,
  Send,
  Trash2,
  Calendar,
} from "lucide-react";

export const dataContext = createContext();

const App = () => {
  const [user, setUser] = useState("");

  return (
    

    <dataContext.Provider value={{user,setUser}}>
    <>

    
    </>
    
    </dataContext.Provider>
  )
};

export default App;
