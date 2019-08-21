import React, { Component } from "react";
import axios from "axios";
import { IdentityContext } from "../../identity-context";
import AvatarLoad from "./avatarLoad";

// import User from "../../components/User";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.childHandler = this.childHandler.bind(this);
    };

    state = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        avatar: "",
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
                        userStateInfo: `${response.data.username} is logged in`,
                        loggedIn: true
                    })
                }
            });
    }

    // Receive information from avatarLoad
    childHandler(avatarLink) {
        this.setState({
            avatar: avatarLink
        }, () => console.log("Updated State: ", this.state.avatar));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    signup = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        if (this.state.username == "" || this.state.password == "" || this.state.firstName == "" || this.state.lastName == "" || this.state.superlative == "") {
            window.scrollTo(0, 0);
            this.setState({
                errorMessage: "There is an Error"
            })
        } else {
            axios.post("/api/user/signup", {
                "email": this.state.username,
                "password": this.state.password,
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "avatar": this.state.avatar,
                "superlative": this.state.superlative
            })
                .then((response) => {
                    let resOBJ = JSON.parse(response.config.data);
                    console.log("this is resOBJ", resOBJ);
                    axios.post("/api/user/login", { "username": resOBJ.email, "password": resOBJ.password })
                        .then((response) => {
                            console.log("this is sign up response: ", response)
                            if (response.status == 200) {
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
                            console.log("Sign Up ERROR", error)
                            this.setState({
                                user: {},
                                logginId: false,
                                errorMessage: "User Already Exists"
                            })
                        })
                })
                
        }

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
                        {({ user, loggedIn, login }) => (
                            <div className="row create-form-row">
                                <div className="card col sm12 m10 l8 form-card">
                                    <div className="card-header">
                                        <h5>Create An Account</h5>
                                    </div>
                                    <form className="form create-event-form">

                                        <AvatarLoad
                                            action={this.childHandler}
                                        />
                                        <input
                                            type="hidden"
                                            name="avatar"
                                            value={this.state.avatar}
                                            onChange={this.handleInputChange}
                                        />
                                        <br />
                                        <h4>{this.state.errorMessage == "User Already Exists" ? this.state.errorMessage : ""}</h4>
                                        <h5 class="center-align red-text text-darken-3">{this.state.errorMessage && this.state.username == "" ? "Please Enter your Email" : ""}</h5>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Email"
                                            value={this.state.username}
                                            onChange={this.handleInputChange} /><br />
                                        <h5 class="center-align red-text text-darken-3">{this.state.errorMessage && this.state.password == "" ? "Please Enter a Password" : ""}</h5>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handleInputChange} /><br />
                                        <h5 class="center-align red-text text-darken-3">{this.state.errorMessage && this.state.firstName == "" ? "Please enter your First Name" : ""}</h5>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            onChange={this.handleInputChange} /><br />
                                        <h5 class="center-align red-text text-darken-3">{this.state.errorMessage && this.state.lastName == "" ? "Please enter your Last Name" : ""}</h5>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            onChange={this.handleInputChange} /><br />
                                        {/* <input
                                            type="text"
                                            name="avatar"
                                            placeholder="Avatar"
                                            value={this.state.avatar}
                                            onChange={this.handleInputChange} /><br /> */}
                                        <h5 class="center-align red-text text-darken-3">{this.state.errorMessage && this.state.superlative == "" ? "Please enter your Superlative" : ""}</h5>
                                        <input
                                            type="text"
                                            name="superlative"
                                            placeholder="Superlative"
                                            value={this.state.superlative}
                                            onChange={this.handleInputChange} /><br />
                                        <button className="waves-effect waves-light btn create-form-submit" type="submit" name="submit" value="SignUp" onClick={this.signup}>submit</button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </IdentityContext.Consumer>
                </div>

            </IdentityContext.Provider>
        );
    }
}

export default SignUp;
