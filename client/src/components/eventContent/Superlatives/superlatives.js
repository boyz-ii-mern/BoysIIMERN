import React, { Component } from 'react';
import SuperlativeUser from './superlativeUser';
import SuperlativesForm from './addSuperlativeForm';

function Superlatives(props) {
    console.log("superlatard props", props)
    return (
        <div className="row">
            <div className="superlatives-users-container">
                { props.superlatives  && props.superlatives.map((s, i) => {
                    return (
                        <SuperlativeUser key={i} superlative={s} 
                        avatard= {s.User.avatar == null || s.User.avatar == "" ? `../Images/avatar-01.png` : `${s.User.avatar}`}

                        // avatard={s.User.avatar}

                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Superlatives