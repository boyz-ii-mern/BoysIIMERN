import React, { Component } from "react";

function User (props) {
    let usercardVar = usercardVar
    console.log("usercard", props)

    
        return (
            
            <div className="section user-section valign-wrapper">
                {/* update source to database */}
                <img src="../Images/avatar-01.png" alt="" className="circle responsive-img user-image"/>
                <div className="section">
                    {/* update username to database */}
      
                    {/* <h6>{props.member}</h6> */}
                    <h6>{props.member}</h6>
            
                    {/* update superlative to database */}
                    <p>Most Likely to Do Something</p>
                </div>
                <div className="divider"></div>
                
            </div>
            )
}

export default User;