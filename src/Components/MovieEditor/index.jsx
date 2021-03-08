import React, { Component } from 'react';
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

export class MovieEditor extends Component {
  constructor(props) {
    super(props);
    const movie = JSON.parse(JSON.stringify(props.movie));
    this.state = {
      movie,
    };
  }

  OnChange(event) {
    const { movie } = this.state;
    movie[event.target.id] = event.target.value;
    this.setState({ movie });
  }

  OnSubmit(event) {
    event.preventDefault();
    const { onCloseRequest } = this.props;
    onCloseRequest();
  }

  OnReset(event) {
    event.preventDefault();
    const { onCloseRequest } = this.props;
    onCloseRequest();
  }

  render() {
    const { movie } = this.state;
    return (
      <MovieForm onSubmit={(e) => this.OnSubmit(e)} onReset={(e) => this.OnReset(e)}>
        <EditorTitle>{movie.id <= 0 ? 'NEW MOVIE' : 'EDIT MOVIE'}</EditorTitle>
        <FieldEditor fieldKey="title" label="TITLE" fieldType="text" fieldValue={movie.title} placeHolder="Title here" onChange={(event) => this.OnChange(event)} />
        <FieldEditor fieldKey="releaseDate" label="RELEASE DATE" fieldType="date" fieldValue={movie.releaseDate} placeHolder="Select Date" onChange={(event) => this.OnChange(event)} />
        <FieldEditor fieldKey="url" label="MOVIE URL" fieldType="url" fieldValue={movie.url} placeHolder="Movie URL here" onChange={(event) => this.OnChange(event)} />
        <EditorPanel>
          <EditorLabel>GENRE</EditorLabel>
          <GenreSelect key="genre" value={movie.genre} placeholder="Select Genre" onChange={(event) => this.OnChange(event)}>
            {
          GENRE_TITLES.map(
            (genre) => (
              <option key={genre}>{genre}</option>
            ),
          )
          }
          </GenreSelect>
        </EditorPanel>
        <FieldEditor fieldKey="overview" label="OVERVIEW" fieldType="text" fieldValue={movie.overview} placeHolder="Overview here" onChange={(event) => this.OnChange(event)} />
        <FieldEditor fieldKey="runtime" label="RUNTIME" fieldType="text" fieldValue={movie.runtime} placeHolder="Runtime here" onChange={(event) => this.OnChange(event)} />
        <ButtonsPanel>
          <ButtonGap />
          <ResetButton type="reset" value="RESET" />
          <MovieEnterButton type="submit" value="SUBMIT" />
        </ButtonsPanel>
      </MovieForm>
    );
  }
}

MovieEditor.defaultProps = {
  movie: new Movie(-1, '', new Date().getFullYear(), '', [], '', ''),
};

MovieEditor.propTypes = {
  movie: PropTypes.instanceOf(Movie),
  onCloseRequest: PropTypes.func.isRequired,
};

export default MovieEditor;
