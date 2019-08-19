import React, { Component } from "react";
import GroupMembers from "../../components/groupMembers/index";
import EventContainer from "../../components/eventContent/eventContainer";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { IdentityContext } from "../../identity-context";
import axios from "axios";
import ImageHeader from "../../components/eventContent/Comments/imageHeader";

class EventsTest extends Component {
  state = {
    username: "",
    password: "",
    user: {},
    loggedIn: false,
    groupId: "" || ["no group id"],
    events: "" || ["no events", "get out nerd"],
    members: "" || ["starting"],
    comments: "" || ["no starting comments cuz i have no friends"],
    bannerImage: "" || ["no group banner"]
  };

  componentDidMount() {
    //REALLY IMPORTANT, {ID} below for the EVENT getting pulled from URL
    const { id } = this.props.match.params;
    // check for logged in user
    axios.get("/api/user").then(response => {
      if (response.data) {
        // console.log("USER FROM API", response.data);
        this.setState({
          user: response.data,
          userStateInfo: `${response.data.username} is logged in`,
          loggedIn: true
        });

        // console.log("this be req.params", id)
        //call to grab all 'events' associated to user. 'id' is grabbed from the URL  then display to main page. sets groups key/value to state.
        axios.get("/api/events/detail/" + id).then(next => {
          if (next.data) {
            // console.log("get events daniel", next.data.data);

            this.setState({
              events: next.data.data,
              groupId: next.data.data.GroupId
            });

          //call to grab all members associated by group id
            axios
              .get("/api/groups/members/" + next.data.data.GroupId)
              .then(next => {
                if (next.data) {
                  // console.log("get group members", next.data.data);
                  this.setState({
                    members: next.data.data
                  });
                }
              });

            //call to grab group banner associated by group id
            axios
            .get("/api/groups/detail/" + id)
            .then(next => {
              if (next.data) {
                console.log("get banner", next.data.data.groupInfo.bannerImage);
                this.setState({
                  bannerImage: next.data.data.groupInfo.bannerImage
                });
              }
            });

            axios.get("/api/events/comments/" + id).then(next => {
              if (next.data) {
                // console.log("did get messages work?", next.data)
                this.setState({
                  comments: next.data.data.comments
                })
              }
            })  
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
              <ImageHeader
                dataFromParent={this.state.bannerImage}
              />
              <div className="col s12 m4 l3 side-content">
                <h3 />

                <GroupMembers members={this.state.members} />

                {/* Currently commented out GroupEvents */}
                {/* <GroupEvents /> */}
              </div>
              <div className="col s12 m8 l9 event-content">
                {/* <EventContainer comments={this.state.staticEvent.comments}/> */}
                <EventContainer 
                  comments={this.state.comments}
                  events={this.state.events}

                />
              </div>
            </div>
          )}
        </IdentityContext.Consumer>
      </IdentityContext.Provider>
    );
  }
}

export default EventsTest;
