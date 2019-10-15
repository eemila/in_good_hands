import React from 'react';
import { Link } from "react-router-dom";

import MainBar from './MainBar';
import Ttl from './Ttl';
import Btn from './Btn';


const Hero = () => (
    <div className="ctn-main ctn-left">
        <section className="hero">
            <MainBar />
            <section className="slogan">
                <div className="slogan-ttl">
                    <Ttl txt='Zacznij pomagać!' txt2= 'Oddaj niechciane rzeczy w zaufane ręce'/>
                </div>
                <div className="btn-ctn">
                <Link to='/logowanie'>
                    <Btn btnTxt='Oddaj rzeczy'/>
                </Link>
                <Link to='/logowanie'>
                    <Btn btnTxt='Zorganizuj zbiórkę'/>
                </Link>
                </div> 
                
            </section>
        </section>
    </div>

)

export default Hero;