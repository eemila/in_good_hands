import React, { Component } from "react";

import MainBar from "../LandingPage/MainBar"; 
import Ttl from "../LandingPage/Ttl";
import LogForm from "./LogForm"; 

class SignIn extends Component {
    render(){
        return (
            <section className="signIn-sec">
                <MainBar />
                <div className="center-ctn"> 
                    <div className="sec-ttl">
                        <Ttl txt="Zaloguj się"/>
                    </div>
                    <LogForm /> 
                </div>
                  
            </section>
        )
    }
}
    
            
    

export default SignIn;