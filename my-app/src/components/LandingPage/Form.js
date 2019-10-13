import React, { Component } from 'react';

// import Btn from './Btn';
import Ttl from './Ttl';

class Form extends Component {
    render(){
        return (
            <section className="contact-form-sec">
                <div className="contact-ctn">
                    <div className="contact-ttl">
                        <Ttl txt="Skontaktuj się z nami"/>
                    </div>
                    <form className="contact-form" action="/handling-contact-form" method="post">
                        <div className="contact-inputs-ctn">
                            <div className="contact-item-ctn">
                                <label for="name">Wpisz swoje imię</label>
                                    <input type="text" id="name" name="user_name" placeholder="Krzysztof" />
                                </div>
                            <div>
                                <label for="mail">Wpisz swój email</label>
                                    <input type="email" id="mail" name="user_mail" placeholder="abc@xyz.com"/>
                            </div>
                        </div>
                    
                        <div className="contact-txtarea">
                            <label for="msg">Wpisz swoją wiadomość</label>
                                <textarea id="msg" name="user_message" placeholder="Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                        </div>
                    </form>
                    <div className="contact-btn-ctn">
                        <button className="contact-btn">Wyślij</button>
                        {/* <Btn btnTxt="Wyślij"/> */}
                    </div>
        </div>
    </section>  
        )
    }
}
    


export default Form;