import React, { Component } from 'react';

import decor from "../../assets/assets/Decoration.svg";

class Ttl extends Component {
    render(){
        let { txt, txt2 } = this.props; 

        return (
            <>
            <p style={{marginBottom: "0"}}>{txt}</p>
            <p style={{marginTop: "0"}}>{txt2}</p>
            <img src={decor} />
            </>
        )
        }
}

export default Ttl;