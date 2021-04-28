import React, { FunctionComponent, useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { EnterButton } from '../../EnterButton';

const SearchForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const SearchLabel = styled.h2`
    font-size: 30px;
    margin: 0;
    margin-bottom: 30px;
    width: 100%;
`;

const SearchTearmField = styled.input`
    background-color: #23232388;
    border: 0;
    flex: 1;
    height: 41px;
    padding-left: 10px;
    color: #FFFFFF;
    margin-right: 10px;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #EEEEEE;
    }
    :-ms-input-placeholder {
       color: #EEEEEE;
    }
    border-radius: 3px;
`;

export interface Props {
  className?: string,
  search?: string,
}

const movieSearchDefaultProps : Props = {
  className: '',
  search: '',
};
const MovieSearch: FunctionComponent<Props> = ({ className, search }: Props) => {
  const [inputSearch, setInputSearch] = useState(search);
  const history = useHistory();

  const OnSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    history.push(`/search/${inputSearch}`);
    event.preventDefault();
  }, [inputSearch]);

  return (
    <SearchForm className={className} onSubmit={(e) => OnSubmit(e)}>
      <SearchLabel>FIND YOUR MOVIE</SearchLabel>
      <SearchTearmField
        type="text"
        value={inputSearch}
        placeholder="What do you want to watch?"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <EnterButton type="submit" value="Search" />
    </SearchForm>
  );
};

MovieSearch.defaultProps = movieSearchDefaultProps;

export default MovieSearch;
