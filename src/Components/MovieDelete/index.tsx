import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
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

const MovieSubmitButton = styled(EnterButton)`
    margin-left: 20px;
`;

interface Props {
  onCloseRequest: () => void
}

const MovieDelete: FunctionComponent<Props> = ({ onCloseRequest }: Props) => {
  function OnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onCloseRequest();
  }

  return (
    <DeleteForm onSubmit={(event: React.FormEvent<HTMLFormElement>) => OnSubmit(event)}>
      <DeleteTitle>DELETE MOVIE</DeleteTitle>
      <DeleteMessage>Are you sure you want to delete this movie?</DeleteMessage>
      <ButtonsPanel>
        <ButtonGap />
        <MovieSubmitButton type="submit" value="SUBMIT" />
      </ButtonsPanel>
    </DeleteForm>
  );
};

export default MovieDelete;
