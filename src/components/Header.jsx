import React,{useContext,createContext} from 'react';

// Example import from lucide-react, adjust as needed
import { MessageSquare, LogOut, UserCheck } from 'lucide-react';
import { auth } from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth';
import { dataContext } from '../App';
import { AnnouncementContext } from '../pages/Announcement';
import "../style.css"



const Header = () => {
    const {setIsLogin} = useContext(dataContext)
    const {user} = useContext(AnnouncementContext)
  // If there's no user data, you might want to render nothing or a loading state

  const handleLogout = async () =>{
    await signOut(auth)
    setIsLogin(false)

  }
  

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">MSC MSIT Board</h1>
            <p className="text-sm text-gray-500">Stay connected, stay informed</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img
              src={user?.photoURL}
              alt={user.currentUser?.displayName}
              className="w-10 h-10 rounded-full border-2 border-blue-200 shadow-sm"
            />
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-gray-800">Welcome, {user?.displayName}!</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
            title="Sign out"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;