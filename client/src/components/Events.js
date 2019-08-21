import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //<!super important to get router to work 

import eventsTest from "./eventsTest.json"; //<--this is just a test variable object used to dynamically create each event


// console.log("this is eventsTest", eventsTest)

class Events extends Component {
    //set initial state
    state = {
        eventsTest
    }

    render() {
        return (
            <div className="card col s12 m7">
            <div className="card-header my-events valign-wrapper">
                <h5>My Events</h5>
                <Link to={"/formtest"}><button className="create-event-btn waves-effect waves-light btn">Create Event</button></Link>
            </div>
                <div className="card-content">
                <div className="card-stacked">


                        {this.state.eventsTest.map(thing => {
                  return (
                      <div className="section">
                      <Link to={"/events/" + thing.event}>
                        <strong>
                          {thing.id}: {thing.event}
                        </strong>
                      </Link>
                      <hr className="divider"></hr>
                      </div>
                  );
                })}

                    </div>
                    </div>
        </div>
        )
    }
}

export default Events;