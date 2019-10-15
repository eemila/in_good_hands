import React, { Component } from "react";

import MainBar from "../LandingPage/MainBar"; 
import Ttl from "../LandingPage/Ttl";
import RegisterForm from "./RegisterForm"; 

class SignIn extends Component {
    render(){
        return (
            <section className="signUp-sec">
                <MainBar />
                <div className="center-ctn"> 
                    <div className="sec-ttl">
                        <Ttl txt="Załóż konto"/>
                    </div>
                    <RegisterForm /> 
                </div>    
            </section>
        )
    }
}
            
    

export default SignIn;