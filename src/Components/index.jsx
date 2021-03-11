import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './styles.css';
import { MovieDetailsContext } from '../Contexts/movieDetailsContext';

export default function App() {
  const [movieId, setMovieId] = useState(0);
  return (
    <>
      <MovieDetailsContext.Provider value={[movieId, setMovieId]}>
        <Header />
        <Main />
      </MovieDetailsContext.Provider>
      <Footer />
    </>
  );
}
