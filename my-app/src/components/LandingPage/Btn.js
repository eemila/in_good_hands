import React, { Component } from 'react';

class Btn extends Component {
    render(){
        let { btnTxt } = this.props; 

        return <button className="btn-main">{btnTxt}</button>
    }
}
export default Btn;