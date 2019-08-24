import React, { Component } from "react";
import CommentList from "./comment";

function Comments (props){
    // console.log("what ths ", props)

      return (
          <div>
              {/* //input form */}
              {/* //comment generator */}
              <CommentList 
              comments={props.comments}
         
              />
          </div>
      )
  }


export default Comments;