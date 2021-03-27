import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';
import styled from 'styled-components';
import Title from '../Title';
import CloseButton from '../CloseButton';
import useAppSelector from '../../Hooks/useAppSelector';
import useActions from '../../Hooks/useActions';

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
    height: 320px;
    width: auto;
    max-width: 220px;
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

const MovieDetailsViewer:FunctionComponent = () => {
  const { movieId, movie } = useAppSelector((state) => state.movies);
  const { getMovie, setMovieIdAction } = useActions();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    getMovie(movieId);
    setLoaded(true);
  }, [movieId]);

  const onCloseButtonClick = useCallback(() => {
    setMovieIdAction(0);
  }, []);

  return (
    <>
      <TitleControl>
        <Title />
        <CloseButton onClick={() => onCloseButtonClick()} sizeInPixels={32} />
      </TitleControl>
      {!isLoaded
        ? <h1>Data is loading ...</h1>
        : (
          <ViewerBodyPanel>
            <MoviePosterPanel>
              <MoviePosterImage src={movie.posterPath} alt="Poster" />
            </MoviePosterPanel>
            <ViewerTextPanel>
              <MovieFirstRowPanel>
                <MovieTitleHeader>{movie.title}</MovieTitleHeader>
                <MovieScoreHeader>{movie.voteAverage}</MovieScoreHeader>
              </MovieFirstRowPanel>
              <MovieGenresPanel>{movie.genres.join(', ')}</MovieGenresPanel>
              <MovieThirdRowPanel>
                <div>{new Date(movie.releaseDate).getFullYear()}</div>
                <MovieDurationPanel>{`${movie.runtime} min`}</MovieDurationPanel>
              </MovieThirdRowPanel>
              <MovieDescription>{movie.overview}</MovieDescription>
            </ViewerTextPanel>
          </ViewerBodyPanel>
        )}
    </>
  );
};

export default MovieDetailsViewer;
