import React from 'react';
import { PageStyled, PageTitle, CharactersNames } from './characterliststyled';
const CharacterList = ({ characters }) => {
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
};

export default CharacterList;
