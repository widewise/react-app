import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { EnterButton } from '../EnterButton';

const DeleteForm = styled.form`
`;

const DeleteTitle = styled.h2`
    font-size: 30px;
    margin: 0;
    margin-bottom: 30px;
    width: 100%;
`;

const DeleteMessage = styled.p`
    font-size: 18px;
    margin: 15px 0;
    width: 100%;
`;

const ButtonsPanel = styled.div`
    display: flex;
    margin-top: 20px;
`;

const ButtonGap = styled.h1`
    flex: 1;
`;

const MovieEnterButton = styled(EnterButton)`
    margin-left: 20px;
    width: 100px;
`;

export default function MovieDelete({ onCloseRequest }) {
  function OnSubmit(event) {
    event.preventDefault();
    onCloseRequest();
  }

  return (
    <DeleteForm onSubmit={OnSubmit}>
      <DeleteTitle>DELETE MOVIE</DeleteTitle>
      <DeleteMessage>Are you sure you want to delete this movie?</DeleteMessage>
      <ButtonsPanel>
        <ButtonGap />
        <MovieEnterButton type="submit" value="SUBMIT" />
      </ButtonsPanel>
    </DeleteForm>
  );
}

MovieDelete.propTypes = {
  onCloseRequest: PropTypes.func.isRequired,
};
