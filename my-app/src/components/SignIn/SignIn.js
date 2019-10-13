import React, { Component } from "react";

import MainBar from "../LandingPage/MainBar"; 
import Ttl from "../LandingPage/Ttl";
import LogForm from "./LogForm"; 

class SignIn extends Component {
    render(){
        return (
            <section className="signIn-sec">
                <MainBar />
                <Ttl txt="Zaloguj się"/>
                <LogForm /> 
            </section>
        )
    }
}
    
            
    

export default SignIn;