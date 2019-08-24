import React, { Component } from "react";
import { IdentityContext } from "../../identity-context";
import api from '../../api'
api.user.allEventsAttending(1).then(console.log).catch(console.log)

class UserProfile extends Component {
    render() {
        
        return (
            <IdentityContext.Consumer>
                {({ user, loggedIn }) => (
                    
                    <div className=" card section profile-card valign-wrapper">
                        <div className="profile-section user-section valign-wrapper">
                            
                            <div className="section">
                                {/* update username to database */}

                                <img src={user.avatar == null || user.avatar == "" ? `../Images/avatar-01.png` : `${user.avatar}`} alt="" className="circle responsive-img profile-image" />

                                <h4 className="profile-name">{loggedIn ? `${user.firstName}` : `Username`}</h4>
                                <h6 className="profile-superlative">{loggedIn ? `${user.superlative}` : `Most Likely to Do Something`}</h6>

                            </div>
                        </div>
                    </div>
                )}
            </IdentityContext.Consumer>

        )
    }
}

export default UserProfile;