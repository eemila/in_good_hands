import React from 'react';

import MainBar from './MainBar';
import Ttl from './Ttl';
import Btn from './Btn';

import decor from '../../assets/assets/Decoration.svg';

const Hero = () => (
    <div className="ctn-main ctn-left">
        <section className="hero">
            <MainBar />
            <section className="slogan">
                <div className="slogan-ttl">
                    <Ttl txt='Zacznij pomagać!' txt2= 'Oddaj niechciane rzeczy w zaufane ręce'/>
                    <img src={ decor }></img>
                </div>
                <div className="btn-ctn">
                    <Btn btnTxt='Oddaj rzeczy'/>
                    <Btn btnTxt='Zorganizuj zbiórkę'/>
                </div> 
                
            </section>
        </section>
    </div>

)

export default Hero;