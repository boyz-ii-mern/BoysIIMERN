import React, { Component } from "react";


class CreateGroup extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name
      
        this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Event Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Event Location:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Event Date:
            <input type="date" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Who Is Invited?
            <select type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default CreateGroup;