import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import MovieListHeader from './MovieListHeader';
import MovieSummary from './MovieSummary';
import MovieList from './MovieList';
import Movie from '../../Models/movie';

const moviesArray = [
  new Movie(1, 'Pulp Fiction', new Date('2004-01-01'), '', ['Action & Adventure'], '', ''),
  new Movie(2, 'Bohemian Rhapsody', new Date('2003-01-01'), '', ['Drama', 'Biography', 'Music'], '', ''),
  new Movie(3, 'Kill Bill: Vol 2', new Date('1994-01-01'), '', ['Oscar winning movie'], '', ''),
  new Movie(4, 'Avengets: War of infinity', new Date('2004-01-01'), '', ['Action & Adventure'], '', ''),
  new Movie(5, 'Inception', new Date('2003-01-01'), '', ['Action & Adventure'], '', ''),
  new Movie(6, 'Reservoir dogs', new Date('1994-01-01'), '', ['Oscar winning movie'], '', ''),
];

const MainPanel = styled.main`
    background-color: #232323;
    margin-top: 10px;
    padding-bottom: 40px;
`;

const Main: FunctionComponent = () => {
  const [movies, setMovies] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setTimeout(() => {
      // TODO: loading data from server
      setMovies(moviesArray);
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <MainPanel>
      <Container>
        <MovieListHeader />
        {!isLoaded
          ? <h1>Data is Loading ...</h1>
          : (
            <>
              <MovieSummary moviesCount={movies.length} />
              <MovieList movies={movies} />
            </>
          )}
      </Container>
    </MainPanel>
  );
};

export default Main;
