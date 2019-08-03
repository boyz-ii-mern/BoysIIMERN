import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //<!super important to get router to work 
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import NoMatch from "./Pages/NoMatch";
import Login from "./Pages/Login";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/login" component={Login} />

          {/* <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
