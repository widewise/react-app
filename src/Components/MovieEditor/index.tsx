import React, { FunctionComponent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { FieldEditor, EditorPanel, EditorLabel } from './FieldEditor';
import { EnterButton } from '../EnterButton';
import Movie from '../../Models/movie';
import { GENRE_TITLES } from '../../Models/genreTitles';
import useActions from '../../Hooks/useActions';

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

interface Props {
  movie?: Movie,
  onCloseRequest?: () => void,
}

const defaultProps: Props = {
  movie: {
    id: -1,
    releaseDate: new Date(),
    voteAverage: 0,
    voteCount: 0,
    budget: 0,
    revenue: 0,
  } as Movie,
  onCloseRequest: null,
};

const MovieEditor: FunctionComponent<Props> = ({ movie, onCloseRequest }: Props) => {
  const [editMovie, setEditMovie] = useState(() => JSON.parse(JSON.stringify(movie)));

  const { addOrUpdateMovie } = useActions();
  const OnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    editMovie[event.target.id] = event.target.value;
    setEditMovie(editMovie);
  }, []);

  const OnChangeSelect = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    editMovie[event.target.id] = event.target.value;
    setEditMovie(editMovie);
  }, []);

  const OnSubmit = useCallback((event) => {
    event.preventDefault();
    addOrUpdateMovie(editMovie);
    onCloseRequest();
  }, []);

  const OnReset = useCallback((event) => {
    event.preventDefault();
    onCloseRequest();
  }, []);

  return (
    <MovieForm onSubmit={(e) => OnSubmit(e)} onReset={(e) => OnReset(e)}>
      <EditorTitle>{editMovie.id <= 0 ? 'NEW MOVIE' : 'EDIT MOVIE'}</EditorTitle>
      <FieldEditor fieldKey="title" label="TITLE" fieldType="text" fieldValue={editMovie.title} placeHolder="Title here" onChange={(event: React.ChangeEvent<HTMLInputElement>) => OnChange(event)} />
      <FieldEditor fieldKey="releaseDate" label="RELEASE DATE" fieldType="date" fieldValue={editMovie.releaseDate} placeHolder="Select Date" onChange={(event: React.ChangeEvent<HTMLInputElement>) => OnChange(event)} />
      <FieldEditor fieldKey="url" label="MOVIE URL" fieldType="url" fieldValue={editMovie.url} placeHolder="Movie URL here" onChange={(event: React.ChangeEvent<HTMLInputElement>) => OnChange(event)} />
      <EditorPanel>
        <EditorLabel>GENRE</EditorLabel>
        <GenreSelect key="genre" value={editMovie.genre} placeholder="Select Genre" onChange={(event) => OnChangeSelect(event)}>
          {
        GENRE_TITLES.map(
          (genre) => (
            <option key={genre}>{genre}</option>
          ),
        )
        }
        </GenreSelect>
      </EditorPanel>
      <FieldEditor fieldKey="overview" label="OVERVIEW" fieldType="text" fieldValue={editMovie.overview} placeHolder="Overview here" onChange={(event: React.ChangeEvent<HTMLInputElement>) => OnChange(event)} />
      <FieldEditor fieldKey="runtime" label="RUNTIME" fieldType="text" fieldValue={editMovie.runtime} placeHolder="Runtime here" onChange={(event: React.ChangeEvent<HTMLInputElement>) => OnChange(event)} />
      <ButtonsPanel>
        <ButtonGap />
        <ResetButton type="reset" value="RESET" />
        <MovieEnterButton type="submit" value="SUBMIT" />
      </ButtonsPanel>
    </MovieForm>
  );
};

MovieEditor.defaultProps = defaultProps;

export default MovieEditor;
