import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Movie } from '../../../Models/movie';
import MovieCard from './MovieCard';

const MovieListPanel = styled.ul`
    display: grid;
    grid-template-columns: 220px 220px 220px;
    row-gap: 30px;
    justify-content: space-between;
    margin: 0;
    padding: 0;
`;

export default function MovieList({ movies }) {
  return (
    <MovieListPanel>
      {
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      }
    </MovieListPanel>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(Movie).isRequired,
};
