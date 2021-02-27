import React from 'react';
import styled from 'styled-components';

const genreTitles = [
  'all',
  'documentary',
  'comedy',
  'horror',
  'crime',
];

const MovieGenre = styled.div`
    display: flex;
    flex: 1;
    margin-bottom: -1px;
    height: 100%;
`;

const GenreLabel = styled.label`
    text-transform: uppercase;
    user-select: none;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    :first-child {
        padding-left: 0px;
    }
    :last-child {
        padding-right: 0px;
    }

    input {
        appearance: none;
        margin: 0;
    }

    span {
        display: flex;
        align-items: center;
        border-bottom: 2px solid transparent;
        height: 100%;
    }

    input:checked+span {
        border-color: #F65261;
    }
`;

export default function MovieFilter() {
  return (
    <MovieGenre>
      {
        genreTitles.map(
          (genre) => (
            <GenreLabel key={genre}>
              <input type="radio" name="genre" value={genre} />
              <span>{genre}</span>
            </GenreLabel>
          ),
        )
      }
    </MovieGenre>
  );
}