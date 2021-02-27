import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Movie } from '../../../../../Models/movie';

const MovieDetailsPanel = styled.div`
    height: 50px;
`;

const MovieCardDetailsFirstRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const NameLabel = styled.h6`
    font-size: 15px;
    margin: 0;
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 1.2em;
    white-space: nowrap;
`;

const ReleaseDateLabel = styled.label`
    border: solid #FFFFFF 1px;
    border-radius: 3px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
`;

export default function MovieCardDetails({ movie }) {
  return (
    <MovieDetailsPanel>
      <MovieCardDetailsFirstRow>
        <NameLabel>{movie.name}</NameLabel>
        <ReleaseDateLabel>{movie.releaseDate}</ReleaseDateLabel>
      </MovieCardDetailsFirstRow>
      <div>{movie.genres.join(', ')}</div>
    </MovieDetailsPanel>
  );
}

MovieCardDetails.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
};
