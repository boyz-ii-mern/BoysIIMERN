//this grabs the React object, and the component object from the React object and puts it in a variable
import React, { Component } from "react";
import axios from "axios";
import { IdentityContext } from "../../identity-context";
import 'materialize-css/dist/css/materialize.min.css';
// import { Modal, Button } from 'react-materialize';
// import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
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
    groupId: "",
    groups: "" || []
  };
  componentDidMount() {
    M.AutoInit();
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
          console.log("this is create events this.state", this.state);
          axios.get("/api/groups/byUser/" + response.data.userId)
            .then(response => {

              if (response.data) {
                console.log("this is groups response:", response.data);
                console.log("this is groups response array:", response.data.data.groups);
                let responseArr = response.data.data.groups
                console.log("this is responseArr", responseArr);
                this.setState({
                  groups: responseArr
                })
              }
              var elems = document.querySelectorAll('select');
              var instances = M.FormSelect.init(elems, this.state.groups);
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

    if (this.state.eventName == "" || this.state.eventLocation == "" || this.state.eventDate == "" || this.state.groupId == "") {
      window.scrollTo(0, 0);
      this.setState({
        errorMessage: "There is an Error"
      })
    } else {
      // this is the post to create the event
      axios.post("/api/events", {
        "name": this.state.eventName,
        "location": this.state.eventLocation,
        "date": this.state.eventDate,
        "groupId": this.state.groupId,
        "userId": this.state.user.userId
      }).then((response) => {
        console.log("this is create Event response", response);
        if (response.status == 200) {

          window.location.href = "/home";
        }
      })
    }


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
            <IdentityContext.Consumer>
              {({ user }) => (
                <form className="form create-event-form">
                  <h5 class="center-align red-text text-darken-3">{this.state.errorMessage && this.state.eventName == "" ? "Choose an Event Name!" : ""}</h5>
                  <input
                    // the value of form elements is tied to the state -- this means react will only update what you see on the page when the state is updated
                    value={this.state.eventName}
                    name="eventName"
                    //the onChange is what tells React to update the DOM
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Event Name"
                  />
                  <h5 class="center-align red-text text-darken-3">{this.state.errorMessage && this.state.eventLocation == "" ? "Choose a place!" : ""}</h5>
                  <input
                    value={this.state.eventLocation}
                    name="eventLocation"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Event Location"
                  />
                  <h5 class="center-align red-text text-darken-3">{this.state.errorMessage && this.state.groupId == "" ? "Choose a group!" : ""}</h5>
                  {/* <select className="browser-default create-event-select" id="user-select" name="groupId" multiple onChange={this.handleInputChange}>
                    <option value="" disabled defaultValue>Choose Groups to Invite</option>
                    {
                      this.state.groups.length == 0 ? 
                        <option value="" disabled defaultValue>You have no groups, go create one!</option> 
                        :
                        this.state.groups.map(groups => (
                          <option value={groups.id}>{groups.name}</option>
                      
                    ))}
                  </select> */}
                  <select className="custom-select create-group-select" id="group-select" name="members" onChange={this.handleInputSelect}>
                  <option defaultValue>Choose Groups to Invite</option>
                    {
                      this.state.groups.length == 0 ? 
                        <option value="" disabled defaultValue>You have no groups, go create one!</option> 
                        :
                        this.state.groups.map(groups => (
                          <option value={groups.id}>{groups.name}</option>
                      
                    ))}
                  </select>
                  <h5 class="center-align red-text text-darken-3">{this.state.errorMessage && this.state.eventDate == "" ? "Set a date!" : ""}</h5>
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
