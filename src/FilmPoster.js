import React from 'react';

const FilmPoster = (props) => {

  const { url, title, posterUrl } = props

  return (
    <img src={posterUrl} alt={title} />
  )
}

export default FilmPoster
