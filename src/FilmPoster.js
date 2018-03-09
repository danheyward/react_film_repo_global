import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {

    const { url, title, posterUrl } = this.props

    return (
      <img src={posterUrl} alt={title} />
    )
  }
}

export default FilmPoster
