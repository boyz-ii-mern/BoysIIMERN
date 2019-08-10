import React, { Component } from "react";
import axios from "axios";
import { IdentityContext } from "../../identity-context";

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
                        userStateInfo: `${response.data.username} is logged in`
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
        axios.post("/api/user/login", { "username": this.state.username, "password": this.state.password })
            .then(response => {
                console.log("this is login response: ", response)
                if (response.status == 200){
                    this.setState({
                        user: response.data,
                        loggedIn: true,
                        username: "",
                        password: "",
                        errorMessage: ""
                    })
                    window.location.href = "/home";
                }
                
            })
            .catch(error => {
                // console.log("LOGIN ERROR")
                this.setState({
                    user: {},
                    logginId: false,
                    errorMessage: "Invalid Login, please try again"
                })
            })
    }

    logout = event => {
        event.preventDefault();
        axios.post("/api/user/logout")
            .then(response => {
                this.setState({
                    errorMessage: "",
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
                <div className="card col sm12 m10 l8 form-card">
                    <div className="card-header">
                        <h5>Log In</h5>
                    </div>
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
                                <button className="waves-effect waves-light btn create-form-submit"type="submit"
                                    name="submit"
                                    value="Login"
                                    onClick={login}>
                                    Submit
                                </button>
                                <p>Don't have an account?</p>
                                <button onClick={this.handleSignUp} className="waves-effect waves-light btn sign-up-btn">Sign Up</button>
                               
                            </form>
                        )}
                    </IdentityContext.Consumer>
                </div>
            </IdentityContext.Provider>
        );
    }
}

export default Login;
