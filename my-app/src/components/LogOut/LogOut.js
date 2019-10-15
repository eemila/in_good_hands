import React, { Component } from "react";

import MainBar from "../LandingPage/MainBar"; 
import Ttl from "../LandingPage/Ttl";



class LogOut extends Component {
    render(){
        return (
            <section className="LogOut-sec">
                <MainBar />
                <div className="logout-ctn">
                    <Ttl txt="Wylogowanie nastąpiło pomyślnie!"/>
                    <button className="backhome-btn">Strona Główna</button>
                </div>
              

            </section>
        )
    }
}        


export default LogOut;