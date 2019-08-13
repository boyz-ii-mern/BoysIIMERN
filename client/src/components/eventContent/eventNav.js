import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //<!super important to get router to work 
import eventsTest from "../eventsTest.json"; //<--this is just a test variable object used to dynamically create each event

class EventNav extends Component {
    state = {
        eventsTest
    }

    render () {
        return (
            <div className="events-nav">

                <a href="">Comments</a>

                {/* Testing to see if this will create a path to an event-linked photobook... */}
                {/* This works in that the photobook/:id pops up, but needs fixing, as it maps the entire array rather than the single event we're in... Will use this now, for testing purposes. */}
                <div>
                     {this.state.eventsTest.map(thing => {
                  return (
                      <Link to={"/photos/" + thing.event} >
                        Photo Gallery
                      </Link>
                  );
                })}
            </div>

                <a href="">Superlatives</a>

            </div>

        )
    }
}

export default EventNav;