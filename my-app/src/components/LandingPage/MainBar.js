import React from 'react';
import {Link} from 'react-router-dom';

const MainBar = () => (
    <section>
        <ul className="nav goin-option">
            <li><Link to=''>Zaloguj</Link></li>
            <li><Link to=''>Załóż konto</Link></li>
        </ul>

        <ul className="nav main-nav">
            <li><Link to='/'>Start</Link></li>
            <li><Link to='/instruction'>O co chodzi</Link></li>
            <li><Link to='/about'>O nas</Link></li>
            <li><Link to='/help'>Fundacje i organizacje</Link></li>
            <li><Link to='/contact'>Kontakt</Link></li>
        </ul>
    </section>
)

export default MainBar;
