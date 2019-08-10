import React, { Component } from "react";
import EventsName from "../eventsInGroup/event"


class GroupEvents extends Component {
    render() {
        return (
            <div className="card col">
            <div className="card-header">
                <h5>Events</h5>
            </div>
            <EventsName />
            <EventsName />
            <EventsName />
            <EventsName />
            
          
        </div>
        )
    }
}

export default GroupEvents;