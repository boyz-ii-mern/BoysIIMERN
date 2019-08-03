import React, { Component } from "react";
import GroupMembers from "../../components/groupMembers/index";
import GroupEvents from "../../components/eventsInGroup/index";
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
          <div className="col m3 side-content">
            <GroupMembers />
            <GroupEvents />
          </div>
         

            
            
        </div>
    );
  }
}




export default Events;
