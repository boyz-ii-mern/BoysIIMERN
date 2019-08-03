import React, { Component } from "react";
import GroupMembers from "../../components/groupMembers/index";
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
          <GroupMembers className="col m3 l3" />
            
            <h1>HERE IS A LIST OF ALL OF OUR EVENTS</h1>
            <img src="https://i.ibb.co/R0DCnsM/Screen-Shot-2019-08-01-at-9-42-27-PM.png"></img>
        </div>
    );
  }
}




export default Events;
