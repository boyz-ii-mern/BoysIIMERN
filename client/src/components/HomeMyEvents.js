import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //<!super important to get router to work
// import Events from "../Pages/Events"
import eventsTest from "./eventsTest.json"; //<--this is just a test variable object used to dynamically create each event
// import Events from "../Pages/Events";
// import EventsCard from "./eventsCard"
import Moment from 'react-moment';

// console.log("this is eventsTest", eventsTest);

function HomeMyEvents(props) {
  return (
  
          <div className="section">
            {/* <Link to={"/events/" + props.eventId}>
             
            </Link> */}
            <div className="event-title">
               <div className="event-title-container valign-wrapper">
                    <div className="event-date">
                        <h4 className="event-date-day">
                            {/* below "Do" changes the date */}
                        <Moment format={"Do"}>{props.date}</Moment>
                        </h4>
                        <h4 className="event-date-month">
                            {/* below "MMM" changes the month */}
                        <Moment format={"MMM"}>{props.date}</Moment>
                        </h4>
                    </div>
                    <div className="event-name-location">
                      <Link to={"/events/" + props.eventId}>
                        <h4 className="event-location">{props.eventName}</h4>
                      </Link>
                        <p>{props.location}</p>
                    </div>
               </div>
               <div className="divider"></div>
            </div>
          </div>
          
  );
}

export default HomeMyEvents;
