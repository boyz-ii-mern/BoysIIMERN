import React, { Component } from 'react';
import SuperlativeUser from './superlativeUser';
import SuperlativesForm from './addSuperlativeForm';

class Superlatives extends Component {
    render() {
        return(
            <div className="row">
                <div className="superlative-users-container">
                    {/* TODO: add in form with dropdown of users in group and input box to type a new superlative */}
                    {/* <SuperlativesForm /> */}
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