import React, { Component } from "react";

class Navbar extends Component {
   render () {
       return (
        <nav>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo"><img src="../Images/logo.png" width="150px" /> </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">home</a></li>
                <li><a href="/events">events</a></li>
            </ul>
            </div>
        </nav>
       )
   }
}

export default Navbar