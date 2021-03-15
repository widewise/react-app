import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Movie from '../../../../../Models/movie';
import { ContextMenu, ContextMenuPanel } from '../../../../ContextMenu';
import { useMovieDetailsContext } from '../../../../../Contexts/movieDetailsContext';

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

interface Props {
  movie: Movie,
}

const MoviePoster: FunctionComponent<Props> = ({ movie }: Props) => {
  const { setMovieId } = useMovieDetailsContext();
  return (
    <MoviePosterPanel
      tabIndex={0}
      onClick={() => setMovieId(movie.id)}
    >
      <ContextMenu movie={movie} />
      <MoviePosterImage
        src={movie.url ?? ''}
        alt="Poster"
      />
    </MoviePosterPanel>
  );
};

export default MoviePoster;
