import React, { Component } from "react";
import GroupMembers from "../../components/groupMembers/index";
import GroupEvents from "../../components/eventsInGroup/index";
import EventContainer from "../../components/eventContent/eventContainer";
import ImageHeader from "../../components/eventContent/Comments/imageHeader";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Events extends Component {
  state = {

  };


  render() {
    return (
        <div className="row">
          <ImageHeader />
          <div className="col s12 m4 l3 side-content">
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




export default Events;
