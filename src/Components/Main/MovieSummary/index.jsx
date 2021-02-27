import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export default function MovieSummary({ moviesCount }) {
  return (
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
}

MovieSummary.propTypes = {
  moviesCount: PropTypes.number.isRequired,
};
