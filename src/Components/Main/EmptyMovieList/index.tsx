import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const EmptyMoviePanel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TitleHeader = styled.h1`
`;

const EmptyMovieList: FunctionComponent = () => (
  <EmptyMoviePanel>
    <TitleHeader>No Movie Found</TitleHeader>
  </EmptyMoviePanel>
);

export default EmptyMovieList;
