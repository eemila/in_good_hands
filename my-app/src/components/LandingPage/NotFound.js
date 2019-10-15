import React from 'react';
import { Link } from "react-router-dom"; 

const NotFound = () => (
    <div className="notFound">
        <h1>404</h1>
        <p>Seems you got lost in the middle of all these stuff... </p>
        <Link to="/">
            <button className="backhome-btn">Back to home page</button>
        </Link>    
    </div>
)

export default NotFound;