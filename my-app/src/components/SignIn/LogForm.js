import React, { Component } from "react";
 

class LogForm extends Component {
    render(){
        return (
            <>
                <form className="login-form" action="/handling-login-form" method="post">
                    <div className="login-item-ctn">
                        <label for="name">Email</label>
                            <input type="email" id="mail" name="user_mail" />
                    </div>
                    <div>
                        <label for="mail">Hasło</label>
                            <input type="email" id="mail" name="user_mail"/>
                    </div>
                </form>
                <div className="btns-ctn">
                    <button className="signup-btn sec-btn">Załóż konto</button>
                    <button className="login-btn sec-btn">Zaloguj</button>
                </div>
            </>
        )
    }
}
    
            
    

export default LogForm;