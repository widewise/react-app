import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import MovieAdd from './MovieAdd';
import MovieSearch from './MovieSearch';
import { Container } from '../Container';

const HeaderPanel = styled.header`
    background-color: #424242;
    height: 350px;
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

export default function Header() {
  return (
    <HeaderPanel>
      <Container>
        <TitleControl>
          <Title />
          <MovieAdd />
        </TitleControl>
        <HeaderMovieSearch />
      </Container>
    </HeaderPanel>
  );
}
