import React, { Component } from 'react';
import './People.css';

import './lib/loading.css';

class People extends Component {
    constructor(props) {
        super();
    }
    render() {
        if (this.props.loading) {
            return (
                <div className="People">
                    <div className="People-loading ld ld-ring ld-spin-fast"></div>
                </div>
            );
        }
        if(this.props.error) {
            return (
                <div className="People">
                    <div className="People-error">
                        <span className="error">ERROR</span>
                        <span className="message">{this.props.error}</span>
                    </div>
                </div>
            );
        }
        return (
            <div className="People">
                <div className="People-container">
                        {this.props.people.results.map(person =>
                            <div className="People-person">
                                <h1 className="icon">{ person.name.substring(0, 2) }</h1>
                                <h3 className="name">{ person.name }</h3>
                                <div className="stats">
                                    <ul>
                                        <li>Height: { person.height }</li>
                                        <li>Mass: { person.mass }</li>
                                        <li>Gender: { person.gender }</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

export default People;
