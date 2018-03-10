import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import logo from './logo.svg';
import './App.css';

const axios = require('axios');
const films = TMDB.films

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleFaveToggle(film) {
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)
    if (filmIndex !== -1) {
      // The film is already faved + needs to be removed
      faves.splice(filmIndex, 1)
      console.log('Removing ', film.title, ' from favorites.')
    } else {
      // The film is not faved and needs to be added to faves
      faves.push(film)
      console.log('Adding ', film.title, ' to favorites.')
    }
    this.setState({ faves })
  }

  handleDetailsClick = (film) => {
    console.log('Handling details click for ', film.title)
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios.get(url)
      .then( (response) => this.setState({ current: response.data }) )
  }

  render() {
    return (
      <div className='film-library'>
        <FilmListing
          onFaveToggle={this.handleFaveToggle}
          onDetailsClick={this.handleDetailsClick}
          films={this.state.films}
          faves={this.state.faves}
        />
        <FilmDetails
          film={this.state.current}
        />
      </div>
    );
  }
}

export default App;
