import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  Form, Formik, FormikProps,
} from 'formik';
import * as Yup from 'yup';
import FieldEditor from './FieldEditor';
import { EnterButton } from '../EnterButton';
import Movie from '../../Models/movie';
import { GENRES } from '../../Models/genres';
import useActions from '../../Hooks/useActions';
import { emptyMovie } from '../../Store/Movie/reducers';
import SelectEditor, { SelectOptionType } from './SelectEditor';

const EditorTitle = styled.h2`
    font-size: 30px;
    margin: 0;
    margin-bottom: 30px;
    width: 100%;
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
  movie: emptyMovie,
  onCloseRequest: null,
};

const MovieEditor: FunctionComponent<Props> = ({ movie, onCloseRequest }: Props) => {
  const { addOrUpdateMovie } = useActions();

  const movieValidationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Should enter movie title'),
    posterPath: Yup.string()
      .url('Incorrect movie poster URL')
      .required('Should enter movie poster URL'),
    overview: Yup.string()
      .required('Should enter movie overview'),
    runtime: Yup.number()
      .min(0, 'Incorrect movie runtime')
      .required('Should enter movie runtime'),
  });

  const genreOptions = GENRES.map(
    (genre) => ({
      label: genre,
      value: genre,
    } as SelectOptionType),
  );

  return (
    <Formik
      initialValues={{ ...movie }}
      validationSchema={movieValidationSchema}
      onReset={() => {
        onCloseRequest();
      }}
      onSubmit={(values: Movie) => {
        addOrUpdateMovie(values);
        onCloseRequest();
      }}
    >
      {(props: FormikProps<Movie>) => (
        <Form>
          <EditorTitle>{props.values.id <= 0 ? 'NEW MOVIE' : 'EDIT MOVIE'}</EditorTitle>
          <FieldEditor label="TITLE" type="text" name="title" placeholder="Title here" />
          <FieldEditor label="RELEASE DATE" type="date" name="releaseDate" placeholder="Select Date" />
          <FieldEditor label="MOVIE URL" type="url" name="posterPath" placeholder="Movie URL here" />
          <SelectEditor label="GENRE" formProps={props} options={genreOptions} name="genres" placeholder="Select Genre" isMulti />
          <FieldEditor label="OVERVIEW" type="text" name="overview" placeholder="Overview here" />
          <FieldEditor label="RUNTIME" type="number" name="runtime" placeholder="Runtime here" />
          <ButtonsPanel>
            <ButtonGap />
            <ResetButton type="reset" value="RESET" />
            <MovieEnterButton type="submit" value="SUBMIT" />
          </ButtonsPanel>
        </Form>
      )}
    </Formik>
  );
};

MovieEditor.defaultProps = defaultProps;

export default MovieEditor;
