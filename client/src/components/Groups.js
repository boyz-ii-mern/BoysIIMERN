import React, { Component } from "react";
import { IdentityContext } from "../identity-context";
import axios from "axios";
import GroupsList from "./GroupsList";


function Groups (props) {
    // console.log("this is propsz", props.group.name);
  
        return (
 
                <div className="card col">
                    <div className="card-header">
                        <h5>Groups I'm In</h5>
                    </div>
                        <div className="card-content">
                        <div className="card-stacked">
    
                                <div className="section">
                            <h6>{props.group.name}</h6>
                           
                                <div className="divider"></div>
                                </div>
                            </div>
                            </div>
                </div>


// function TodoList({ items }) {
//     return items.map(item => (
//         <h1>{item.name}</h1>
//     ));
// }


// {currentMembers.map(gmember => (
//     //   <User member={gmember}/>
//          <User>{gmember} </User>

//         ))}
          
        )
    }


export default Groups