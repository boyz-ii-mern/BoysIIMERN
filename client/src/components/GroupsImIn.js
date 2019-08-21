import React, { Component } from "react";
import { IdentityContext } from "../identity-context";
import axios from "axios";
// import GroupsList from "./GroupsList";


function GroupsImIn (props) {
    // console.log("this is propsz", props.group.name);
  
        return (
            <div className="section">
                <h6>{props.group.name}</h6>
                <div className="divider"></div>
            </div>
        )
    }


export default GroupsImIn