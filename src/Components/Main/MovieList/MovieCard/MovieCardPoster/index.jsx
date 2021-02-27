import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MoviePosterImage = styled.img`
    flex: 1;
`;

export default function MoviePoster({ posterPath }) {
  return (
    <MoviePosterImage src={posterPath ?? ''} alt="Poster" />
  );
}

MoviePoster.defaultProps = {
  posterPath: '',
};

MoviePoster.propTypes = {
  posterPath: PropTypes.string,
};
