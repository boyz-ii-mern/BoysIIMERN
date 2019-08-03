import React, { Component } from "react";

class UserProfile extends Component {
    render() {
        return (
            <div className=" card section profile-card valign-wrapper">
                <div className="profile-section user-section valign-wrapper">
                    {/* update source to database */}
                    <img src="../Images/avatar-01.png" alt="" className="circle responsive-img profile-image"/>
                    <div className="section">
                        {/* update username to database */}
                        <h4>User Name</h4>
                        {/* update superlative to database */}
                        <p>Most Likely to Do Something</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;