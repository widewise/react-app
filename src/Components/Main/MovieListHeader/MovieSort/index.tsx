import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const SortLabel = styled.label`
    font-size: 20px;
    color: #555555;
    margin-right: 10px;
`;

const SortSelect = styled.select`
    background-color: #23232388;
    border: 0;
    color: #FFFFFF;
`;

const MovieSort: FunctionComponent = () => (
  <>
    <SortLabel>SORT BY</SortLabel>
    <SortSelect>
      <option>RELEASE DATE</option>
    </SortSelect>
  </>
);

export default MovieSort;
