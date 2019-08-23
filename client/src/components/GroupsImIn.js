import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //<!super important to get router to work

// import { IdentityContext } from "../identity-context";
// import axios from "axios";
// import GroupsList from "./GroupsList";


function GroupsImIn (props) {
    console.log("this is propsz", props);
  
        return (
     
            <div className="section">
                <Link to={"/groups/" + props.group.id}>
                <h6>{props.group.name}</h6>
                </Link>
                <div className="divider"></div>
            </div>





        )
    }


export default GroupsImIn