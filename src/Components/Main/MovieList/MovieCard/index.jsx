import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MoviePoster from './MovieCardPoster';
import MovieCardDetails from './MovieCardDetails';
import { Movie } from '../../../../Models/movie';

const MovieCardPanel = styled.li`
    display: flex;
    flex-direction: column;
    height: 370px;
    width: 220px;
    border: solid #555555 2px;
`;

export default function MovieCard({ movie }) {
  return (
    <MovieCardPanel>
      <MoviePoster />
      <MovieCardDetails movie={movie} />
    </MovieCardPanel>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
};
