import React, { Component } from 'react';
import SuperlativeUser from './superlativeUser';
import SuperlativesForm from './addSuperlativeForm';

function Superlatives(props) {
    return (
        <div className="row">
            <div className="superlatives-users-container">
                { props.superlatives  && props.superlatives.map((s, i) => {
                    return (
                        <SuperlativeUser key={i} superlative={s} />
                    )
                })}
            </div>
        </div>
    )
}

export default Superlatives