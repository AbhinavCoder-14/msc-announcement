import React ,{useContext}from 'react';
// Make sure to import your icon component. 
// For example, from a library like 'lucide-react'.
import { Send } from 'lucide-react'; 
import { auth } from '../config/firbase';
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth';
import { dataContext } from '../App';
import { AnnouncementContext } from '../pages/Announcement';
import "../style.css"


// Pass all the required state and functions as props
const AnnouncementForm = () => {
    const {user} = useContext(AnnouncementContext)
  // If there's no user, don't render the form
    const {newAnnouncement,setNewAnnouncement,isLoading,setIsLoading} = useContext(dataContext)

    const handleSubmitAnnouncement = ()=>{

    }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* New Announcement Form */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <Send className="w-5 h-5 text-blue-500" />
          <span>Share an Announcement</span>
        </h3>
        
        <div className="space-y-4">
          <div className="relative">
            <textarea
              value={newAnnouncement}
              onChange={(e) => setNewAnnouncement(e.target.value)}
              placeholder="What's happening in MSC MSIT today?"
              maxLength={280}
              rows={4}
              className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700"
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-400">
              {newAnnouncement.length}/280
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Posting as <span className="font-semibold text-blue-600">{user.displayName}</span>
            </p>
            <button
              onClick={handleSubmitAnnouncement}
              disabled={!newAnnouncement.trim()}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Post Announcement</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementForm;