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

                <a href="">Photo Gallery</a>

                <a href="">Superlatives</a>

            </div>

        )
    }
}

export default EventNav;