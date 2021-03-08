import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Movie } from '../../../../../Models/movie';
import { ContextMenu, ContextMenuPanel } from '../../../../ContextMenu';

const MoviePosterPanel = styled.div`
    position: relative;
    flex: 1;
    :hover .${ContextMenuPanel.styledComponentId},
    :focus-within .${ContextMenuPanel.styledComponentId} {
        opacity: 1;
    }
`;

const MoviePosterImage = styled.img`
`;

export default function MoviePoster({ movie }) {
  return (
    <MoviePosterPanel tabindex={0}>
      <ContextMenu movie={movie} />
      <MoviePosterImage src={movie.url ?? ''} alt="Poster" />
    </MoviePosterPanel>
  );
}

MoviePoster.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
};
