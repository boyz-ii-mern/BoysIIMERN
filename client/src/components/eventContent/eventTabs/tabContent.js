import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './tabs';

class TabsTest extends Component {
  // static propTypes = {
  //   children: PropTypes.instanceOf(Array).isRequired,
  // }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="events-tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) {
              console.log(child.props.label)
              return undefined;
            }
            return child;
          })}
        </div>
      </div>
    );
  }
}

export default TabsTest;