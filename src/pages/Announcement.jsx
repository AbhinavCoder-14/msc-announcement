import React,{createContext} from "react";
import Header from "../components/Header";
import AnnouncementForm from "../components/AnnouncementForm";
import { auth } from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth"
import AnnouncementList from "../components/AnnouncementList";

export const AnnouncementContext = createContext();


const Announcement = ()=>{
    const [user] = useAuthState(auth)

    return(<>
        <AnnouncementContext.Provider value= {{user}}>
            
            <Header/>
            <AnnouncementForm/>
            <AnnouncementList/>        
        </AnnouncementContext.Provider>

    </>)


}




export default Announcement;