import React, { Component } from "react";

import MainBar from "../LandingPage/MainBar"; 
import Ttl from "../LandingPage/Ttl";
import RegisterForm from "./RegisterForm"; 

class SignIn extends Component {
    render(){
        return (
            <section className="signUp-sec">
                <MainBar />
                <Ttl txt="Załóż konto"/>
                <RegisterForm /> 
            </section>
        )
    }
}
    
            
    

export default SignIn;