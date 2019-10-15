import React from 'react';
import { NavLink, Link as RouterLink } from "react-router-dom"; 
import { Link } from 'react-scroll';

const options = {
    activeClass: "active",
    spy: true,
    smooth: true,
    offset: -50,
    duration: 500
}

const MainBar = () => {

   return (
    <section>
        <ul className="nav-goin-option">
            <li><RouterLink to='/logowanie'>Zaloguj</RouterLink></li>
            <li><RouterLink to='/rejestracja'>Załóż konto</RouterLink></li>
        </ul>
        
        <ul className="nav-main">
            <li><NavLink to='/'>Start</NavLink></li>
            <li><Link to='instruction' {...options}>O co chodzi</Link></li>
            <li><Link to='about' {...options}>O nas</Link></li>
            <li><Link to='help' {...options}>Fundacje i organizacje</Link></li>
            <li><Link to='contact' {...options}>Kontakt</Link></li>
        </ul>
        
    </section>
)}

export default MainBar;



//notes - hooks: 
// import React, { useState, useEffect } from 'react';

// const [eat, setEat] = useState(false);
// const handleOnClick = () => setEat(!eat);
// useEffect(() => {
//     console.log(eat)
// }, [eat])

// {eat ? 'hahaha': 'yyyy'}

// <button onClick={handleOnClick} >Zjedz mnie</button>