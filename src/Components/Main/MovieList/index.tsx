import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Movie from '../../../Models/movie';
import MovieCard from './MovieCard';

const MovieListPanel = styled.ul`
    display: grid;
    grid-template-columns: 220px 220px 220px;
    row-gap: 30px;
    justify-content: space-between;
    margin: 0;
    padding: 0;
`;

interface Props {
  movies: Array<Movie>,
}

const MovieList: FunctionComponent<Props> = ({ movies }: Props) => (
  <MovieListPanel>
    {
      movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
    }
  </MovieListPanel>
);

export default MovieList;
