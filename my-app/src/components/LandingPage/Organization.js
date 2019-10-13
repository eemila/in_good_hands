import React, { Component } from 'react';

class Organization extends Component {
    render(){
        let { orgName, orgMission, orgNeeded } = this.props
        return (
            <article className="org-item">
                <div className="org-info">
                    <h3>{orgName}</h3>
                    <p className="org-item-mission">{orgMission}</p>
                </div>
              <div className="org-add">
                <p className="org-item-needed">{orgNeeded}</p>
              </div>
                
            </article>
        )
    }
}

export default Organization;