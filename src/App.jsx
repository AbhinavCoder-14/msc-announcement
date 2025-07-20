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
import {onAuthStateChanged} from "firebase/auth"

import Announcement from "./pages/Announcement.jsx";


export const dataContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
    const [newAnnouncement, setNewAnnouncement] = useState('');
  const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setIsLogin(true);
      } else {
        // User is signed out.
        setIsLogin(false);
      }
      setIsLoading(false); // <-- Stop loading once the check is complete
    });

        return () => unsubscribe();
  }, []); // <-- The empty array means this effect runs only once on mount

  if (isLoading) {
    return <div>Loading...</div>; // Or a more styled loading component
  }



  return (
    isLoading ? (<p>Loading...</p>) : 


    <dataContext.Provider value={{isLogin,setIsLogin,newAnnouncement,setNewAnnouncement,isLoading,setIsLoading}}>
      <div className="con">
      {isLogin ? (<Announcement/>) : <Auth/>}

      </div>

        


    </dataContext.Provider>




    
    


  )
};

export default App;
