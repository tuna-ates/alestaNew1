

import Announcements from "./Announcements ";
import Contact from "./Contact";


import External from "./External";
import Footer from "./Footer";
import Header from "./Header";
import NewNavbar from "./NewNavBar";

import Resource from "./Resource";
import Teammate from "./Teammate";


const HomePage=()=>{
    return(
        <>
         <NewNavbar/>
         <Announcements/>
         <Resource/>
         <Teammate/>
         <Contact/>
     
         
        </>
       
    )
}
export default HomePage;