//this grabs the React object, and the component object from the React object and puts it in a variable
import React, { Component } from "react";
import axios from "axios";
import { IdentityContext } from "../../identity-context";
// import friends from "./users.json"



//extending component instead of react.component
class Form extends Component {
  // Setting the component's initial state with two properties
  state = {
    username: "",
    password: "",
    user: {},
    loggedIn: false,
    eventName: "",
    eventLocation: "",
    eventDate: "",
    group: ""
  };
  componentDidMount() {
    // check for logged in user
    axios.get("/api/user")
        .then(response => {
            if (response.data) {
                console.log("USER FROM API", response.data)
                this.setState({
                    user: response.data,
                    userStateInfo: `${response.data.username} is logged in`,
                    loggedIn: true
                })
            }
        })
}

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
    // var fld = document.getElementById('user-select');
    // var values = [];
    // for (var i = 0; i < fld.options.length; i++) {
    // if (fld.options[i].selected) {
    // this.state.addFriends.push(fld.options[i].value);
    // }
    // }
    // console.log(values);
    // this.state.addFriends.push(values);

    console.log("this is event date", this.state.eventDate)
    console.log("this is event name", this.state.eventName);
    console.log("this is groups:", this.state.group);
    console.log("this is event location", this.state.eventLocation);
    console.log("this is user Id", this.state.user.userId);


    // this is the post to create the event
    axios.post("/api/events", {
      "name": this.state.eventName,
      "location": this.state.eventLocation,
      "date": this.state.eventDate,
      "groupId": this.state.group,
      "userId": this.state.user.userId
    }).then((response) => {
      console.log("this is create Event response", response);
    })

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
      <IdentityContext.Provider value={{
        user: this.state.user,
        loggedIn: this.state.loggedIn,
        login: this.login,
        logout: this.logout
      }}>
        <div className="row create-form-row">
          <div className="card col sm12 m10 l8 form-card sign-in-form-card">
            <h3 className="sign-in-header">Create New Event</h3>
            <p>
              You're going to: {this.state.eventName} in {this.state.eventLocation} with {this.state.group} on {this.state.date}
            </p>
            <IdentityContext.Consumer>
              {({ user, loggedIn, login }) => (
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
                  <select className="custom-select create-event-select" id="user-select" name="group" multiple onChange={this.handleInputChange}>
                    {/* {this.state.friends.map(friend => (
                      <option value={friend.name}>{friend.name}</option>
                  ))} */}
                    <option value={"1"}>Group 1</option>
                  </select>
                  <input value={this.state.eventDate} name="eventDate" onChange={this.handleInputChange} type="date" />
                  <button className="waves-effect waves-light btn create-form-submit" onClick={this.handleFormSubmit}>Create Event</button>
                </form>
              )}
            </IdentityContext.Consumer>
          </div>
        </div>
      </IdentityContext.Provider>
    );
  }
}

export default Form;
