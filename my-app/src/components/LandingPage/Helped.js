import React from 'react';

import Ttl from './Ttl';
import Aim from './Aim'; 
import Organization from './Organization';
import Pagination from './Pagination'; 

import decor from '../../assets/assets/Decoration.svg';

const Helped = () => (
    <section>
        <div className="helped-ttl">
            <Ttl txt="Komu pomagamy"/>
            <img src={ decor }></img>
        </div>
        
        <Aim />
        <Aim />
        <Aim />
        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
             Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
        <Organization />
        <Organization />
        <Organization />
        <Pagination />
        
    </section>
)

export default Helped;