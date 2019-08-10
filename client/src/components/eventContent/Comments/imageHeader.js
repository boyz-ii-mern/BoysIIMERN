import React, { Component } from "react";

//.get image uploded by user


class ImageHeader extends Component {
    render() {
        return (
        <div className="row valign-wrapper">
            <div className="events-header col s12 m12 l12"> 
            {/* <h1>Group Name</h1> */}
            <img src="../Images/testphoto.jpg" alt="" className="events-header-image"/>  
            </div>
        </div>
        )
    }
}

export default ImageHeader;