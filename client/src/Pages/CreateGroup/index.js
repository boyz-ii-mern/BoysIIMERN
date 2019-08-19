//this grabs the React object, and the component object from the React object and puts it in a variable
import React, { Component } from "react";
import axios from "axios";
import { IdentityContext } from "../../identity-context";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
// import friends from "./users.json"
import BannerLoad from "./bannerLoad";



//extending component instead of react.component
class Form extends Component {
  constructor(props) {
    super(props);
    this.childHandler = this.childHandler.bind(this);
  };
  // Setting the component's initial state with two properties
  state = {
    username: "",
    password: "",
    user: {},
    loggedIn: false,
    groupName: "",
    members: [],
    photolink: "",
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

        }

      })
  }

  // Receive information from bannerLoad
  childHandler(bannerLink){
    this.setState({
        photolink: bannerLink
    },() => console.log("Updated State: ", this.state.photolink));
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
    
      var options = event.target.options;
      console.log("this is options", options);
      var memArr = [];
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
    console.log("group name: ", this.state.groupName)
    console.log("group members: ", this.state.members)

    axios.post("/api/groups/", {
      "name": this.state.groupName,
      "bannerImage": this.state.photolink,
      "members": this.state.members
    })
      .then(response => {
        console.log("this is create groups response:", response);
        // if (response.status == 200 ) {


        // }
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

                  <select className="custom-select create-event-select" id="group-select" name="members" multiple={true} onChange={this.handleInputSelect}>
                    {/* {this.state.members.map(member => (
                      <option value={member.users}>User Name</option>
                  ))} */}
                    <option value={"1"}>Member</option>
                    <option value={"2"}>Member</option>
                  </select>
                  <br />
                  <BannerLoad
                    action={this.childHandler}
                  />
                  <input
                    type="hidden"
                    name="photolink"
                    value={this.state.photolink} 
                    onChange={this.handleInputChange}
                  />
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
