import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //<!super important to get router to work 
import axios from "axios";
import { IdentityContext } from "../identity-context";

class Navbar extends Component {
    state = {
        username: "",
        password: "",
        user: {},
        loggedIn: false
    }

    componentDidMount() {
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

    // login = event => {
    //     event.preventDefault();
    //     window.location.href("/login");
    // }

    // logout = event => {
    //     event.preventDefault();
    //     axios.post("/api/user/logout")
    //         .then(response => {
    //             this.setState({
    //                 errorMessage: "",
    //                 user: {},
    //                 loggedIn: false
    //             })
    //         })
    // }

    render() {
        //    let buttonText = this.state.loggedIn ? "Log Out" : "Log In"
        //    console.log("this is the buttonText",buttonText);
        return (
            <nav className="likely-navbar row">
                <IdentityContext.Provider value={{
                    user: this.state.user,
                    loggedIn: this.state.loggedIn,
                    login: this.login,
                    logout: this.logout
                }}></IdentityContext.Provider>

                <div className="nav-wrapper">
                    <a href="/" className="brand-logo"><img src="../Images/likely.png" width="100px" height="auto"/> </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/home'>Home</Link></li>
                        {/* <li><Link to='/events'>Events</Link></li> */}
                        <li><Link to='/formtest'>Create Event</Link></li>
                        <IdentityContext.Consumer>
                            {({ user, logout }) => (
                                <button className="waves-effect waves-light btn add-comment-submit" onClick={this.handleOnClick}>{this.state.loggedIn == true ? `Log Out` : `Login`}</button>
                            )}
                        </IdentityContext.Consumer>

                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navbar