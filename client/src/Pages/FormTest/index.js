//this grabs the React object, and the component object from the React object and puts it in a variable
import React, { Component } from "react";
import friends from "./users.json"



//extending component instead of react.component
class Form extends Component {
  // Setting the component's initial state with two properties
  state = {
    eventName: "",
    eventLocation: "",
    friends
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    //this is the same as writing:
    //const name = event.target.name;
    //const value = event.target.value;


    // Updating the input's state
    this.setState({
      //this is how we can reference a property name from a variable
      //[] notation takes the value of that variable as the property name
      [name]: value
    });
  };

  handleFormSubmit = event => { //takes in "event" as its parameter
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();


    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`You're going to: ${this.state.eventName} in ${this.state.eventLocation}`); //use string literal notation to include {} javascript expressions in a string
    this.setState({
      eventName: "",
      eventLocation: "",
      addFriends: [],
      date: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
     <div className="row">
          <div className="card form-card col sm12 m8">
            <p>
              You're going to: {this.state.eventName} in {this.state.eventLocation} with {this.state.addFriends} on {this.state.date}
            </p>
            <form className="form">
              <input
                // the value of form elements is tied to the state -- this means react will only update what you see on the page when the state is updated
                value={this.state.eventName}
                name="eventName"
                //the onChange is what tells React to update the DOM
                onChange={this.handleInputChange}
                type="text"
                placeholder="Event Name"
              />
              <input
                value={this.state.eventLocation}
                name="eventLocation"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Event Location"
              />
              <select className="custom-select create-event-select" multiple onChange={this.handleInputChange}>
                  {this.state.friends.map(friend => (
                      <option value={friend.name}>{friend.name}</option>
                  ))}
              </select>
              <input value={this.state.date} name="eventDate" onChange={this.handleInputChange} type="date"/>
              <button className="waves-effect waves-light btn" onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
     </div>
    );
  }
}

export default Form;
