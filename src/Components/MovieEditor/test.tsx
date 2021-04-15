import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieEditor, { EditMovieTitle, NewMovieTitle } from './index';
import { emptyMovie } from '../../Store/Movie/reducers';
import Movie from '../../Models/movie';
import * as useActionsHelper from '../../Hooks/useActions';

jest.mock('../../Hooks/useActions');

const editedMovie: Movie = {
    id: 10,
    title: 'Movie',
    tagline: 'Tag',
    voteAverage: 4,
    voteCount: 0,
    releaseDate: new Date('2021-01-01'),
    posterPath: 'http://localhost/some.jpg',
    overview: 'Movie overview',
    budget: 100,
    revenue: 10,
    runtime: 100,
    genres: ['Action', 'Adventure', 'Fantasy'],
}

const onCloseRequest = jest.fn();
const addOrUpdateMovieMock = jest.fn();

const useActionsSpy = jest.spyOn(useActionsHelper, 'useActions');
{/*
// @ts-ignore */}
useActionsSpy.mockResolvedValue(() => {
    addOrUpdateMovie: (movie: Movie) => addOrUpdateMovieMock
});

describe('MovieEditor', () => {
  describe('renders existed movie', () => {
    it('should show this movie', () => {
      render(<MovieEditor movie={editedMovie} onCloseRequest={onCloseRequest} />);

      expect(screen.getByText(EditMovieTitle)).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Title here')).toHaveDisplayValue(editedMovie.title);
      expect(screen.getByPlaceholderText('Movie URL here')).toHaveDisplayValue(editedMovie.posterPath);
      expect(screen.getByPlaceholderText('Overview here')).toHaveDisplayValue(editedMovie.overview);
      expect(screen.getByPlaceholderText('Runtime here')).toHaveDisplayValue(String(editedMovie.runtime));
    });
  })

  describe('renders without movie', () => {
    it('should show new empty movie', () => {
      render(<MovieEditor onCloseRequest={onCloseRequest} />);

      expect(screen.getByText(NewMovieTitle)).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Title here')).toHaveDisplayValue(emptyMovie.title);
      expect(screen.getByPlaceholderText('Movie URL here')).toHaveDisplayValue(emptyMovie.posterPath);
      expect(screen.getByPlaceholderText('Overview here')).toHaveDisplayValue(emptyMovie.overview);
      expect(screen.getByPlaceholderText('Runtime here')).toHaveDisplayValue(String(emptyMovie.runtime));
    });
  })

  describe('click submit button', () =>{
    it('should call addOrUpdateMovie and onCloseRequest mocks', () => {
      render(<MovieEditor movie={editedMovie} onCloseRequest={onCloseRequest} />);
      userEvent.click(screen.getByRole('button', { name: /submit/i }));

      setTimeout(() => {
        expect(addOrUpdateMovieMock).toHaveBeenCalledTimes(1);
        expect(onCloseRequest).toHaveBeenCalledTimes(1);
      }, 100);
    });
  })

  describe('click reset button', () =>{
    it('should call onCloseRequest mocks', () => {
      render(<MovieEditor movie={editedMovie} onCloseRequest={onCloseRequest} />);
      userEvent.click(screen.getByRole('button', { name: /reset/i }));

      setTimeout(() => {
        expect(addOrUpdateMovieMock).toHaveBeenCalledTimes(0);
        expect(onCloseRequest).toHaveBeenCalledTimes(1);
      }, 100);
    });
  })
});
