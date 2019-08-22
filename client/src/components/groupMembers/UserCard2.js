import React, { Component } from "react";
import User from "../groupMembers/UserCard";


function User2 (props) {


//TODO Important: userThing variable extracted the User object within the array. Because react is weird, must set this variable to have an optional value of [] or react will throw an error. 
    let userThing = props.comment.User || []
    console.log("userThing", userThing)
    
        return (
            <div className="section user-section valign-wrapper">
                <div className="section">
  
                <User
                    avatar={userThing.avatar}
                    name={userThing.firstName}
                    lastName={userThing.lastName}
                   
                />
        
                  
                </div>
                <div className="divider"></div>
                
            </div>
            )
}

export default User2;