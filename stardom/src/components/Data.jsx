import React, { Component } from 'react';
import Prostar from './Prostar';



class Data extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.data
        }
    
    render() {
        return (
            <div>
                <Prostar data = {this.state}/>
            </div>
        );
    }
}

export default Data;