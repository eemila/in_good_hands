import React, { Component } from 'react';

import Ttl from './Ttl';

import signature from '../../assets/assets/Signature.svg';

class About extends Component {
    render(){
        return (
            <article className="about" id="about">
                <div className="about-txt">
                    <div className="aboutTxt-ctn">
                        <Ttl txt="O nas"/>
                        <p className="about-p">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <img className="img-sign" src={signature} alt="signature" title=""></img>
                    </div>
                </div>
            <div className="about-img"></div>
            
        </article>
        )
    }
}



export default About;