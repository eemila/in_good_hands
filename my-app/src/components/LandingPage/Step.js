import React, {Component} from 'react';



class Step extends Component {
    render(){
        let {src, todo, details } = this.props
        return (
            <article className="step-decsr">
                <img src={src} alt="" title=""></img>
                <h6>{todo}</h6>
                <p>{details}</p>
            </article>
        )
    }
}
   

export default Step;