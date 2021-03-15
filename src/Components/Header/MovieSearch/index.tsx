import React, { FunctionComponent } from 'react';
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

function OnSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

interface Props {
  // eslint-disable-next-line react/require-default-props
  className?: string,
}

const MovieSearch: FunctionComponent<Props> = ({ className = '' }: Props) => (
  <SearchForm className={className} onSubmit={OnSubmit}>
    <SearchLabel>FIND YOUR MOVIE</SearchLabel>
    <SearchTearmField placeholder="What do you want to watch?" />
    <EnterButton type="submit" value="Search" />
  </SearchForm>
);

export default MovieSearch;
