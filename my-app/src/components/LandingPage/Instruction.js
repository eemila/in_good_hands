import React from 'react';

import Ttl from './Ttl';
import Step from './Step';
import Btn from './Btn'; 



import icon1 from '../../assets/assets/Icon-1.svg';
import icon2 from '../../assets/assets/Icon-2.svg';
import icon3 from '../../assets/assets/Icon-3.svg';
import icon4 from '../../assets/assets/Icon-4.svg';

const Instruction = () => (
    <section className="4steps" id="instruction">
        <div className="steps-ttl">
            <Ttl txt="Wystarczą 4 proste kroki"/>
        </div>
        <section className="steps-highlighted">

                <div className="steps-ctn">
                    <article className="col">
                        <Step src={icon1} todo="Wybierz rzeczy" details="ubrania, zabawki, sprzęt i inne"/>
                    </article>
                    <article className="col">
                        <Step src={icon2} todo="Spakuj je" details="skorzystaj z worków na śmieci"/>
                    </article>
                    <article className="col">
                        <Step src={icon3} todo="Zdecyduj komu chcesz pomóc" details="wybierz zaufane miejsce"/>
                    </article>
                    <article className="col">
                        <Step src={icon4} todo="Zamów kuriera" details="kurier przyjedzie w dogodnym terminie"/>
                    </article>
                </div>
             
        </section>
        <div className="centred-btn">
            <Btn btnTxt="Oddaj rzeczy"/>
        </div> 
    </section>
)

export default Instruction;