import React, { Component } from "react";
import { Link } from "react-router-dom"; 

class RegisterForm extends Component {
    render(){
        return (
            <>
                <form className="signup-form" action="/handling-signup-form" method="post">
                    <div className="signup-item-ctn">
                        <label for="name">Email</label>
                            <input type="email" id="mail" name="user_mail" />
                    </div>
                    <div>
                        <label for="mail">Hasło</label>
                            <input type="email" id="mail" name="user_mail"/>
                    </div>
                    <div>
                        <label for="mail">Powtórz hasło</label>
                            <input type="email" id="mail" name="user_mail"/>
                    </div>
                </form>
                <div className="btns-ctn">
                    <Link to="/logowanie">
                        <button className="login-btn sec-btn">Zaloguj</button>
                    </Link>
                    <button className="signup-btn sec-btn">Załóż konto</button>
                </div>
            </>
        )
    }
}

    
            
    

export default RegisterForm;