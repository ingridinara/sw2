import React, { Component } from 'react';
import SpacecraftDetail from './SpaceCraftDetail';
//style
import {
  ListStyle,
  PageTitle,
  SpacecraftTitle,
  SpacecraftCard,
} from './spacecraftliststyled';
export default class SpacecraftList extends Component {
  render() {
    const ships = this.props.ships;
    return (
      <div>
        <ListStyle>
          <SpacecraftCard>
            <PageTitle>Spacecrafts List</PageTitle>
            {ships.map((s) => {
              //console.log(s);
              return (
                <div key={s.url}>
                  <SpacecraftTitle>{s.name}</SpacecraftTitle>
                  <SpacecraftDetail details={s} />
                </div>
              );
            })}
          </SpacecraftCard>
        </ListStyle>
      </div>
    );
  }
}
