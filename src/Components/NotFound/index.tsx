import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../Title';

const EmptyMoviePanel = styled.div`
    background-color: #232323;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const GoHomeButton = styled(Link)`
    padding: .5em 3em;
    font-size: 20px;
    background-color: transparent;
    color: #F65261;
    border: solid #F65261 2px;
    text-decoration: none;
`;

const TitleHeader = styled.h1`
`;

const NotFound: FunctionComponent = () => (
  <>
    <Title />
    <EmptyMoviePanel>
      <TitleHeader>
        Page Not Found
      </TitleHeader>
      <GoHomeButton to="/">GO BACK TO HOME</GoHomeButton>
    </EmptyMoviePanel>
  </>
);

export default NotFound;
