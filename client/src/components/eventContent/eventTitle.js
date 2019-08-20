import React, { Component } from "react";

function EventTitle (props) {
    console.log("passed in time and headres", props)
        return (
            <div className="event-title">
               <div className="event-title-container valign-wrapper">
                    <div className="event-date">
                        <h4 className="event-date-day">23</h4>
                        <h4 className="event-date-month">JULY</h4>
                    </div>
                    <div className="event-name-location">
                        <h4>{props.name}</h4>
                        <p>{props.location}</p>
                    </div>
               </div>
                <hr className="event-divider"></hr>
            </div>
        )
    }

export default EventTitle;