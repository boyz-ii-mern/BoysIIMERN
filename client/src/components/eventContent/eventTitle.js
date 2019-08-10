import React, { Component } from "react";

class EventTitle extends Component {
    render() {
        return (
            <div className="event-title">
               <div className="event-title-container valign-wrapper">
                    <div className="event-date">
                        <h4 className="event-date-day">23</h4>
                        <h4 className="event-date-month">JULY</h4>
                    </div>
                    <div className="event-name-location">
                        <h4>Ice Skating at the Park</h4>
                        <p>Maggie Daley Park</p>
                    </div>
               </div>
                <hr className="event-divider"></hr>
            </div>
        )
    }
}

export default EventTitle;