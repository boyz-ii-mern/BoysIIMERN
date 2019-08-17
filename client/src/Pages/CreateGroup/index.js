//this grabs the React object, and the component object from the React object and puts it in a variable
import React, { Component } from "react";
import axios from "axios";
import { IdentityContext } from "../../identity-context";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
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
        users: "" || ["there are no users", "something went wrong", "make some friends loser"],
        photolink: "",
    };
    componentDidMount() {

        M.AutoInit();
        //initialize materialize form plugin
        // document.addEventListener('DOMContentLoaded', function() {
        //     // var elems = document.querySelectorAll('select');
        //     // var instances = M.FormSelect.init(elems, options);
        //     M.AutoInit();
        //   });

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
                    // let groupNameArr = [];
                    // let groupIdArr = [];

                    // responseArr.forEach(function(element){
                    //   console.log("this is element", element);
                    //   groupNameArr.push(element.name);
                    //   groupIdArr.push(element.id);
                    // })
                    // console.log("this is groupNameArr", groupNameArr);
                    // console.log("this is is groupIdArr", groupIdArr);

                    this.setState({
                    groups: responseArr
                    })
                }
                })

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
    console.log("group name: ", this.state.groupName)
    console.log("group memberes: ", this.state.users)

    //materialize code for getting values from select array -- maybe this is useful??
    // instance.getSelectedValues();


    // // this is the post to create the event
    // axios.post("/api/events", {
    //   "name": this.state.eventName,
    //   "groupId": this.state.groupId,
    //   "userId": this.state.user.userId
    // }).then((response) => {
    //   console.log("this is create Event response", response);
    //   if (response.status == 200) {
        
    //     window.location.href = "/home";
    // }
    // })

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`You're going to: ${this.state.eventName} in ${this.state.eventLocation}`); //use string literal notation to include {} javascript expressions in a string
    this.setState({
      eventName: "",
      eventLocation: "",
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
            <h3 className="sign-in-header">Create New Group</h3>
            <p>
              You're going to: {this.state.groupName}
            </p>
            <IdentityContext.Consumer>
              {({ user }) => (
                <form className="form create-event-form">
                  <input
                    // the value of form elements is tied to the state -- this means react will only update what you see on the page when the state is updated
                    value={this.state.groupName}
                    name="groupName"
                    //the onChange is what tells React to update the DOM
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Group Name"
                  />
               
                  <div className="input-field">
                      <select className="browser-default custom-select create-event-select" id="user-select" name="users" multiple onChange={this.handleInputChange}>
                      <option value="" disabled selected>Choose your option</option>

                        {/* {this.state.users.map(groups => (
                          <option value={this.state.users}>User Name</option>
                      ))} */}

                      {/* fake data for testing -- remove for api calls */}
                      <option value={this.state.users}>User Name</option>
                      <option value={this.state.users}>User Name</option>
                      <option value={this.state.users}>User Name</option>


                        {/* <option value={this.state.groupId}>{this.state.group}</option> */}
                      </select>
                  </div>
                  <input
                    // the value of form elements is tied to the state -- this means react will only update what you see on the page when the state is updated
                    value={this.state.photolink}
                    name="photolink"
                    //the onChange is what tells React to update the DOM
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Link to Photo"
                  />
                  <button className="waves-effect waves-light btn create-form-submit" onClick={this.handleFormSubmit}>Create Group</button>
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
