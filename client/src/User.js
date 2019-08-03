import React, { useContext } from "react";
import { IdentityContext } from "./identity-context";

function User() {

    const identity = useContext(IdentityContext)
    
    return (
            <div style={{width: 200, height: 200, backgroundColor: "darkBlue", color: "white"}}>
                <h3>{identity.user.username}</h3>
            </div>
    )
}

export default User;