import React, { Component } from 'react';

export default class CharacterList extends Component {
  render() {
    const characters = this.props.characters;
    return (
      <div>
        {characters.map((c) => {
          console.log(c);
          return (
            <div key={c.url}>
              <p>Characters List</p>
              <p>{c.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
