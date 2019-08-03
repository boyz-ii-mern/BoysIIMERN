import React, { Component } from "react";
import axios from "axios";
import { IdentityContext } from "../../identity-context";

import User from "../../User";

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

  login = event => {
    event.preventDefault();
    axios.post("/api/user/login", {"username":this.state.username, "password": this.state.password})
      .then(response => {
        this.setState({
          user: response.data,
          loggedIn: true,
          username: "",
          password: "",
          errorMessage: ""
          })
        })
      .catch(error => {
        console.log("LOGIN ERROR")
        this.setState({
          user: {},
          logginId: false,
          errorMessage: "Error logging in"
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
        <div className="Login">
        <h1>React-Passport-Context</h1>
        <IdentityContext.Consumer>
          {({user, loggedIn}) => (
            <h2>{this.state.errorMessage 
              ? this.state.errorMessage 
              : loggedIn 
                ? `${user.username} is logged in` 
                : "Logged Out"}</h2>
          )}
        </IdentityContext.Consumer>
        <IdentityContext.Consumer>
          {({user, loggedIn, login}) => (
        <form>
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
          <input 
            type="submit"
            name="submit"
            value="Login"
            onClick={login} />
        </form>
        )}
        </IdentityContext.Consumer>
      </div>
      <div>
          <User />
      </div>
      </IdentityContext.Provider>
    );
  }
}

export default Login;
