import React, { Component } from "react";
import Groups from "../../components/Groups";
import Events from "../../components/Events";
import UserProfile from "../../components/profile/userProfile";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Home extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col m5 side-content">
            <UserProfile />
            <Groups /> 
          </div>
          <Events className="col7"/>
        
        </div>
      </div>
    );
  }
}

export default Home;
