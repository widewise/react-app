import React from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
    background-color: #55555599;
    height: 37px;
    color: #F65261;
    font-size: 20px;
    border-radius: 3px;
    margin: 10px;
    border: 0;
`;

export default function MovieAdd() {
  return (
    <>
      <AddButton>+ ADD MOVIE</AddButton>
    </>
  );
}
