import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SpacecraftList from './SpacecraftList';

const Fetch = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const getShips = async () => {
      try {
        const {
          data: { results },
        } = await axios.get('https://swapi.dev/api/starships');
        setShips(results);
      } catch (error) {
        console.log(error);
      }
    };
    getShips();
  }, []);

  return <SpacecraftList ships={ships} />;
};

export default Fetch;
