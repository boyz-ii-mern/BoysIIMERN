import React, { Component } from "react";
import axios from "axios";
import { IdentityContext } from "../../identity-context";
import api from '../../api'

import User from "../../components/User";

class Login extends Component {
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSignUp = event => {
        event.preventDefault();
        window.location.href = "/signup"
    }

    login = event => {
        event.preventDefault();
        api.user.login(this.state.username, this.state.password)
            .then(userData => {
                if (userData.error) {
                    console.log(userData.error)
                    this.setState({
                        user: {},
                        logginId: false,
                        errorMessage: "Invalid Login, please try again"
                    })
                } else {
                    console.log("this is login response: ", userData)
                    this.setState({
                        user: userData,
                        loggedIn: true,
                        username: "",
                        password: "",
                        errorMessage: ""
                    })
                    window.location.href = "/home";
                }
            })
            .catch(error => {
                console.log(error.message)
                this.setState({
                    user: {},
                    logginId: false,
                    errorMessage: "Invalid Login, please try again"
                })
            })
    }

    logout = event => {
        event.preventDefault();
        api.user.logout()
            .then(data => {
                let errorMessage = ""
                if (data.error) {
                    errorMessage = data.error
                }
                this.setState({
                    errorMessage: errorMessage,
                    user: {},
                    loggedIn: false
                })
            })
    }

    render() {
        return (
            <IdentityContext.Provider value={{
                user: this.state.user,
                loggedIn: this.state.loggedIn,
                login: this.login,
                logout: this.logout
            }}>
                <div className="card col sm12 m10 l8 form-card sign-in-form-card">
                    <h1 className="sign-in-header">Sign In</h1>
                    <IdentityContext.Consumer>
                        {({ user, loggedIn }) => (
                            <h4>{this.state.errorMessage
                                ? this.state.errorMessage
                                : loggedIn
                                    ? `Logged In!`
                                    : ""}</h4>
                        )}
                    </IdentityContext.Consumer>
                    <IdentityContext.Consumer>
                        {({ user, loggedIn, login }) => (
                            <form className="form create-event-form">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleInputChange} /><br />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange} /><br />
                                <button className="waves-effect waves-light btn create-form-submit" type="submit"
                                    name="submit"
                                    value="Login"
                                    onClick={login}>
                                    Submit
                                </button>
                                <p>Don't have an account?</p>
                                <button onClick={this.handleSignUp} className="waves-effect waves-light btn sign-up-button">Sign Up</button>

                            </form>
                        )}
                    </IdentityContext.Consumer>
                </div>
            </IdentityContext.Provider>
        );
    }
}

export default Login;
