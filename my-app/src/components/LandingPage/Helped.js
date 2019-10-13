import React from 'react';

import Ttl from './Ttl';
import Aim from './Aim'; 
import Organization from './Organization';


const Helped = () => (
    <section id="help">
        <div className="helped-ttl" >
            <Ttl txt="Komu pomagamy"/>
        </div>
        <div className="aim-items-ctn">
            <Aim aim="Fundacjom"/>
            <Aim aim="Organizacjom pozarządowym"/>
            <Aim aim="Zbiórkom lokalnym"/>
        </div>

        <p className="aim-txt" >W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
             Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

        <div class="orgs-ctn">
            <span>
                <Organization 
                orgName='Fundacja "Dbam o Zdrowie"'  
                orgMission="Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej." 
                orgNeeded="ubrania, jedzenie, sprzęt AGD, meble, zabawki"/>
            </span>   
            <span> 
            <Organization 
                orgName='Fundacja "Dla Dzieci"' 
                orgMission="Cel i misja: Pomoc dzieciom z ubogich rodzin." 
                orgNeeded="ubrania, meble, zabawki"/>
            </span>
            <span>   
            <Organization 
                orgName='Fundacja "Bez domu"' 
                orgMission="Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania." 
                orgNeeded="ubrania, jedzenie, ciepłe koce"/>
            </span>     
        </div>     
    </section>
)

export default Helped;