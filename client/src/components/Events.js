import React, { Component } from "react";

class Events extends Component {
    //set initial state
    // state = {
    //     events: [],
    //     eventName: "",
    //     eventLocation: ""
    // }

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
                        <div className="section">
                        <h5>Ice Skating at the Park</h5>
                        <p>Maggie Daley Park</p>
                        <div className="divider"></div>
                        </div>
                        <div className="section">
                        <h5>Girls' Night Out</h5>
                        <p>River North</p>
                        <div className="divider"></div>
                        </div>
                        <div className="section">
                        <h5>Wine and Web Dev</h5>
                        <p>Daniel's House</p>
                        <div className="divider"></div>
                        </div>
                    </div>
                    </div>
        </div>
        )
    }
}

export default Events;