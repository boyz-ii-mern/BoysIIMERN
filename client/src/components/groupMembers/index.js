import React, { Component } from "react";
import User from "./UserCard";

class GroupMembers extends Component {
    render() {
        return(
            //component for group member card
            <div className="card col m3">
                <div className="card-header">
                    <h5>Group Members</h5>
                </div>
                <User />
            </div>
            
                //component for user row (photo, name, superlative, divider)
        )       //call the user component as many times as necessary
    }
}

export default GroupMembers;