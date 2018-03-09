import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'all'
    }
  }

  handleFilterClick = (filter) => {
    console.log('setting filter to ', filter)
    this.setState({
      filter
    })
  }

  render() {

    const { films, faves } = this.props
    const allFilter = this.state.filter === 'all' ? 'is-active' : ''
    const favesFilter = this.state.filter === 'faves' ? 'is-active' : ''

    let allFilms = []
      if (this.state.filter === 'all') {
        allFilms = films.map( (film) => {
        return (
          <FilmRow
            key={film.id}
            onFaveToggle={ () => this.props.onFaveToggle(film) }
            onDetailsClick={ () => this.props.onDetailsClick(film) }
            title={film.title}
            date={film.release_date}
            url={film.poster_path}
            isFave={faves.includes(film)}
          />
        )
        })
      } else {
        allFilms = faves.map( (film) => {
        return (
          <FilmRow
            key={film.id}
            onFaveToggle={ () => this.props.onFaveToggle(film) }
            onDetailsClick={ () => this.props.onDetailsClick(film) }
            title={film.title}
            date={film.release_date}
            url={film.poster_path}
            isFave={faves.includes(film)}
          />
        )
        })
      }

    return (
      <div className='film-list'>
        <h1 className='section-title'>FILMS</h1>
        <div className='film-list-filters'>
          <div className={'film-list-filter ' + allFilter} onClick={ () => this.handleFilterClick('all') }>
            <span>ALL</span>
            <span className='section-count'>{films.length}</span>
          </div>
          <div className={'film-list-filter ' + favesFilter} onClick={ () => this.handleFilterClick('faves') }>
            <span>FAVES</span>
            <span className='section-count'>{faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    )
  }
}

export default FilmListing
