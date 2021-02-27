import React from 'react';
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

export default function MovieSort() {
  return (
    <>
      <SortLabel>SORT BY</SortLabel>
      <SortSelect>
        <option>RELEASE DATE</option>
      </SortSelect>
    </>
  );
}
