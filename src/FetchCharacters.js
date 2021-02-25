import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CharacterList from './CharacterList';

const FetchCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const {
          data: { results },
        } = await axios.get('https://swapi.dev/api/starships');
        setCharacters(results);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, []);

  return <CharacterList characters={characters} />;
};

export default FetchCharacters;
