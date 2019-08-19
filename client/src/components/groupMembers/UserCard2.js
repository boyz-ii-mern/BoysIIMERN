import React, { Component } from "react";
import User from "../groupMembers/UserCard";


function User2 (props) {
    // let usercardVar = usercardVar
    // console.log("usercard2", props)
    // console.log("this user 3", props.comment.User)

//TODO Important: userThing variable extracted the User object within the array. Because react is weird, must set this variable to have an optional value of [] or react will throw an error. 
    let userThing = props.comment.User || []
//    console.log(userThing.firstName)
  
    // let cardVar = props.comment.User
    // console.log(cardVar)


    
        return (
            <div className="section user-section valign-wrapper">
                {/* update source to database */}
                {/* <img src={props.avatar} alt="" className="circle responsive-img user-image"/> */}
                <div className="section">
                    {/* update username to database */}
      
                    <h6></h6>
                    {/* pass as children to re-use the component! */}
                  
                <User
                    avatar={userThing.avatar}
                    name={userThing.firstName}
                    lastName={userThing.lastName}
                    superlative={userThing.superlative}
                />
                    {/* update superlative to database */}
                  
                </div>
                {/* <p className="comment-content">testerooni</p> */}

                <div className="divider"></div>
                
            </div>
            )
}

export default User2;