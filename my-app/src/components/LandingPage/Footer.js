import React, { Component } from 'react';

import fbIcon from "../../assets/assets/Facebook.svg";
import instaIcon from "../../assets/assets/Instagram.svg";

class Footer extends Component {
    render(){
        

        return (
            <section className="footer-sec">
                <p>Copyright by CodersLab</p>
                <div>
                    <img src={fbIcon}/>
                    <img src={instaIcon}/>
                </div>
            </section>
          
        )
    }
}
export default Footer;