import React, { Component } from 'react';

class Ttl extends Component {
    render(){
        let { txt, txt2 } = this.props; 

        return (
            <>
            <p style={{marginBottom: "0"}}>{txt}</p>
            <p style={{marginTop: "0"}}>{txt2}</p>
            </>
        )
        }
}

export default Ttl;