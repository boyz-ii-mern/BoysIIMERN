import React, { Component } from 'react';
import Superlatives from '../Superlatives/superlatives';
import SuperlativesForm from '../Superlatives/addSuperlativeForm';

class SuperlativeTab extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <SuperlativesForm />
                <Superlatives />
            </div>
        );
    }

}
export default SuperlativeTab;