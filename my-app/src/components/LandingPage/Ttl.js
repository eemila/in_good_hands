import React, { Component } from 'react';

class Ttl extends Component {
    render(){
        let { txt } = this.props; 

        return <p>{txt}</p>
    }
}

export default Ttl;