import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    height: 38px;
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

const SearchButton = styled.input`
    background-color: #F65261;
    width: 200px;
    height: 40px;
    color: #FFFFFF;
    font-size: 20px;
    border-radius: 3px;
    border: 0;
`;

function OnSubmit(event) {
  event.preventDefault();
}

export default function MovieSearch({ className }) {
  return (
    <SearchForm className={className} onSubmit={OnSubmit}>
      <SearchLabel>FIND YOUR MOVIE</SearchLabel>
      <SearchTearmField placeholder="What do you want to watch?" />
      <SearchButton type="submit" value="Search" />
    </SearchForm>
  );
}

MovieSearch.defaultProps = {
  className: '',
};

MovieSearch.propTypes = {
  className: PropTypes.string,
};
