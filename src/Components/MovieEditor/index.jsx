import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FieldEditor, EditorPanel, EditorLabel } from './FieldEditor';
import { EnterButton } from '../EnterButton';
import { Movie } from '../../Models/movie';
import { GENRE_TITLES } from '../../Models/genreTitles';

const MovieForm = styled.form`
`;

const EditorTitle = styled.h2`
    font-size: 30px;
    margin: 0;
    margin-bottom: 30px;
    width: 100%;
`;

const GenreSelect = styled.select`
    text-transform: uppercase;
    flex: 1;
    background-color: #424242;
    border: 0;
    color: #FFFFFF;
    height: 38px;
`;

const ButtonsPanel = styled.div`
    display: flex;
    margin-top: 20px;
`;

const ButtonGap = styled.h1`
    flex: 1;
`;

const ResetButton = styled(EnterButton)`
    background-color: transparent;
    color: #F65261;
    border: solid #F65261 2px;
`;

const MovieEnterButton = styled(EnterButton)`
    margin-left: 20px;
`;

export default function MovieEditor({ movie, onCloseRequest }) {
  const [editMovie, setEditMovie] = useState(() => JSON.parse(JSON.stringify(movie)));

  const OnChange = useCallback((event) => {
    editMovie[event.target.id] = event.target.value;
    setEditMovie(editMovie);
  });

  const OnSubmit = useCallback((event) => {
    event.preventDefault();
    onCloseRequest();
  });

  const OnReset = useCallback((event) => {
    event.preventDefault();
    onCloseRequest();
  });

  return (
    <MovieForm onSubmit={(e) => OnSubmit(e)} onReset={(e) => OnReset(e)}>
      <EditorTitle>{editMovie.id <= 0 ? 'NEW MOVIE' : 'EDIT MOVIE'}</EditorTitle>
      <FieldEditor fieldKey="title" label="TITLE" fieldType="text" fieldValue={editMovie.title} placeHolder="Title here" onChange={(event) => OnChange(event)} />
      <FieldEditor fieldKey="releaseDate" label="RELEASE DATE" fieldType="date" fieldValue={editMovie.releaseDate} placeHolder="Select Date" onChange={(event) => OnChange(event)} />
      <FieldEditor fieldKey="url" label="MOVIE URL" fieldType="url" fieldValue={editMovie.url} placeHolder="Movie URL here" onChange={(event) => OnChange(event)} />
      <EditorPanel>
        <EditorLabel>GENRE</EditorLabel>
        <GenreSelect key="genre" value={editMovie.genre} placeholder="Select Genre" onChange={(event) => OnChange(event)}>
          {
        GENRE_TITLES.map(
          (genre) => (
            <option key={genre}>{genre}</option>
          ),
        )
        }
        </GenreSelect>
      </EditorPanel>
      <FieldEditor fieldKey="overview" label="OVERVIEW" fieldType="text" fieldValue={editMovie.overview} placeHolder="Overview here" onChange={(event) => OnChange(event)} />
      <FieldEditor fieldKey="runtime" label="RUNTIME" fieldType="text" fieldValue={editMovie.runtime} placeHolder="Runtime here" onChange={(event) => OnChange(event)} />
      <ButtonsPanel>
        <ButtonGap />
        <ResetButton type="reset" value="RESET" />
        <MovieEnterButton type="submit" value="SUBMIT" />
      </ButtonsPanel>
    </MovieForm>
  );
}

MovieEditor.defaultProps = {
  movie: new Movie(-1, '', new Date(), '', [], '', ''),
};

MovieEditor.propTypes = {
  movie: PropTypes.instanceOf(Movie),
  onCloseRequest: PropTypes.func.isRequired,
};
