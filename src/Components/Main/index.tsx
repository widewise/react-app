/* eslint-disable no-nested-ternary */
import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import MovieListHeader from './MovieListHeader';
import MovieSummary from './MovieSummary';
import MovieList from './MovieList';
import useAppSelector from '../../Hooks/useAppSelector';
import useActions from '../../Hooks/useActions';
import EmptyMovieList from './EmptyMovieList';

const MainPanel = styled.main`
    background-color: #232323;
    margin-top: 10px;
    padding-bottom: 40px;
`;

interface MainProps {
  search: string,
}

const Main: FunctionComponent<MainProps> = ({ search }: MainProps) => {
  const {
    movies, sortBy, sortOrder, genreFilter,
  } = useAppSelector((state) => state.movies);
  const { getMovies } = useActions();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    getMovies(sortBy, sortOrder, genreFilter, search);
    setLoaded(true);
  }, [sortBy, genreFilter, search]);

  return (
    <MainPanel>
      <Container>
        <MovieListHeader />
        {!isLoaded
          ? <h1>Data is Loading ...</h1>
          : (movies.length > 0
            ? (
              <>
                <MovieSummary />
                <MovieList movies={movies} />
              </>
            )
            : <EmptyMovieList />
          )}
      </Container>
    </MainPanel>
  );
};

export default Main;
