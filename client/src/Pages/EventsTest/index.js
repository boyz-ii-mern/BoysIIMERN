import React, { Component } from "react";
import GroupMembers from "../../components/groupMembers/index";
import GroupEvents from "../../components/eventsInGroup/index";
import EventContainer from "../../components/eventContent/eventContainer";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { IdentityContext } from "../../identity-context";
import axios from "axios";

// import eventsTest from "../../components/eventsTest.json";
import ImageHeader from "../../components/eventContent/Comments/imageHeader";

// console.log("did i grab this?", eventsTest[0]);
class EventsTest extends Component {
  state = {
    // staticEvent: eventsTest[0] || []

    username: "",
    password: "",
    user: {},
    loggedIn: false,
    groupId: "",
    events: "" || ["no events", "get out nerd"],
    members: "" || ["starting"]
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    // check for logged in user
    axios.get("/api/user").then(response => {
      if (response.data) {
        console.log("USER FROM API", response.data);
        this.setState({
          user: response.data,
          userStateInfo: `${response.data.username} is logged in`,
          loggedIn: true
        });

        // console.log("this be req.params", id)
        //call to grab all 'events' associated to user, then display to main page. sets groups key/value to state.
        axios.get("/api/events/detail/" + id).then(next => {
          if (next.data) {
            console.log("get events daniel", next.data.data);
            
            this.setState({
              events: next.data.data,
              groupId: next.data.data.GroupId
            });
            axios.get("/api/groups/members/" + next.data.data.GroupId).then(next => {
              if (next.data) {
                console.log("get group members", next.data.data);
                this.setState({
                  members: next.data.data
                });
              }
            });
          }
        });
        

      }
    });
  }

  render() {
    console.log("this is eventsTest state", this.state);

    return (
      <IdentityContext.Provider
        value={{
          user: this.state.user,
          loggedIn: this.state.loggedIn,
          login: this.login,
          logout: this.logout
        }}
      >
        <IdentityContext.Consumer>
          {({ user }) => (
            <div className="row">
              <ImageHeader />
              <div className="col s12 m4 l3 side-content">
                <h3 />

                <GroupMembers />

                {/* Currently commented out GroupEvents */}
                <GroupEvents />
              </div>
              <div className="col s12 m8 l9 event-content">
                {/* <EventContainer comments={this.state.staticEvent.comments}/> */}
                <EventContainer />
              </div>
            </div>
          )}
        </IdentityContext.Consumer>
      </IdentityContext.Provider>
    );
  }
}

export default EventsTest;
