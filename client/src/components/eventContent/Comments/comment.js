import React, { Component } from "react";
import User from "../../groupMembers/UserCard";

function CommentList (props){
    // console.log("commentlist", props);
        return(
            <div className="comment-list">
                <div>
            {/* use comments.user */}
                 {/* {props.comments.map(comment => ( 
                <div>
                   <User>{comment.user}</User>
                   <p className="comment-content">{comment.message}</p>
                </div>
                 ))}    */}

                </div>
            </div>
        )
    }


export default CommentList;