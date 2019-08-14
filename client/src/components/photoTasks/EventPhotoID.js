import React, { Component } from "react";
import eventsTest from "../../components/eventsTest.json";

class RenderEventId extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        eventPath: eventsTest[0] || []
    };

    componentDidMount() {
        // console.log(this.props.children.event);
        // // const actualPath = JSON.stringify(this.props.match.params.id);
        // // console.log(actualPath);

        this.setState({
            eventPath: eventsTest[0]
        });
    }

    render() {
      return (
          <div>
              {this.state.eventPath.event}
          </div>
        )
    }
}

export default RenderEventId;