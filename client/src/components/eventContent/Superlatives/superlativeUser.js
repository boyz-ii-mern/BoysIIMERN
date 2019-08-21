import React from "react";
import User from "../../groupMembers/UserCard";

function SuperlativeUser(props) {
    const {superlative} = props
    return (
        <div className="section user-section valign-wrapper col s12 m6">
            {/* update source to database */}
            <img src={superlative.User.avatar} alt="" className="circle responsive-img superlative-user-image" />
            <div className="section">
                {/* update username to database */}
                <h6>{`${superlative.User.firstName} ${superlative.User.lastName}`}</h6>
                {/* pass as children to re-use the component! */}

                {/* update superlative to database */}
                <p>{superlative.text}</p>
            </div>
            <div className="divider"></div>

        </div>
    )
}

export default SuperlativeUser;