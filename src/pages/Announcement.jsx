import React,{createContext} from "react";
import Header from "../components/Header";
import AnnouncementForm from "../components/AnnouncementForm";
import { auth } from '../config/firbase';
import { useAuthState } from "react-firebase-hooks/auth"

export const AnnouncementContext = createContext();


const Announcement = ()=>{
    const [user] = useAuthState(auth)

    return(<>
        <AnnouncementContext.Provider value= {{user}}>
            
            <Header/>
            <AnnouncementForm/>
        
        </AnnouncementContext.Provider>

    </>)


}




export default Announcement;