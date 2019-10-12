import React from 'react';

const MainBar = () => (
    <section>
        <ul className="nav-goin-option">
            <li><a href=''>Zaloguj</a></li>
            <li><a href=''>Załóż konto</a></li>
        </ul>

        <ul className="nav-main">
            <li><a href='/'>Start</a></li>
            <li><a href='/instruction'>O co chodzi</a></li>
            <li><a href='/about'>O nas</a></li>
            <li><a href='/help'>Fundacje i organizacje</a></li>
            <li><a href='/contact'>Kontakt</a></li>
        </ul>
    </section>
)

export default MainBar;
