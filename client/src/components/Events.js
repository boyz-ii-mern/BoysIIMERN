import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //<!super important to get router to work 

import eventsTest from "./eventsTest.json"; //<--this is just a test variable object used to dynamically create each event


console.log("this is eventsTest", eventsTest)

class Events extends Component {
    //set initial state
    state = {
        eventsTest
    }

    // //when component mounts, load all events and save them to this.state.events
    // componentDidMount() {
    //     //run logic to map data into divs
    //     this.loadEvents();
    // }

    // loadEvents = () => {
    //     API.getEvents() 
    //     // .then(res => events: res.data AND DO MORE COOL SHIT)
    //     //.catch(err)
    // }
    //don't need state on this, it's not dynamically changing
    //.get("/") call to render list of events 


    render() {
        return (
            <div className="card col s12 m7">
            <div className="card-header my-events">
                <h5>My Events</h5>
                <button className="create-event-btn">Create Event</button>
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