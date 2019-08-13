import React, { Component } from "react";
import { IdentityContext } from "../../identity-context";
// import axios from "axios";

class UserProfile extends Component {
    render() {
        return (
            <IdentityContext.Consumer>
                {({ user, loggedIn }) => (
                    
                    <div className=" card section profile-card valign-wrapper">
                        <div className="profile-section user-section valign-wrapper">
                            {/* update source to database */}
                            {/* <IdentityContext.Provider value={{
        user: this.state.user,
        loggedIn: this.state.loggedIn
    }}>
    </IdentityContext.Provider> */}
                            {/* <img src="../Images/avatar-01.png" alt="" className="circle responsive-img profile-image" /> */}
                            <div className="section">
                                {/* update username to database */}

                                <img src={loggedIn ? `${user.photo}` : `../Images/avatar-01.png`} alt="" className="circle responsive-img profile-image" />

                                <h4>{loggedIn ? `${user.firstName}` : `Username`}</h4>

                                {/* <h4>User Name</h4> */}
                                {/* update superlative to database */}

                                <p>{loggedIn ? `${user.superlative}` : `Most Likely to Do Something`}</p>

                                {/* <p>Most Likely to Do Something</p> */}
                            </div>
                        </div>
                    </div>
                )}
            </IdentityContext.Consumer>

        )
    }
}

export default UserProfile;