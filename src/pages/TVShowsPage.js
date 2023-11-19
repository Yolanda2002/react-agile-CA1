import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/templateMovieListPage';
import { getTVShows } from '../api/tmdb-api';
import AddToPlayListIcon from '../components/cardIcons/addToPlaylist'

const TVShowsPage = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    getTVShows().then(data => {
      setTVShows(data.results);
    });
  }, []);

  return (
    <PageTemplate
      title="TV Shows"
      movies={tvShows} 
      action={(tvShow) => {
        return <AddToPlayListIcon tvShow={tvShow} />
      }}
    />
  );
};

export default TVShowsPage;
