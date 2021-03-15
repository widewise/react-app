import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Title from '../Title';
import MovieAdd from './MovieAdd';
import MovieSearch from './MovieSearch';
import { Container } from '../Container';
import MovieDetailsViewer from '../MovieDetailsViewer';
import { useMovieDetailsContext } from '../../Contexts/movieDetailsContext';

const HeaderPanel = styled.header`
    background-color: #424242;
    min-height: 350px;
    color: #FFFFFF;
`;

const TitleControl = styled.div`
    display: flex;
    margin-bottom: 40px;
`;

const HeaderMovieSearch = styled(MovieSearch)`
    padding-left: 60px;
    padding-right: 60px;
`;

const Header: FunctionComponent = () => {
  const { movieId, setMovieId } = useMovieDetailsContext();

  return (
    <HeaderPanel>
      <Container>
        {movieId > 0
          ? <MovieDetailsViewer movieId={movieId} onCloseRequest={() => setMovieId(0)} />
          : (
            <>
              <TitleControl>
                <Title />
                <MovieAdd />
              </TitleControl>
              <HeaderMovieSearch />
            </>
          )}
      </Container>
    </HeaderPanel>
  );
};

export default Header;
