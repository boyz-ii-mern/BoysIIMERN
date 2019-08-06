import React, { Component } from "react";
import User from "../../groupMembers/UserCard";

class CommentList extends Component {
    render() {
        return(
            <div className="comment-list">
                <div>
                    <User />
                    <p className="comment-content">Comment List goes here</p>
                </div>
                <div>
                    <User />
                    <p className="comment-content">Comment List goes here</p>
                </div>
                <div>
                    <User />
                    <p className="comment-content">Comment List goes here</p>
                </div>
            </div>
        )
    }
}

export default CommentList;