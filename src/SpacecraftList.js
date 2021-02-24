import React, { Component } from 'react';
import SpacecraftDetail from './SpaceCraftDetail';
export default class SpacecraftList extends Component {
  render() {
    const ships = this.props.ships;
    return (
      <div>
        <h1>SPACECRAFTS LIST</h1>
        {ships.map((s) => {
          //console.log(s);
          return (
            <div key={s.url}>
              <h1>{s.name}</h1>
              <SpacecraftDetail details={s} />
            </div>
          );
        })}
      </div>
    );
  }
}
