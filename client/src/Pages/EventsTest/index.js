import React, { Component } from "react";
import GroupMembers from "../../components/groupMembers/index";
import EventContainer from "../../components/eventContent/eventContainer";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { IdentityContext } from "../../identity-context";
import axios from "axios";
import ImageHeader from "../../components/eventContent/Comments/imageHeader";
import api from "../../api";
import AddComment from "../../components/eventContent/Comments/addComment";

class EventsTest extends Component {
  //----------------------testing-----------------------------
  constructor(props) {
    super(props);
    this.childHandler = this.childHandler.bind(this);
  }

  childHandler(commentReceived) {
    const { id } = this.props.match.params;

    // console.log("this is sidd", id)

    axios
      .post("/api/events/comments/" + id, {
        body: commentReceived,
        userId: this.state.user.userId
      })
      .then(response => {
        this.componentDidMount();
      });
  }

  state = {
    username: "",
    password: "",
    user: {},
    loggedIn: false,
    groupId: "" || ["no group id"],
    events: "" || ["no events", "get out nerd"],
    members: [],
    comments: "" || ["no starting comments cuz i have no friends"],
    bannerImage: "" || ["no group banner"]
  };

  componentDidMount() {
    //REALLY IMPORTANT, {ID} below for the EVENT getting pulled from URL
    // console.log("this is state", this.state)
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
                  console.log("members data", next.data);
                  this.setState({
                    members: next.data.data.members
                  });

                  //!Begin --------Logic to randomize superlative-----------------------------------------------------------

                  let memberS = this.state.members;
                  let memberSuperlatives = memberS.map(thing => {
                    return {
                      id: thing.id,
                      superlative: thing.superlative
                    };
                  });

                  axios.get("/api/superlatives/byEvent/" + id).then(nextt => {
                    if (nextt.data) {
                      // console.log("these are the superlatives by event ID", next.data)
                      let superlativeList = nextt.data.data.superlatives;
                      // console.log("these are superlativeList", superlativeList);
                      let newSuperlativeApi = superlativeList.map(thing => {
                        return {
                          id: thing.UserId,
                          superlative: thing.text
                        };
                      });

                      var output = [];

                      newSuperlativeApi.forEach(function(item) {
                        var existing = output.filter(function(v, i) {
                          return v.id == item.id;
                        });
                        if (existing.length) {
                          var existingIndex = output.indexOf(existing[0]);
                          output[existingIndex].superlative = output[
                            existingIndex
                          ].superlative.concat(item.superlative);
                        } else {
                          if (typeof item.superlative == "string")
                            item.superlative = [item.superlative];
                          output.push(item);
                        }
                      });

                      let arr3 = [];

                      memberS.forEach((itm, i) => {
                        arr3.push(Object.assign({}, itm, output[i]));
                      });

                      // console.log("new array", arr3);
                      // console.log("tester", arr3[0].superlative);
                      let testerSup = arr3[0].superlative;
        
                      // console.log("random supppp", randomTest);
                      //no way this works---

                      let randomArr3 = arr3.map(superlative => {
                        return {
                          avatar: superlative.avatar,
                          email: superlative.email,
                          firstName: superlative.firstName,
                          id: superlative.id,
                          lastName: superlative.lastName,
                          password: superlative.password,
                          superlative:
                            superlative.superlative[
                              Math.floor(
                                Math.random() * superlative.superlative.length
                              )
                            ]
                        };
                      });
                      // console.log("this is randomArr3", randomArr3);

                      this.setState({
                        members: randomArr3
                      });
                      // console.log("latest members state", this.state);
                    }
                  });
                  //!End --------Logic to randomize superlative-----------------------------------------------------------
                }
              });

            //call to grab group banner associated by group id
            axios
              .get("/api/groups/detail/" + next.data.data.GroupId)
              .then(next => {
                if (next.data) {
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
                });
              }
            });
          }
        });
      }});
  }

  render() {
    console.log("latest state", this.state);
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
              <ImageHeader dataFromParent={this.state.bannerImage} />
              <div className="col s12 m4 l3 side-content">
                {/* <h3 /> */}

                <GroupMembers members={this.state.members} />

                {/* Currently commented out GroupEvents */}
                {/* <GroupEvents /> */}
              </div>
              <div className="col s12 m8 l9 event-content">
                {/* <EventContainer comments={this.state.staticEvent.comments}/> */}
                <EventContainer
                  //----------------------testing-----------------------------
                  action={this.childHandler}
                  //----------------------testing-----------------------------
                  userId={this.state.user.userId}
                  members={this.state.members}
                  comments={this.state.comments}
                  event={this.state.events}
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
