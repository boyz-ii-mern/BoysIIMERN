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
    groupName: "",
    members: [],

    allUsers: "" || ["No Users Available"],
    phoneNumber: "",
  };

  componentDidMount() {
    M.AutoInit();

    // M.AutoInit();
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
    axios.get("/api/user/all")
      .then(response => {
        if (response.data) {
          console.log("this is all users", response.data.data);

          this.setState({
            allUsers: response.data.data
          })
          var elems = document.querySelectorAll('select');
          var instances = M.FormSelect.init(elems, this.state.allUsers);
        }
      })
  }

  handleSelectChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;


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

    this.setState({
      //this is how we can reference a property name from a variable
      //[] notation takes the value of that variable as the property name
      [name]: value
    });
  };

  handleInputSelect = event => {
    // Getting the value and name of the select to push into array
    let userId = this.state.user.userId;
    var options = event.target.options;
    var memArr = [userId];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        memArr.push(options[i].value);
      }
    }
    this.setState({
      members: memArr,
    });

  };

  handleFormSubmit = event => { //takes in "event" as its parameter
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.groupName == "" || this.state.members == 0) {
      window.scrollTo(0, 0);
      this.setState({
        errorMessage: "There is an Error"
      })
    } else {
      console.log("group name: ", this.state.groupName)
      console.log("group members: ", this.state.members)

      axios.post("/api/groups/", {
        "name": this.state.groupName,
        "members": this.state.members
      })
        .then(response => {
          console.log("this is create groups response:", response);
          if (response.status == 200) {

            window.location.href = "/home";
          }
        })
    }

  };

  handleInvite = event => { //takes in "event" as its parameter
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("number: ", this.state.phoneNumber);

    axios.post("/api/twilio/", {
      "to": this.state.phoneNumber
    })
      .then(response => {
        console.log("this is invite friend response:", response);
        if (response.status == 200 ) {

          alert("Your friend has been invited!")
        }
      })
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
            <h3 className="sign-in-header">Create New Group</h3>

            <IdentityContext.Consumer>
              {({ user }) => (
                <form className="form create-event-form">
                  <h5 className="center-align red-text text-darken-3">{this.state.errorMessage && this.state.groupName == "" ? "Group Name is Empty" : ""}</h5>
                  <input
                    // the value of form elements is tied to the state -- this means react will only update what you see on the page when the state is updated
                    value={this.state.groupName}
                    name="groupName"
                    //the onChange is what tells React to update the DOM
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Group Name"
                  />
                  <h5 className="center-align red-text text-darken-3">{this.state.errorMessage && this.state.members.length == 0 ? "You didn't invite any friends :(" : ""}</h5>
                  <select className="custom-select create-group-select" id="group-select" name="members" multiple={true} onChange={this.handleInputSelect}>
                    {
                      this.state.allUsers.filter((self) => {
                        return self.id != this.state.user.userId
                      })
                        .map(user => (
                          <option value={user.id}>{user.firstName}</option>
                        ))
                        
                        }
                          {/* <option value="test">ashgdfsagd</option>
                          <option value="test2">ashgdfsag34d</option>
                          <option value="test3">ashgdfsag3434d</option> */}

                  </select>
                  {/* <Input 
                  name="members" 
                  type='select' 
                  multiple={true} 
                  defaultValue="Choose users"
                  onChange={this.handleInputSelect}>
                       {
                      this.state.allUsers.filter((self) => {
                        return self.id != this.state.user.userId
                      })
                        .map(user => (
                          <option value={user.id}>{user.firstName}</option>
                        ))}
                  </Input> */}
                  <br />

                  
                  {/* <input
                    // the value of form elements is tied to the state -- this means react will only update what you see on the page when the state is updated
                    value={this.state.photolink}
                    name="photolink"
                    //the onChange is what tells React to update the DOM
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Link to Photo"
                  /> */}

                  <button className="waves-effect waves-light btn create-form-submit" onClick={this.handleFormSubmit}>Create Group</button>
                  <p className="form-p">Don't see your friends? Invite them!</p>
                  {/* <!-- Modal Trigger --> */}
                  <a className="waves-effect waves-light btn modal-trigger" data-target="modal1">invite friends</a>

                  {/* <!-- Modal Structure --> */}
                  <div id="modal1" className="modal twilio-modal">
                    <div className="modal-content">
                      <h4>Invite Friends</h4>
                      <p>Add phone numbers to invite your friends to Likely</p>
                      <form>
                        <input
                          value={this.state.phoneNumber}
                          name="phoneNumber"
                          //the onChange is what tells React to update the DOM
                          onChange={this.handleInputChange}
                          type="text"
                          placeholder="ex: 8008765309"
                        />
                        <div className="modal-footer">
                          <a data-target="modal1" className="modal-close waves-effect waves-green btn-flat modal-submit-button" type="submit" onClick={this.handleInvite}>Submit</a>
                          <a data-target="modal1" className="modal-close waves-effect waves-green btn-flat modal-cancel-btn" type="button">Cancel</a>
                        </div>
                      </form>
                    </div>

                  </div>
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
