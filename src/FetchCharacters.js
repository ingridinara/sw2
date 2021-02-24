import axios from 'axios';
import React, { Component } from 'react';
import CharacterList from './CharacterList';

export default class FetchCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
    this.getCharacters = this.getCharacters.bind(this);
  }

  getCharacters() {
    return axios.get('http://swapi.dev/api/people').then((response) => {
      console.log(response.data.results);
      this.setState({ characters: response.data.results });
    });
  }

  componentDidMount() {
    this.getCharacters();
  }
  render() {
    const { characters } = this.state;
    return (
      <div>
        <CharacterList characters={characters} />
      </div>
    );
  }
}
