import React from 'react';

import MainBar from './MainBar';
import Ttl from './Ttl';
import Btn from './Btn';

const Hero = () => (
    <section className="hero">
        <MainBar />
        <section className="slogan">
            <Ttl txt='Zacznik pomagać! Oddaj nichciane rzeczy w zaufane ręce'/>
            <image src="../assets/assets/Decoration.svg "></image> 
            <Btn btnTxt='Oddaj rzeczy'/>
            <Btn btnTxt='Zorganizuj zbiórkę'/>
        </section>
    </section>
)

export default Hero;