import React, { Component } from "react";
import { IdentityContext } from "../../identity-context";
import axios from "axios";
import GroupMembers from "../../components/groupMembers/index";
import ImageHeader from "../../components/eventContent/Comments/imageHeader";
import HomeMyEvents from "../../components/HomeMyEvents";



class HomeGroups extends Component {


state = {
    username: "",
    password: "",
    user:{},
    loggedIn: false,
    events: "" ||["ting ma ma de hua"],
    members: "" || ["nada mucho"]
};

componentDidMount(){
    const id = this.props.match.params.gid;
    // console.log("this is id", this.props.match.params.gid)

    axios.get("/api/user").then(response => {
        if (response.data) {
          // console.log("USER FROM API", response.data);
          this.setState({
            user: response.data,
            userStateInfo: `${response.data.username} is logged in`,
            loggedIn: true
          });


    axios
    .get("/api/groups/detail/" + id)
    .then(next => {
      if (next.data) {
        //   console.log("next data for grps", next.data)
        this.setState({
        groupName: next.data.data.groupInfo.name,
        events: next.data.data.groupInfo.Events,
        members: next.data.data.members
        });
      }
    });
    
}});
}

  render() {
    // console.log("latest Group state", this.state);
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

              <div className="col s12 profile-card">
                <h2 className="group-name-title">{this.state.groupName}</h2>
              </div>

              <div className="col s12 m4 side-content groups-home-card">
{/* <div className="card-header">
                        <h5>{this.state.groupName}</h5>
</div>

              <div className="col s12 m4 l3 side-content"> */}
                {/* <h3 /> */}

                <GroupMembers
                members={this.state.members}
                />

                {/* Currently commented out GroupEvents */}
                {/* <GroupEvents /> */}
              </div>
              <div className="col s12 m8 card my-events-card">
                <div className="card-header my-events">
                  <h5>Group Events</h5>
                </div>
                <div className="card-content">
                  <div className="card-stacked">
                  {this.state.events.map(event => (
                    <HomeMyEvents
                      eventId={event.id}
                      eventName={event.name}
                    />
                  ))}
                  </div>
              
              {/* <div className="card-content">
              
                <div className="card-stacked">
                    
               

                {this.state.events.map(event => (
                  <HomeMyEvents
                    eventId={event.id}
                    eventName={event.name}
                  />
                ))} */}
                </div>
              </div>

            </div>
          )}
        </IdentityContext.Consumer>
      </IdentityContext.Provider>
    );
  }
}

export default HomeGroups;
