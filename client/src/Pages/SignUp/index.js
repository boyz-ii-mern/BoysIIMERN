import React, { Component } from "react";
import axios from "axios";
import { IdentityContext } from "../../identity-context";

// import User from "../../components/User";

class SignUp extends Component {
    state = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        photo: "",
        superlative: "",
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

    signup = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);

        
        axios.post("/api/user/signup", { "email": this.state.username, 
        "password": this.state.password, 
        "firstName": this.state.firstName, 
        "lastName": this.state.lastName, 
        "photo": this.state.photo,
        "superlative": this.state.superlative})
            .then((response) => {
                let resOBJ =JSON.parse(response.config.data);
                console.log("this is resOBJ", resOBJ);
                axios.post("/api/user/login", { "username": resOBJ.email, "password": resOBJ.password })
                .then((response) => {
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
                    console.log("LOGIN ERROR")
                    this.setState({
                        user: {},
                        logginId: false,
                        errorMessage: "Error logging in"
                    })
                })
            })
      };

    render() {
        return (
            <IdentityContext.Provider value={{
                user: this.state.user,
                loggedIn: this.state.loggedIn,
                login: this.login,
                logout: this.logout
            }}>
                <div className="Login">
                    <IdentityContext.Consumer>
                    {({ user, loggedIn }) => (
                            <h4>{this.state.errorMessage
                                ? this.state.errorMessage
                                : loggedIn
                                    ? `Signed In!`
                                    : ""}</h4>
                        )}
                    </IdentityContext.Consumer>
                    <IdentityContext.Consumer>
                        {({ user, loggedIn, login }) => (
                            <div className="card col sm12 m10 l8 form-card">
                                <div className="card-header">
                                    <h5>Create An Account</h5>
                                </div>
                                <form className="form create-event-form">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Email"
                                        value={this.state.username}
                                        onChange={this.handleInputChange} /><br />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange} /><br />
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange} /><br />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange} /><br />
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="Photo"
                                        value={this.state.photo}
                                        onChange={this.handleInputChange} /><br />
                                    <input
                                        type="text"
                                        name="superlative"
                                        placeholder="Superlative"
                                        value={this.state.superlative}
                                        onChange={this.handleInputChange} /><br />
                                    <button className="waves-effect waves-light btn create-form-submit" type="submit" name="submit" value="SignUp" onClick={this.signup}>submit</button>
                                </form>
                            </div>
                        )}
                    </IdentityContext.Consumer>
                </div>
            
            </IdentityContext.Provider>
        );
    }
}

export default SignUp;
