import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //<!super important to get router to work
// import Events from "../Pages/Events"
import eventsTest from "./eventsTest.json"; //<--this is just a test variable object used to dynamically create each event
// import Events from "../Pages/Events";
// import EventsCard from "./eventsCard"

console.log("this is eventsTest", eventsTest);

function HomeEvents (props){

    return (
        <div className="card col s12 m7">
          <div className="card-header my-events">
            <h5>My Events</h5>
          </div>
          <div className="card-content">
            <div className="card-stacked">

              
                  <div className="section">

                    <Link to={"/events/" + props.eventName}>
                      <strong>
                        {props.eventId}: {props.eventName}
                      </strong>
                    </Link>
                    <hr className="divider" />
                  </div>
              
            
            </div>
          </div>
        </div>
      );
  }


export default HomeEvents;
