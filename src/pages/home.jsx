import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import Carasol from "../components/Carasol";
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";
function home(){
    return(
        <div className='home'>
        <div className="container">
            <HomeNavbar></HomeNavbar>
             <Carasol></Carasol>
             <HomeBody></HomeBody>
             {/* <Footer></Footer> */}
        </div>  
    </div>
    )
}


export default home;