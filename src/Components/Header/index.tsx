import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import Title from '../Title';
import MovieAdd from './MovieAdd';
import MovieSearch from './MovieSearch';
import { Container } from '../Container';

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

interface HeaderProps {
  movieId?: number,
  search?: string,
}

const defaultHeaderProps: HeaderProps = {
  movieId: 0,
  search: '',
};

const Header: FunctionComponent<HeaderProps> = ({ search, movieId }: HeaderProps) => {
  const MovieDetailsViewer = loadable(() => import('../MovieDetailsViewer'), { ssr: true });
  return (
    <HeaderPanel>
      <Container>
        { /* // PATTERN: Conditional rendering */ }
        {movieId > 0
          ? (<MovieDetailsViewer />)
          : (
            <>
              <TitleControl>
                <Title />
                <MovieAdd />
              </TitleControl>
              <HeaderMovieSearch search={search} />
            </>
          )}
      </Container>
    </HeaderPanel>
  );
};

Header.defaultProps = defaultHeaderProps;

export default Header;
