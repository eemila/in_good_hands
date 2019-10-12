import React, { Component } from 'react';

class DataNo extends Component {
    render(){
        let { number, done, lorem} = this.props
        return (
            <article className="no-art">
                <h3>{number}</h3>
                <h5>{done}</h5>
                <p>{lorem}</p>
            </article>
        )
        
    }
}
   

export default DataNo;