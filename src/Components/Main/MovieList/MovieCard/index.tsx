import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import MoviePoster from './MovieCardPoster';
import MovieCardDetails from './MovieCardDetails';
import Movie from '../../../../Models/movie';

const MovieCardPanel = styled.li`
    display: flex;
    flex-direction: column;
    height: 370px;
    width: 220px;
    border: solid #555555 2px;
`;

interface Props {
  movie: Movie,
}
const MovieCard: FunctionComponent<Props> = ({ movie }: Props) => (
  <MovieCardPanel>
    <MoviePoster movie={movie} />
    <MovieCardDetails movie={movie} />
  </MovieCardPanel>
);

export default MovieCard;
