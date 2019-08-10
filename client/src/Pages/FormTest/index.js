//this grabs the React object, and the component object from the React object and puts it in a variable
import React, { Component } from "react";
import friends from "./users.json"



//extending component instead of react.component
class Form extends Component {
  // Setting the component's initial state with two properties
  state = {
    eventName: "",
    eventLocation: "",
    eventDate: "",
    addFriends: [],
    friends
  };

  handleSelectChange = event => {
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

    //push friends into addFriends array
    // this.state.addFriends.push(event.target.value);
    var fld = document.getElementById('user-select');
    // var values = [];
    for (var i = 0; i < fld.options.length; i++) {
    if (fld.options[i].selected) {
    this.state.addFriends.push(fld.options[i].value);
    }
    }
    // console.log(values);
    // this.state.addFriends.push(values);

    console.log(this.state.eventDate)
    console.log(this.state.eventName);
    console.log(this.state.addFriends);
    console.log(this.state.eventLocation);



    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`You're going to: ${this.state.eventName} in ${this.state.eventLocation}`); //use string literal notation to include {} javascript expressions in a string
    this.setState({
      eventName: "",
      eventLocation: "",
      addFriends: [],
      eventDate: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
     <div className="row create-form-row">
          <div className="card col sm12 m10 l8 form-card">
          <div className="card-header">
                <h5>Create A New Event</h5>
            </div>
            <p>
              You're going to: {this.state.eventName} in {this.state.eventLocation} with {this.state.addFriends} on {this.state.date}
            </p>
            <form className="form create-event-form">
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
              <select className="custom-select create-event-select" id="user-select" multiple onChange={this.handleInputChange}>
                  {this.state.friends.map(friend => (
                      <option value={friend.name}>{friend.name}</option>
                  ))}
              </select>
              <input value={this.state.eventDate} name="eventDate" onChange={this.handleInputChange} type="date"/>
              <button className="waves-effect waves-light btn create-form-submit" onClick={this.handleFormSubmit}>Create Event</button>
            </form>
          </div>
     </div>
    );
  }
}

export default Form;
