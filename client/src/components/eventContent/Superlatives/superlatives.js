import React, { Component } from 'react';
import SuperlativeUser from './superlativeUser';
import SuperlativesForm from './addSuperlativeForm';

class Superlatives extends Component {
    render() {
        return(
            <div className="row">
                <div className="superlatives-users-container">
                    {/* TODO: loop/map over however many users are in a group and create a superlative user for each of them */}
                    <SuperlativeUser />
                    <SuperlativeUser />
                    <SuperlativeUser />
                    <SuperlativeUser />
                    <SuperlativeUser />
                    <SuperlativeUser />
                </div>
            </div>
        )
    }
}

export default Superlatives