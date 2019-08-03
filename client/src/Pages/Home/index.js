import React, { Component } from "react";
import Groups from "../../components/Groups"
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
         <Groups className="col5"/> 
        </div>
        
        <h1>here's your home </h1>
        <img src="https://i.ibb.co/NKhd4rN/Screen-Shot-2019-08-01-at-9-42-13-PM.png"></img>

      </div>
    );
  }
}

export default Home;
