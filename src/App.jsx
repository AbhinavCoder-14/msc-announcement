import React, { useState, useEffect, createContext } from "react";
import {
  User,
  MessageSquare,
  LogOut,
  Send,
  Trash2,
  Calendar,
} from "lucide-react";
import Auth from "./pages/Auth.jsx"
import {auth} from "./config/firebase.jsx"

import Announcement from "./pages/Announcement.jsx";


export const dataContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
    const [newAnnouncement, setNewAnnouncement] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  return (
    

    <dataContext.Provider value={{isLogin,setIsLogin,newAnnouncement,setNewAnnouncement,isLoading,setIsLoading}}>
      <div className="con">
      {isLogin ? (<Announcement/>) : <Auth/>}

      </div>

        


    </dataContext.Provider>
  )
};

export default App;
