import React, { Component } from "react";
import User from "./UserCard";

function GroupMembers (props) {
    // console.log("this is members props", props)
    let currentMembers = props.member
    console.log("currentMembers", currentMembers)


        return(
            //component for group member card
            <div className="card col">
                <div className="card-header">
                    <h5>Group Member List</h5>
                </div>
   
            {currentMembers.map(gmember => (
        //   <User member={gmember}/>
             <User>{gmember} </User>

            ))}

                        
            </div>
            
                //component for user row (photo, name, superlative, divider)
        )       //call the user component as many times as necessary
    
}

export default GroupMembers;