import React, { Component } from 'react';

class Aim extends Component {
    render(){
        let { aim } = this.props
        return (
            <div className="aim-item">
                <h3 className="aim-item-txt">{aim}</h3>
            </div>
            
        )
    }
}

export default Aim;