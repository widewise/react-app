import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
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
  const history = useHistory();
  const onPosterClick = useCallback(() => {
    history.push(`/film/${movie.id}`);
  }, []);

  return (
    <MoviePosterPanel
      tabIndex={0}
      onClick={() => onPosterClick()}
    >
      <ContextMenu movie={movie} />
      <MoviePosterImage
        width="100%"
        height="auto"
        src={movie.posterPath ?? ''}
        alt="Poster"
      />
    </MoviePosterPanel>
  );
};

export default MoviePoster;
