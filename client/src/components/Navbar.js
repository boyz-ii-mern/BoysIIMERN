import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //<!super important to get router to work 


class Navbar extends Component {
   render () {
       return (
        <nav>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo"><img src="../Images/logo.png" width="150px" /> </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/events'>Topics</Link></li>
            </ul>
            </div>
        </nav>
       )
   }
}

export default Navbar