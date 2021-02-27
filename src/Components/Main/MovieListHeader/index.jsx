import React from 'react';
import styled from 'styled-components';
import MovieFilter from './MovieFilter';
import MovieSort from './MovieSort';

const MovieListHeaderPanel = styled.form`
    display: flex;
    align-items: center;
    border-bottom: solid #555555 2px;
    height: 50px;
`;

export default function MovieListHeader() {
  return (
    <MovieListHeaderPanel>
      <MovieFilter />
      <MovieSort />
    </MovieListHeaderPanel>
  );
}
