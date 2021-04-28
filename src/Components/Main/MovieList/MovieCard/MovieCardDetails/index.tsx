import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Movie from '../../../../../Models/movie';

const MovieDetailsPanel = styled.div`
    height: 50px;
`;

const MovieCardDetailsFirstRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const TitleLabel = styled.p`
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

interface Props {
  movie: Movie,
}

const MovieCardDetails: FunctionComponent<Props> = ({ movie }: Props) => (
  <MovieDetailsPanel>
    <MovieCardDetailsFirstRow>
      <TitleLabel>{movie.title}</TitleLabel>
      <ReleaseDateLabel>{new Date(movie.releaseDate).getFullYear()}</ReleaseDateLabel>
    </MovieCardDetailsFirstRow>
    <div>{movie.genres.join(', ')}</div>
  </MovieDetailsPanel>
);

export default MovieCardDetails;
