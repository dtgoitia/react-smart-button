import React from 'react';
import './SmartButton.css';

class SmartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.dir(this.props.halt$);
    this.props.halt$
      .subscribe(x => console.log('halt', x));
  }

  render() {
    return (
      <button className="smart-button" onClick={this.props.action}>
        { this.props.label }
      </button>
    );
  }
}

export default SmartButton;
