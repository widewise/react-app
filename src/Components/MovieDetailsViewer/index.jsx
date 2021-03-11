import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../Title';
import CloseButton from '../CloseButton';
import { MovieDetails } from '../../Models/movieDetails';

const TitleControl = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

const ViewerBodyPanel = styled.div`
    display: flex;
`;

const MoviePosterPanel = styled.div`
    display: flex;
    height: 320px;
    width: 1500px;
    border: solid #555555 2px;
    margin-bottom: 50px;
`;

const MoviePosterImage = styled.img`
    flex: 1;
`;

const ViewerTextPanel = styled.div`
    display: flex;
    flex-direction: column;

    margin: 50px;
`;

const MovieFirstRowPanel = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const MovieTitleHeader = styled.h6`
    font-size: 40px;
    margin: 0;
`;

const MovieScoreHeader = styled.label`
    font-size: 17px;
    color: #6ca25a;
    padding: 1em;
    margin-left: 15px;

    border: solid #FFFFFF 1px;
    border-radius: 50%;
`;

const MovieGenresPanel = styled.div`
    margin-bottom: 10px;
`;

const MovieThirdRowPanel = styled.div`
    display: flex;
    color: #F65261;
    font-size: 1.5em;
    margin-bottom: 10px;
`;

const MovieDurationPanel = styled.div`
    margin-left: 20px;
`;

const MovieDescription = styled.p`
    flex: 1;
`;

export default function MovieDetailsViewer({ movieId, onCloseRequest }) {
  const [movie, setMovie] = useState(new MovieDetails());
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setTimeout(() => {
      // TODO: loading data from server
      setMovie(new MovieDetails(1, 'Pulp Fiction', 4.3, '2004-01-01', 154, '', ['Action & Adventure'], 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.'));
      setLoaded(true);
    }, 1000);
  }, [movieId]);

  return (
    <>
      <TitleControl>
        <Title />
        <CloseButton onClick={() => onCloseRequest()} sizeInPixels={32} />
      </TitleControl>
      {!isLoaded
        ? <h1>Data is loading ...</h1>
        : (
          <ViewerBodyPanel>
            <MoviePosterPanel>
              <MoviePosterImage src={movie.url} alt="Poster" />
            </MoviePosterPanel>
            <ViewerTextPanel>
              <MovieFirstRowPanel>
                <MovieTitleHeader>{movie.title}</MovieTitleHeader>
                <MovieScoreHeader>{movie.score}</MovieScoreHeader>
              </MovieFirstRowPanel>
              <MovieGenresPanel>{movie.genres.join(', ')}</MovieGenresPanel>
              <MovieThirdRowPanel>
                <div>{new Date(movie.releaseDate).getFullYear()}</div>
                <MovieDurationPanel>{`${movie.duration} min`}</MovieDurationPanel>
              </MovieThirdRowPanel>
              <MovieDescription>{movie.description}</MovieDescription>
            </ViewerTextPanel>
          </ViewerBodyPanel>
        )}
    </>
  );
}

MovieDetailsViewer.propTypes = {
  movieId: PropTypes.number.isRequired,
  onCloseRequest: PropTypes.func.isRequired,
};
