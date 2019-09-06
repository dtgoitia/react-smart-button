import React from 'react';

import './SmartButton.css';


class SmartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ongoingAction: false,
    }
  }

  componentDidMount() {
    this.props.halt$
      .subscribe(this.halt.bind(this));
  }

  action() {
    this.setState({ ongoingAction: true });
    this.props.action();
  }
  
  halt() {
    this.setState({ ongoingAction: false });
    console.log('halt!');
  }

  render() {
    const currentClass = this.state.ongoingAction
      ? 'smart-button ongoing'
      : 'smart-button halted';
    return (
      <button className={currentClass}
        onClick={this.action.bind(this)}>
        { this.props.label }
      </button>
    );
  }
}

export default SmartButton;