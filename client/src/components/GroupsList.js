import React, { Component } from "react";


 function GroupsList (props) {
 
        console.log("this is props groups", props)
        return(
            <div>
                <h4>{props.children}</h4>
            </div>
        )
    }


export default GroupsList;