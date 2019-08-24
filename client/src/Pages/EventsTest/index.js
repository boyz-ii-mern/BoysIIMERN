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
  defaultImage =
    "https://cdn.pixabay.com/photo/2015/12/15/09/04/banner-1093909__340.jpg";
  state = {
    username: "",
    password: "",
    user: {},
    loggedIn: false,
    groupId: "" || ["no group id"],
    event: {},
    members: [],
    comments: "" || ["no starting comments cuz i have no friends"],
    bannerImage: EventsTest.defaultImage
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

        axios.get("/api/events/detail/" + id).then(next => {
          if (next.data) {
            // console.log("get events daniel", next.data.data);
            console.log("+++++++++++++++++next.data:", next.data.data);
            const image = next.data.data.bannerImage;
            this.setState({
              event: next.data.data,
              groupId: next.data.data.GroupId,
              bannerImage: !image ? EventsTest.bannerImage : image
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

                  // let memberS = this.state.members;
                  // // console.log("this is memberS state", memberS)
                  // let memberSuperlatives = memberS.map(thing => {
                  //   return {
                  //     id: thing.id,
                  //     superlative: thing.superlative
                  //   };
                  // });

                  // axios.get("/api/superlatives/byEvent/" + id).then(nextt => {
                  //   if (nextt.data) {
                  //     console.log("these are the superlatives by event ID", next.data)
                  //     let superlativeList = nextt.data.data.superlatives;
                  //     // console.log("these are superlativeList", superlativeList);
                  //     let newSuperlativeApi = superlativeList.map(thing => {
                  //       return {
                  //         id: thing.UserId,
                  //         superlative: thing.text
                  //       };
                  //     });

                  //     var output = [];

                  //     newSuperlativeApi.forEach(function(item) {
                  //       var existing = output.filter(function(v, i) {
                  //         return v.id == item.id;
                  //       });
                  //       if (existing.length) {
                  //         var existingIndex = output.indexOf(existing[0]);
                  //         output[existingIndex].superlative = output[
                  //           existingIndex
                  //         ].superlative.concat(item.superlative);
                  //       } else {
                  //         if (typeof item.superlative == "string")
                  //           item.superlative = [item.superlative];
                  //         output.push(item);
                  //       }

                  //     });
                  //     console.log("this is output and this works fine", output);
                      // console.log("what is memberS", memberS)
//-------------------------------------------------------------------------------------------------------

                      // let arr3 = [];
                      // //!SOMETHING IS WRONG HERE WITH ASSIGNMING. 
                      // memberS.forEach((itm, i) => {
                      //   arr3.push(Object.assign({}, itm, output[i]));
                      // });
//-------------------------------------------------------------------------------------------------------




                      // console.log("new array", arr3);
                      // console.log("tester", arr3[0].superlative);
                      // let testerSup = arr3[0].superlative;

                      // console.log("random supppp", randomTest);
                      //no way this works---
                      // console.log("superlative length", typeof(randomArr3[0].superlative))
                      // let randomArr3 = arr3.map(superlative => {
                      //   if (typeof(superlative.superlative) === "string") {
                      //     return {
                      //       avatar: superlative.avatar,
                      //       email: superlative.email,
                      //       firstName: superlative.firstName,
                      //       id: superlative.id,
                      //       lastName: superlative.lastName,
                      //       password: superlative.password,
                      //       superlative: superlative.superlative
                      //     };
                      //   }
                      //   else{
                      //   return {
                      //     avatar: superlative.avatar,
                      //     email: superlative.email,
                      //     firstName: superlative.firstName,
                      //     id: superlative.id,
                      //     lastName: superlative.lastName,
                      //     password: superlative.password,
                      //     superlative:
                      //       superlative.superlative[
                      //         Math.floor(
                      //           Math.random() * superlative.superlative.length
                      //         )
                      //       ]
                      //   };
                      // }
                      // });
                      // console.log("this is randomArr3", randomArr3);

                      // this.setState({
                      //   members: randomArr3
                      // });
                      // console.log("latest members state", this.state);
                    }
                  });
                  //!End --------Logic to randomize superlative-----------------------------------------------------------
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
            //! COMMENTING OUT THE RANDOM LOGIC
          }
        });
      // }
    // });
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
                  event={this.state.event}
                  bannerImage={this.state.bannerImage}
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
