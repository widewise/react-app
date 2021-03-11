import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Movie } from '../../../../../Models/movie';
import { ContextMenu, ContextMenuPanel } from '../../../../ContextMenu';
import { MovieDetailsContext } from '../../../../../Contexts/movieDetailsContext';

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
  const [, setMovieId] = useContext(MovieDetailsContext);
  return (
    <MoviePosterPanel
      tabindex={0}
      onClick={() => setMovieId(movie.id)}
    >
      <ContextMenu movie={movie} />
      <MoviePosterImage
        src={movie.url ?? ''}
        alt="Poster"
      />
    </MoviePosterPanel>
  );
}

MoviePoster.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
};
