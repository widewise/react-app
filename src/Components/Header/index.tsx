import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Title from '../Title';
import MovieAdd from './MovieAdd';
import MovieSearch from './MovieSearch';
import { Container } from '../Container';
import MovieDetailsViewer from '../MovieDetailsViewer';

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
  search: string,
}

const Header: FunctionComponent<HeaderProps> = ({ search }: HeaderProps) => (
  <HeaderPanel>
    <Container>
      <Switch>
        <Route path="/film/:movieId" component={MovieDetailsViewer} />
        <Route path="/">
          <TitleControl>
            <Title />
            <MovieAdd />
          </TitleControl>
          <HeaderMovieSearch search={search} />
        </Route>
      </Switch>
    </Container>
  </HeaderPanel>
);

export default Header;
