import React, { Component } from "react";
import User from "../../groupMembers/UserCard";

class SuperlativeUser extends Component {
    render() {
    
        
            return (
                
                <div className="section user-section valign-wrapper col s12 m6">
                    {/* update source to database */}
                    <img src="../Images/avatar-01.png" alt="" className="circle responsive-img superlative-user-image"/>
                    <div className="section">
                        {/* update username to database */}
                        {/* <h6>{props.member}</h6> */}
                        {/* pass as children to re-use the component! */}
                        <h6>UserName</h6>
                
                        {/* update superlative to database */}
                        <p>Most Likely to Do Something</p>
                    </div>
                    <div className="divider"></div>
                    
                </div>
                )
    }
}

export default SuperlativeUser;