import React, { Component } from "react";
import api from '../../../api';


class SuperlativesForm extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.eventId = props.eventId
        this.userId = props.userId
        this.friends = props.friends || []
        this.state = {
            superlativeInput: "",
            selectedUser: this.friends[0].id
        }

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

    async handleSubmit(event) {
        event.preventDefault()
        const res = await api.superlative.addSuperlative(this.eventId, this.state.superlativeInput, this.state.selectedUser)
        if (res.error) {
            console.log(res)
        } else {
            this.setState({
                superlativeInput: "",
                selectedUser: this.friends[0].id
            })
            this.props.update(res.data.superlatives)
        }
    }

    render() {
        return (
            <div className="row superlatives-form-container">
                <form onSubmit={this.handleSubmit} className="superlatives-form">
                    <label className="col s12 m4 superlatives-select">
                        Choose a group member
                    <select className="superlatives-select-input" name="selectedUser" value={this.state.selectedUser} onChange={this.handleChange}>
                            {this.friends && this.friends.map((friend, i) => {
                                return (
                                    <option key={i} value={friend.id}>{friend.firstName} {friend.lastName}</option>
                                )
                            })}
                        </select>
                    </label>

                    <label className="col s9 m6 superlatives-input">
                        <input
                            className="add-comment-input"
                            type="text"
                            name="superlativeInput"
                            placeholder="Say something. Or don't."
                            value={this.state.superlativeInput}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button type="submit" value="Submit" className="btn add-comment-submit">submit</button>
                </form>
            </div>
        );
    }
}

export default SuperlativesForm;
