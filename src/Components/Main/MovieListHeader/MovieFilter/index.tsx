import React, { FunctionComponent, useCallback } from 'react';
import styled from 'styled-components';
import GENRE_FILTER from '../../../../Models/genreFilter';
import useAppSelector from '../../../../Hooks/useAppSelector';
import useActions from '../../../../Hooks/useActions';

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

const MovieFilter: FunctionComponent = () => {
  const { genreFilter } = useAppSelector((state) => state.movies);
  const { setGenreFilterAction } = useActions();

  const OnChangeFilter = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.value as GENRE_FILTER;
    setGenreFilterAction(filter);
  }, []);

  return (
    <MovieGenre>
      {
      Object.keys(GENRE_FILTER).map(
        (genreKey, index) => (
          <GenreLabel key={genreKey}>
            <input
              type="radio"
              name="genre"
              value={Object.values(GENRE_FILTER).filter(
                (_value, index1) => index === index1,
              )[0]}
              onChange={(e) => OnChangeFilter(e)}
              defaultChecked={Object.values(GENRE_FILTER).filter(
                (val, index1) => index === index1 && val === genreFilter,
              ).length > 0}
            />
            <span>{genreKey}</span>
          </GenreLabel>
        ),
      )
    }
    </MovieGenre>
  );
};

export default MovieFilter;
