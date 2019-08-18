import React, { Component } from "react";

function User (props) {
    // let usercardVar = usercardVar
    // console.log("usercard", props)

    
        return (
            
            <div className="section user-section valign-wrapper">
                {/* update source to database */}
                <img src={props.avatar} alt="" className="circle responsive-img user-image"/>
                <div className="section">
                    {/* update username to database */}
      
                    <h6>{props.name} {props.lastName}</h6>
                    {/* pass as children to re-use the component! */}
                    {/* <h6>{props.children}</h6> */}
            
                    {/* update superlative to database */}
                    <p>{props.superlative}</p>
                </div>
                <div className="divider"></div>
                
            </div>
            )
}

export default User;