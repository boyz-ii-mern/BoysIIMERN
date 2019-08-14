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
                <label classNam="col m4">
                    Choose a group member
                    <select name="user" value={this.state.value} onChange={this.handleChange}>
                        {this.state.friends.map(friend => (
                        <option value={friend.name}>{friend.name}</option>
                  ))}
                    </select>
                </label>
                
                <label className="col m6 superlatives-input">
                    <input
                        type="text"
                        name="comment"
                        placeholder="Say something. Or don't."
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
        );
    }
}

export default SuperlativesForm;
