import React, { Component } from "react";
import User from "./UserCard";

function GroupMembers (props) {
    // console.log("this is members props", props)
    // let currentMembers = props.member
    // console.log("currentMembers", currentMembers)

    // console.log("this be da membas", props.members)
    let gmember = props.members.members || []
   //Console Log gmember will show the below object example being passed in
    // avatar: null
    // email: "my@email.com"
    // firstName: "Joe"
    // id: 1
    // lastName: "Man"
    // password: "password"
    // superlative: "Most Likely to Be Cool"
    console.log ("this be da membas", gmember)

        return(
     
            <div className="card col">
                <div className="card-header">
                    <h5>Members</h5>
                </div>
     {gmember.map(item => (

        <User 
           name= {item.firstName}
           lastName= {item.lastName}
           avatar= {item.avatar}
           superlative={item.superlative}
        />
     ))}

                        
            </div>
            
                //component for user row (photo, name, superlative, divider)
        )       //call the user component as many times as necessary
    
}

export default GroupMembers;