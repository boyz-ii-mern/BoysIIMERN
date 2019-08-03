import React from "react";

export const IdentityContext = React.createContext({
    user: {},
    loggedIn: false,
    logout: (event) => {},
    login: (event) => {}
})