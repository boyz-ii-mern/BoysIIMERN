import React, { Component } from 'react';
import Comments from '../Comments/commentSection';
import AddComment from '../Comments/addComment';

class CommentTab extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <AddComment
                    action={this.props.action}
                />
                <Comments comments={this.props.comments} />
            </div>
        );
    }

}
export default CommentTab;