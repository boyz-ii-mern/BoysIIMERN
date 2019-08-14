import React, { Component } from "react";

class SuperlativesForm extends Component {
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
        alert("Your New Superlative: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
        <div className="row superlatives-form-container">
            <form onSubmit={this.handleSubmit} className="superlatives-form">
                <label>
                    Choose a group member
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="leon">Leon</option>
                        <option value="maggiejo">Maggie Jo</option>
                        <option value="patricia">Patricia</option>
                        <option value="dan">Dan</option>
                        <option value="dan">Steph</option>
                    </select>
                </label>
                
                <label>
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
