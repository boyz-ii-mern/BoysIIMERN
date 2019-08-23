import React, { Component } from "react";
import EventTitle from "./eventTitle";
import EventNav from "./eventNav";
import Comments from "./Comments/commentSection";
import RenderTabs from "./eventTabs/renderTabs";
// import TabsTest from "./tabContent";

function EventContainer(props) {
    console.log("eventContainer", props)
    return (
        <div className="card col s12 m8 l9 events-card">
            <div className="card-header">
                <h5>Event Recap</h5>
            </div>
            <div className="events-section">
                <EventTitle
                    name={props.event.name}
                    location={props.event.location}
                    date={props.event.date}
                />
            </div>
            <RenderTabs comments={props.comments}
                eventId={props.event.id}
                userId={props.userId}
                friends={props.members}
                action={props.action}
                bannerImage={props.bannerImage}
            />
            {/* <EventNav />
            <Comments /> */}
            {/* <TabsTest /> */}

            {/* event date/title component */}
            {/* event nav component */}

            {/* -------- ROUTING LINKS? ---------- */}
            {/* ------------":groupname/comments" --------------
            leave comment Component
                --input field
                --submit button
            component to generate comments and append them to group
                --map over data to generate new comment div with a user component
            */}

            {/* ----------------":groupname/photos" ---------------
            link to upload a photo
            component to display photo gallery 
            *** if time allows *** modal to show photo larger when a photo is clicked */}

            {/* ------------":groupname/superlatives" --------------
            list of group members with their superlatives
            link to add a new superlative to a group member
            notify other users a new superlative has been suggested
            other users in group vote to accept or reject new superlative???
            */}




        </div>
    )
}


export default EventContainer;