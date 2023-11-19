import React, { useEffect, useState } from 'react';
import PageTemplate from '../components/templateMovieListPage';
import { getTopRatedMovies } from '../api/tmdb-api';
import AddToPlayListIcon from '../components/cardIcons/addToPlaylist'


const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlayListIcon movie={movie} />
      }}
    />
  );
}

export default TopRatedPage;