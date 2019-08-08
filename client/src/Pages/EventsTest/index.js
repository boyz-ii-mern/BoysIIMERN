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

class EventsTest extends Component {
  state = {

  };

  componentDidMount() {

    console.log("dijfaowofeiajowfa", this.props.match.params.id);

    this.setState({
        "event":this.props.match.params.id
    })

  }

  render() {
    return (
        <div className="row">
          <div className="col s12 m4 l3 side-content">
          <h3>{this.state.event}</h3>
            <GroupMembers />
            {/* <GroupEvents /> */}
          </div>
         <div className="col s12 m8 l9 event-content">
           <EventContainer />
         </div>
         
           
        </div>
    );
  }
}




export default EventsTest;
