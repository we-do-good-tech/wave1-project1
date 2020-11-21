import React, { Component, componentDidUpdate } from 'react';
import './styles/FirstPageTabs.css';

class FirstPageTabs extends Component {
  constructor(props) {
    super();
    this.state = {
      names: props.names,
      icons: props.icons,
    };
  }

  handleclick = (val) => {
    this.props.onClick(val);
  };

  render() {
    const FinalTabs = [];
    this.state.names.forEach((element, i) => {
      FinalTabs.push(
        <button
          className="FirstStatePageButton"
          onClick={() => this.handleclick(i + 1)}
          value={i + 1}
        >
          <img className="logo" src={this.state.icons[i]} />
          <br />
          <p className="logodesc">{this.state.names[i]}</p>
        </button>,
      );
    });

    return <div className="ContentDivFirstStatePage">{FinalTabs}</div>;
  }
}

export default FirstPageTabs;
