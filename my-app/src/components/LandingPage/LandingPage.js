import React, { Component } from 'react';

import Hero from './Hero';
import Data from './Data';
import Instruction from './Instruction'; 
import About from './About';
import Helped from './Helped';
import ContactUs from './ContactUs';


//fullstory
//hotjar

class LandingPage extends Component {
    render(){
        return (
            <>
                <Hero />
                <Data />
                <Instruction />
                <About />
                <Helped />
                <ContactUs />
            </>
        )
    }
}
    
            
            
    
        
   


export default LandingPage;
