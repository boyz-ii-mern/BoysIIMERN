import React, { Component } from "react";
import User from "../../groupMembers/UserCard";
import User2 from "../../groupMembers/UserCard2";
import Moment from 'react-moment';


function CommentList (props){
// ----------------------------------------------
// BELOW IS DATA STRUCTURE FOR 'props'
// EventId: 1
// User: {id: 1, firstName: "Joe", lastName: "Man", email: "my@email.com", password: "password", …}
// UserId: 1
// body: "This is gonna be a great party"
// createdAt: "2019-08-15T22:29:53.000Z"
// id: 1
// updatedAt: "2019-08-15T22:29:53.000Z"
// ----------------------------------------------
        // Lots of trouble mapping props.User object, so passing this object onto userCard2.js
// ----------------------------------------------

    // console.log("props for comments", props.comments);
    //--------------------------------------------
    //! 'reverse' array has latest comments on top. if this is causing issues, use commentList instead
    let commentList = props.comments || []
    let reverse = commentList.slice(0).reverse()
    // console.log("reverse", reverse)
  
  
        return(
            <div className="comment-list" >
                <div>
            {/* use comments.user */}
                 {reverse.map(comment => ( 
                <div>
                    <div className="comment-extras valign-wrapper">
                        <User2
                            comment={comment}
                        />
                        <Moment fromNow={"MMM Do YYYY"} className="moment">{comment.createdAt}</Moment>
                    </div>
                   <div>
                   <p className="comment-content" >{comment.body}</p>
                   </div>
                </div>
                 ))}   

                </div>
            </div>
        )
    }


export default CommentList;

