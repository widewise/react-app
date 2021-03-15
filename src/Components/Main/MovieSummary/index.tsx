import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

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

interface Props {
  moviesCount: number,
}

const MovieSummary: FunctionComponent<Props> = ({ moviesCount }: Props) => (
  <>
    <CountLabel>
      {
        moviesCount > 0
          ? (
            <>
              <CountNumberStrong>{moviesCount}</CountNumberStrong>
              <CountSpace />
              movies found
            </>
          )
          : <>movies not found</>
      }
    </CountLabel>
  </>
);

export default MovieSummary;
