import React, { Component } from "react";

function User (props) {

    // console.log("usercard", props)
    // console.log("this is working? for comment user", props)


    
        return (
            <div className="section user-section valign-wrapper">
                {/* update source to database */}
                <img src={props.avatar} alt="" className="circle responsive-img user-image"/>
                <div className="section">
                  
      
                    <h6>{props.name} {props.lastName}</h6>
                    <p>{props.superlative}</p>
                </div>
                <div className="divider"></div>
                
            </div>
            )
}

export default User;