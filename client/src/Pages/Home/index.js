import React, { Component } from "react";
import Groups from "../../components/Groups";
import HomeEvents from "../../components/HomeEvents";
import UserProfile from "../../components/profile/userProfile";
import { IdentityContext } from "../../identity-context";
import axios from "axios";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Home extends Component {
  state = {
    username: "",
    password: "",
    user: {},
    loggedIn: false,
    groups: "" || ["no members"]
  };

  componentDidMount() {
    // check for logged in user
    axios.get("/api/user").then(response => {
      if (response.data) {
        console.log("USER FROM API", response.data);
        this.setState({
          user: response.data,
          userStateInfo: `${response.data.username} is logged in`,
          loggedIn: true
        });

        axios.get("/api/groups/byUser/" + response.data.userId).then(next => {
          if (next.data) {
            console.log("get group data", next.data.data.groups);
          this.setState({
            groups: next.data.data.groups
          })
          }
        });
      }
    });
  }

  render() {
    console.log("this is first load state", this.state);
    // console.log("this groups state", this.state.groups)
    return (
      <IdentityContext.Provider
        value={{
          user: this.state.user,
          loggedIn: this.state.loggedIn
        }}
      >
        <div>
          <div className="row">
            <div className="col s12 m5 side-content">
              <UserProfile />
              {this.state.groups.map(groupName => (
                <Groups 
                group={groupName} />
              ))}
      
            </div>
            <HomeEvents />
          </div>
        </div>
      </IdentityContext.Provider>
    );
  }
}

export default Home;
