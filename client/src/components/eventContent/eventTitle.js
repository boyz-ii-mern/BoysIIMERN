import React, { Component } from "react";
import Moment from 'react-moment';

function EventTitle (props) {
    // console.log("passed in time and headres", props)
    // console.log("date", props.date)

        return (
            <div className="event-title">
               <div className="event-title-container valign-wrapper">
                    <div className="event-date">
                        <h4 className="event-date-day">
                            {/* below "Do" changes the date */}
                        <Moment format={"Do"}>{props.date}</Moment>
                        </h4>
                        <h4 className="event-date-month">
                            {/* below "MMM" changes the month */}
                        <Moment format={"MMM"}>{props.date}</Moment>
                        </h4>
                    </div>
                    <div className="event-name-location">
                        <h4 className="event-location">{props.name}</h4>
                        <p>{props.location}</p>
                    </div>
               </div>
                <hr className="event-divider"></hr>
            </div>
        )
    }

export default EventTitle;