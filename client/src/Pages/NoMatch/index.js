import React, { Component } from "react";
import ErrorPage from "../../components/404";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class NoMatch extends Component {
  state = {

  };


  render() {
    return (
      <div className="error-container valign-wrapper">
        <ErrorPage />
      </div>
    );
  }
}

export default NoMatch;
