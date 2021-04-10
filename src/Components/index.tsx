import React, { FunctionComponent } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './styles.css';

interface AppProps {
  search?: string,
}

const appDefaultProps: AppProps = {
  search: '',
};

const App: FunctionComponent<AppProps> = ({ search }: AppProps) => (
  <>
    <Header search={search} />
    <Main search={search} />
    <Footer />
  </>
);

App.defaultProps = appDefaultProps;

export default App;
