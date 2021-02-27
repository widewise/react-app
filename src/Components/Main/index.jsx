import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import MovieListHeader from './MovieListHeader';
import MovieSummary from './MovieSummary';
import MovieList from './MovieList';
import { Movie } from '../../Models/movie';

const movies = [
  new Movie(1, 'Pulp Fiction', ['Action & Adventure'], 2004),
  new Movie(2, 'Bohemian Rhapsody', ['Drama', 'Biography', 'Music'], 2003),
  new Movie(3, 'Kill Bill: Vol 2', ['Oscar winning movie'], 1994),
  new Movie(4, 'Avengets: War of infinity', ['Action & Adventure'], 2004),
  new Movie(5, 'Inception', ['Action & Adventure'], 2003),
  new Movie(6, 'Reservoir dogs', ['Oscar winning movie'], 1994),
];

const MainPanel = styled.main`
    background-color: #232323;
    margin-top: 10px;
    padding-bottom: 40px;
`;

export default function Main() {
  return (
    <MainPanel>
      <Container>
        <MovieListHeader />
        <MovieSummary moviesCount={movies.length} />
        <MovieList movies={movies} />
      </Container>
    </MainPanel>
  );
}
