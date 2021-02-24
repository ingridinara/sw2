import React, { Component } from 'react';

export default class SpaceCraftDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ expanded: !this.state.expanded });
  }

  close() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    const info = this.props.details;
    if (!this.state.expanded) {
      return <button onClick={this.open}>Display Details</button>;
    }

    return (
      <div>
        <button onClick={this.close}>Hide Details</button>
        <ul>
          <li>
            <h3>Model:</h3>
            <p>{info.model}</p>
          </li>
          <li>
            <h3>Cargo Capacity:</h3>
            <p>{info.cargo_capacity}</p>
          </li>
          <li>
            <h3>Consumables:</h3>
            <p>{info.consumables}</p>
          </li>
          <li>
            <h3>Manufacturer:</h3>
            <p>{info.manufacturer}</p>
          </li>
        </ul>
      </div>
    );
  }
}
