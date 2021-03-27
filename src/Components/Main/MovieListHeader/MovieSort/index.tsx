import React, { FunctionComponent, useCallback } from 'react';
import styled from 'styled-components';
import useActions from '../../../../Hooks/useActions';
import useAppSelector from '../../../../Hooks/useAppSelector';
import SORT_FIELDS from '../../../../Models/sortFields';

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

const MovieSort: FunctionComponent = () => {
  const { sortBy } = useAppSelector((state) => state.movies);
  const { setSortingAction } = useActions();
  const OnChangeSelect = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortField = event.target.value as SORT_FIELDS;
    setSortingAction(sortField);
  }, []);

  return (
    <>
      <SortLabel>SORT BY</SortLabel>
      <SortSelect value={sortBy} onChange={(e) => OnChangeSelect(e)}>
        {
      Object.keys(SORT_FIELDS).map(
        (sortFieldKey, index) => (
          <option
            key={Object.values(SORT_FIELDS).filter(
              (_value, index1) => index === index1,
            )[0]}
            value={Object.values(SORT_FIELDS).filter(
              (_value, index1) => index === index1,
            )[0]}
          >
            {sortFieldKey.toUpperCase()}
          </option>
        ),
      )
    }
      </SortSelect>
    </>
  );
};

export default MovieSort;
