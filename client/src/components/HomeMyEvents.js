import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //<!super important to get router to work
// import Events from "../Pages/Events"
import eventsTest from "./eventsTest.json"; //<--this is just a test variable object used to dynamically create each event
// import Events from "../Pages/Events";
// import EventsCard from "./eventsCard"

// console.log("this is eventsTest", eventsTest);

function HomeMyEvents(props) {
  return (
  
          <div className="section">
            <Link to={"/events/" + props.eventId}>
              <h6>
                {props.eventName}
              </h6>
            </Link>
            <hr className="divider" />
          </div>
  );
}

export default HomeMyEvents;
