import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import MovieListHeader from './MovieListHeader';
import MovieSummary from './MovieSummary';
import MovieList from './MovieList';
import useAppSelector from '../../Hooks/useAppSelector';
import useActions from '../../Hooks/useActions';

const MainPanel = styled.main`
    background-color: #232323;
    margin-top: 10px;
    padding-bottom: 40px;
`;

const Main: FunctionComponent = () => {
  const {
    movies, sortBy, sortOrder, genreFilter,
  } = useAppSelector((state) => state.movies);
  const { getMovies } = useActions();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    getMovies(sortBy, sortOrder, genreFilter);
    setLoaded(true);
  }, [sortBy, genreFilter]);

  return (
    <MainPanel>
      <Container>
        <MovieListHeader />
        {!isLoaded
          ? <h1>Data is Loading ...</h1>
          : (
            <>
              <MovieSummary />
              <MovieList movies={movies} />
            </>
          )}
      </Container>
    </MainPanel>
  );
};

export default Main;
