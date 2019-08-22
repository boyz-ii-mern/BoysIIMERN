import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //<!super important to get router to work 
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import EventsTest from "./Pages/EventsTest"
import NoMatch from "./Pages/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import FormContainer from "./Pages/CreateEvent";
import CreateEvent from "./Pages/CreateEvent";
import CreateGroup from "./Pages/CreateGroup";
import TabsTest from "./components/eventContent/eventTabs/tabContent";
import RenderTabs from "./components/eventContent/eventTabs/renderTabs";
import SignUp from "./Pages/SignUp"
import Photos from "./components/photoTasks/Photos";
import 'materialize-css/dist/css/materialize.min.css';
// import { Modal, Button } from 'react-materialize';
import M from "materialize-css";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>

{/* <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/events'>Topics</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/events' component={Login} />
</div> */}

      <div>
        {/* <Nav /> */}
        <Navbar />
        <div className="container">
          <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/events/:id" component={EventsTest} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/events/photos/:eventId" component={Photos} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createGroup" component={CreateGroup} />
          <Route exact path="/createEvent" component={CreateEvent} />
          <Route exact path="/tabstest" component={RenderTabs} />
          <Route exact path="/signup" component={SignUp} />

          {/* <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
