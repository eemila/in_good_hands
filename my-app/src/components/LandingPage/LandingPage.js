import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Hero from './Hero';
import Data from './Data';
import Instruction from './Instruction'; 
import About from './About';
import Helped from './Helped';
import ContactUs from './ContactUs';
import NotFound from './NotFound'; 


const LandingPage = () => (
    <HashRouter>
        
        <Switch>
            
            <Route exact path='/' component={Hero} />
            <Route exact path='/numbers' component={Data} />
            <Route exact path='/instruction' component={Instruction} />
            <Route exact path='/about' component={About} />
            <Route exact path='/help' component={Helped} />
            <Route exact path='/contact' component={ContactUs} />
            <Route component={NotFound} />
    
        </Switch>
        
    </HashRouter>
   
)

export default LandingPage;
