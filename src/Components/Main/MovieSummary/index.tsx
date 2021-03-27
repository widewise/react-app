import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import useAppSelector from '../../../Hooks/useAppSelector';

const CountLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: 20px;
    height: 50px;
`;

const CountNumberStrong = styled.strong`
    font-size: 110%;
`;

const CountSpace = styled.span`
    display: inline-block;
    margin-left: 10px;
`;

const MovieSummary: FunctionComponent = () => {
  const { total } = useAppSelector((state) => state.movies);
  return (
    <>
      <CountLabel>
        {
        total > 0
          ? (
            <>
              <CountNumberStrong>{total}</CountNumberStrong>
              <CountSpace />
              movies found
            </>
          )
          : <>movies not found</>
      }
      </CountLabel>
    </>
  );
};

export default MovieSummary;
