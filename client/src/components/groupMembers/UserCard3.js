import React, { Component } from "react";


function User3 (props) {
 
    
        return (
            <div className="section user-section valign-wrapper">
                {/* update source to database */}
                <img src={props.avatar} alt="" className="circle responsive-img user-image"/>
                <div className="section">
                    {/* update username to database */}
      
                    <h6></h6>
                    {/* pass as children to re-use the component! */}
                    <h6>Testerrrr</h6>
            
                    {/* update superlative to database */}
                    <p>superlative</p>
                </div>
                {/* <p className="comment-content">testerooni</p> */}

                <div className="divider"></div>
                
            </div>
            )
}

export default User3;