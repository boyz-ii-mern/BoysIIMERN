import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //<!super important to get router to work 
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import NoMatch from "./Pages/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Photobook from "./Pages/Photobook";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Navbar />
        <div className="container">
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/photobook" component={Photobook} />
          <Route exact path="/login" component={Login} />

          {/* <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
