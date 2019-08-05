import React, { Component } from "react";

class Events extends Component {
    render() {
        return (
            <div className="card col s12 m7">
            <div className="card-header">
                <h5>My Events</h5>
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