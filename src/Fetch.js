import React, { Component } from 'react';
import axios from 'axios';
import SpacecraftList from './SpacecraftList';
export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ships: [],
    };
    this.getShips = this.getShips.bind(this);
  }

  getShips() {
    return axios.get('https://swapi.dev/api/starships').then((response) => {
      // console.log(response.data.results);
      this.setState({ ships: response.data.results });
    });
  }

  componentDidMount() {
    this.getShips();
  }
  render() {
    const { ships } = this.state;
    return <SpacecraftList ships={ships} />;
  }
}
