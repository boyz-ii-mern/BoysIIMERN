import React, { Component } from "react";


class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = { comment: "" };
    
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
        alert("Your Comment: " + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit} className="add-comment-form">
            <label className="add-comment-label">
              <input className="add-comment-input"
                type="text"
                name="comment"
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