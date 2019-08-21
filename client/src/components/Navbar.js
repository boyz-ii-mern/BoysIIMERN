import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //<!super important to get router to work 
import axios from "axios";
import { IdentityContext } from "../identity-context";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

class Navbar extends Component {
    state = {
        username: "",
        password: "",
        user: {},
        loggedIn: false
    }

    componentDidMount() {
        M.AutoInit();
        // initialize materialize plugin for mobile menu???
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            // var instances = M.Sidenav.init(elems, options);
        });

        // check for logged in user
        axios.get("/api/user")
            .then(response => {
                if (response.data) {
                    console.log("USER FROM API", response.data)
                    this.setState({
                        user: response.data,
                        userStateInfo: `${response.data.username} is logged in`,
                        loggedIn: true
                    })
                }
            })
    }

    handleOnClick = event => {
        if (this.state.loggedIn == false) {
            event.preventDefault();
            window.location.href = "/login";
        } else {
            event.preventDefault();
            axios.post("/api/user/logout")
                .then(response => {
                    this.setState({
                        errorMessage: "",
                        user: {},
                        loggedIn: false
                    })
                    window.location.href = "/";
                })
        }
    }

    render() {
        const loggedIn = this.state.loggedIn;
        console.log("this is loggedIn", loggedIn);
        let home;
        let createEvent;
        let createGroup;

        if (loggedIn == true) {
            home = <li><Link to='/home'>Home</Link></li>;
            createEvent = <li><Link to='/createGroup'>Create Group</Link></li>;
            createGroup = <li><Link to='/createEvent'>Create Event</Link></li>;
        }

        return (
            <nav className="likely-navbar row">
                <IdentityContext.Provider value={{
                    user: this.state.user,
                    loggedIn: this.state.loggedIn,
                    login: this.login,
                    logout: this.logout
                }}></IdentityContext.Provider>

                <div className="nav-wrapper">
                    <a href="/" className="brand-logo"><img src="../Images/likely.png" width="100px" height="auto" /> </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {/* <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/createGroup'>Create Group</Link></li>
                            <li><Link to='/createEvent'>Create Event</Link></li>              */}
                        {home}
                        {createEvent}
                        {createGroup}

                        <IdentityContext.Consumer>
                            {({ user, logout }) => (
                                <button className="waves-effect waves-light btn add-comment-submit" onClick={this.handleOnClick}>{this.state.loggedIn == true ? `Log Out` : `Login`}</button>
                            )}
                        </IdentityContext.Consumer>

                    </ul>

                    <ul className="collapsible sidenav" id="mobile-demo">
                        {/* <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/createGroup'>Create Group</Link></li>
                        <li><Link to='/createEvent'>Create Event</Link></li> */}
                        {home}
                        {createEvent}
                        {createGroup}

                        <li>
                            <IdentityContext.Consumer>
                                {({ user, logout }) => (
                                    <button className="waves-effect waves-light btn add-comment-submit" onClick={this.handleOnClick}>{this.state.loggedIn == true ? `Log Out` : `Login`}</button>
                                )}
                            </IdentityContext.Consumer>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navbar