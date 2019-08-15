import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //<!super important to get router to work
// import Events from "../Pages/Events"
import eventsTest from "./eventsTest.json"; //<--this is just a test variable object used to dynamically create each event
// import Events from "../Pages/Events";
// import EventsCard from "./eventsCard"

console.log("this is eventsTest", eventsTest);

class HomeEvents extends Component {
  //set initial state
  state = {
    eventsTest
  };

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
          </div>
          <div className="card-content">
            <div className="card-stacked">
              {/* Currently, state is set to this eventsTest object. Once backend has the api calls set up, we can call the API via a componentDidMount() and set state to that object.  */}
              
          
              
              {this.state.eventsTest.map(thing => {
                return (
                  <div className="section">
                    
                {/* The below links will lead to /Pages/EventsTest module */}
                    <Link to={"/events/" + thing.event}>
                      <strong>
                        {thing.id}: {thing.event}
                      </strong>
                    </Link>
                    <hr className="divider" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
  }
}

export default HomeEvents;
