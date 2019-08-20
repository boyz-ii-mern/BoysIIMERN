import React, { Component } from "react";


class AddComment extends Component {
    constructor(props) {
        // console.log("this is addComment", props)

        super(props);
        this.state = { comments: "" };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }

      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({

          [name]: value
        });
      }
    
      handleSubmit(event) {
        // alert("Your Comment: " + this.state.comments);
        this.props.action(this.state.comments);

        this.setState({
          comments: ""
        })
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit} className="add-comment-form">
          {/* // <form onSubmit={()=this.props.action} className="add-comment-form"> */}
 
           <label className="add-comment-label">
              <input className="add-comment-input"
                type="text"
                name="comments"
                placeholder="Say something. Or don't."
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit" value="Submit" className="waves-effect waves-light btn add-comment-submit">submit</button>
          </form>
        );
      }
}

export default AddComment;