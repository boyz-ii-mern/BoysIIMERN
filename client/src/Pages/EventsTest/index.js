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
import eventsTest from "../../components/eventsTest.json";
import ImageHeader from "../../components/eventContent/Comments/imageHeader";

// console.log("did i grab this?", eventsTest[0]);
class EventsTest extends Component {
    
  state = {
    staticEvent: eventsTest[0] || []
  };

  componentDidMount() {
    //! Use the below this.props.match.params.id when doing the api call to find by ID
    // console.log("dijfaowofeiajowfa", this.props.match.params.id);

    //TODO: Leon: for now, using static data
    // this.setState({
    //   staticEvent: eventsTest[0]
    // });
  }

  render() {
    return (
      <div className="row">
        <ImageHeader />
        <div className="col s12 m4 l3 side-content">
          <h3>{this.state.staticEvent.event}</h3>
       

          <GroupMembers member={this.state.staticEvent.members}/>

          {/* Currently commented out GroupEvents */}
          <GroupEvents />
        </div>
        <div className="col s12 m8 l9 event-content">
          <EventContainer comments={this.state.staticEvent.comments}/>
        </div>
      </div>
    );
  }
}

export default EventsTest;
