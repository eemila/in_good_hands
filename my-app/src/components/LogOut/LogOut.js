import React, { Component } from "react";

import MainBar from "../LandingPage/MainBar"; 
import Ttl from "../LandingPage/Ttl";
import Btn from "../LandingPage/Btn"; 


class LogOut extends Component {
    render(){
        return (
            <section className="LogOut-sec">
                <MainBar />
                <Ttl txt="Zaloguj się"/>
                <Btn btnTxt="Strona Główna"/>
            </section>
        )
    }
}
    
            
export default LogOut;