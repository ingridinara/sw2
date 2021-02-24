import React, { Component } from 'react';
import { PageStyled, PageTitle, CharactersNames } from './characterliststyled';
export default class CharacterList extends Component {
  render() {
    const characters = this.props.characters;
    return (
      <PageStyled>
        <PageTitle>Characters List</PageTitle>
        {characters.map((c) => {
          console.log(c);
          return (
            <div key={c.url}>
              <CharactersNames>{c.name}</CharactersNames>
            </div>
          );
        })}
      </PageStyled>
    );
  }
}
