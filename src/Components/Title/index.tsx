import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const TitleString = styled.h1`
    background-color: #424242;
    color: #F65261;
    margin: 0;
    flex: 1;
`;
const NetflixTitleString = styled.strong`
    font-size: 110%;
`;

const Title: FunctionComponent = () => (
  <>
    <TitleString>
      <NetflixTitleString>netflix</NetflixTitleString>
      roulette
    </TitleString>
  </>
);

export default Title;
