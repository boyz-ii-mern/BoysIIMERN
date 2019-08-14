import React, { Component } from "react";
import friends from "../../../Pages/FormTest/users.json"

class SuperlativesForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: "",
            user: "",
            friends
         };

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
        alert(this.state.user +"'s New Superlative: " + this.state.comment);

        //TODO: update user information to include new superlative

        event.preventDefault();
    }

    render() {
        return (
        <div className="row superlatives-form-container">
            <form onSubmit={this.handleSubmit} className="superlatives-form">
                <label className="col s12 m4 superlatives-select">
                    Choose a group member
                    <select className="superlatives-select-input" name="user" value={this.state.value} onChange={this.handleChange}>
                        {this.state.friends.map(friend => (
                        <option value={friend.name}>{friend.name}</option>
                  ))}
                    </select>
                </label>
                
                <label className="col s9 m6 superlatives-input">
                    <input
                        className="add-comment-input"
                        type="text"
                        name="comment"
                        placeholder="Say something. Or don't."
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                
                <button type="submit" value="Submit" className="waves-effect waves-light btn add-comment-submit">submit</button>
            </form>
        </div>
        );
    }
}

export default SuperlativesForm;
