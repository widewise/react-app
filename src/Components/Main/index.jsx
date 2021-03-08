import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import MovieListHeader from './MovieListHeader';
import MovieSummary from './MovieSummary';
import MovieList from './MovieList';
import { Movie } from '../../Models/movie';

const movies = [
  new Movie(1, 'Pulp Fiction', '2004-01-01', '', ['Action & Adventure'], '', ''),
  new Movie(2, 'Bohemian Rhapsody', '2003-01-01', '', ['Drama', 'Biography', 'Music'], '', ''),
  new Movie(3, 'Kill Bill: Vol 2', '1994-01-01', '', ['Oscar winning movie'], ''),
  new Movie(4, 'Avengets: War of infinity', '2004-01-01', '', ['Action & Adventure'], '', ''),
  new Movie(5, 'Inception', '2003-01-01', '', ['Action & Adventure'], ''),
  new Movie(6, 'Reservoir dogs', '1994-01-01', '', ['Oscar winning movie'], '', ''),
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
