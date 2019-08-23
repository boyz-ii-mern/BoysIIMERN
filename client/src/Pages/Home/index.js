import React, { Component } from "react";
// import Groups from "../../components/Groups";
import HomeEvents from "../../components/HomeEvents";
import UserProfile from "../../components/profile/userProfile";
import { IdentityContext } from "../../identity-context";
import api from '../../api'
import axios from "axios";
import GroupsImIn from "../../components/GroupsImIn";
import HomeMyEvents from "../../components/HomeMyEvents";
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
    groups: [],
    events: []
  };

  componentDidMount() {
    // check for logged in user
    axios.get("/api/user").then(response => {
      if (response.data) {
        // console.log("USER FROM API", response.data);
        this.setState({
          user: response.data,
          userStateInfo: `${response.data.username} is logged in`,
          loggedIn: true
        });

        //call to grab all 'groups' associated to user, then display to main page. sets groups key/value to state.
        axios.get("/api/groups/byUser/" + response.data.userId).then(next => {
          if (next.data) {
            // console.log("get group data", next.data.data.groups);
            this.setState({
              groups: next.data.data.groups
            });
          }
        });

        //call to grab all 'events' associated to user, then display to main page. sets groups key/value to state.
        api.user.allEventsAttending(response.data.userId).then(next => {
          if (next.data) {
            // console.log("get events data", next.data);
            this.setState({
              events: next.data
            });
          }
        });

      }
    });
  }

  render() {
    console.log("this is first load state", this.state);
    console.log("this groups state", this.state.groups)
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

              {/* --------- Groups I'm In section ----------- */}
              <div className="card col">
                    <div className="card-header">
                        <h5>Groups I'm In</h5>
                    </div>
                        <div className="card-content">
                        <div className="card-stacked">
    
                        {this.state.groups.map(groupName => (
                        <GroupsImIn group={groupName} />
                        ))}
                            </div>
                            </div>
                </div>


              {/* {this.state.groups.map(groupName => (
                <GroupsImIn group={groupName} />
              ))} */}
            </div>

            <div className="card col s12 m7 my-events-card">
              <div className="card-header my-events">
                <h5>My Events</h5>
              </div>
              <div className="card-content">
                <div className="card-stacked">
                {this.state.events.map(event => (
                  <HomeMyEvents
                    eventId={event.id}
                    eventName={event.name}
                    bannerImage={event.bannerImage}
                  />
                ))}
                </div>
              </div>
            </div>


            

            {/* {this.state.events.map(event => (
              <HomeEvents
                eventId={event.id}
                eventName={event.name}

              />
            ))} */}
          </div>
        </div>
      </IdentityContext.Provider>
    );
  }
}

export default Home;
