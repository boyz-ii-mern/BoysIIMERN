import React, { Component } from "react";
import { IdentityContext } from "../../identity-context";
import axios from "axios";

class UserProfile extends Component {

    state = {
        username: "",
        password: "",
        user: {},
        loggedIn: false
    };
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

    render() {
        return (
            <div className=" card section profile-card valign-wrapper">
                <div className="profile-section user-section valign-wrapper">
                    {/* update source to database */}
                    <IdentityContext.Provider value={{
                        user: this.state.user,
                        loggedIn: this.state.loggedIn
                    }}>
                    </IdentityContext.Provider>
                    {/* <img src="../Images/avatar-01.png" alt="" className="circle responsive-img profile-image" /> */}
                    <div className="section">
                        {/* update username to database */}
                        <IdentityContext.Consumer>
                            {({ user, loggedIn }) => (

                                <img src={this.state.loggedIn ? `${this.state.user.photo}` : `../Images/avatar-01.png`} alt="" className="circle responsive-img profile-image" />

                            )}
                        </IdentityContext.Consumer>
                        <IdentityContext.Consumer>
                            {({ user, loggedIn }) => (

                                <h4>{this.state.loggedIn ? `${this.state.user.firstName}` : `Username`}</h4>
                            )}
                        </IdentityContext.Consumer>
                        {/* <h4>User Name</h4> */}
                        {/* update superlative to database */}
                        <IdentityContext.Consumer>
                            {({ user, loggedIn }) => (

                                <p>{this.state.loggedIn ? `${this.state.user.superlative}` : `Most Likely to Do Something`}</p>
                            )}
                        </IdentityContext.Consumer>
                        {/* <p>Most Likely to Do Something</p> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;