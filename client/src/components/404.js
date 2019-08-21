import React, { Component } from "react";

function ErrorPage() {
    return(
        <div className="row valign-wrapper">
            <div className="col s12 m6">
                <h1 className="error-title">404</h1>
                <h5 className="error-h5">This is not the page you are looking for.</h5>
                <h6 className="error-h6">Did you mean to come here? Probably not. Maybe hit the back button.</h6>
                <p className="error-p">Check your spelling. Did you misspell the url? You probably did. Don't worry, we'll keep your sad shame spelling to ourselves.</p>
            </div>
            <div className="col s12 m6">
                <img src="../Images/giphy-downsized.gif" alt="boysIImern"/>
                <p className="error-signoff">Sincerely, boyzIImern</p>
            </div>
        </div>
    )
}

export default ErrorPage