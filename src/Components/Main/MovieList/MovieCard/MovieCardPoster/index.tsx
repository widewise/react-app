import React, { FunctionComponent, useCallback } from 'react';
import styled from 'styled-components';
import useActions from '../../../../../Hooks/useActions';
import Movie from '../../../../../Models/movie';
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
    height: 320px;
    width: auto;
    max-width: 220px;
`;

interface Props {
  movie: Movie,
}

const MoviePoster: FunctionComponent<Props> = ({ movie }: Props) => {
  const { setMovieIdAction } = useActions();
  const onPosterClick = useCallback(() => {
    setMovieIdAction(movie.id);
  }, []);

  return (
    <MoviePosterPanel
      tabIndex={0}
      onClick={() => onPosterClick()}
    >
      <ContextMenu movie={movie} />
      <MoviePosterImage
        src={movie.posterPath ?? ''}
        alt="Poster"
      />
    </MoviePosterPanel>
  );
};

export default MoviePoster;
